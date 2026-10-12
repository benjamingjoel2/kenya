import Image from "next/image";
import { destinations } from "@/data/destinations";
import { safaris } from "@/data/safaris";
import { experiences } from "@/data/experiences";
import { stays } from "@/data/stays";
import { featuredTestimonial } from "@/data/testimonials";
import { img } from "@/data/images";
import type { PostMeta } from "@/data/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { SafariCard } from "@/components/cards/SafariCard";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { StayCard } from "@/components/cards/StayCard";
import { PostCard } from "@/components/cards/PostCard";
import { PlaceholderBadge } from "@/components/cards/TestimonialCard";
import { cn } from "@/lib/utils";

export function DestinationsSection() {
  return (
    <section className="section-y overflow-hidden bg-sand/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="Destinations"
          title={<>Fourteen corners of Kenya, <em className="italic">one journey</em></>}
          intro="Big-sky savanna, cool northern highlands, flamingo lakes and a coastline of coral and dhows. Mix them the way that suits you."
          action={<ButtonLink href="/destinations" variant="outline" arrow>All destinations</ButtonLink>}
        />
        <div className="mt-14">
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

export function FeaturedSafarisSection() {
  const featured = safaris.filter((s) => s.featured).slice(0, 3);
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Signature safaris"
          title="Journeys to start from"
          intro="Every itinerary is a starting point. Your specialist will reshape it around your dates, pace and budget."
          action={<ButtonLink href="/safaris" variant="outline" arrow>View all safaris</ButtonLink>}
        />
        <RevealGroup className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <RevealItem key={s.slug}>
              <SafariCard safari={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const bentoSlugs = ["great-migration", "hot-air-balloon-safaris", "private-conservancies", "walking-safaris", "rhino-tracking", "bush-and-beach", "maasai-samburu-culture"];
const bentoLayout = ["md:col-span-2 md:row-span-2", "", "", "", "", "md:col-span-2", "md:col-span-2"];

export function ExperiencesSection() {
  const picks = bentoSlugs.map((s) => experiences.find((e) => e.slug === s)).filter((e) => !!e);
  return (
    <section className="section-y bg-charcoal text-cream">
      <div className="container-x">
        <SectionHeading
          tone="light"
          eyebrow="Experiences"
          title={<>Moments that make <em className="italic text-gold-light">a safari yours</em></>}
          intro="Float over the Mara at dawn, walk with Samburu guides, track rhino on foot or sail a dhow into a Lamu sunset."
          action={<ButtonLink href="/experiences" variant="outline-light" arrow>All experiences</ButtonLink>}
        />
        <RevealGroup className="mt-14 grid auto-rows-[22rem] gap-5 md:grid-cols-4">
          {picks.map((e, i) => (
            <RevealItem key={e.slug} className={cn(bentoLayout[i])}>
              <ExperienceCard experience={e} large={i === 0} className="h-full" sizes={bentoLayout[i] ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function StaysSection() {
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Where you'll stay"
          title="Camps, lodges and houses we know by heart"
          intro="Canvas under the stars, conservancy lodges with a view of Mount Kenya, barefoot villas on the Indian Ocean."
          action={<ButtonLink href="/stays" variant="outline" arrow>All stays</ButtonLink>}
        />
        <RevealGroup className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {stays.slice(0, 4).map((s) => (
            <RevealItem key={s.slug}>
              <StayCard stay={s} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

const reasons = [
  { title: "One person, start to finish", text: "Your specialist plans, books and checks in on you. No call centres, no hand-offs." },
  { title: "Built around you", text: "Your pace, your interests, your budget. We never sell an off-the-shelf package." },
  { title: "Looked after on the ground", text: "Meet-and-greets, vetted guides and 24/7 WhatsApp support while you travel." },
];

export function WhyUsSection() {
  const t = featuredTestimonial;
  const photo = img("specialist");
  return (
    <section className="section-y bg-sand/60">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Why Safari Njema"
            beads
            title={<>A journey looked after, <em className="italic">from start to finish</em></>}
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lead text-stone">
              We are a small team of Kenya specialists based in Nairobi. We have slept in the camps we recommend, driven the
              roads and flown the bush strips, and we treat every journey as if a friend were taking it.
            </p>
          </Reveal>
          <RevealGroup className="mt-12 flex flex-col divide-y divide-line border-y border-line">
            {reasons.map((r, i) => (
              <RevealItem key={r.title} className="flex gap-6 py-6">
                <span className="font-serif text-2xl text-gold-dark">0{i + 1}</span>
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-normal">{r.title}</h3>
                  <p className="mt-1 text-stone">{r.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <ButtonLink href="/about" variant="primary" arrow className="mt-10">
              About us
            </ButtonLink>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-8">
          <figure className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-charcoal text-cream">
            <div className="relative aspect-[4/3]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-90" />
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <PlaceholderBadge />
              <blockquote className="mt-6 font-serif text-2xl leading-snug text-cream md:text-[1.75rem]">“{t.quote}”</blockquote>
              <figcaption className="mt-8 text-sm text-cream/70">
                <span className="font-semibold text-cream">{t.name}</span> · {t.from}
                <span className="block">{t.trip}</span>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

export function LatestPostsSection({ posts }: { posts: PostMeta[] }) {
  if (!posts.length) return null;
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <SectionHeading
          eyebrow="Journal"
          title="Field notes from Kenya"
          action={<ButtonLink href="/blog" variant="outline" arrow>Read the journal</ButtonLink>}
        />
        <RevealGroup className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <RevealItem key={p.slug}>
              <PostCard post={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

