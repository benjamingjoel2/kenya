import Link from "next/link";
import { cn } from "@/lib/utils";

/** Text-based logo placeholder: sun-arc mark + wordmark. */
export function Logo({ tone = "dark", className, size = "md" }: { tone?: "dark" | "light"; className?: string; size?: "md" | "xl" }) {
  return (
    <Link
      href="/"
      aria-label="Safari Njema — home"
      className={cn("group inline-flex items-center gap-2.5", tone === "light" ? "text-white" : "text-charcoal", className)}
    >
      <svg aria-hidden viewBox="0 0 32 32" className={cn("shrink-0", size === "xl" ? "h-12 w-12" : "h-8 w-8")}>
        <path d="M4 22a12 12 0 0124 0" fill="none" stroke="#c8963e" strokeWidth="2" />
        <circle cx="16" cy="22" r="5.5" fill="#c8963e" />
        <path d="M2 25.5h28" stroke="currentColor" strokeWidth="1.6" />
        <path d="M21 25.5v-4.5m-3.5 0h7c0-1.3-1.6-2.3-3.5-2.3s-3.5 1-3.5 2.3z" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </svg>
      <span className={cn("font-serif leading-none tracking-[-0.02em]", size === "xl" ? "text-5xl md:text-7xl" : "text-[1.6rem]")}>
        Safari <em className="italic text-gold">Njema</em>
      </span>
    </Link>
  );
}
