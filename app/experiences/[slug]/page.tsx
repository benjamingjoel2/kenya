import { notFound } from "next/navigation";
import { experiences, getExperience } from "@/data/experiences";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { buildMetadata } from "@/lib/seo";
import { DetailTemplate, Fact } from "@/components/sections/DetailTemplate";
import { Pills } from "@/components/sections/DetailBits";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { SafariRow } from "@/components/cards/SafariRow";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PersonCard } from "@/components/cards/PersonCard";
import { PlanCta } from "@/components/home/HomeSections";
import { PinIcon, SunIcon } from "@/components/ui/Icons";

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
  const trips = safaris.filter((s) => s.experienceSlugs.includes(e.slug)).slice(0, 2);
  const more = experiences.filter((x) => x.slug !== e.slug && x.destinationSlugs.some((d) => e.destinationSlugs.includes(d))).slice(0, 4);

  return (
    <>
      <DetailTemplate
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences", href: "/experiences" }, { label: e.name }]}
        eyebrow="Experience"
        title={
          <>
            {e.name}
            <span className="block text-stone">{e.tagline}</span>
          </>
        }
        photos={[e.hero, ...where.map((d) => d.hero)]}
        sidebar={{
          head: <p className="text-h4 text-charcoal">{e.name}</p>,
          facts: (
            <>
              <Fact icon={SunIcon}>{e.season}</Fact>
              <Fact icon={PinIcon}>{where.map((d) => d.name).join(", ")}</Fact>
            </>
          ),
          cta: (
            <StartPlanningButton variant="primary" className="w-full">
              Add this to my trip
            </StartPlanningButton>
          ),
        }}
        sections={[
          {
            id: "about",
            label: "The experience",
            title: e.summary,
            content: (
              <div className="flex flex-col gap-5 text-lg text-stone">
                {e.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            ),
          },
          { id: "best-for", label: "Best for", title: "Best for", content: <Pills items={e.bestFor} /> },
          {
            id: "where",
            label: "Where",
            title: "Where to do it",
            content: (
              <div className="grid gap-2 sm:grid-cols-2">
                {where.map((d) => (
                  <DestinationCard key={d.slug} destination={d} sizes="(min-width: 1024px) 30vw, 100vw" />
                ))}
              </div>
            ),
          },
        ]}
      />

      {trips.length > 0 && (
        <section className="section-y bg-sand/50">
          <div className="container-x">
            <SectionHeading align="split" eyebrow="Itineraries" title="Safaris that include it" action={<ButtonLink href="/safaris" variant="outline">See all</ButtonLink>} />
            <RevealGroup className="mt-14 flex flex-col gap-4">
              {trips.map((s) => (
                <RevealItem key={s.slug}>
                  <SafariRow safari={s} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {more.length > 0 && (
        <section className="section-y">
          <div className="container-x">
            <SectionHeading eyebrow="Pair it with" title="More experiences" />
            <RevealGroup className="mt-14 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {more.map((x) => (
                <RevealItem key={x.slug}>
                  <PersonCard href={`/experiences/${x.slug}`} image={x.hero} title={x.name} subtitle={x.season} info={<p className="line-clamp-6">{x.summary}</p>} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <PlanCta />
    </>
  );
}
