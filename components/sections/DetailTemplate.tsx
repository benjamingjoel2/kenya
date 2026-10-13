import Image from "next/image";
import type { Img } from "@/data/types";
import { Breadcrumbs, type Crumb } from "./PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionNav } from "./SectionNav";
import { cn } from "@/lib/utils";

export type DetailSection = { id: string; label: string; title: React.ReactNode; content: React.ReactNode };

/**
 * Detail page template (reference tour page): breadcrumbs, two-line title, four
 * rounded photos, then a main column of titled sections beside a sticky info card
 * with jump links.
 */
export function DetailTemplate({
  crumbs,
  eyebrow,
  title,
  photos,
  sections,
  sidebar,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: React.ReactNode;
  photos: Img[];
  sections: DetailSection[];
  /** Top of the sticky card (heading, facts); jump links and CTA are added below it. */
  sidebar: { head: React.ReactNode; facts?: React.ReactNode; cta: React.ReactNode };
}) {
  const four = [...photos, ...photos].slice(0, 4);
  return (
    <>
      <section className="pt-28 md:pt-32">
        <div className="container-x">
          <Breadcrumbs crumbs={crumbs} />
          <div className="animate-fade-up mt-10 [animation-delay:80ms]">
            {eyebrow && <p className="mb-4 text-[0.8125rem] text-stone">{eyebrow}</p>}
            <h1 className="max-w-[60rem] text-h2 leading-none">{title}</h1>
          </div>
          <div className="animate-fade-up mt-12 grid grid-cols-2 gap-2 [animation-delay:180ms] md:grid-cols-4">
            {four.map((p, i) => (
              <div key={`${p.src}-${i}`} className={cn("relative overflow-hidden rounded-[var(--radius-card)] bg-sand", i === 0 ? "col-span-2 aspect-[4/3] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]", i === 3 && "max-md:hidden")}>
                <Image src={p.src} alt={p.alt} fill priority={i < 2} sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-14 pb-20 md:pb-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-8">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className={cn("scroll-mt-28", i > 0 && "mt-12 border-t border-line pt-12")}>
                <Reveal>
                  <h2 className="max-w-[52rem] text-h4">{s.title}</h2>
                  <div className="mt-6 max-w-[52rem]">{s.content}</div>
                </Reveal>
              </section>
            ))}
          </div>
          <aside className="order-first lg:order-none lg:col-span-4">
            <div className="flex flex-col gap-6 rounded-[var(--radius-card)] bg-paper p-6 lg:sticky lg:top-24">
              {sidebar.head}
              {sidebar.facts && <div className="flex flex-col gap-3 text-sm text-charcoal">{sidebar.facts}</div>}
              <div className="hidden border-t border-line pt-6 lg:block">
                <SectionNav items={sections.map((s) => ({ id: s.id, label: s.label }))} />
              </div>
              <div className="flex flex-col gap-2">{sidebar.cta}</div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function Fact({ icon: Icon, children }: { icon: (p: React.SVGProps<SVGSVGElement>) => React.ReactNode; children: React.ReactNode }) {
  return (
    <p className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-stone" />
      <span>{children}</span>
    </p>
  );
}

/** Two-column icon list (reference "What's included"). */
export function IconList({ items, tone = "check" }: { items: string[]; tone?: "check" | "cross" }) {
  return (
    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3 text-ink/85">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.7rem] leading-none",
              tone === "check" ? "bg-acacia/10 text-acacia" : "bg-shuka/10 text-shuka",
            )}
          >
            {tone === "check" ? "✓" : "×"}
          </span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

/** Timeline rows (reference "sample daily schedule"). */
export function ScheduleRows({ rows }: { rows: { label: string; title: string; body?: React.ReactNode; meta?: React.ReactNode }[] }) {
  return (
    <ol className="divide-y divide-line border-y border-line">
      {rows.map((r) => (
        <li key={r.label + r.title} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p className="text-lg font-medium text-charcoal">{r.label}</p>
          <div>
            <p className="font-medium text-charcoal">{r.title}</p>
            {r.body && <p className="mt-2 text-stone">{r.body}</p>}
            {r.meta && <p className="mt-2 text-sm text-stone">{r.meta}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
