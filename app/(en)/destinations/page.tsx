import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PlanCta } from "@/components/home/HomeSections";

export const metadata = buildMetadata({
  title: "Kenya safari destinations",
  description: "From the Masai Mara and Amboseli to Samburu, Laikipia and the Indian Ocean coast: explore Kenya's best safari and beach destinations.",
  path: "/destinations",
  image: img("elephant-kilimanjaro").src,
});

const groups = [
  { id: "safari", title: "Safari parks & conservancies", eyebrow: "On safari", kinds: ["safari"] },
  { id: "highlands", title: "Mountains & the city", eyebrow: "Highlands", kinds: ["mountain", "city"] },
  { id: "coast", title: "The Swahili coast", eyebrow: "Coast", kinds: ["coast"] },
] as const;

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        image={img("elephant-kilimanjaro")}
        eyebrow="Destinations"
        title="Where in Kenya?"
        intro="Fourteen places we know intimately, from the plains of the Mara to the coral coast. Most journeys combine two or three; your specialist will help you choose."
        crumbs={[{ label: "Home", href: "/" }, { label: "Destinations" }]}
      />
      {groups.map((g, gi) => {
        const items = destinations.filter((d) => (g.kinds as readonly string[]).includes(d.kind));
        return (
          <section key={g.id} id={g.id} className={gi % 2 ? "section-y scroll-mt-20" : "section-y scroll-mt-20 bg-sand/50"}>
            <div className="container-x">
              <SectionHeading eyebrow={g.eyebrow} title={g.title} />
              <RevealGroup className="mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((d) => (
                  <RevealItem key={d.slug}>
                    <DestinationCard destination={d} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </section>
        );
      })}
      <PlanCta />
    </>
  );
}
