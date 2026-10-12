"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { XIcon } from "@/components/ui/Icons";
import { PlannerForm } from "./PlannerForm";

export function PlannerModal({ onClose }: { onClose: () => void }) {
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
    <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center md:p-6">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />
      <motion.div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Plan your safari"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex max-h-[94svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-xl bg-cream shadow-2xl md:rounded-xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-4 md:px-10">
          <p className="font-serif text-xl text-charcoal">Plan your safari</p>
          <div className="flex items-center gap-4">
            <Link href="/plan-your-safari" onClick={onClose} className="hidden text-sm text-stone underline-offset-4 hover:underline sm:inline">
              Open full page
            </Link>
            <button type="button" onClick={onClose} aria-label="Close planner" className="grid h-10 w-10 place-items-center rounded-full hover:bg-sand">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto px-6 py-8 md:px-10 md:py-10">
          <PlannerForm variant="modal" />
        </div>
      </motion.div>
    </div>
  );
}
