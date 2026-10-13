import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { KenyaDotMap } from "@/components/home/KenyaDotMap";
import { PlanCta } from "@/components/home/HomeSections";

export const metadata = buildMetadata({
  title: "Kenya safari destinations",
  description: "From the Masai Mara and Amboseli to Samburu, Laikipia and the Indian Ocean coast: explore Kenya's best safari and beach destinations.",
  path: "/destinations",
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
      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal className="flex flex-col gap-6">
              <Eyebrow>Map</Eyebrow>
              <h2 className="text-h2">Every destination, at a glance</h2>
              <p className="text-lg text-stone">Hover or tab through the map to jump to any destination.</p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7">
            <KenyaDotMap />
          </Reveal>
        </div>
      </section>
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
