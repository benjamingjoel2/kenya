import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { LogoMark } from "@/components/layout/Logo";

/** Small logo-mark + word label, as used at the top-left of every section. */
export function Eyebrow({ children, tone = "dark", className }: { children: React.ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-2 text-base font-medium", tone === "light" ? "text-white" : "text-charcoal", className)}>
      <LogoMark className="h-5 w-5" />
      {children}
    </p>
  );
}

/**
 * Section head, mirroring the reference:
 *  - "default": eyebrow in a 3/12 column, h2 (+ body-xl intro) in a 9/12 column.
 *  - "split":   h2 on the left half, short blurb + action bottom-aligned on the right half.
 *  - "center":  stacked and centred (used sparingly on inner pages).
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "default",
  tone = "dark",
  as: Tag = "h2",
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "default" | "split" | "center" | "left";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  beads?: boolean;
  className?: string;
  action?: React.ReactNode;
}) {
  const light = tone === "light";
  const titleCls = cn(Tag === "h1" ? "text-h1" : "text-h2", light && "text-white");
  const introCls = cn("text-lead", light ? "text-white/75" : "text-stone");

  if (align === "split")
    return (
      <Reveal className={cn("grid gap-6 md:grid-cols-2 md:items-end md:gap-6", className)}>
        <div className="flex flex-col gap-6">
          {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
          <Tag className={titleCls}>{title}</Tag>
        </div>
        <div className="flex flex-col items-start gap-6 md:pl-[8%]">
          {intro && <p className={cn("text-base", light ? "text-white/70" : "text-stone")}>{intro}</p>}
          {action}
        </div>
      </Reveal>
    );

  if (align === "center")
    return (
      <Reveal className={cn("mx-auto flex max-w-3xl flex-col items-center gap-6 text-center", className)}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <Tag className={titleCls}>{title}</Tag>
        {intro && <p className={introCls}>{intro}</p>}
        {action}
      </Reveal>
    );

  return (
    <Reveal className={cn("grid gap-6 md:grid-cols-12", className)}>
      <div className="md:col-span-3">{eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}</div>
      <div className="flex flex-col items-start gap-6 md:col-span-9">
        <Tag className={titleCls}>{title}</Tag>
        {intro && <p className={cn(introCls, "max-w-[48rem]")}>{intro}</p>}
        {action}
      </div>
    </Reveal>
  );
}
