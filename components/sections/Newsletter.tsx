"use client";

import { useId, useState } from "react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/Icons";

export function Newsletter() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  // "leaving": the form fades out before the success message fades in.
  const [leaving, setLeaving] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setState("loading");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setState("done");
      else {
        setLeaving(true);
        window.setTimeout(() => setState("done"), 300);
      }
    } catch {
      setState("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <section className="section-y pb-0">
      <div className="container-x">
      <div className="grid items-end gap-12 rounded-[var(--radius-card)] bg-acacia p-6 text-cream md:p-10 lg:grid-cols-2">
        <div>
          <Eyebrow tone="light">Free download</Eyebrow>
          <h2 className="mt-6 text-h2 text-white">The Kenya Safari Guide</h2>
          <p className="mt-5 max-w-lg text-lg text-cream/85">
            Our specialists’ month-by-month guide to parks, camps, costs and the questions worth asking. Plus the occasional
            letter from the bush. No spam, ever.
          </p>
        </div>
        <div aria-live="polite">
            {state === "done" ? (
              <div key="done" className="animate-fade-in-up rounded-[var(--radius-field)] bg-white/10 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-charcoal">
                  <CheckIcon className="h-6 w-6" />
                </span>
                <p className="mt-6 text-2xl font-medium text-white">Your guide is on its way.</p>
                <p className="mt-2 text-cream/80">Check your inbox for The Kenya Safari Guide. When you are ready to talk dates, we are here.</p>
                <p className="mt-6 text-3xl font-medium text-gold-pale">{site.signOff}</p>
              </div>
            ) : (
              <form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className={`flex flex-col gap-3 transition-[opacity,translate] duration-300 ${leaving ? "-translate-y-3 opacity-0" : ""}`}
              >
                <label htmlFor={`${id}-email`} className="text-sm font-medium text-cream/90">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id={`${id}-email`}
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-err` : `${id}-hint`}
                    placeholder="name@email.com"
                    className="h-12 flex-1 rounded-[var(--radius-field)] border border-white/25 bg-white/10 px-4 text-white placeholder:text-cream/60 focus:border-gold-light focus:outline-none"
                  />
                  <Button type="submit" variant="light" disabled={state === "loading"} className="h-12">
                    {state === "loading" ? "Sending…" : "Send me the guide"}
                  </Button>
                </div>
                {error ? (
                  <p id={`${id}-err`} className="text-sm text-[#ffb4a8]">{error}</p>
                ) : (
                  <p id={`${id}-hint`} className="text-sm text-cream/85">We’ll only use your email to send the guide and our occasional letter. Unsubscribe anytime.</p>
                )}
              </form>
            )}
        </div>
      </div>
      </div>
    </section>
  );
}
