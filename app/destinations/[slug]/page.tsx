import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { stays } from "@/data/stays";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailBlock, Pills, TickList } from "@/components/sections/DetailBits";
import { Gallery } from "@/components/sections/Gallery";
import { MonthGrid } from "@/components/sections/MonthGrid";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { SafariCard } from "@/components/cards/SafariCard";
import { StayCard } from "@/components/cards/StayCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { PlaneIcon, SunIcon, PinIcon } from "@/components/ui/Icons";

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

  const related = safaris.filter((s) => s.destinationSlugs.includes(d.slug)).slice(0, 3);
  const localStays = stays.filter((s) => s.destinationSlug === d.slug);
  const nearby = destinations.filter((x) => x.region === d.region && x.slug !== d.slug).concat(destinations.filter((x) => x.kind === d.kind && x.region !== d.region && x.slug !== d.slug)).slice(0, 4);
  const bestMonths = d.months.map((m, i) => (m === "peak" || m === "migration" ? i : -1)).filter((i) => i >= 0);

  return (
    <>
      <PageHero
        size="lg"
        image={d.hero}
        eyebrow={kindLabel[d.kind]}
        title={d.name}
        intro={d.tagline}
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations", href: "/destinations" }, { label: d.name }]}
      >
        <div className="mt-10">
          <StartPlanningButton variant="gold" arrow>
            Plan a trip to {d.name}
          </StartPlanningButton>
        </div>
      </PageHero>

      <div className="border-b border-line bg-cream">
        <dl className="container-x grid gap-6 py-8 md:grid-cols-3">
          <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <SunIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Best months
              </dt>
              <dd className="mt-2 text-charcoal">{monthRanges(bestMonths) || "Year-round"}</dd>
            </div>
          <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <PlaneIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Getting there
              </dt>
              <dd className="mt-2 text-charcoal">{d.gettingThere}</dd>
            </div>
          <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <PinIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Pairs well with
              </dt>
              <dd className="mt-2 text-charcoal">{nearby.slice(0, 3).map((n) => n.name).join(", ")}</dd>
            </div>
        </dl>
      </div>

      <div className="container-x bg-cream">
        <DetailBlock eyebrow="Overview" title={`Why ${d.name}`}>
          <Reveal className="flex flex-col gap-6 text-lead text-ink/85">
            {d.overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
          <div className="mt-12">
            <Gallery images={d.gallery} />
          </div>
        </DetailBlock>

        <DetailBlock eyebrow="When to go" title="Best time to visit" id="best-time">
          <MonthGrid months={d.months} note={d.bestTimeNote} />
        </DetailBlock>

        <DetailBlock eyebrow="Highlights" title="What not to miss">
          <TickList items={d.highlights} className="text-lg" />
        </DetailBlock>

        <DetailBlock eyebrow={d.kind === "coast" ? "Nature" : "Wildlife"} title={d.kind === "coast" ? "Wildlife & marine life" : "Wildlife to see"}>
          <Pills items={d.wildlife} />
        </DetailBlock>
      </div>

      {localStays.length > 0 && (
        <section className="section-y bg-sand/60">
          <div className="container-x">
            <SectionHeading eyebrow="Where to stay" title={`Our favourite stays in ${d.name}`} />
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {localStays.map((s) => (
                <RevealItem key={s.slug}>
                  <StayCard stay={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section-y bg-cream">
          <div className="container-x">
            <SectionHeading eyebrow="Sample itineraries" title={`Safaris including ${d.name}`} />
            <RevealGroup className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <RevealItem key={s.slug}>
                  <SafariCard safari={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {d.faqs.length > 0 && (
        <section className="section-y bg-sand/60">
          <div className="container-x grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title={`${d.name}, answered`} />
            </div>
            <div className="lg:col-span-8">
              <FaqList faqs={d.faqs} />
            </div>
          </div>
        </section>
      )}

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow="Keep exploring" title="Combine it with" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((n) => (
              <RevealItem key={n.slug}>
                <DestinationCard destination={n} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FinalCta title={`Plan your ${d.name} safari`} />
    </>
  );
}
