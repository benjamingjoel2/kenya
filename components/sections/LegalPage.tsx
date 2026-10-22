import Link from "next/link";
import { Breadcrumbs } from "./PageHero";
import { footerNav } from "@/config/site";
import { cn } from "@/lib/utils";

type LegalStatus = "placeholder" | "draft";

/**
 * Legal template (reference): sticky nav between legal pages + content column.
 * "placeholder" pages are empty templates; "draft" pages have real text that
 * still needs the owners' and a legal adviser's review before launch.
 */
export function LegalPage({
  title,
  path,
  children,
  status = "placeholder",
  updated,
}: {
  title: string;
  path: string;
  children: React.ReactNode;
  status?: LegalStatus;
  updated?: string;
}) {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container-x">
        <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
        <h1 className="mt-10 text-h2">{title}</h1>
        <p className="mt-4 text-sm text-stone">Last updated: {updated ?? "placeholder"}</p>
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <nav aria-label="Legal" className="md:col-span-3">
            <ul className="flex flex-col gap-2 md:sticky md:top-24">
              {footerNav.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={l.href === path ? "page" : undefined}
                    className={cn("text-lg transition-colors", l.href === path ? "font-medium text-charcoal" : "text-stone hover:text-charcoal")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="prose-safari md:col-span-8 md:col-start-5">
            {status === "draft" ? (
              <p className="rounded-[var(--radius-field)] border border-gold bg-sand/60 p-5 text-base">
                <strong>Draft: pending review.</strong> This text describes how the website works today but has not yet been
                reviewed by a qualified legal adviser. Details in [brackets] still need to be completed before launch.
              </p>
            ) : (
              <p>
                <strong>Placeholder.</strong> This page is a template. Replace it with your own text, reviewed by a qualified legal adviser, before launch.
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
