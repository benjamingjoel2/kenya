"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Jump links with scroll-spy: the section in view is highlighted. */
export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <ul className="flex flex-col gap-1.5">
        {items.map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "location" : undefined}
              className={cn("text-lg transition-colors", active === i.id ? "font-medium text-charcoal" : "text-stone hover:text-charcoal")}
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
