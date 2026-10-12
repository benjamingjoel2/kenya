import Link from "next/link";
import type { Experience } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";
import { ArrowIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function ExperienceCard({ experience: e, className, sizes = "(min-width: 1024px) 33vw, 100vw", large }: { experience: Experience; className?: string; sizes?: string; large?: boolean }) {
  return (
    <Link href={`/experiences/${e.slug}`} className={cn("group relative block min-h-[22rem] overflow-hidden rounded-[var(--radius-card)]", className)}>
      <CardImage image={e.hero} sizes={sizes} overlay className="absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 md:p-8">
        <h3 className={cn("text-white", large ? "text-h2" : "text-h3")}>{e.name}</h3>
        <p className={cn("max-w-md text-white/80", large ? "text-base" : "line-clamp-2 text-sm")}>{e.tagline}</p>
        <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-gold-light">
          Discover
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
