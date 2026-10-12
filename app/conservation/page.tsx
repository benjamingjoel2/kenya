import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { ParallaxBand } from "@/components/sections/ParallaxBand";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Conservation & community",
  description: "How Safari Njema travel supports Kenya's wildlife conservancies, community landowners and the people who protect them.",
  path: "/conservation",
});

const pillars = [
  { t: "Conservancies first", d: "We favour camps in community conservancies, where lease and bed-night fees go directly to the Maasai and Samburu families who own the land, making wildlife worth more alive." },
  { t: "Fewer, better vehicles", d: "Capped vehicle numbers mean calmer animals and a better experience. We choose camps that respect sightings and keep to their limits." },
  { t: "Local guides & teams", d: "The overwhelming majority of the people who look after you are Kenyan, many from the communities around the parks. We pay fairly and on time." },
  { t: "Lighter footprints", d: "Solar power, water recycling, plastic-free camps and honest advice on combining flights efficiently. We ask hard questions of our partners." },
];

export default function ConservationPage() {
  return (
    <>
      <PageHero
        image={img("conservation")}
        eyebrow="Conservation"
        title="Travel that keeps wild Kenya wild"
        intro="Tourism pays for much of Kenya's conservation. Choosing where you stay is the most powerful decision you'll make."
        crumbs={[{ label: "Home", href: "/" }, { label: "Conservation" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our approach"
            title="Four principles behind every itinerary"
            intro="We are not perfect, and we won't pretend travel is impact-free. But we make deliberate choices, and we'll always explain them."
          />
          <RevealGroup className="mt-14 grid gap-8 md:grid-cols-2">
            {pillars.map((p, i) => (
              <RevealItem key={p.t} className="border-t border-charcoal pt-8">
                <span className="font-serif text-2xl text-gold-dark">0{i + 1}</span>
                <h3 className="mt-4 text-h3">{p.t}</h3>
                <p className="mt-4 max-w-xl text-stone">{p.d}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <ParallaxBand image={img("rhino")}>
        <div className="container-x flex min-h-[70svh] items-center py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-gold-light">Rhino country</p>
            <p className="mt-6 font-serif text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-tight text-white">
              Laikipia and Lewa are home to some of Kenya’s most important black and white rhino populations. Every guest night in
              these sanctuaries helps fund the rangers who protect them.
            </p>
          </Reveal>
        </div>
      </ParallaxBand>
      <section className="section-y bg-sand/60">
        <div className="container-x max-w-3xl">
          <SectionHeading eyebrow="Get involved" title="Want to give back?" />
          <Reveal className="mt-8 flex flex-col gap-5 text-lead text-ink/85">
            <p>
              Ask your specialist about visiting a conservancy’s community projects, spending time with an anti-poaching or
              rhino-monitoring team, or packing something genuinely useful for a school. We can point you to reputable
              organisations, and we never arrange visits that treat people or animals as a spectacle.
            </p>
            <p className="text-base text-stone">Partner organisations and figures to be added (placeholder).</p>
          </Reveal>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
