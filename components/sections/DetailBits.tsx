import { CheckIcon, XIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function TickList({ items, tone = "check", className }: { items: string[]; tone?: "check" | "cross"; className?: string }) {
  const Icon = tone === "check" ? CheckIcon : XIcon;
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((i) => (
        <li key={i} className="flex gap-3">
          <Icon className={cn("mt-1 h-4 w-4 shrink-0", tone === "check" ? "text-acacia" : "text-shuka")} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li key={i} className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-charcoal">
          {i}
        </li>
      ))}
    </ul>
  );
}

/** Two-column content block: sticky label on the left, content on the right. */
export function DetailBlock({ title, eyebrow, children, id }: { title: string; eyebrow?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="grid scroll-mt-28 gap-8 border-t border-line py-14 md:py-20 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          {eyebrow && <p className="eyebrow text-gold-dark">{eyebrow}</p>}
          <h2 className="mt-3 text-[clamp(1.75rem,1.4rem+1.2vw,2.5rem)] leading-tight">{title}</h2>
        </div>
      </div>
      <div className="lg:col-span-8">{children}</div>
    </section>
  );
}
