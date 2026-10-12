"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { nav, site, whatsappHref } from "@/config/site";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { XIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { useFocusTrap } from "@/lib/useFocusTrap";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, onClose);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex flex-col bg-charcoal text-cream"
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo tone="light" />
        <button type="button" onClick={onClose} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full">
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto pt-6">
        <ul className="flex flex-col gap-1">
          {nav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={item.href} onClick={onClose} className="block py-2 font-serif text-4xl text-cream hover:text-gold-light">
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="container-x flex flex-col gap-4 border-t border-white/10 py-6">
        <div className="flex items-center gap-3">
          <CurrencySwitcher tone="light" />
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cream/80">
            <WhatsAppIcon className="h-5 w-5" /> {site.contact.whatsappDisplay}
          </a>
        </div>
        <div onClick={onClose}>
          <StartPlanningButton variant="gold" arrow className="w-full" />
        </div>
      </div>
    </motion.div>
  );
}
