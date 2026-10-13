"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { nav, site, whatsappHref } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "@/components/ui/Icons";
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
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[60] flex flex-col bg-cream text-charcoal"
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <Logo />
        <button type="button" onClick={onClose} aria-label="Close menu" className="relative grid h-11 w-11 place-items-center rounded-full bg-charcoal/[0.06]">
          <span className="absolute h-[1.5px] w-5 rotate-45 bg-charcoal" />
          <span className="absolute h-[1.5px] w-5 -rotate-45 bg-charcoal" />
        </button>
      </div>
      <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto pt-8">
        <ul className="flex flex-col gap-2">
          {nav.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={item.href} onClick={onClose} className="block py-1 text-h3 font-medium tracking-[-0.03em]">
                <span className="text-stone/60">+</span>
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="container-x flex flex-col gap-4 py-6">
        <div className="flex items-center justify-between gap-3">
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-stone">
            <WhatsAppIcon className="h-5 w-5" /> {site.contact.whatsappDisplay}
          </a>
        </div>
        <div onClick={onClose}>
          <StartPlanningButton variant="primary" className="w-full" />
        </div>
      </div>
    </motion.div>
  );
}
