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
import { Notch } from "@/components/ui/Notch";

/**
 * Header as in the reference: logo floating on the left over the hero, and the
 * navigation in a tab that hangs from the top edge on the right, cut into the
 * page with concave corners. Becomes a solid bar once the page scrolls.
 */
export function Header() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > 500 && y > prev && !menuOpen);
  });

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500",
          solid ? "bg-cream/95 shadow-[0_1px_0_rgba(30,28,26,0.08)] backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container-x relative flex h-[4.5rem] items-center justify-between">
          <Logo tone={pathname === "/" && !solid ? "light" : "dark"} className="relative z-10" />

          {/* Tab */}
          <div className="absolute top-0 right-0 flex h-full items-center">
            <div className={cn("relative flex h-full items-center gap-6 pr-4 pl-6 md:pr-16 lg:gap-8", !solid && "rounded-bl-[var(--radius-card)] bg-cream")}>
              {!solid && (
                <>
                  <Notch corner="bl" className="top-0 -left-6" />
                  <Notch corner="bl" className="right-0 -bottom-6" />
                </>
              )}
              <nav aria-label="Main" className="hidden lg:block">
                <ul className="flex items-center gap-7">
                  {nav.map((item) => {
                    const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={cn("text-[0.875rem] font-medium transition-colors", active ? "text-charcoal" : "text-charcoal/70 hover:text-charcoal")}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <CurrencySwitcher className="hidden sm:block" />
              <StartPlanningButton variant="primary" className="hidden md:inline-flex" />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="group flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-charcoal/[0.06] lg:hidden"
              >
                <span className="block h-[1.5px] w-5 bg-charcoal" />
                <span className="block h-[1.5px] w-5 bg-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  );
}
