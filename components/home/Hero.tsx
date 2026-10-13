"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/config/site";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

/**
 * Layered hero (reference "intro"): background photo → shade → giant word →
 * foreground cut-out → copy. Layers move at different speeds on scroll.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const wordY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const hero = img("mara-golden-hour");

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal text-white">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-40">
        <div className="animate-zoom-out absolute inset-0">
          {site.heroVideo ? (
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={hero.src} aria-hidden>
              <source src={site.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          )}
        </div>
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-30 bg-gradient-to-b from-black/35 via-black/10 to-black/40" />

      {/* Giant word, partly hidden behind the foreground layer */}
      <motion.div style={{ y: wordY }} className="absolute inset-x-0 bottom-[30%] -z-20 flex justify-center md:bottom-[17%]">
        <h1 className="animate-rise text-mega font-medium tracking-[-0.06em] whitespace-nowrap text-white select-none [animation-delay:100ms]">
          <span className="sr-only">Safari Njema: tailor-made </span>Kenya<span className="sr-only"> safaris and beach escapes</span>
        </h1>
      </motion.div>

      <motion.div style={{ y: fgY }} className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[44%] md:h-[40%]">
        <Image src={site.heroForeground} alt="" fill priority sizes="100vw" className="object-cover object-bottom" />
      </motion.div>

      <div className="container-x relative pb-24 md:pb-14">
        <div className="animate-fade-up flex flex-col gap-6 [animation-delay:350ms]">
          <p className="max-w-[34rem] text-xxl text-white">
            Tailor-made safaris and beach escapes,
            <br className="max-sm:hidden" /> planned by one specialist from your first
            <br className="max-sm:hidden" /> message to the day you fly home.
          </p>
          <div className="flex flex-wrap gap-2">
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
