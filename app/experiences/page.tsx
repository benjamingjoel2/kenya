import { experiences } from "@/data/experiences";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PersonCard } from "@/components/cards/PersonCard";
import { PlanCta, WhyUs } from "@/components/home/HomeSections";

export const metadata = buildMetadata({
  title: "Kenya safari experiences",
  description: "The Great Migration, hot air balloons, walking and horseback safaris, rhino tracking, Lamu dhows, gorilla trekking and more, woven into your Kenya journey.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Experiences"
        title="Our experiences"
        intro="Fifteen ways to shape your journey. Combine a few, or build a whole trip around one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
      />
      <section className="pt-14 pb-20 md:pb-28">
        <div className="container-x">
          <RevealGroup className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e) => (
              <RevealItem key={e.slug}>
                <PersonCard
                  href={`/experiences/${e.slug}`}
                  image={e.hero}
                  title={e.name}
                  subtitle={e.tagline}
                  info={<p className="line-clamp-6">{e.summary}</p>}
                  footer={<span className="font-medium">Discover →</span>}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <WhyUs />
      <PlanCta />
    </>
  );
}
