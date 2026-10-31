import { notFound } from "next/navigation";
import { getStay, stays, stayTypeLabels } from "@/data/stays";
import { getDestination } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { buildMetadata } from "@/lib/seo";
import { DetailTemplate, Fact, IconList } from "@/components/sections/DetailTemplate";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { SafariRow } from "@/components/cards/SafariRow";
import { PlanCta, StayPersonCard } from "@/components/home/HomeSections";
import { PinIcon, TentIcon } from "@/components/ui/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const s = getStay((await params).slug);
  if (!s) return {};
  const dest = getDestination(s.destinationSlug);
  return buildMetadata({ title: dest ? `${s.name}, ${dest.name}` : s.name, description: s.summary, path: `/stays/${s.slug}`, image: s.hero.src });
}

export default async function StayPage({ params }: Props) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const dest = getDestination(s.destinationSlug);
  const trips = safaris.filter((x) => x.destinationSlugs.includes(s.destinationSlug)).slice(0, 2);
  const others = stays.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <DetailTemplate
        crumbs={[{ label: "Home", href: "/" }, { label: "Stays", href: "/stays" }, { label: s.name }]}
        eyebrow={stayTypeLabels[s.type]}
        title={
          <>
            {s.name}
            <span className="mt-2 block text-[0.55em] leading-[1.1] text-stone">{s.location}</span>
          </>
        }
        photos={[s.hero, ...s.gallery]}
        sidebar={{
          head: (
            <div>
              <p className="text-h4 text-charcoal">{s.name}</p>
              <p className="mt-2 text-sm text-stone">Available as part of a tailor-made journey. Ask your specialist about dates and availability.</p>
            </div>
          ),
          facts: (
            <>
              <Fact icon={TentIcon}>{stayTypeLabels[s.type]}</Fact>
              <Fact icon={PinIcon}>
                {s.location}
                {dest && (
                  <>
                    {" · "}
                    <a href={`/destinations/${dest.slug}`} className="underline underline-offset-2">
                      {dest.name}
                    </a>
                  </>
                )}
              </Fact>
            </>
          ),
          cta: (
            <StartPlanningButton variant="primary" className="w-full">
              Enquire about {s.name}
            </StartPlanningButton>
          ),
        }}
        sections={[
          {
            id: "about",
            label: "About",
            title: s.summary,
            content: (
              <div className="flex flex-col gap-5 text-lg text-stone">
                {s.body.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            ),
          },
          { id: "features", label: "At a glance", title: "At a glance", content: <IconList items={s.features} /> },
        ]}
      />

      {trips.length > 0 && (
        <section className="section-y bg-sand/50">
          <div className="container-x">
            <SectionHeading align="split" eyebrow="Itineraries" title={`Safaris visiting ${dest?.name ?? "this area"}`} action={<ButtonLink href="/safaris" variant="outline">See all</ButtonLink>} />
            <RevealGroup className="mt-14 flex flex-col gap-4">
              {trips.map((x) => (
                <RevealItem key={x.slug}>
                  <SafariRow safari={x} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-x">
          <SectionHeading eyebrow="More stays" title="You might also love" />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {others.map((x) => (
              <RevealItem key={x.slug}>
                <StayPersonCard slug={x.slug} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <PlanCta />
    </>
  );
}
