import Image from "next/image";
import Link from "next/link";
import type { Img } from "@/data/types";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Inner-page hero: full-bleed image, breadcrumbs, eyebrow, title and intro. */
export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  crumbs,
  children,
  size = "md",
}: {
  image: Img;
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <section className={cn("relative isolate flex items-end overflow-hidden bg-charcoal text-white", size === "lg" ? "min-h-[92svh]" : size === "md" ? "min-h-[72svh]" : "min-h-[52svh]")}>
      <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="-z-10 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
      <div className="container-x pt-36 pb-14 md:pb-20">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          {eyebrow && <p className="eyebrow text-gold-light">{eyebrow}</p>}
          <h1 className="mt-5 max-w-5xl text-h1 text-white">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lead text-white/85">{intro}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
