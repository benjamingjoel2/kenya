"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { MobileMenu } from "./MobileMenu";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";
import { MenuIcon } from "@/components/ui/Icons";

export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 400 && y > prev && !menuOpen);
  });

  useEffect(() => setMenuOpen(false), [pathname]);

  const tone = solid ? "dark" : "light";

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500",
          solid ? "bg-cream/95 shadow-[0_1px_0_rgba(30,28,26,0.08)] backdrop-blur-md" : "bg-gradient-to-b from-black/45 to-transparent",
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo tone={tone} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative py-2 text-[0.9375rem] font-medium transition-colors",
                        tone === "light" ? "text-white/90 hover:text-white" : "text-charcoal/80 hover:text-charcoal",
                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100",
                        active && "after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <CurrencySwitcher tone={tone} className="hidden sm:block" />
            <StartPlanningButton variant={solid ? "primary" : "gold"} className="hidden px-5 py-2.5 md:inline-flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", tone === "light" ? "text-white" : "text-charcoal")}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
