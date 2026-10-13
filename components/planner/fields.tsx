"use client";

import { cn } from "@/lib/utils";

export const inputCls =
  "h-13 w-full rounded-[var(--radius-field)] border border-line bg-paper px-4 text-charcoal placeholder:text-stone/70 transition-colors focus:border-charcoal focus:outline-none aria-[invalid=true]:border-shuka";

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-shuka">
      {message}
    </p>
  );
}

export function Field({
  label,
  htmlFor,
  hint,
  error,
  errorId,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  errorId: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-stone">
        {label}
      </label>
      {children}
      {hint && !error && <p className="mt-2 text-sm text-stone">{hint}</p>}
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function Fieldset({ legend, error, errorId, children, className }: { legend: string; error?: string; errorId: string; children: React.ReactNode; className?: string }) {
  return (
    <fieldset className={className} aria-describedby={error ? errorId : undefined}>
      <legend className="mb-3 block text-sm text-stone">{legend}</legend>
      {children}
      <FieldError id={errorId} message={error} />
    </fieldset>
  );
}

/** Large selectable tile backed by a native radio/checkbox for accessibility. */
export function ChoiceTile({
  type,
  checked,
  children,
  className,
  ...input
}: { type: "radio" | "checkbox"; checked: boolean; children: React.ReactNode; className?: string } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked">) {
  return (
    <label
      className={cn(
        "relative flex cursor-pointer rounded-[var(--radius-field)] border bg-paper transition-all duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold",
        checked ? "border-charcoal shadow-[0_0_0_1px_var(--color-charcoal)]" : "border-line hover:border-charcoal/40",
        className,
      )}
    >
      <input type={type} checked={checked} className="sr-only" {...input} />
      <span
        aria-hidden
        className={cn(
          "absolute top-3 right-3 z-10 grid h-6 w-6 place-items-center border transition-colors",
          type === "radio" ? "rounded-full" : "rounded-md",
          checked ? "border-charcoal bg-charcoal text-cream" : "border-line bg-white",
        )}
      >
        {checked && (
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12.5l4.5 4.5L19 7" />
          </svg>
        )}
      </span>
      {children}
    </label>
  );
}

export function Stepper({
  label,
  value,
  min,
  max,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
  hint?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[var(--radius-field)] border border-line bg-paper p-4">
      <div>
        <p className="font-semibold text-charcoal">{label}</p>
        {hint && <p className="text-sm text-stone">{hint}</p>}
      </div>
      <div className="flex items-center gap-3" role="group" aria-label={label}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg hover:border-charcoal disabled:opacity-30"
        >
          −
        </button>
        <output aria-live="polite" className="w-6 text-center text-lg font-semibold">
          {value}
        </output>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`More ${label.toLowerCase()}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg hover:border-charcoal disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}
