import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/data/types";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[0.8125rem]">
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="text-stone hover:text-charcoal">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-charcoal">
                {c.label}
              </span>
            )}
            {i < crumbs.length - 1 && (
              <span aria-hidden className="text-stone/60">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Inner-page intro: breadcrumbs, eyebrow, large title and intro (left-aligned),
 * then an optional wide rounded photo.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  crumbs,
  children,
  size = "md",
}: {
  image?: Img;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <section className="pt-28 md:pt-32">
      <div className="container-x">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <div className="animate-fade-up mt-10 flex flex-col items-start gap-6 [animation-delay:80ms]">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="max-w-[60rem] text-h1">{title}</h1>
          {intro && <p className="max-w-[46rem] text-lead text-stone">{intro}</p>}
          {children}
        </div>
        {image && size !== "sm" && (
          <div
            className={cn(
              "animate-fade-up relative mt-14 overflow-hidden rounded-[var(--radius-card)] bg-sand [animation-delay:200ms]",
              size === "lg" ? "aspect-[4/3] md:aspect-[21/9]" : "aspect-[4/3] md:aspect-[3/1]",
            )}
          >
            <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
