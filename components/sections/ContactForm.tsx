"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { contactSchema } from "@/lib/contactSchema";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Field, inputCls } from "@/components/planner/fields";
import { cn } from "@/lib/utils";

type Values = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const [failed, setFailed] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (v: Values) => {
    setFailed(false);
    const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) }).catch(() => null);
    if (res?.ok) setDone(true);
    else setFailed(true);
  };

  if (done)
    return (
      <div role="status" className="rounded-[var(--radius-card)] bg-sand/70 p-10">
        <p className="font-serif text-3xl text-charcoal">Thank you, we’ve got your message.</p>
        <p className="mt-3 text-stone">A specialist will reply within one working day.</p>
        <p className="mt-6 font-serif text-4xl italic text-gold-dark">{site.signOff}</p>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" htmlFor="c-name" error={errors.name?.message} errorId="c-name-err">
          <input id="c-name" autoComplete="name" className={inputCls} aria-invalid={!!errors.name} aria-describedby={errors.name ? "c-name-err" : undefined} {...register("name")} />
        </Field>
        <Field label="Email" htmlFor="c-email" error={errors.email?.message} errorId="c-email-err">
          <input id="c-email" type="email" autoComplete="email" className={inputCls} aria-invalid={!!errors.email} aria-describedby={errors.email ? "c-email-err" : undefined} {...register("email")} />
        </Field>
      </div>
      <Field label="How can we help?" htmlFor="c-message" error={errors.message?.message} errorId="c-message-err">
        <textarea id="c-message" rows={6} className={cn(inputCls, "h-auto py-3")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "c-message-err" : undefined} {...register("message")} />
      </Field>
      {failed && <p role="alert" className="text-sm text-shuka">Sorry, something went wrong. Please try again or message us on WhatsApp.</p>}
      <div>
        <Button type="submit" arrow disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
