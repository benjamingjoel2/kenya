import type { Testimonial } from "@/data/types";

export function PlaceholderBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-shuka/60 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wider text-shuka uppercase">
      Placeholder review
    </span>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-card)] bg-paper p-6 md:p-8">
      <PlaceholderBadge />
      <blockquote className="mt-6 flex-1 text-xl leading-snug tracking-[-0.01em] text-charcoal">“{t.quote}”</blockquote>
      <figcaption className="mt-8 border-t border-line pt-5 text-sm">
        <span className="font-semibold text-charcoal">{t.name}</span>
        <span className="text-stone"> · {t.from}</span>
        <span className="mt-1 block text-stone">{t.trip}</span>
      </figcaption>
    </figure>
  );
}
