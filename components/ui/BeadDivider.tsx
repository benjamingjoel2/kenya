import { cn } from "@/lib/utils";

/** Subtle Maasai-beadwork-inspired divider. Use sparingly. */
export function BeadDivider({ className }: { className?: string }) {
  const colors = ["#b4342a", "#f6f1e8", "#c8963e", "#2a4d7a", "#b4342a", "#3e5b3a", "#c8963e", "#f6f1e8"];
  return (
    <svg aria-hidden className={cn("h-2 w-24", className)} viewBox="0 0 96 8">
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={i * 8} y={0} width={7} height={8} rx={1.5} fill={colors[i % colors.length]} stroke="#1e1c1a" strokeOpacity={0.15} />
      ))}
    </svg>
  );
}
