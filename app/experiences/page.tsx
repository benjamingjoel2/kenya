import { experiences } from "@/data/experiences";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FinalCta } from "@/components/sections/FinalCta";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Kenya safari experiences",
  description: "The Great Migration, hot air balloons, walking and horseback safaris, rhino tracking, Lamu dhows, gorilla trekking and more, woven into your Kenya journey.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image={img("balloon-sunrise")}
        eyebrow="Experiences"
        title="The moments you’ll talk about for years"
        intro="Fifteen ways to shape your journey. Combine a few, or build a whole trip around one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Experiences" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x">
          <RevealGroup className="grid auto-rows-[24rem] gap-5 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((e, i) => (
              <RevealItem key={e.slug} className={cn(i % 7 === 0 && "lg:col-span-2")}>
                <ExperienceCard experience={e} className="h-full" large={i % 7 === 0} sizes={i % 7 === 0 ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
