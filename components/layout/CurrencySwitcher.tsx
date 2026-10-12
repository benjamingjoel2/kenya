"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "./CurrencyProvider";
import { cn } from "@/lib/utils";

export function CurrencySwitcher({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`Currency: ${currency}. Change currency`}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors",
          tone === "light"
            ? "border-white/35 text-white hover:border-white"
            : "border-charcoal/20 text-charcoal hover:border-charcoal",
        )}
      >
        <span aria-hidden>{currencies[currency].symbol}</span>
        {currency}
        <svg aria-hidden width="10" height="10" viewBox="0 0 10 10" className={cn("transition-transform", open && "rotate-180")}>
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            aria-label="Select currency"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 w-52 overflow-hidden rounded-md border border-line bg-cream py-1 text-charcoal shadow-xl"
          >
            {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
              <li key={code} role="option" aria-selected={code === currency}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm hover:bg-sand",
                    code === currency && "font-semibold",
                  )}
                >
                  <span>
                    {code} <span className="text-stone">· {currencies[code].label}</span>
                  </span>
                  {code === currency && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
