"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";
import { useScrollProgress } from "@/lib/useScrollProgress";
import type { Img } from "@/data/types";
import { cn } from "@/lib/utils";

/** Full-bleed image band with gentle parallax. */
export function ParallaxBand({ image, children, className }: { image: Img; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const onProgress = useCallback((p: number) => {
    if (layer.current) layer.current.style.transform = `translateY(${(p * 24 - 12).toFixed(2)}%)`;
  }, []);
  useScrollProgress(ref, "cross", onProgress);
  return (
    <section ref={ref} className="px-2 md:px-4">
      <div className={cn("relative isolate overflow-hidden rounded-[var(--radius-card)] bg-charcoal text-white", className)}>
        <div ref={layer} style={{ transform: "translateY(-12%)" }} className="absolute -inset-y-[14%] inset-x-0 -z-10">
          <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
          <div aria-hidden className="absolute inset-0 bg-black/45" />
        </div>
        {children}
      </div>
    </section>
  );
}
