import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { img } from "@/data/images";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

/**
 * Offset-card hero: headline and one action on the dark ground, a portrait photo card
 * offset over an acacia colour field beside it. Server-rendered, no scroll JS.
 */
export function Hero() {
  const hero = img("mara-golden-hour");

  return (
    <section className="relative isolate overflow-hidden bg-[#140c07] text-white">
      <div className="container-x grid items-center gap-14 pt-28 pb-20 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pt-32 lg:pb-24">
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="text-label font-medium text-gold-light">{site.name}</p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.04] font-medium tracking-[-0.035em] text-white">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-white/75">{site.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <StartPlanningButton variant="light" />
            <Link href="/safaris" className="text-[0.875rem] font-medium text-white underline decoration-white/40 underline-offset-[6px] hover:decoration-white">
              Explore safaris
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
          {/* Colour field the card sits over, offset to the right and below. */}
          <div aria-hidden className="absolute top-[14%] right-0 -bottom-[8%] left-[34%] rounded-[var(--radius-card)] bg-acacia" />
          <div className="relative aspect-[4/5] w-[72%] max-w-[28rem] overflow-hidden rounded-[var(--radius-media)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] lg:ml-[6%]">
            <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 28rem, 72vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
