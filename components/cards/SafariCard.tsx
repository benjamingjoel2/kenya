import Link from "next/link";
import type { Safari } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";
import { Price } from "@/components/ui/Price";
import { ArrowIcon, CheckIcon, ClockIcon, PinIcon } from "@/components/ui/Icons";

export function SafariCard({ safari: s, priority }: { safari: Safari; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative">
        <CardImage image={s.hero} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" priority={priority} />
        <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-charcoal">
          <ClockIcon className="h-3.5 w-3.5" /> {s.nights} nights
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-6">
        <p className="flex items-center gap-1.5 text-sm text-stone">
          <PinIcon className="h-4 w-4 shrink-0 text-gold-dark" />
          {s.regions.join(" · ")}
        </p>
        <h3 className="mt-3 text-h3">
          <Link href={`/safaris/${s.slug}`} className="transition-colors after:absolute after:inset-0 hover:text-acacia">
            {s.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm font-medium text-acacia">{s.inclusionLine}</p>
        <ul className="mt-4 flex flex-col gap-2 text-[0.9375rem] text-ink/85">
          {s.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-2.5">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-dark" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
            <div>
              <p className="text-sm text-stone">From</p>
              <p className="font-serif text-2xl text-charcoal">
                <Price usd={s.priceFromUsd} /> <span className="font-sans text-sm text-stone">per person</span>
              </p>
              <p className="mt-1 text-xs text-stone">
                ≈ <Price usd={s.priceFromUsd * 2} /> for two · international flights excluded
              </p>
            </div>
            <Link
              href={`/safaris/${s.slug}`}
              className="group/link relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-charcoal"
              aria-label={`View safari: ${s.title}`}
            >
              View safari
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
