import Link from "next/link";
import { cn } from "@/lib/utils";
import { SparkIcon } from "./Icons";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "light" | "link";

const base =
  "group/btn inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[0.875rem] leading-none font-medium whitespace-nowrap transition-colors duration-300 ease-[var(--ease-premium)] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-cream hover:bg-acacia",
  gold: "bg-gold text-charcoal hover:bg-gold-light",
  outline: "bg-charcoal/[0.06] text-charcoal hover:bg-charcoal/[0.12]",
  "outline-light": "bg-white/15 text-white backdrop-blur-md hover:bg-white/25",
  light: "bg-cream text-charcoal hover:bg-white",
  link: "h-auto px-0 text-charcoal underline-offset-4 hover:underline",
};

/** Every non-link button carries the spark glyph, as in the reference. */
type Common = { variant?: Variant; className?: string; children: React.ReactNode };

function Inner({ children, icon }: { children: React.ReactNode; icon: boolean }) {
  return (
    <>
      <span>{children}</span>
      {icon && <SparkIcon className="h-2 w-2 shrink-0 transition-transform duration-500 ease-[var(--ease-premium)] group-hover/btn:rotate-90" />}
    </>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: Common & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = cn(base, variants[variant], className);
  const inner = <Inner icon={variant !== "link"}>{children}</Inner>;
  if (external)
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  type = "button",
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      <Inner icon={variant !== "link"}>{children}</Inner>
    </button>
  );
}
