import Link from "next/link";
import { footerNav, mailtoHref, site, whatsappHref } from "@/config/site";
import { Logo } from "./Logo";
import { BeadDivider } from "@/components/ui/BeadDivider";
import { ArrowUpRight, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

function Column({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="eyebrow mb-6 font-sans text-gold-light">{title}</h2>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-cream/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-x pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-cream/70">
              Tailor-made Kenya safaris and beach escapes, looked after by one dedicated specialist from your first message to
              the day you fly home.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-cream/85">
              <li>
                <a href={mailtoHref} className="inline-flex items-center gap-3 hover:text-white">
                  <MailIcon className="h-5 w-5 text-gold" /> {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="inline-flex items-center gap-3 hover:text-white">
                  <PhoneIcon className="h-5 w-5 text-gold" /> {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-white">
                  <WhatsAppIcon className="h-5 w-5 text-gold" /> WhatsApp {site.contact.whatsappDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-cream/65">{site.contact.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <Column title="Explore" links={footerNav.explore} />
            <Column title="Company" links={footerNav.company} />
            <div>
              <h2 className="eyebrow mb-6 font-sans text-gold-light">Follow</h2>
              <ul className="flex flex-col gap-3">
                {site.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-cream/75 hover:text-white">
                      {s.label}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-cream/65">Memberships &amp; partners</p>
            <ul className="flex flex-wrap gap-3">
              {site.memberships.map((m) => (
                <li
                  key={m.short}
                  title={m.label}
                  className="grid h-14 min-w-20 place-items-center rounded border border-dashed border-white/25 px-4 text-sm font-semibold tracking-widest text-cream/60"
                >
                  <span className="sr-only">{m.label}</span>
                  <span aria-hidden>{m.short}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-serif text-5xl italic text-gold md:text-7xl">{site.signOff}</p>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-cream/65 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <BeadDivider className="w-16" />
            <p>
              © {year} {site.name}. All rights reserved.
            </p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
