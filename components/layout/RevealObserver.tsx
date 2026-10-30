"use client";

import { useEffect } from "react";

/**
 * Reveals every [data-rv] / [data-rv-group] element once it scrolls into view
 * (replaces per-element framer-motion observers with one shared observer).
 */
export function RevealObserver() {
  useEffect(() => {
    const show = (el: Element) => {
      if (el.hasAttribute("data-rv-group")) {
        const stagger = Number(el.getAttribute("data-rv-group")) || 0.08;
        let i = 0;
        el.querySelectorAll<HTMLElement>("[data-rv-item]").forEach((item) => {
          if (item.parentElement?.closest("[data-rv-group]") !== el) return;
          item.style.setProperty("--rv-d", `${i++ * stagger}s`);
        });
      }
      el.setAttribute("data-in", "");
    };
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-rv],[data-rv-group]").forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    const scan = () => document.querySelectorAll("[data-rv]:not([data-in]),[data-rv-group]:not([data-in])").forEach((el) => io.observe(el));
    scan();
    let queued = false;
    const mo = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        scan();
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
