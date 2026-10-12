"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/config/site";
import { img } from "@/data/images";
import { ButtonLink } from "@/components/ui/Button";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const hero = img("mara-golden-hour");

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-white">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }} className="absolute inset-0">
          {site.heroVideo ? (
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={hero.src} aria-hidden>
              <source src={site.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
          )}
        </motion.div>
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30" />
      </motion.div>

      <motion.div style={{ opacity: fade }} className="container-x relative z-10 pt-40 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="eyebrow text-gold-light"
        >
          Tailor-made Kenya safaris &amp; beach escapes
        </motion.p>
        <h1 className="mt-6 max-w-5xl text-display text-white">
          {["Kenya,", "planned", "around", "you."].map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.4 + i * 0.09, ease }}
              >
                {i === 3 ? <em className="italic text-gold-light">{w}</em> : w}
                {i < 3 && " "}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease }}
          className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-xl text-lead text-white/85">
            From the Masai Mara at golden hour to the quiet white sands of Diani, one dedicated specialist designs your safari
            around you, and looks after every detail from your first message to the day you fly home.
          </p>
          <div className="flex flex-wrap gap-3">
            <StartPlanningButton variant="gold" arrow />
            <ButtonLink href="/safaris" variant="outline-light">
              Explore safaris
            </ButtonLink>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 overflow-hidden bg-white/20 md:block"
      >
        <motion.span
          className="block h-1/2 w-full bg-white"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
