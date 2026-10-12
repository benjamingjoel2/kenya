import Link from "next/link";
import { notFound } from "next/navigation";
import { getSafari, safaris, budgetLabels } from "@/data/safaris";
import { getExperience } from "@/data/experiences";
import { site, whatsappHref } from "@/config/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { TickList } from "@/components/sections/DetailBits";
import { MapPlaceholder } from "@/components/sections/MapPlaceholder";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Price } from "@/components/ui/Price";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { SafariCard } from "@/components/cards/SafariCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ClockIcon, PinIcon, SunIcon, WhatsAppIcon } from "@/components/ui/Icons";

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

  const exps = s.experienceSlugs.map(getExperience).filter((e) => !!e).slice(0, 3);
  const similar = safaris.filter((x) => x.slug !== s.slug && (x.budget === s.budget || x.destinationSlugs.some((d) => s.destinationSlugs.includes(d)))).slice(0, 3);
  const mapStops = ["Nairobi", ...s.regions.filter((r) => r !== "Nairobi")].slice(0, 6);

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
          offers: { "@type": "Offer", price: s.priceFromUsd, priceCurrency: "USD", description: "From, per person sharing, excluding international flights" },
          provider: { "@type": "TravelAgency", name: site.name, url: site.url },
        }}
      />
      <PageHero
        size="lg"
        image={s.hero}
        eyebrow={`${s.nights} nights · ${budgetLabels[s.budget]}`}
        title={s.title}
        intro={s.regions.join(" · ")}
        crumbs={[{ label: "Home", href: "/" }, { label: "Safaris", href: "/safaris" }, { label: s.title }]}
      />

      <div className="container-x grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,1.1rem+1vw,2rem)] leading-snug text-charcoal">{s.summary}</p>
          </Reveal>
          <dl className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
            <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <ClockIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Duration
              </dt>
              <dd className="mt-2">{s.nights} nights / {s.nights + 1} days</dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <PinIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Regions
              </dt>
              <dd className="mt-2">{s.regions.join(", ")}</dd>
            </div>
            <div>
              <dt className="eyebrow flex items-center gap-2 text-stone">
                <SunIcon className="h-5 w-5 shrink-0 text-gold-dark" />
                Best time
              </dt>
              <dd className="mt-2">{s.bestTime}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-4 rounded-[var(--radius-card)] bg-charcoal p-6 text-cream lg:hidden">
            <div>
              <p className="text-sm text-cream/70">From</p>
              <p className="font-serif text-3xl text-white">
                <Price usd={s.priceFromUsd} /> <span className="font-sans text-sm text-cream/70">per person</span>
              </p>
              <p className="mt-1 text-xs text-cream/70">
                ≈ <Price usd={s.priceFromUsd * 2} /> for two · international flights excluded
              </p>
            </div>
            <StartPlanningButton variant="gold" arrow className="px-5 py-3">
              Enquire
            </StartPlanningButton>
          </div>
          <div className="mt-10">
            <h2 className="eyebrow font-sans text-gold-dark">Highlights</h2>
            <TickList items={s.highlights} className="mt-5 text-lg" />
          </div>

          <DetailBlockInline title="Day by day" eyebrow="Itinerary">
            <ol className="relative flex flex-col gap-10 border-l border-line pl-8">
              {s.itinerary.map((d) => (
                <li key={d.day} className="relative">
                  <span aria-hidden className="absolute top-1.5 -left-[2.4rem] h-4 w-4 rounded-full border-4 border-cream bg-gold" />
                  <p className="eyebrow text-gold-dark">{d.day}</p>
                  <h3 className="mt-2 text-2xl">{d.title}</h3>
                  <p className="mt-3 text-ink/85">{d.body}</p>
                  {(d.stay || d.meals) && (
                    <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-stone">
                      {d.stay && <span>Stay: <span className="text-charcoal">{d.stay}</span></span>}
                      {d.meals && <span>Meals: <span className="text-charcoal">{d.meals}</span></span>}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </DetailBlockInline>

          <DetailBlockInline title="Route" eyebrow="Map">
            <MapPlaceholder stops={mapStops} />
          </DetailBlockInline>

          <DetailBlockInline title="What’s included" eyebrow="Inclusions">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-sans text-base font-semibold tracking-normal">Included</h3>
                <TickList items={s.inclusions} className="mt-4" />
              </div>
              <div>
                <h3 className="font-sans text-base font-semibold tracking-normal">Not included</h3>
                <TickList items={s.exclusions} tone="cross" className="mt-4" />
              </div>
            </div>
          </DetailBlockInline>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-[var(--radius-card)] bg-charcoal p-8 text-cream">
            <p className="text-sm text-cream/70">From</p>
            <p className="mt-1 font-serif text-5xl text-white">
              <Price usd={s.priceFromUsd} />
            </p>
            <p className="mt-1 text-cream/80">per person sharing</p>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm text-cream/70">
              ≈ <Price usd={s.priceFromUsd * 2} className="font-semibold text-cream" /> for two · international flights excluded
            </p>
            <p className="mt-2 text-sm text-cream/70">{s.inclusionLine}</p>
            <div className="mt-8 flex flex-col gap-3">
              <StartPlanningButton variant="gold" arrow className="w-full">
                Enquire about this safari
              </StartPlanningButton>
              <ButtonLink href={whatsappHref(`Hello Safari Njema, I'm interested in the "${s.title}" safari.`)} variant="outline-light" className="w-full">
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-5 w-5" /> Ask on WhatsApp
                </span>
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs text-cream/60">
              Prices are a guide, per person sharing, and vary by season and availability. Your specialist will confirm a full, itemised quote.
            </p>
          </div>
        </aside>
      </div>

      {exps.length > 0 && (
        <section className="section-y bg-charcoal">
          <div className="container-x">
            <SectionHeading tone="light" eyebrow="On this safari" title="Experiences along the way" />
            <RevealGroup className="mt-12 grid auto-rows-[24rem] gap-5 md:grid-cols-3">
              {exps.map((e) => (
                <RevealItem key={e.slug}>
                  <ExperienceCard experience={e} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow="You may also like" title="Similar safaris" action={<Link href="/safaris" className="text-sm font-semibold underline underline-offset-4">All safaris</Link>} />
          <RevealGroup className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((x) => (
              <RevealItem key={x.slug}>
                <SafariCard safari={x} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <FinalCta title="Make it yours" text={`Love the shape of ${s.title}? Tell us your dates and who's travelling, and your specialist will tailor it.`} />
    </>
  );
}

function DetailBlockInline({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 border-t border-line pt-14">
      <p className="eyebrow text-gold-dark">{eyebrow}</p>
      <h2 className="mt-3 mb-10 text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] leading-tight">{title}</h2>
      {children}
    </section>
  );
}

