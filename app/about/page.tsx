import Image from "next/image";
import { img } from "@/data/images";
import { site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { BeadDivider } from "@/components/ui/BeadDivider";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TrustRow } from "@/components/sections/TrustRow";
import { WhyUsSection } from "@/components/sections/HomeSections";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "About us: the meaning of safari njema",
  description: "Safari Njema is a small team of Kenya specialists. One dedicated person plans and looks after your journey, from first message to the day you fly home.",
  path: "/about",
});

const steps = [
  { t: "A conversation", d: "You tell us who's travelling, when, and what matters. We ask good questions and listen properly." },
  { t: "Ideas, not a package", d: "Your specialist sketches one or two routes with honest pros and cons, and a clear, itemised price." },
  { t: "Refined together", d: "We adjust camps, pace and budget until it feels exactly right. No pressure, no deadlines we didn't agree." },
  { t: "Every detail handled", d: "Park fees, flights, transfers, eTA guidance and packing notes. Then a travel pack you can actually use." },
  { t: "Looked after on the ground", d: "Meet-and-greet in Nairobi, vetted guides, and 24/7 WhatsApp support from someone who knows your trip." },
  { t: "The send-off", d: "We see you off at the end with the words that gave us our name: safari njema." },
];

export default function AboutPage() {
  const a = img("maasai-culture");
  const b = img("campfire");
  return (
    <>
      <PageHero
        image={img("sundowner")}
        eyebrow="About Safari Njema"
        title={<>Have a good journey. <em className="italic text-gold-light">We mean it.</em></>}
        intro="We are a small Nairobi-based team who believe a safari should feel personal from the very first message."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-y bg-cream">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
              <BeadDivider className="mt-5" />
              <h2 className="mt-6 text-h2">Named for a send-off</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-col gap-6 text-lead text-ink/85">
              <p>
                In Kenya, when someone sets off on a journey, the people who love them say <em>“safari njema”</em>: have a good
                journey. It is said at bus stations and airports, at farm gates and front doors. It is warm, it is personal, and
                it carries a quiet promise that someone is thinking of you while you travel.
              </p>
              <p>
                That is the spirit we started Safari Njema to bottle. Too many safaris are sold like flights: a booking reference,
                a hand-off to a stranger, silence until something goes wrong. We wanted the opposite. One specialist who gets to
                know you, designs a journey around you, and stays with you until you are home.
              </p>
              <p>
                {site.stats.yearsExperience}+ years on, that is still how we work. We have slept in the camps we recommend, bumped
                along the roads and flown the bush strips. We know which guide will make your children laugh, which tent catches
                the sunrise, and when the river crossings are most likely. And we still end every journey the same way.
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
              <Image src={a.src} alt={a.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </Reveal>
            <Reveal delay={0.2} className="absolute -bottom-10 -left-8 hidden aspect-square w-52 overflow-hidden rounded-[var(--radius-card)] border-8 border-cream md:block">
              <Image src={b.src} alt={b.alt} fill sizes="208px" className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      <TrustRow />

      <section className="section-y bg-cream">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="From first hello to safari njema" align="center" />
          <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <RevealItem key={s.t} className="bg-cream p-8 md:p-10">
                <span className="font-serif text-4xl text-gold-dark">0{i + 1}</span>
                <h3 className="mt-5 text-2xl">{s.t}</h3>
                <p className="mt-3 text-stone">{s.d}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <WhyUsSection />
      <FinalCta />
    </>
  );
}
