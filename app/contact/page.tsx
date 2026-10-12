import { img } from "@/data/images";
import { mailtoHref, site, whatsappHref } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon, ClockIcon } from "@/components/ui/Icons";

export const metadata = buildMetadata({
  title: "Contact us",
  description: "Talk to a Kenya safari specialist by email, phone or WhatsApp. We reply within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  const rows = [
    { icon: MailIcon, label: "Email", value: site.contact.email, href: mailtoHref },
    { icon: PhoneIcon, label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: WhatsAppIcon, label: "WhatsApp", value: site.contact.whatsappDisplay, href: whatsappHref() },
    { icon: PinIcon, label: "Office", value: site.contact.address },
    { icon: ClockIcon, label: "Hours", value: site.contact.hours },
  ];
  return (
    <>
      <PageHero
        size="sm"
        image={img("lamu-dhow")}
        eyebrow="Contact"
        title="Let’s talk Kenya"
        intro="A real person, who knows Kenya well, will read your message and reply within one working day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-h3">Reach us directly</h2>
            <ul className="mt-8 flex flex-col divide-y divide-line border-y border-line">
              {rows.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex gap-4 py-5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  <div>
                    <p className="eyebrow text-stone">{label}</p>
                    {href ? (
                      <a href={href} className="mt-2 block text-charcoal hover:text-acacia" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {value}
                      </a>
                    ) : (
                      <p className="mt-2 text-charcoal">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-[var(--radius-card)] bg-charcoal p-8 text-cream">
              <p className="font-serif text-2xl text-white">Ready to start planning?</p>
              <p className="mt-2 text-cream/75">Our five-step planner helps us come back with better first ideas.</p>
              <ButtonLink href="/plan-your-safari" variant="gold" arrow className="mt-6">
                Plan your safari
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <h2 className="text-h3">Send us a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
