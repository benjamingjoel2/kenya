import Link from "next/link";
import { notFound } from "next/navigation";
import { getStay, stays, stayTypeLabels } from "@/data/stays";
import { getDestination } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { DetailBlock, TickList } from "@/components/sections/DetailBits";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCta } from "@/components/sections/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Price } from "@/components/ui/Price";
import { StayCard } from "@/components/cards/StayCard";
import { SafariCard } from "@/components/cards/SafariCard";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stays.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const s = getStay((await params).slug);
  if (!s) return {};
  return buildMetadata({ title: `${s.name}, ${s.location}`, description: s.summary, path: `/stays/${s.slug}`, image: s.hero.src });
}

export default async function StayPage({ params }: Props) {
  const s = getStay((await params).slug);
  if (!s) notFound();
  const dest = getDestination(s.destinationSlug);
  const trips = safaris.filter((x) => x.destinationSlugs.includes(s.destinationSlug)).slice(0, 3);
  const others = stays.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <PageHero
        size="lg"
        image={s.hero}
        eyebrow={stayTypeLabels[s.type]}
        title={s.name}
        intro={s.location}
        crumbs={[{ label: "Home", href: "/" }, { label: "Stays", href: "/stays" }, { label: s.name }]}
      />
      <div className="container-x grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-serif text-[clamp(1.4rem,1.1rem+1vw,2rem)] leading-snug text-charcoal">{s.summary}</p>
          </Reveal>
          <Reveal className="mt-8 flex flex-col gap-6 text-lead text-ink/85">
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-[var(--radius-card)] bg-sand/70 p-8">
            <p className="text-sm text-stone">From</p>
            <p className="mt-1 font-serif text-4xl text-charcoal">
              <Price usd={s.priceFromUsd} />
            </p>
            <p className="mt-1 text-stone">per person · night</p>
            {dest && (
              <p className="mt-6 border-t border-line pt-6 text-sm text-stone">
                Located in{" "}
                <Link href={`/destinations/${dest.slug}`} className="font-semibold text-acacia underline underline-offset-2">
                  {dest.name}
                </Link>
              </p>
            )}
            <StartPlanningButton variant="primary" arrow className="mt-6 w-full">
              Enquire about {s.name}
            </StartPlanningButton>
          </div>
        </aside>
      </div>
      <div className="container-x">
        <DetailBlock eyebrow="Gallery" title="A look inside">
          <Gallery images={s.gallery} />
        </DetailBlock>
        <DetailBlock eyebrow="Features" title="At a glance">
          <TickList items={s.features} className="grid gap-3 text-lg sm:grid-cols-2" />
        </DetailBlock>
      </div>
      {trips.length > 0 && (
        <section className="section-y bg-sand/60">
          <div className="container-x">
            <SectionHeading eyebrow="Itineraries" title={`Safaris visiting ${dest?.name ?? "this area"}`} />
            <RevealGroup className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {trips.map((x) => (
                <RevealItem key={x.slug}>
                  <SafariCard safari={x} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}
      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow="More stays" title="You might also love" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((x) => (
              <RevealItem key={x.slug}>
                <StayCard stay={x} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
