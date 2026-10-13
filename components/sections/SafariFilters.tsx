"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BudgetTier, RegionId, Safari } from "@/data/types";
import { SafariRow } from "@/components/cards/SafariRow";
import { cn } from "@/lib/utils";

export const regionLabels: Record<RegionId, string> = {
  mara: "Masai Mara",
  amboseli: "Amboseli",
  samburu: "Samburu",
  laikipia: "Laikipia & Lewa",
  tsavo: "Tsavo",
  "rift-valley": "Rift Valley lakes",
  central: "Mount Kenya & Meru",
  nairobi: "Nairobi",
  coast: "Coast & islands",
};

const durations = [
  { id: "short", label: "Up to 5 nights", test: (n: number) => n <= 5 },
  { id: "mid", label: "6–8 nights", test: (n: number) => n >= 6 && n <= 8 },
  { id: "long", label: "9+ nights", test: (n: number) => n >= 9 },
] as const;

type Item = { safari: Safari; regions: RegionId[] };

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "h-10 rounded-full px-4 text-sm font-medium transition-colors",
        active ? "bg-charcoal text-cream" : "bg-charcoal/[0.06] text-charcoal hover:bg-charcoal/[0.12]",
      )}
    >
      {children}
    </button>
  );
}

export function SafariFilters({ items, budgetLabels }: { items: Item[]; budgetLabels: Record<BudgetTier, string> }) {
  const [region, setRegion] = useState<RegionId | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [budget, setBudget] = useState<BudgetTier | null>(null);

  const regionOptions = useMemo(
    () => (Object.keys(regionLabels) as RegionId[]).filter((r) => items.some((i) => i.regions.includes(r) && r !== "nairobi")),
    [items],
  );

  const results = items.filter(
    (i) =>
      (!region || i.regions.includes(region)) &&
      (!duration || durations.find((d) => d.id === duration)!.test(i.safari.nights)) &&
      (!budget || i.safari.budget === budget),
  );

  const toggle = <T,>(v: T, cur: T | null, set: (x: T | null) => void) => set(cur === v ? null : v);

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-[var(--radius-card)] bg-paper p-6" role="group" aria-label="Filter safaris">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <p className="w-28 shrink-0 text-sm font-semibold text-charcoal">Region</p>
          <div className="flex flex-wrap gap-2">
            {regionOptions.map((r) => (
              <Chip key={r} active={region === r} onClick={() => toggle(r, region, setRegion)}>
                {regionLabels[r]}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <p className="w-28 shrink-0 text-sm font-semibold text-charcoal">Duration</p>
          <div className="flex flex-wrap gap-2">
            {durations.map((d) => (
              <Chip key={d.id} active={duration === d.id} onClick={() => toggle(d.id as string, duration, setDuration)}>
                {d.label}
              </Chip>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <p className="w-28 shrink-0 text-sm font-semibold text-charcoal">Style</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(budgetLabels) as BudgetTier[]).map((b) => (
              <Chip key={b} active={budget === b} onClick={() => toggle(b, budget, setBudget)}>
                {budgetLabels[b]}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <p aria-live="polite" className="text-stone">
          Showing <strong className="text-charcoal">{results.length}</strong> of {items.length} safaris
        </p>
        {(region || duration || budget) && (
          <button
            type="button"
            className="text-sm font-semibold text-charcoal underline underline-offset-4"
            onClick={() => {
              setRegion(null);
              setDuration(null);
              setBudget(null);
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      <motion.ul layout className="mt-8 flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {results.map((i) => (
            <motion.li
              key={i.safari.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <SafariRow safari={i.safari} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {results.length === 0 && (
        <p className="mt-6 rounded-[var(--radius-card)] bg-paper p-8 text-center text-stone">
          No sample itinerary matches all of those, but we build every safari from scratch. Tell us what you have in mind and we’ll design it.
        </p>
      )}
    </div>
  );
}
