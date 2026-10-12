import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { BeadDivider } from "./BeadDivider";

export function Eyebrow({ children, tone = "dark", className }: { children: React.ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <p className={cn("eyebrow flex items-center gap-3", tone === "light" ? "text-gold-light" : "text-gold-dark", className)}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  beads,
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  beads?: boolean;
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-5", align === "center" ? "items-center" : "max-w-3xl")}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        {beads && <BeadDivider />}
        <Tag className={cn(Tag === "h1" ? "text-h1" : "text-h2", tone === "light" && "text-white")}>{title}</Tag>
        {intro && <p className={cn("max-w-2xl text-lead", tone === "light" ? "text-white/80" : "text-stone")}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
