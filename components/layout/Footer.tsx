import Image from "next/image";
import Link from "next/link";
import { footerNav, mailtoHref, site } from "@/config/site";
import { img } from "@/data/images";
import { Logo } from "./Logo";
import { StartPlanningButton } from "@/components/planner/StartPlanningButton";

const columns = [
  { title: "Explore", links: footerNav.explore },
  { title: "Company", links: footerNav.company },
  { title: "Legal", links: footerNav.legal },
] as const;

/** Photo band with one planning line, then compact columns and a thin base line. */
export function Footer() {
  const year = new Date().getFullYear();
  const band = img("giraffe-sunset");
  return (
    <footer className="bg-charcoal text-white">
      <div className="relative isolate h-[16rem] overflow-hidden md:h-[20rem]">
        <Image src={band.src} alt={band.alt} fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/20" />
        <div className="container-x flex h-full flex-col items-start justify-center gap-6">
          <p className="max-w-[22ch] text-h4 font-medium tracking-[-0.02em] text-white">{"Tell us what you love and we'll suggest a route."}</p>
          <StartPlanningButton variant="light">Plan your safari</StartPlanningButton>
        </div>
      </div>

      <div className="container-x pt-14 pb-8 md:pt-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm text-white/70">{site.description}</p>
            <a href={mailtoHref} className="mt-6 inline-block text-base text-white hover:text-gold-light">
              {site.contact.email}
            </a>
            <p className="mt-2 max-w-xs text-sm text-white/60">{site.contact.address}</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-[0.8125rem] font-medium tracking-normal text-white/60">{col.title}</h2>
                <ul className="flex flex-col gap-2 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/85 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-14 border-t border-white/15 pt-6 text-[0.8125rem] text-white/60">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
