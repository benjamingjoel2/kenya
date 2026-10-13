import { notFound } from "next/navigation";
import { getSafari, safaris, budgetLabels } from "@/data/safaris";
import { getExperience } from "@/data/experiences";
import { site, whatsappHref } from "@/config/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { DetailTemplate, Fact, IconList, ScheduleRows } from "@/components/sections/DetailTemplate";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { SafariRow } from "@/components/cards/SafariRow";
import { PersonCard } from "@/components/cards/PersonCard";
import { PlanCta } from "@/components/home/HomeSections";
import { CalendarIcon, MealIcon, PinIcon, SparkIcon, SunIcon, WhatsAppIcon } from "@/components/ui/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return safaris.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const s = getSafari((await params).slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.title}: ${s.nights}-night Kenya safari`, description: s.summary.split(". ")[0] + ".", path: `/safaris/${s.slug}`, image: s.hero.src });
}

export default async function SafariPage({ params }: Props) {
  const s = getSafari((await params).slug);
  if (!s) notFound();

  const exps = s.experienceSlugs.map(getExperience).filter((e) => !!e).slice(0, 4);
  const similar = safaris.filter((x) => x.slug !== s.slug && (x.budget === s.budget || x.destinationSlugs.some((d) => s.destinationSlugs.includes(d)))).slice(0, 2);
  const mapStops = ["Nairobi", ...s.regions.filter((r) => r !== "Nairobi")].slice(0, 6);
  const photos = [s.hero, ...exps.map((e) => e.hero)];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: s.title,
          description: s.summary,
          touristType: budgetLabels[s.budget],
          itinerary: { "@type": "ItemList", itemListElement: s.itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day}: ${d.title}` })) },
          provider: { "@type": "TravelAgency", name: site.name, url: site.url },
        }}
      />
      <DetailTemplate
        crumbs={[{ label: "Home", href: "/" }, { label: "Safaris", href: "/safaris" }, { label: s.title }]}
        eyebrow={`${s.nights} nights · ${budgetLabels[s.budget]} · ${s.regions.join(", ")}`}
        title={s.title}
        photos={photos}
        sidebar={{
          head: (
            <div>
              <p className="text-h4 text-charcoal">Tailor-made</p>
              <p className="mt-2 text-sm text-stone">
                No fixed packages. Your specialist shapes this route around your dates, pace and travellers, then sends a clear, itemised quote.
              </p>
            </div>
          ),
          facts: (
            <>
              <Fact icon={PinIcon}>{s.regions.join(" · ")}</Fact>
              <Fact icon={CalendarIcon}>
                {s.nights} nights / {s.nights + 1} days
              </Fact>
              <Fact icon={MealIcon}>{s.inclusionLine}</Fact>
              <Fact icon={SunIcon}>{s.bestTime}</Fact>
            </>
          ),
          cta: (
            <>
              <StartPlanningButton variant="primary" className="w-full">
                Enquire about this safari
              </StartPlanningButton>
              <ButtonLink href={whatsappHref(`Hello Safari Njema, I'm interested in the "${s.title}" safari.`)} variant="outline" className="w-full">
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
                </span>
              </ButtonLink>
            </>
          ),
        }}
        sections={[
          { id: "about", label: "About", title: "About this safari", content: <p className="text-lg text-stone">{s.summary}</p> },
          {
            id: "special",
            label: "Highlights",
            title: "What makes this safari special",
            content: (
              <ul className="flex flex-col gap-3 text-lg text-ink/85">
                {s.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <SparkIcon className="mt-2.5 h-2 w-2 shrink-0 text-gold" />
                    {h}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            id: "program",
            label: "Day by day",
            title: "Full programme",
            content: (
              <ScheduleRows
                rows={s.itinerary.map((d) => ({
                  label: d.day,
                  title: d.title,
                  body: d.body,
                  meta: [d.stay && `Stay: ${d.stay}`, d.meals && `Meals: ${d.meals}`].filter(Boolean).join(" · "),
                }))}
              />
            ),
          },
          { id: "route", label: "Route", title: "Route", content: <MapPlaceholder stops={mapStops} /> },
          { id: "included", label: "What's included", title: "What’s included", content: <IconList items={s.inclusions} /> },
          {
            id: "not-included",
            label: "Not included",
            title: (
              <>
                What’s <span className="text-shuka">not included</span> in this safari
              </>
            ),
            content: <IconList items={s.exclusions} tone="cross" />,
          },
        ]}
      />

      {exps.length > 0 && (
        <section className="section-y bg-paper">
          <div className="container-x">
            <SectionHeading eyebrow="On this safari" title="Experiences along the way" />
            <RevealGroup className="mt-14 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {exps.map((e) => (
                <RevealItem key={e.slug}>
                  <PersonCard href={`/experiences/${e.slug}`} image={e.hero} title={e.name} subtitle={e.season} info={<p className="line-clamp-6">{e.summary}</p>} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="section-y bg-sand/50">
        <div className="container-x">
          <SectionHeading align="split" eyebrow="Safaris" title="You may also like" action={<ButtonLink href="/safaris" variant="outline">See all</ButtonLink>} />
          <RevealGroup className="mt-14 flex flex-col gap-4">
            {similar.map((x) => (
              <RevealItem key={x.slug}>
                <SafariRow safari={x} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <PlanCta title="Make it yours" text={`Love the shape of ${s.title}? Tell us your dates and who's travelling, and your specialist will tailor it.`} />
    </>
  );
}
