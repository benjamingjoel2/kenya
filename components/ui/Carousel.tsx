"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./Icons";
import { cn } from "@/lib/utils";

/** Scroll-snap carousel with prev/next controls. Items keep native scrolling and keyboard access. */
export function Carousel({ children, label, itemClassName }: { children: React.ReactNode; label: string; itemClassName?: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const item = el.querySelector("li");
    el.scrollBy({ left: dir * ((item?.clientWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label={label}>
      <ul
        ref={track}
        onScroll={update}
        className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-5 px-5 md:-mx-8 md:scroll-px-8 md:px-8"
      >
        {Children.map(children, (child) => (
          <li className={cn("w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[calc(25%-18px)]", itemClassName)}>{child}</li>
        ))}
      </ul>
      <div className="mt-10 flex gap-3">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => go(dir)}
            disabled={dir === -1 ? edges.start : edges.end}
            aria-label={dir === -1 ? "Previous" : "Next"}
            className="grid h-12 w-12 place-items-center rounded-full border border-charcoal/25 text-charcoal transition-colors hover:bg-charcoal hover:text-cream disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowIcon className={cn("h-5 w-5", dir === -1 && "rotate-180")} />
          </button>
        ))}
      </div>
    </div>
  );
}
