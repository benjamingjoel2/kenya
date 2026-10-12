import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./Icons";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "light" | "link";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 rounded-full text-[0.9375rem] font-medium tracking-[0.01em] transition-all duration-300 ease-[var(--ease-premium)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-cream hover:bg-acacia px-6 py-3.5",
  gold: "bg-gold text-charcoal hover:bg-gold-light px-6 py-3.5",
  outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-cream px-6 py-3.5",
  "outline-light": "border border-white/40 text-white hover:bg-white hover:text-charcoal px-6 py-3.5",
  light: "bg-cream text-charcoal hover:bg-white px-6 py-3.5",
  link: "text-charcoal underline-offset-4 hover:underline px-0 py-1",
};

type Common = { variant?: Variant; arrow?: boolean; className?: string; children: React.ReactNode };

function Inner({ children, arrow }: { children: React.ReactNode; arrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/btn:translate-x-1" />
      )}
    </>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  arrow,
  className,
  children,
  ...rest
}: Common & { href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const cls = cn(base, variants[variant], className);
  if (external)
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        <Inner arrow={arrow}>{children}</Inner>
      </a>
    );
  return (
    <Link href={href} className={cls} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  variant = "primary",
  arrow,
  className,
  children,
  type = "button",
  ...rest
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...rest}>
      <Inner arrow={arrow}>{children}</Inner>
    </button>
  );
}
