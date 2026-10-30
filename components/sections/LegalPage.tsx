import Link from "next/link";
import { Breadcrumbs } from "./PageHero";
import { footerNav } from "@/config/site";
import { cn } from "@/lib/utils";

/** Legal template (reference): sticky nav between legal pages + content column. */
export function LegalPage({ title, path, updated, children }: { title: string; path: string; updated: string; children: React.ReactNode }) {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container-x">
        <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
        <h1 className="mt-10 text-h2">{title}</h1>
        <p className="mt-4 text-sm text-stone">Last updated: {updated}</p>
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
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
