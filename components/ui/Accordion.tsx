"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "./Icons";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: React.ReactNode };

export function Accordion({ items, className }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3 className="font-sans text-base tracking-normal">
              <button
                type="button"
                id={`${id}-h-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-[-0.01em] text-charcoal md:text-xl"
              >
                {item.q}
                <PlusIcon className={cn("h-5 w-5 shrink-0 transition-transform duration-300", isOpen && "rotate-45")} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${id}-p-${i}`}
                  role="region"
                  aria-labelledby={`${id}-h-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="max-w-3xl pb-7 text-stone">{item.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
