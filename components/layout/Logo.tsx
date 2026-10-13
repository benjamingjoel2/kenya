import Link from "next/link";
import { cn } from "@/lib/utils";

/** 20×20 brand mark: a sun setting on the horizon. Placeholder until a real logo exists. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={cn("shrink-0", className)}>
      <circle cx="10" cy="12" r="5" fill="#c8963e" />
      <path d="M3 12a7 7 0 0114 0" fill="none" stroke="#c8963e" strokeWidth="1.4" opacity=".55" />
      <rect x="1" y="14.2" width="18" height="1.8" rx=".9" fill="currentColor" />
    </svg>
  );
}

/** Text-based logo placeholder: mark + wordmark. */
export function Logo({ tone = "dark", className, size = "md" }: { tone?: "dark" | "light"; className?: string; size?: "md" | "xl" }) {
  return (
    <Link
      href="/"
      aria-label="Safari Njema — home"
      className={cn("inline-flex items-center gap-2", tone === "light" ? "text-white" : "text-charcoal", className)}
    >
      <LogoMark className={size === "xl" ? "h-9 w-9" : "h-5 w-5"} />
      <span className={cn("font-medium tracking-[-0.02em]", size === "xl" ? "text-[2.5rem]" : "text-[1.0625rem]")}>Safari Njema</span>
    </Link>
  );
}
