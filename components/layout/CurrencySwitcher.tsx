"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "./CurrencyProvider";
import { cn } from "@/lib/utils";

export function CurrencySwitcher({ tone = "dark", className, placement = "down" }: { tone?: "dark" | "light"; className?: string; placement?: "down" | "up" }) {
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
          "flex h-11 items-center gap-1.5 rounded-full px-4 text-[0.875rem] font-medium transition-colors",
          tone === "light" ? "bg-white/15 text-white hover:bg-white/25" : "bg-charcoal/[0.06] text-charcoal hover:bg-charcoal/[0.12]",
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
            initial={{ opacity: 0, y: placement === "up" ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: placement === "up" ? 6 : -6 }}
            transition={{ duration: 0.18 }}
            className={cn("absolute z-50 w-52", placement === "up" ? "bottom-full left-0 mb-2" : "right-0 mt-2", " overflow-hidden rounded-[var(--radius-field)] border border-line bg-paper py-1 text-charcoal shadow-xl")}
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
