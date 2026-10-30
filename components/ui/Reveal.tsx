import { cn } from "@/lib/utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Fade-up on scroll into view. Pure CSS plus one shared IntersectionObserver
 * (`RevealObserver` in the root layout), so these render on the server and ship no JS.
 */
export function Reveal({ delay = 0, y = 28, className, style, children, ...rest }: { delay?: number; y?: number } & DivProps) {
  return (
    <div
      data-rv=""
      className={className}
      style={{ ...style, ["--rv-y" as string]: `${y}px`, ...(delay ? { ["--rv-d" as string]: `${delay}s` } : {}) }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Staggers its <RevealItem> children (in document order). */
export function RevealGroup({ children, stagger = 0.08, className, ...rest }: { stagger?: number } & DivProps) {
  return (
    <div data-rv-group={stagger} className={className} {...rest}>
      {children}
    </div>
  );
}

export function RevealItem({ children, className, ...rest }: DivProps) {
  return (
    <div data-rv-item="" className={cn(className)} {...rest}>
      {children}
    </div>
  );
}
