"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useForm, type FieldErrors, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { mailtoHref, site } from "@/config/site";
import { addOns, budgetTiers, plannerRoutes } from "@/data/routes";
import { Button, ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { ChoiceTile, Field, Fieldset, Stepper, inputCls } from "./fields";
import { STEPS, countryCodes, defaultPlannerValues, plannerSchema, type PlannerValues } from "./schema";

const STORAGE_KEY = "sn-planner-v1";
const ease = [0.22, 1, 0.36, 1] as const;

type Form = UseFormReturn<PlannerValues>;

function msg(errors: FieldErrors<PlannerValues>, name: keyof PlannerValues) {
  const e = errors[name];
  if (!e) return undefined;
  if (Array.isArray(e)) return e.find(Boolean)?.message as string | undefined;
  return (e as { message?: string }).message ?? (e as { root?: { message?: string } }).root?.message;
}

export function PlannerForm({ variant = "page" }: { variant?: "page" | "modal" }) {
  const uid = useId();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");
  const restored = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const form = useForm<PlannerValues>({
    resolver: zodResolver(plannerSchema),
    defaultValues: defaultPlannerValues,
    mode: "onTouched",
  });
  const { handleSubmit, trigger, watch, reset } = form;

  // Restore saved progress once.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
      if (saved?.values) {
        reset({ ...defaultPlannerValues, ...saved.values });
        if (typeof saved.step === "number") setStep(Math.min(Math.max(saved.step, 0), STEPS.length - 1));
      }
    } catch {
      /* ignore corrupt storage */
    }
    restored.current = true;
  }, [reset]);

  // Persist progress on every change.
  useEffect(() => {
    const sub = watch((values) => {
      if (!restored.current) return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ values, step }));
      } catch {
        /* storage unavailable */
      }
    });
    try {
      if (restored.current) {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
        if (saved) localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...saved, step }));
      }
    } catch {
      /* ignore */
    }
    return () => sub.unsubscribe();
  }, [watch, step]);

  const goTo = (n: number) => {
    setStep(n);
    requestAnimationFrame(() => {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      headingRef.current?.focus({ preventScroll: true });
    });
  };

  const next = async () => {
    const ok = await trigger([...STEPS[step].fields], { shouldFocus: true });
    if (ok) goTo(step + 1);
  };

  const onValid = async (values: PlannerValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      if (!res.ok) throw new Error(String(res.status));
      setSubmittedName(values.name.split(" ")[0]);
      restored.current = false; // stop the watcher re-saving the reset values
      localStorage.removeItem(STORAGE_KEY);
      reset(defaultPlannerValues);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const onInvalid = (errors: FieldErrors<PlannerValues>) => {
    // Jump back to the first step that has an error.
    const idx = STEPS.findIndex((s) => s.fields.some((f) => f in errors));
    if (idx >= 0 && idx !== step) goTo(idx);
  };

  if (status === "done") return <Confirmation name={submittedName} variant={variant} />;

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <MotionConfig reducedMotion="user">
    <div ref={topRef} className="scroll-mt-28">
      <Progress step={step} onJump={(i) => i < step && goTo(i)} />

      <form
        noValidate
        onSubmit={isLast ? handleSubmit(onValid, onInvalid) : (e) => (e.preventDefault(), void next())}
        aria-labelledby={`${uid}-title`}
        className="mt-10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease }}
          >
            <p className="eyebrow text-gold-dark">
              Step {step + 1} of {STEPS.length}
            </p>
            <h2 id={`${uid}-title`} ref={headingRef} tabIndex={-1} className="mt-3 text-h3 focus:outline-none md:text-[2.25rem]">
              {current.title}
            </h2>
            <div className="mt-8">
              {step === 0 && <StepWhen form={form} uid={uid} />}
              {step === 1 && <StepWhere form={form} uid={uid} />}
              {step === 2 && <StepBudget form={form} uid={uid} />}
              {step === 3 && <StepWho form={form} uid={uid} />}
              {step === 4 && <StepContact form={form} uid={uid} />}
            </div>
          </motion.div>
        </AnimatePresence>

        {status === "error" && (
          <p role="alert" className="mt-8 rounded-[var(--radius-card)] border border-shuka/40 bg-shuka/5 p-4 text-sm text-shuka">
            Sorry, we couldn’t send your request just now. Your answers are saved, so please try again, or{" "}
            <a href={mailtoHref} className="underline">
              email us at {site.contact.email}
            </a>
            .
          </p>
        )}

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-8">
          {step > 0 ? (
            <Button variant="link" onClick={() => goTo(step - 1)}>
              ← Back
            </Button>
          ) : (
            <span className="text-sm text-stone">Takes about 3 minutes · progress saved automatically</span>
          )}
          {isLast ? (
            <Button type="submit" variant="primary" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send to my specialist"}
            </Button>
          ) : (
            <Button type="submit" variant="primary">
              Continue
            </Button>
          )}
        </div>
      </form>
    </div>
    </MotionConfig>
  );
}

