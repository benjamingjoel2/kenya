import Link from "next/link";
import type { Img } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";
import { cn } from "@/lib/utils";

/**
 * Portrait card (reference "coach" card): photo with name + role overlaid at the
 * bottom; on hover (pointer devices) an info panel slides up over the photo.
 */
export function PersonCard({
  href,
  image,
  title,
  subtitle,
  chip,
  info,
  footer,
  className,
  compact,
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw",
}: {
  href: string;
  image: Img;
  title: string;
  subtitle?: string;
  chip?: string;
  info?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  /** Hide secondary text on small screens (for 2-up mobile grids). */
  compact?: boolean;
  sizes?: string;
}) {
  return (
    <Link href={href} className={cn("group relative block aspect-[3/4] overflow-hidden rounded-[var(--radius-card)]", className)}>
      <CardImage image={image} sizes={sizes} className="absolute inset-0 rounded-none" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
      {chip && (
        <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3 py-1.5 text-[0.8125rem] font-medium text-charcoal backdrop-blur">
          {chip}
        </span>
      )}
      <div className={cn("absolute inset-x-0 bottom-0 text-white", compact ? "p-4 sm:p-5" : "p-5", " transition-opacity duration-500 group-hover:opacity-0 [@media(hover:none)]:group-hover:opacity-100")}>
        <h3 className={cn("font-medium tracking-[-0.02em] text-white", compact ? "text-base sm:text-xl" : "text-xl")}>{title}</h3>
        {subtitle && <p className={cn("mt-1 text-sm text-white/80", compact && "max-sm:hidden")}>{subtitle}</p>}
        {footer && <div className={cn("mt-3 text-sm text-white", compact && "max-sm:hidden")}>{footer}</div>}
      </div>
      {info && (
        <div className="absolute inset-2 flex translate-y-[105%] flex-col rounded-[calc(var(--radius-card)-0.5rem)] bg-cream p-5 text-charcoal transition-transform duration-500 ease-[var(--ease-premium)] group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:hidden">
          {chip && <span className="self-start rounded-full bg-charcoal/[0.06] px-3 py-1.5 text-[0.8125rem] font-medium">{chip}</span>}
          <p className="mt-4 text-xl font-medium tracking-[-0.02em]">{title}</p>
          {subtitle && <p className="text-sm text-stone">{subtitle}</p>}
          <div className="mt-4 flex-1 overflow-hidden text-sm text-stone">{info}</div>
          {footer && <div className="mt-4 border-t border-line pt-4 text-sm text-charcoal">{footer}</div>}
        </div>
      )}
    </Link>
  );
}
