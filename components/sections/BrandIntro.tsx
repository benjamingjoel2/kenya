import Image from "next/image";
import { img } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { BeadDivider } from "@/components/ui/BeadDivider";
import { ButtonLink } from "@/components/ui/Button";

export function BrandIntro() {
  const a = img("sundowner");
  const b = img("maasai-culture");
  return (
    <section className="section-y bg-cream">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>The meaning of our name</Eyebrow>
            <BeadDivider className="mt-5" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-[1.2] tracking-[-0.015em] text-charcoal">
              <em className="text-gold-dark">“Safari njema”</em> is what Kenyans say as they send you on your way: have a good
              journey. It is a blessing, a farewell and a promise that someone is thinking of you on the road.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lead text-stone">
              We built Safari Njema around that send-off. A warm welcome to Kenya, a journey designed around how you like to
              travel, and one specialist who knows your trip inside out, from the first message to the moment we wave you off.
            </p>
            <ButtonLink href="/about" variant="outline" arrow className="mt-10">
              Our story
            </ButtonLink>
          </Reveal>
        </div>
        <div className="relative lg:col-span-5">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
            <Image src={a.src} alt={a.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal
            delay={0.25}
            className="absolute -bottom-10 -left-6 hidden aspect-square w-44 overflow-hidden rounded-[var(--radius-card)] border-8 border-cream md:block lg:-left-16 lg:w-56"
          >
            <Image src={b.src} alt={b.alt} fill sizes="224px" className="object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