function Progress({ step, onJump }: { step: number; onJump: (i: number) => void }) {
  return (
    <nav aria-label="Planner progress">
      <div className="relative h-1 overflow-hidden rounded-full bg-line" aria-hidden>
        <motion.div
          className="absolute inset-y-0 left-0 bg-gold"
          initial={false}
          animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          transition={{ duration: 0.5, ease }}
        />
      </div>
      <ol className="mt-4 grid grid-cols-5 gap-2">
        {STEPS.map((s, i) => {
          const done = i < step;
          const active = i === step;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onJump(i)}
                disabled={!done}
                aria-current={active ? "step" : undefined}
                className={cn("flex w-full items-center gap-2 text-left text-xs font-semibold tracking-wide uppercase md:text-sm", active ? "text-charcoal" : done ? "text-acacia" : "text-stone/70")}
              >
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs",
                    active ? "border-charcoal bg-charcoal text-cream" : done ? "border-acacia bg-acacia text-cream" : "border-line",
                  )}
                >
                  {done ? <CheckIcon className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sr-only">{done ? "(completed)" : active ? "(current step)" : ""}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

type StepProps = { form: Form; uid: string };

const err = (uid: string, name: string) => `${uid}-${name}-err`;
const a11y = (uid: string, name: keyof PlannerValues, errors: FieldErrors<PlannerValues>) => ({
  id: `${uid}-${name}`,
  "aria-invalid": !!errors[name],
  "aria-describedby": errors[name] ? err(uid, name) : undefined,
});

function StepWhen({ form, uid }: StepProps) {
  const { register, watch, setValue, formState: { errors } } = form;
  const nights = watch("nights");
  const flex = watch("dateFlexibility");
  const traveller = watch("travellerType");
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Arrival date in Kenya" htmlFor={`${uid}-arrivalDate`} error={msg(errors, "arrivalDate")} errorId={err(uid, "arrivalDate")}>
          <input type="date" min={today} className={inputCls} {...a11y(uid, "arrivalDate", errors)} {...register("arrivalDate")} />
        </Field>
        <Field
          label={`Length of stay: ${Number.isFinite(nights) ? nights : "–"} ${nights === 1 ? "night" : "nights"}`}
          htmlFor={`${uid}-nights`}
          hint="Most first safaris are 7–12 nights; add 3–5 for the beach."
          error={msg(errors, "nights")}
          errorId={err(uid, "nights")}
        >
          <div className="flex items-center gap-4">
            <input
              type="range"
              min={1}
              max={50}
              value={Number.isFinite(nights) ? nights : 1}
              onChange={(e) => setValue("nights", Number(e.target.value), { shouldValidate: true, shouldDirty: true })}
              aria-label="Length of stay in nights"
              className="h-14 flex-1 accent-[var(--color-charcoal)]"
            />
            <input
              type="number"
              min={1}
              max={50}
              inputMode="numeric"
              className={cn(inputCls, "w-24 text-center")}
              {...a11y(uid, "nights", errors)}
              {...register("nights", { valueAsNumber: true })}
            />
          </div>
        </Field>
      </div>

      <Fieldset legend="How fixed are your dates?" error={msg(errors, "dateFlexibility")} errorId={err(uid, "dateFlexibility")}>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { v: "exact", t: "Exact dates", d: "Flights or plans are already set." },
            { v: "approximate", t: "Approximate", d: "We can move a few days for better camps or prices." },
          ].map((o) => (
            <ChoiceTile key={o.v} type="radio" value={o.v} checked={flex === o.v} {...register("dateFlexibility")}>
              <span className="p-5 pr-12">
                <span className="block font-semibold text-charcoal">{o.t}</span>
                <span className="mt-1 block text-sm text-stone">{o.d}</span>
              </span>
            </ChoiceTile>
          ))}
        </div>
      </Fieldset>

      <Fieldset legend="Have you been on safari before?" error={msg(errors, "travellerType")} errorId={err(uid, "travellerType")}>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { v: "first", t: "This is my first safari", d: "We’ll guide you through every step." },
            { v: "experienced", t: "I’m an experienced safari-goer", d: "Looking for something new or more remote." },
          ].map((o) => (
            <ChoiceTile key={o.v} type="radio" value={o.v} checked={traveller === o.v} {...register("travellerType")}>
              <span className="p-5 pr-12">
                <span className="block font-semibold text-charcoal">{o.t}</span>
                <span className="mt-1 block text-sm text-stone">{o.d}</span>
              </span>
            </ChoiceTile>
          ))}
        </div>
      </Fieldset>
    </div>
  );
}

