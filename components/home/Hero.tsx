"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/config/site";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

/** Colour of the foreground ground; the copy band below the stage uses it too. */
const GROUND = "#140c07";

/**
 * Layered hero (reference "intro"): photo → shade → giant word → foreground cut-out.
 * The word and the cut-out share one "stage" sized by the cut-out's aspect ratio,
 * so the ridge always overlaps the bottom of the word at every screen width.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const hero = img("mara-golden-hour");

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col overflow-hidden" style={{ backgroundColor: GROUND }}>
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="animate-zoom-out absolute inset-0">
          {site.heroVideo ? (
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={hero.src} aria-hidden>
              <source src={site.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-transparent" />
      </motion.div>

      {/* Stage: grows to fill the space above the copy band; word + cut-out pinned to its bottom. */}
      <div className="relative min-h-[16rem] flex-1 lg:min-h-[100svh]">
        <div className="absolute bottom-0 left-1/2 aspect-[1600/520] w-[230%] -translate-x-1/2 sm:w-full">
          <motion.p
            style={{ y: wordY }}
            aria-hidden
            className="animate-rise absolute inset-x-0 bottom-[50%] text-center sm:bottom-[42%] text-[30vw] leading-[0.8] font-medium tracking-[-0.06em] text-white select-none [animation-delay:100ms] sm:text-[19vw]"
          >
            Kenya
          </motion.p>
          <Image src={site.heroForeground} alt="" fill priority sizes="230vw" className="object-fill" />
        </div>
      </div>

      {/* Copy: its own band below the stage; overlaid on the dark ground from lg up. */}
      <div className="relative bg-[#140c07] lg:absolute lg:inset-x-0 lg:bottom-0 lg:bg-transparent">
        <div className="container-x flex flex-col gap-6 pt-2 pb-24 text-white sm:flex-row sm:items-end sm:justify-between sm:pb-10 lg:pb-8">
          <h1 className="animate-fade-up max-w-[36rem] text-xxl font-normal tracking-[-0.01em] text-white [animation-delay:300ms]">
            <span className="sr-only">Safari Njema: </span>Tailor-made Kenya safaris and beach escapes, planned by one specialist from your
            first message to the day you fly home.
          </h1>
          <div className="animate-fade-up flex shrink-0 flex-wrap gap-2 [animation-delay:400ms] sm:mr-40">
            <StartPlanningButton variant="light" />
            <ButtonLink href="/safaris" variant="outline-light">
              Explore safaris
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
