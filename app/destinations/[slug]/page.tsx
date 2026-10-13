import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { stays } from "@/data/stays";
import { buildMetadata } from "@/lib/seo";
import { DetailTemplate, Fact } from "@/components/sections/DetailTemplate";
import { MonthGrid } from "@/components/sections/MonthGrid";
import { FaqList } from "@/components/sections/FaqList";
import { Pills } from "@/components/sections/DetailBits";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { SafariRow } from "@/components/cards/SafariRow";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PlanCta, StayPersonCard } from "@/components/home/HomeSections";
import { PinIcon, PlaneIcon, SparkIcon, SunIcon } from "@/components/ui/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const d = getDestination((await params).slug);
  if (!d) return {};
  return buildMetadata({ title: `${d.name} safari guide`, description: d.summary, path: `/destinations/${d.slug}`, image: d.hero.src });
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** [0,1,5,6,7] → "Jan–Feb, Jun–Aug" */
function monthRanges(idx: number[]) {
  const out: string[] = [];
  for (let i = 0; i < idx.length; i++) {
    const start = idx[i];
    while (i + 1 < idx.length && idx[i + 1] === idx[i] + 1) i++;
    out.push(start === idx[i] ? MONTHS[start] : `${MONTHS[start]}–${MONTHS[idx[i]]}`);
  }
  return out.join(", ");
}

const kindLabel = { safari: "Safari destination", coast: "Kenya coast", city: "City", mountain: "Mountain" } as const;

export default async function DestinationPage({ params }: Props) {
  const d = getDestination((await params).slug);
  if (!d) notFound();

  const related = safaris.filter((s) => s.destinationSlugs.includes(d.slug)).slice(0, 2);
  const localStays = stays.filter((s) => s.destinationSlug === d.slug);
  const nearby = destinations
    .filter((x) => x.region === d.region && x.slug !== d.slug)
    .concat(destinations.filter((x) => x.kind === d.kind && x.region !== d.region && x.slug !== d.slug))
    .slice(0, 4);
  const bestMonths = d.months.map((m, i) => (m === "peak" || m === "migration" ? i : -1)).filter((i) => i >= 0);

  const sections = [
    {
      id: "overview",
      label: "Overview",
      title: `Why ${d.name}`,
      content: (
        <div className="flex flex-col gap-5 text-lg text-stone">
          {d.overview.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      ),
    },
    { id: "best-time", label: "Best time to visit", title: "Best time to visit", content: <MonthGrid months={d.months} note={d.bestTimeNote} /> },
    {
      id: "highlights",
      label: "Highlights",
      title: "What not to miss",
      content: (
        <ul className="flex flex-col gap-3 text-lg text-ink/85">
          {d.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <SparkIcon className="mt-2.5 h-2 w-2 shrink-0 text-gold" />
              {h}
            </li>
          ))}
        </ul>
      ),
    },
    { id: "wildlife", label: d.kind === "coast" ? "Nature" : "Wildlife", title: d.kind === "coast" ? "Wildlife & marine life" : "Wildlife to see", content: <Pills items={d.wildlife} /> },
    ...(localStays.length
      ? [
          {
            id: "stays",
            label: "Where to stay",
            title: `Where to stay in ${d.name}`,
            content: (
              <div className="grid grid-cols-2 gap-2">
                {localStays.map((s) => (
                  <StayPersonCard key={s.slug} slug={s.slug} />
                ))}
              </div>
            ),
          },
        ]
      : []),
    ...(d.faqs.length ? [{ id: "faq", label: "FAQ", title: `${d.name}, answered`, content: <FaqList faqs={d.faqs} /> }] : []),
  ];

  return (
    <>
      <DetailTemplate
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: d.name }]}
        eyebrow={kindLabel[d.kind]}
        title={
          <>
            {d.name}
            <span className="mt-2 block text-[0.55em] leading-[1.1] text-stone">{d.tagline}</span>
          </>
        }
        photos={[d.hero, ...d.gallery]}
        sections={sections}
        sidebar={{
          head: <p className="text-h4 text-charcoal">{d.name}</p>,
          facts: (
            <>
              <Fact icon={SunIcon}>Best months: {monthRanges(bestMonths) || "year-round"}</Fact>
              <Fact icon={PlaneIcon}>{d.gettingThere}</Fact>
              <Fact icon={PinIcon}>Pairs well with {nearby.slice(0, 3).map((n) => n.name).join(", ")}</Fact>
            </>
          ),
          cta: (
            <StartPlanningButton variant="primary" className="w-full">
              Plan a trip to {d.name}
            </StartPlanningButton>
          ),
        }}
      />

      {related.length > 0 && (
        <section className="section-y bg-sand/50">
          <div className="container-x">
            <SectionHeading align="split" eyebrow="Sample itineraries" title={`Safaris including ${d.name}`} action={<ButtonLink href="/safaris" variant="outline">See all</ButtonLink>} />
            <RevealGroup className="mt-14 flex flex-col gap-4">
              {related.map((s) => (
                <RevealItem key={s.slug}>
                  <SafariRow safari={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="Keep exploring" title="Combine it with" />
          <RevealGroup className="mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <RevealItem key={n.slug}>
                <DestinationCard destination={n} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <PlanCta title={`Plan your ${d.name} safari`} />
    </>
  );
}
