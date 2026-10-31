"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav } from "@/config/site";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { useFocusTrap } from "@/lib/useFocusTrap";

export function MobileMenu({ onClose: close }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);
  const closeRef = useRef(close);
  closeRef.current = close;
  // Play the exit transition before unmounting (instant for reduced-motion users).
  const onClose = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return closeRef.current();
    setClosing(true);
    window.setTimeout(() => closeRef.current(), 350);
  }, []);
  useFocusTrap(ref, onClose);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      ref={ref}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      data-closing={closing ? "" : undefined}
      className="sn-menu fixed inset-0 z-[60] flex flex-col bg-cream text-charcoal"
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
            <li key={item.href} className="sn-menu-item" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
              <Link href={item.href} onClick={onClose} className="block py-1 text-h3 font-medium tracking-[-0.03em]">
                <span className="text-stone/60">+</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="container-x flex flex-col gap-4 py-6">
        <LanguageSwitcher className="text-[0.8125rem]" />
        <div onClick={onClose}>
          <StartPlanningButton variant="primary" className="w-full" />
        </div>
      </div>
    </div>
  );
}
