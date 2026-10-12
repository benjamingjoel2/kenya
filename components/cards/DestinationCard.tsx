import Link from "next/link";
import type { Destination } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";
import { ArrowUpRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const kindLabel = { safari: "Safari", coast: "Coast", city: "City", mountain: "Mountain" } as const;

export function DestinationCard({ destination: d, className, sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw" }: { destination: Destination; className?: string; sizes?: string }) {
  return (
    <Link href={`/destinations/${d.slug}`} className={cn("group relative block aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]", className)}>
      <CardImage image={d.hero} sizes={sizes} overlay className="absolute inset-0" />
      <div className="absolute inset-x-0 top-0 flex justify-between p-5">
        <span className="eyebrow rounded-full bg-black/25 px-3 py-2 text-white backdrop-blur-sm">{kindLabel[d.kind]}</span>
        <span className="grid h-10 w-10 translate-y-1 place-items-center rounded-full bg-cream text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-h3 text-white">{d.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/80">{d.tagline}</p>
      </div>
    </Link>
  );
}
