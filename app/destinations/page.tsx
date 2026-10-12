import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Kenya safari destinations",
  description: "From the Masai Mara and Amboseli to Samburu, Laikipia and the Indian Ocean coast: explore Kenya's best safari and beach destinations.",
  path: "/destinations",
});

const groups = [
  { title: "Safari parks & conservancies", eyebrow: "On safari", kinds: ["safari"] },
  { title: "Mountains & the city", eyebrow: "Highlands & Nairobi", kinds: ["mountain", "city"] },
  { title: "The Swahili coast", eyebrow: "Beach & islands", kinds: ["coast"] },
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
          <section key={g.title} className={gi % 2 ? "section-y bg-sand/60" : "section-y bg-cream"}>
            <div className="container-x">
              <SectionHeading eyebrow={g.eyebrow} title={g.title} />
              <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      <FinalCta />
    </>
  );
}
