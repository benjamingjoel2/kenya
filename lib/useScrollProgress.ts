"use client";

import { useEffect, type RefObject } from "react";

/**
 * Calls `onProgress(p)` (0–1, clamped) on scroll, throttled to one call per frame,
 * without React re-renders. `mode`:
 *  - "exit":  0 when the target's top meets the viewport top, 1 when its bottom does (hero).
 *  - "cross": 0 when the target's top enters at the bottom, 1 when its bottom leaves at the top.
 * Skipped entirely when the user prefers reduced motion.
 */
export function useScrollProgress(target: RefObject<HTMLElement | null>, mode: "exit" | "cross", onProgress: (p: number) => void) {
  useEffect(() => {
    const el = target.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = mode === "exit" ? -r.top / r.height : (vh - r.top) / (vh + r.height);
      onProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [target, mode, onProgress]);
}