function StepWhere({ form, uid }: StepProps) {
  const { register, watch, formState: { errors } } = form;
  const routes = watch("routes") ?? [];
  return (
    <div className="grid gap-8">
      <Fieldset legend="Choose any routes that appeal (select as many as you like)" error={msg(errors, "routes")} errorId={err(uid, "routes")}>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {plannerRoutes.map((r) => (
            <ChoiceTile key={r.id} type="checkbox" value={r.id} checked={routes.includes(r.id as PlannerValues["routes"][number])} className="group flex-col overflow-hidden" {...register("routes")}>
              <span className="relative block aspect-[4/3] w-full overflow-hidden bg-sand">
                <Image src={r.image.src} alt="" fill sizes="(min-width: 1024px) 220px, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </span>
              <span className="block p-4">
                <span className="block font-semibold leading-snug text-charcoal">{r.name}</span>
                <span className="mt-1 block text-xs leading-relaxed text-stone">{r.blurb}</span>
              </span>
            </ChoiceTile>
          ))}
        </div>
      </Fieldset>
      <Field
        label="Anything specific in mind? (optional)"
        htmlFor={`${uid}-routeNotes`}
        hint="Particular camps, activities, animals you’d love to see, or places you’ve already been."
        error={msg(errors, "routeNotes")}
        errorId={err(uid, "routeNotes")}
      >
        <textarea rows={4} className={cn(inputCls, "h-auto py-3")} {...a11y(uid, "routeNotes", errors)} {...register("routeNotes")} />
      </Field>
    </div>
  );
}

function StepBudget({ form, uid }: StepProps) {
  const { register, watch, formState: { errors } } = form;
  const budget = watch("budget");
  return (
    <Fieldset legend="Which style of travel feels right?" error={msg(errors, "budget")} errorId={err(uid, "budget")}>
      <div className="grid gap-3 md:grid-cols-2">
        {budgetTiers.map((b) => (
          <ChoiceTile key={b.id} type="radio" value={b.id} checked={budget === b.id} {...register("budget")}>
            <span className="flex flex-col gap-2 p-6 pr-12">
              <span className="text-xl font-medium tracking-[-0.02em] text-charcoal">{b.name}</span>
              <span className="text-sm text-stone">{b.text}</span>
            </span>
          </ChoiceTile>
        ))}
      </div>
      <p className="mt-4 text-sm text-stone">Every journey is quoted individually. Park and conservancy fees are always included in your quote.</p>
    </Fieldset>
  );
}

function StepWho({ form, uid }: StepProps) {
  const { register, watch, setValue, getValues, formState: { errors } } = form;
  const adults = watch("adults");
  const children = watch("children");
  const selected = watch("addOns") ?? [];

  const setChildren = (n: number) => {
    const ages = (getValues("childAges") ?? []).slice(0, n);
    while (ages.length < n) ages.push(Number.NaN);
    setValue("childAges", ages, { shouldDirty: true });
    setValue("children", n, { shouldDirty: true });
  };

  const ageErrors = Array.isArray(errors.childAges) ? errors.childAges : [];

  return (
    <div className="grid gap-8">
      <div className="grid gap-3 md:grid-cols-2">
        <Stepper label="Adults" hint="18 and over" value={adults ?? 1} min={1} max={20} onChange={(n) => setValue("adults", n, { shouldValidate: true, shouldDirty: true })} />
        <Stepper label="Children" hint="Under 18" value={children ?? 0} min={0} max={10} onChange={setChildren} />
      </div>

      {children > 0 && (
        <Fieldset
          legend="Children’s ages at the time of travel"
          error={Array.isArray(errors.childAges) ? undefined : (errors.childAges?.message ?? errors.childAges?.root?.message)}
          errorId={err(uid, "childAges")}
        >
          <p className="-mt-1 mb-4 text-sm text-stone">Some camps and activities have minimum ages, so this helps us choose well.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: children }).map((_, i) => (
              <div key={i}>
                <label htmlFor={`${uid}-age-${i}`} className="mb-1 block text-sm text-stone">
                  Child {i + 1}
                </label>
                <select
                  id={`${uid}-age-${i}`}
                  className={inputCls}
                  aria-invalid={!!ageErrors[i]}
                  {...register(`childAges.${i}` as const, { valueAsNumber: true })}
                >
                  <option value="">Age</option>
                  {Array.from({ length: 18 }).map((_, a) => (
                    <option key={a} value={a}>
                      {a === 0 ? "Under 1" : a}
                    </option>
                  ))}
                </select>
                {ageErrors[i] && <p className="mt-1 text-sm text-shuka">{ageErrors[i]?.message}</p>}
              </div>
            ))}
          </div>
        </Fieldset>
      )}

      <Fieldset legend="Would you like help with any of these? (optional)" errorId={err(uid, "addOns")}>
        <div className="grid gap-3 md:grid-cols-2">
          {addOns.map((o) => (
            <ChoiceTile key={o.id} type="checkbox" value={o.id} checked={selected.includes(o.id)} {...register("addOns")}>
              <span className="p-5 pr-12">
                <span className="block font-semibold text-charcoal">{o.name}</span>
                <span className="mt-1 block text-sm text-stone">{o.text}</span>
              </span>
            </ChoiceTile>
          ))}
        </div>
      </Fieldset>
    </div>
  );
}

