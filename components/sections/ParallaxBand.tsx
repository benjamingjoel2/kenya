"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Img } from "@/data/types";
import { cn } from "@/lib/utils";

/** Full-bleed image band with gentle parallax. */
export function ParallaxBand({ image, children, className }: { image: Img; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <section ref={ref} className={cn("relative isolate overflow-hidden bg-charcoal text-white", className)}>
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 -z-10">
        <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-black/45" />
      </motion.div>
      {children}
    </section>
  );
}
