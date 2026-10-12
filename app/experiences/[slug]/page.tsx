import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/data/experiences";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailBlock, Pills } from "@/components/sections/DetailBits";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { SafariCard } from "@/components/cards/SafariCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const e = getExperience((await params).slug);
  if (!e) return {};
  return buildMetadata({ title: `${e.name} in Kenya`, description: e.summary, path: `/experiences/${e.slug}`, image: e.hero.src });
}

export default async function ExperiencePage({ params }: Props) {
  const e = getExperience((await params).slug);
  if (!e) notFound();
  const where = destinations.filter((d) => e.destinationSlugs.includes(d.slug));
  const trips = safaris.filter((s) => s.experienceSlugs.includes(e.slug)).slice(0, 3);
  const more = experiences.filter((x) => x.slug !== e.slug && x.destinationSlugs.some((d) => e.destinationSlugs.includes(d))).slice(0, 3);

  return (
    <>
      <PageHero
        size="lg"
        image={e.hero}
        eyebrow="Experience"
        title={e.name}
        intro={e.tagline}
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences", href: "/experiences" }, { label: e.name }]}
      >
        <div className="mt-10">
          <StartPlanningButton variant="gold" arrow>
            Add this to my trip
          </StartPlanningButton>
        </div>
      </PageHero>

      <div className="container-x">
        <DetailBlock eyebrow="The experience" title={e.summary}>
          <Reveal className="flex flex-col gap-6 text-lead text-ink/85">
            {e.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </DetailBlock>
        <DetailBlock eyebrow="Good to know" title="When & who">
          <dl className="grid gap-8 md:grid-cols-2">
            <div>
              <dt className="eyebrow text-stone">Season</dt>
              <dd className="mt-3 text-lg text-charcoal">{e.season}</dd>
            </div>
            <div>
              <dt className="eyebrow text-stone">Best for</dt>
              <dd className="mt-3">
                <Pills items={e.bestFor} />
              </dd>
            </div>
          </dl>
        </DetailBlock>
      </div>

      {where.length > 0 && (
        <section className="section-y bg-sand/60">
          <div className="container-x">
            <SectionHeading eyebrow="Where" title="Where to do it" />
            <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {where.map((d) => (
                <RevealItem key={d.slug}>
                  <DestinationCard destination={d} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {trips.length > 0 && (
        <section className="section-y bg-cream">
          <div className="container-x">
            <SectionHeading eyebrow="Itineraries" title="Safaris that include it" />
            <RevealGroup className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {trips.map((s) => (
                <RevealItem key={s.slug}>
                  <SafariCard safari={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="section-y bg-charcoal">
          <div className="container-x">
            <SectionHeading tone="light" eyebrow="Pair it with" title="More experiences" />
            <RevealGroup className="mt-12 grid auto-rows-[22rem] gap-5 md:grid-cols-3">
              {more.map((x) => (
                <RevealItem key={x.slug}>
                  <ExperienceCard experience={x} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}
