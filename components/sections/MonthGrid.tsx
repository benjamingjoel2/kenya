import type { MonthStatus } from "@/data/types";
import { cn } from "@/lib/utils";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const monthLegend: Record<MonthStatus, { label: string; cls: string }> = {
  migration: { label: "Great Migration", cls: "bg-shuka text-white" },
  peak: { label: "Peak season", cls: "bg-gold text-charcoal" },
  good: { label: "Good", cls: "bg-sand text-charcoal" },
  rains: { label: "Rains", cls: "bg-white text-stone border border-dashed border-stone/40" },
};

/** 12-month best-time-to-visit grid. */
export function MonthGrid({ months, note }: { months: MonthStatus[]; note?: string }) {
  return (
    <div>
      <ol className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-12" aria-label="Month-by-month guide">
        {months.map((m, i) => (
          <li key={MONTHS[i]} className={cn("flex flex-col items-center justify-center gap-1 rounded-[var(--radius-card)] px-1 py-4 text-center", monthLegend[m].cls)}>
            <span className="text-sm font-semibold">{MONTHS[i]}</span>
            <span className="text-[0.6875rem] leading-tight opacity-90">{monthLegend[m].label}</span>
          </li>
        ))}
      </ol>
      <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone" aria-label="Legend">
        {(Object.keys(monthLegend) as MonthStatus[])
          .filter((k) => months.includes(k))
          .map((k) => (
            <li key={k} className="flex items-center gap-2">
              <span aria-hidden className={cn("h-3 w-3 rounded-sm", monthLegend[k].cls)} /> {monthLegend[k].label}
            </li>
          ))}
      </ul>
      {note && <p className="mt-5 max-w-3xl text-stone">{note}</p>}
      <p className="mt-3 text-xs text-stone/80">
        Long rains usually fall around April–May and short rains around November; patterns vary year to year.
      </p>
    </div>
  );
}
