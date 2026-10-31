"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

/**
 * Full-width header: logo left, navigation centred, actions right.
 * Transparent over the homepage hero; a solid cream bar everywhere else and once scrolled.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = useRef(menuOpen);
  menuOpenRef.current = menuOpen;

  useEffect(() => {
    let prev = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 600 && y > prev && !menuOpenRef.current);
      prev = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const overHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        style={{
          transform: hidden ? "translateY(-100%)" : undefined,
          transition:
            "background-color 500ms cubic-bezier(0.4,0,0.2,1), border-color 500ms cubic-bezier(0.4,0,0.2,1), color 500ms cubic-bezier(0.4,0,0.2,1), transform 350ms cubic-bezier(0.22,1,0.36,1)",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b",
          overHero ? "border-transparent bg-transparent text-white" : "border-charcoal/[0.08] bg-cream/90 text-charcoal backdrop-blur-md",
        )}
      >
        <div className="container-x grid h-[4.5rem] grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Logo tone={overHero ? "light" : "dark"} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex h-10 items-center rounded-full px-4 text-[0.875rem] font-medium transition-colors",
                        overHero
                          ? active
                            ? "bg-white/15 text-white"
                            : "text-white/85 hover:bg-white/10 hover:text-white"
                          : active
                            ? "bg-charcoal/[0.07] text-charcoal"
                            : "text-charcoal/70 hover:bg-charcoal/[0.05] hover:text-charcoal",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <LanguageSwitcher light={overHero} className="mr-3 hidden lg:flex" />
            <StartPlanningButton variant={overHero ? "light" : "primary"} className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden",
                overHero ? "bg-white/15" : "bg-charcoal/[0.06]",
              )}
            >
              <span className={cn("block h-[1.5px] w-5", overHero ? "bg-white" : "bg-charcoal")} />
              <span className={cn("block h-[1.5px] w-5", overHero ? "bg-white" : "bg-charcoal")} />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
