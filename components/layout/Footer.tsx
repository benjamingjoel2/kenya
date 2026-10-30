import Image from "next/image";
import Link from "next/link";
import { footerNav, mailtoHref, site } from "@/config/site";
import { img } from "@/data/images";
import { Logo } from "./Logo";
import { Notch } from "@/components/ui/Notch";

const bigLinks = [
  { label: "Destinations", href: "/destinations" },
  { label: "Safaris", href: "/safaris" },
  { label: "Experiences", href: "/experiences" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const bg = img("giraffe-sunset");
  return (
    <footer className="bg-cream p-2 md:p-4">
      <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-charcoal text-white">
        <Image src={bg.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/90" />

        <div className="container-x pt-16 pb-28 md:pt-24">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <Logo tone="light" />
              <p className="mt-6 max-w-xs text-sm text-white/70">
                Tailor-made Kenya safaris and beach escapes, looked after by one dedicated specialist from your first message to
                the day you fly home.
              </p>
            </div>
            <div className="grid gap-14 sm:grid-cols-2 md:col-span-8">
              <ul className="flex flex-col gap-1">
                {bigLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-h3 font-medium tracking-[-0.03em] text-white transition-colors hover:text-gold-light">
                      <span className="text-white/40">+</span>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3 text-xl">
                <li>
                  <a href={mailtoHref} className="hover:text-gold-light">
                    {site.contact.email}
                  </a>
                </li>
                <li className="pt-2 text-sm text-white/60">{site.contact.address}</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-12">
            <div className="grid grid-cols-2 gap-8 md:col-span-6">
              <div>
                <h2 className="mb-4 text-[0.8125rem] font-medium tracking-normal text-white/60">Explore</h2>
                <ul className="flex flex-col gap-2 text-sm">
                  {footerNav.explore.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/85 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-[0.8125rem] font-medium tracking-normal text-white/60">Company</h2>
                <ul className="flex flex-col gap-2 text-sm">
                  {footerNav.company.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-white/85 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-6">
              <h2 className="mb-4 text-[0.8125rem] font-medium tracking-normal text-white/60">Legal</h2>
              <ul className="flex flex-col gap-2 text-sm">
                {footerNav.legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-16 text-h2 font-medium tracking-[-0.03em] text-gold-light md:text-right">{site.signOff}</p>
        </div>

        {/* Bottom bar: a cream tab notched into the image panel. */}
        <div className="absolute bottom-0 left-0 flex max-w-full flex-wrap items-center gap-x-6 gap-y-2 rounded-tr-[var(--radius-card)] bg-cream py-3 pr-6 pl-4 text-[0.8125rem] text-stone md:pl-8">
          <Notch corner="tr" className="-top-6 left-0" />
          <Notch corner="tr" className="bottom-0 -right-6" />
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          {footerNav.legal.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-charcoal">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
