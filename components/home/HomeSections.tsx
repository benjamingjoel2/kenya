import Image from "next/image";
import Link from "next/link";
import { site, whatsappHref } from "@/config/site";
import { destinations, getDestination } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { experiences } from "@/data/experiences";
import { stays, stayTypeLabels } from "@/data/stays";
import { featuredTestimonial } from "@/data/testimonials";
import { img } from "@/data/images";
import type { PostMeta } from "@/data/types";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Notch } from "@/components/ui/Notch";
import { CardImage } from "@/components/ui/CardImage";
import { SafariRow } from "@/components/cards/SafariRow";
import { PersonCard } from "@/components/cards/PersonCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { PostCard } from "@/components/cards/PostCard";
import { PlaceholderBadge } from "@/components/cards/TestimonialCard";
import { Carousel } from "@/components/ui/Carousel";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { ChatIcon, MapIcon, PlusIcon, ScaleIcon, UserIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { KenyaDotMap } from "./KenyaDotMap";

/* 2 · Statistic: destination families with full-bleed hairlines (reference "statistic"). */
export function DestinationStats() {
  const groups = [
    { title: "Safari parks & conservancies", kinds: ["safari"], image: img("lion-pride"), href: "/destinations#safari" },
    { title: "Highlands & Nairobi", kinds: ["mountain", "city"], image: img("mount-kenya"), href: "/destinations#highlands" },
    { title: "The Swahili coast", kinds: ["coast"], image: img("lamu-dhow"), href: "/destinations#coast" },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title={
            <>
              From savanna to the sea,
              <br className="max-sm:hidden" /> fourteen places we
              <br className="max-sm:hidden" /> know by heart
            </>
          }
        />
      </div>
      <div className="mt-14 border-y border-line">
        <RevealGroup className="container-x grid md:grid-cols-3">
          {groups.map((g, i) => {
            const count = destinations.filter((d) => (g.kinds as string[]).includes(d.kind)).length;
            return (
              <RevealItem key={g.title} className={i < 2 ? "border-line max-md:border-b md:border-r" : ""}>
                <Link href={g.href} className="group flex h-full flex-col gap-6 py-8 md:px-6 md:first:pl-0">
                  <p className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-xl font-semibold text-charcoal">{g.title}</span>
                    <span className="text-stone">/ {count} destinations</span>
                  </p>
                  <CardImage image={g.image} sizes="(min-width: 768px) 30vw, 100vw" className="aspect-[4/3]" />
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

/* 3 · About: portrait visual + brand story + two stat cards. */
export function AboutSection() {
  const visual = img("maasai-culture");
  return (
    <section className="section-y pt-0">
      <div className="container-x">
        <SectionHeading
          eyebrow="About us"
          title={
            <>
              Not just a trip.
              <br className="max-sm:hidden" /> A journey looked after.
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] md:col-span-5 md:aspect-auto md:min-h-[32rem]">
            <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <div className="flex flex-col justify-between gap-10 md:col-span-7 md:pl-[4%]">
            <Reveal>
              <p className="text-lead text-charcoal">
                <strong className="font-medium text-gold-dark">“Safari njema”</strong> is what Kenyans say as they send you on
                your way: have a good journey. We built our company around that send-off: a warm welcome to Kenya, a trip shaped
                entirely around you, and one specialist who looks after every detail until you are home.
              </p>
              <ButtonLink href="/about" variant="outline" className="mt-8">
                Our story
              </ButtonLink>
            </Reveal>
            <RevealGroup className="grid gap-2 sm:grid-cols-2">
              <RevealItem className="flex min-h-[18rem] flex-col justify-between gap-8 rounded-[var(--radius-card)] bg-paper p-6">
                <div>
                  <p className="text-h3 font-medium tracking-[-0.03em] text-charcoal">
                    <CountUp to={site.stats.yearsExperience} suffix="+" />
                  </p>
                  <p className="mt-2 text-lg text-charcoal">
                    years planning
                    <br /> Kenya journeys
                  </p>
                </div>
                <p className="text-sm text-stone">One dedicated specialist, from your first message to the day you fly home.</p>
              </RevealItem>
              <RevealItem className="flex min-h-[18rem] flex-col justify-between gap-8 rounded-[var(--radius-card)] bg-paper p-6">
                <div>
                  <p className="text-h3 font-medium tracking-[-0.03em] text-charcoal">
                    <CountUp to={site.stats.partnerCamps} suffix="+" />
                  </p>
                  <p className="mt-2 text-lg text-charcoal">
                    partner camps
                    <br /> &amp; lodges, personally visited
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label="Memberships (placeholders)">
                  {site.memberships.slice(0, 3).map((m) => (
                    <li key={m.short} title={m.label} className="grid h-10 place-items-center rounded-full border border-dashed border-charcoal/25 px-4 text-xs font-semibold tracking-widest text-stone">
                      {m.short}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 4 · Featured safaris: stacked wide cards (reference "featured retreats"). */
export function FeaturedSafaris() {
  const featured = safaris.filter((s) => s.featured).slice(0, 4);
  return (
    <section id="safaris" className="section-y scroll-mt-20 bg-sand/50">
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="Signature safaris"
          title={
            <>
              Journeys to
              <br className="max-sm:hidden" /> start from
            </>
          }
          intro="Every itinerary is a starting point. Your specialist reshapes it around your dates, pace and budget, with park fees and flights itemised."
          action={<ButtonLink href="/safaris" variant="outline">See all safaris</ButtonLink>}
        />
        <RevealGroup className="mt-14 flex flex-col gap-4">
          {featured.map((s) => (
            <RevealItem key={s.slug}>
              <SafariRow safari={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* 5 · Combine: "+ Safari + Stays + Beach" and four numbered steps (reference "combine"). */
const steps = [
  { title: ["Choose your", "safari"] },
  { title: ["Match camps", "& lodges"] },
  { title: ["Add flights", "& extras"] },
  { title: ["Travel, looked", "after 24/7"] },
];

export function CombineSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <h2 className="text-h2">One journey, one specialist</h2>
          <p className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-h3 font-medium tracking-[-0.03em] text-charcoal">
            {["Safari", "Stays", "Beach"].map((w) => (
              <span key={w}>
                <span className="text-charcoal/30">+</span>
                {w}
              </span>
            ))}
          </p>
        </Reveal>
        <RevealGroup className="mt-14 grid gap-2 md:grid-cols-3 md:grid-rows-2">
          <RevealItem className="flex flex-col justify-between gap-8 rounded-[var(--radius-card)] bg-acacia p-6 text-cream md:row-span-2 md:p-8">
            <p className="text-lead text-white">
              Combine game drives, the right camps, light-aircraft flights, transfers and a beach finish into one seamless
              itinerary, with one tailor-made, itemised quote.
            </p>
            <div>
              <StartPlanningButton variant="light" />
            </div>
          </RevealItem>
          {steps.map((s, i) => (
            <RevealItem key={s.title.join(" ")} className="relative flex min-h-[15rem] flex-col justify-between rounded-[var(--radius-card)] bg-paper p-6">
              <div className="flex items-start justify-between">
                <span className="text-h3 font-medium tracking-[-0.03em] text-charcoal">0{i + 1}</span>
                <span className="text-[0.8125rem] text-stone">Step</span>
              </div>
              <p className="text-lg text-charcoal">
                {s.title[0]}
                <br />
                {s.title[1]}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* 6 · Explore by destination: glowing dot map + destination cards. */
export function DestinationMap() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <SectionHeading
          eyebrow="Map"
          title="Explore Kenya by destination"
          intro="Big-cat country in the Mara, elephants beneath Kilimanjaro, the wild north, rhino sanctuaries in Laikipia and a coastline of coral and dhows."
        />
        <div className="mt-14 grid items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <div className="mx-auto max-w-[40rem]">
              <KenyaDotMap />
            </div>
          </Reveal>
          <RevealGroup className="flex flex-col divide-y divide-line border-y border-line md:col-span-6">
            {destinations.slice(0, 7).map((d) => (
              <RevealItem key={d.slug}>
                <Link href={`/destinations/${d.slug}`} className="group flex items-baseline justify-between gap-4 py-4">
                  <span className="text-lg font-medium text-charcoal group-hover:text-acacia">{d.name}</span>
                  <span className="text-right text-sm text-stone">/ {d.tagline}</span>
                </Link>
              </RevealItem>
            ))}
            <RevealItem className="pt-6">
              <ButtonLink href="/destinations" variant="outline">
                All 14 destinations
              </ButtonLink>
            </RevealItem>
          </RevealGroup>
        </div>
        <div className="mt-20">
          <Carousel label="Destinations">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

/* 7 · Experiences: card collage + "+" list (reference "practitioners"). */
export function ExperiencesSection() {
  const collage = ["great-migration", "hot-air-balloon-safaris", "walking-safaris", "lamu-dhow-sailing"]
    .map((s) => experiences.find((e) => e.slug === s))
    .filter((e) => !!e);
  const plus = [
    { t: "The Great Migration", d: "River crossings in the Mara, roughly July to October." },
    { t: "On foot, on horseback, by balloon", d: "See the bush at the pace of your own footsteps, or from the sky at dawn." },
    { t: "Culture & community", d: "Time with Maasai and Samburu hosts, on their land and on their terms." },
  ];
  return (
    <section className="section-y">
      <div className="container-x grid gap-14 md:grid-cols-12">
        <RevealGroup className="grid grid-cols-2 gap-2 md:col-span-6">
          {collage.map((e, i) => (
            <RevealItem key={e.slug} className={i % 2 ? "md:translate-y-12" : ""}>
              <PersonCard
                href={`/experiences/${e.slug}`}
                image={e.hero}
                title={e.name}
                subtitle={e.season}
                info={<p className="line-clamp-6">{e.summary}</p>}
                footer={<span className="font-medium">Discover →</span>}
                sizes="(min-width: 768px) 25vw, 50vw"
                compact
              />
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="flex flex-col gap-12 self-start md:sticky md:top-28 md:col-span-6 md:pl-[6%]">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow>Experiences</Eyebrow>
            <h2 className="text-h2">
              Fifteen ways
              <br className="max-sm:hidden" /> to make it yours
            </h2>
          </Reveal>
          <RevealGroup className="flex flex-col gap-8">
            {plus.map((p) => (
              <RevealItem key={p.t} className="flex gap-4">
                <PlusIcon className="mt-1 h-5 w-5 shrink-0 text-gold-dark" />
                <div>
                  <p className="text-lg font-medium text-charcoal">{p.t}</p>
                  <p className="mt-1 text-stone">{p.d}</p>
                </div>
              </RevealItem>
            ))}
            <RevealItem>
              <p className="text-lead text-charcoal">
                Rhino tracking, photographic safaris, honeymoons, family trips and gorilla extensions to Rwanda or Uganda, all
                woven into one journey.
              </p>
              <ButtonLink href="/experiences" variant="outline" className="mt-8">
                All experiences
              </ButtonLink>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* 8 · Why us: four numbered cards (reference "how it works"); carries the trust points. */
const why = [
  { icon: UserIcon, t: "One dedicated specialist", d: "The person who plans your trip is the person you message, start to finish. No hand-offs." },
  { icon: ScaleIcon, t: "Fair, transparent pricing", d: "Clear, itemised quotes with park fees and flights included. No hidden extras." },
  { icon: ChatIcon, t: "24/7 WhatsApp support", d: "A real person on the end of the line while you are travelling." },
  { icon: MapIcon, t: `${site.stats.parksCovered}+ parks & regions`, d: "From the Mara to Samburu, Laikipia, Tsavo and the coast." },
];

export function WhyUs({ tone = "paper" }: { tone?: "paper" | "sand" }) {
  return (
    <section className={tone === "sand" ? "section-y bg-sand/50" : "section-y bg-paper"}>
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="Why Safari Njema"
          title={
            <>
              How we look
              <br className="max-sm:hidden" /> after you
            </>
          }
          intro="A small Nairobi team who have slept in the camps we recommend, driven the roads and flown the bush strips."
        />
        <RevealGroup className="mt-14 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(({ icon: Icon, t, d }, i) => (
            <RevealItem key={t} className="flex min-h-[12rem] flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-cream p-6 md:min-h-[19rem]">
              <div className="flex items-start justify-between">
                <Icon className="h-7 w-7 text-gold-dark" />
                <span className="text-sm text-stone">0{i + 1}</span>
              </div>
              <div>
                <p className="font-medium text-charcoal">{t}</p>
                <p className="mt-2 text-sm text-stone">{d}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* 9 · Stays: portrait cards with hover info. */
export function StaysSection() {
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeading
          eyebrow="Stays"
          title={
            <>
              Camps, lodges and houses
              <br className="max-sm:hidden" /> we know by heart
            </>
          }
          intro="Canvas under the stars, conservancy lodges facing Mount Kenya and barefoot villas on the Indian Ocean."
          action={<ButtonLink href="/stays" variant="outline">All stays</ButtonLink>}
        />
        <RevealGroup className="mt-14 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {stays.slice(0, 4).map((s) => (
            <RevealItem key={s.slug}>
              <StayPersonCard slug={s.slug} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function StayPersonCard({ slug, compact = true }: { slug: string; compact?: boolean }) {
  const s = stays.find((x) => x.slug === slug)!;
  return (
    <PersonCard
      href={`/stays/${s.slug}`}
      image={s.hero}
      title={s.name}
      subtitle={stayTypeLabels[s.type]}
      chip={getDestination(s.destinationSlug)?.name}
      info={<p className="line-clamp-6">{s.summary}</p>}
      footer={<span className="font-medium">View stay →</span>}
      compact={compact}
    />
  );
}

/* 10 · Guest story: featured (placeholder) testimonial. */
export function GuestStory() {
  const t = featuredTestimonial;
  const photo = img("sundowner");
  return (
    <section className="section-y pt-0">
      <div className="container-x grid gap-2 md:grid-cols-12">
        <Reveal className="flex flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-paper p-6 md:col-span-7 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <Eyebrow>Guest stories</Eyebrow>
            <PlaceholderBadge />
          </div>
          <blockquote className="text-h4 tracking-[-0.02em] text-charcoal">“{t.quote}”</blockquote>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="text-sm text-stone">
              <span className="font-medium text-charcoal">{t.name}</span> · {t.from}
              <span className="block">{t.trip}</span>
            </p>
            <ButtonLink href="/testimonials" variant="outline">
              More stories
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-card)] md:col-span-5">
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

/* 11 · Journal. */
export function JournalSection({ posts }: { posts: PostMeta[] }) {
  if (!posts.length) return null;
  return (
    <section className="section-y bg-sand/50">
      <div className="container-x">
        <SectionHeading align="split" eyebrow="Journal" title="Field notes from Kenya" action={<ButtonLink href="/blog" variant="outline">Read the journal</ButtonLink>} />
        <RevealGroup className="mt-14 grid gap-x-2 gap-y-10 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <RevealItem key={p.slug} className="h-full">
              <PostCard post={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* 13 · Final CTA: split image + copy, notched (reference "contact us"). */
export function PlanCta({ title = "Plan your safari", text }: { title?: string; text?: string }) {
  const photo = img("balloon-sunrise");
  return (
    <section className="section-y">
      <div className="container-x grid gap-2 md:grid-cols-2">
        <Reveal className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-card)] md:min-h-[34rem]">
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          <div className="absolute right-0 bottom-0 rounded-tl-[var(--radius-card)] bg-cream py-3 pr-0 pl-5 text-sm font-medium text-charcoal">
            <Notch corner="tl" className="-top-6 right-0" />
            <Notch corner="tl" className="bottom-0 -left-6" />
            Reply within one working day
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-paper p-6 md:p-10">
          <div className="flex flex-col gap-6">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="text-h2">{title}</h2>
            <p className="max-w-md text-lg text-stone">
              {text ??
                "Tell us who is travelling and what you dream of seeing. Your specialist will come back with ideas and honest advice, never a sales pitch."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <ButtonLink href="/plan-your-safari" variant="primary">
              Plan your safari
            </ButtonLink>
            <ButtonLink href={whatsappHref()} variant="outline">
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </span>
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