function StepContact({ form, uid }: StepProps) {
  const { register, watch, formState: { errors } } = form;
  const methods = watch("contactMethods") ?? [];
  return (
    <div className="grid gap-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your name" htmlFor={`${uid}-name`} error={msg(errors, "name")} errorId={err(uid, "name")}>
          <input autoComplete="name" className={inputCls} {...a11y(uid, "name", errors)} {...register("name")} />
        </Field>
        <Field label="Email" htmlFor={`${uid}-email`} error={msg(errors, "email")} errorId={err(uid, "email")}>
          <input type="email" autoComplete="email" className={inputCls} {...a11y(uid, "email", errors)} {...register("email")} />
        </Field>
      </div>
      <Field label="Phone (with country code)" htmlFor={`${uid}-phone`} error={msg(errors, "phone")} errorId={err(uid, "phone")}>
        <div className="flex gap-3">
          <select aria-label="Country code" autoComplete="tel-country-code" className={cn(inputCls, "w-40 shrink-0")} {...register("phoneCode")}>
            {countryCodes.map(([code, country]) => (
              <option key={`${code}-${country}`} value={code}>
                {code} {country}
              </option>
            ))}
          </select>
          <input type="tel" autoComplete="tel-national" inputMode="tel" className={inputCls} {...a11y(uid, "phone", errors)} {...register("phone")} />
        </div>
      </Field>
      <Fieldset legend="How would you prefer we get in touch?" error={msg(errors, "contactMethods")} errorId={err(uid, "contactMethods")}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { v: "email", t: "Email" },
            { v: "whatsapp", t: "WhatsApp" },
            { v: "telephone", t: "Telephone" },
          ].map((o) => (
            <ChoiceTile key={o.v} type="checkbox" value={o.v} checked={methods.includes(o.v as PlannerValues["contactMethods"][number])} {...register("contactMethods")}>
              <span className="p-5 pr-12 font-semibold text-charcoal">{o.t}</span>
            </ChoiceTile>
          ))}
        </div>
      </Fieldset>
      <Field
        label="Anything else we should know? (optional)"
        htmlFor={`${uid}-notes`}
        hint="Celebrations, dietary needs, mobility, the one animal you have to see…"
        error={msg(errors, "notes")}
        errorId={err(uid, "notes")}
      >
        <textarea rows={4} className={cn(inputCls, "h-auto py-3")} {...a11y(uid, "notes", errors)} {...register("notes")} />
      </Field>
      <p className="text-sm text-stone">
        We’ll use your details only to plan your trip. See our{" "}
        <a href="/privacy" className="underline underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </div>
  );
}

function Confirmation({ name, variant }: { name: string; variant: "page" | "modal" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="py-6 text-center" role="status">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-acacia text-cream">
        <CheckIcon className="h-8 w-8" />
      </span>
      <h2 className="mt-8 text-h2">Asante sana{name ? `, ${name}` : ""}.</h2>
      <p className="mx-auto mt-5 max-w-lg text-lead text-stone">
        Your request is with us. Your dedicated specialist will read every detail and come back to you within one working day
        with first ideas, honest advice and a few questions.
      </p>
      <p className="mx-auto mt-4 max-w-lg text-stone">
        Can’t wait? Email us any time at{" "}
        <a href={mailtoHref} className="font-semibold text-acacia underline underline-offset-2">
          {site.contact.email}
        </a>
        .
      </p>
      {variant === "page" && (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/safaris" variant="outline">
            Browse safaris
          </ButtonLink>
          <ButtonLink href="/blog" variant="outline">
            Read the journal
          </ButtonLink>
        </div>
      )}
      <p className="mt-12 text-h3 font-medium tracking-[-0.03em] text-gold-dark">{site.signOff}</p>
    </motion.div>
  );
}
