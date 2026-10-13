import Link from "next/link";
import type { Safari } from "@/data/types";
import { budgetLabels } from "@/data/safaris";
import { CardImage } from "@/components/ui/CardImage";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { CalendarIcon, MealIcon, PinIcon, SparkIcon, StarsIcon } from "@/components/ui/Icons";

function Property({ icon: Icon, children }: { icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative rounded-[var(--radius-field)] bg-cream p-4 pr-10 sm:min-h-[5.5rem] text-[0.8125rem] leading-snug text-charcoal">
      {children}
      <Icon className="absolute top-4 right-4 h-4 w-4 text-charcoal/35" />
    </div>
  );
}

/** Wide horizontal safari card (reference "featured item"): text + properties left, large photo right. */
export function SafariRow({ safari: s, priority }: { safari: Safari; priority?: boolean }) {
  return (
    <article className="group grid gap-6 rounded-[var(--radius-card)] bg-paper p-4 md:grid-cols-2 md:p-6">
      <div className="flex flex-col gap-6 md:order-1">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <h3 className="min-w-0 flex-1 text-h4">
            <Link href={`/safaris/${s.slug}`} className="hover:text-acacia">
              {s.title}
            </Link>
          </h3>
          <span className="shrink-0 rounded-full bg-cream px-3 py-1.5 text-[0.8125rem] font-medium text-charcoal">Tailor-made · on enquiry</span>
        </div>

        <Link href={`/safaris/${s.slug}`} tabIndex={-1} aria-hidden className="block md:hidden">
          <CardImage image={s.hero} sizes="100vw" className="aspect-[16/11] rounded-[var(--radius-media)]" priority={priority} />
        </Link>

        <div className="grid gap-2 sm:grid-cols-2">
          <Property icon={PinIcon}>{s.regions.join(" · ")}</Property>
          <Property icon={CalendarIcon}>
            {s.nights} nights <span className="text-stone">({s.nights + 1} days)</span>
          </Property>
          <Property icon={MealIcon}>{s.inclusionLine}</Property>
          <Property icon={StarsIcon}>
            {budgetLabels[s.budget]} style <span className="text-stone">· private, tailor-made</span>
          </Property>
        </div>

        <ul className="flex flex-col gap-2 text-[0.9375rem] text-ink/85">
          {s.highlights.slice(0, 4).map((h) => (
            <li key={h} className="flex gap-3">
              <SparkIcon className="mt-2 h-2 w-2 shrink-0 text-gold" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2">
          <ButtonLink href={`/safaris/${s.slug}`} variant="outline" aria-label={`View safari: ${s.title}`}>
            View safari
          </ButtonLink>
          <StartPlanningButton variant="primary">Enquire</StartPlanningButton>
        </div>
      </div>

      <Link href={`/safaris/${s.slug}`} tabIndex={-1} aria-hidden className="relative hidden min-h-[26rem] md:order-2 md:block">
        <CardImage image={s.hero} sizes="(min-width: 768px) 45vw, 100vw" className="absolute inset-0 rounded-[var(--radius-media)]" priority={priority} />
      </Link>
    </article>
  );
}
