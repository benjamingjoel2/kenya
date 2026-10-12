import Link from "next/link";
import type { Stay } from "@/data/types";
import { stayTypeLabels } from "@/data/stays";
import { CardImage } from "@/components/ui/CardImage";
import { Price } from "@/components/ui/Price";
import { ArrowIcon } from "@/components/ui/Icons";

export function StayCard({ stay: s }: { stay: Stay }) {
  return (
    <Link href={`/stays/${s.slug}`} className="group flex h-full flex-col">
      <CardImage image={s.hero} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw" className="aspect-[4/5]" />
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow text-gold-dark">{stayTypeLabels[s.type]}</p>
        <h3 className="mt-3 text-2xl group-hover:text-acacia">{s.name}</h3>
        <p className="mt-1 text-sm text-stone">{s.location}</p>
        <p className="mt-auto flex items-center justify-between gap-3 pt-4 text-sm">
          <span>
            From <Price usd={s.priceFromUsd} className="font-semibold text-charcoal" /> per person · night
          </span>
          <ArrowIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
