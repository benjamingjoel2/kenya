import { cn } from "@/lib/utils";

/**
 * Decorative concave corner ("inverted border radius"). Place it against the
 * outside corner of a tab/panel so the panel appears to cut into its neighbour.
 * `corner` = which corner of the notch square the transparent curve is centred on.
 */
export function Notch({ corner, className, color, size }: { corner: "tl" | "tr" | "bl" | "br"; className?: string; color?: string; size?: string }) {
  return (
    <span
      aria-hidden
      data-corner={corner}
      className={cn("notch", className)}
      style={{ ...(color ? ({ "--notch-color": color } as React.CSSProperties) : {}), ...(size ? ({ "--notch": size } as React.CSSProperties) : {}) }}
    />
  );
}
