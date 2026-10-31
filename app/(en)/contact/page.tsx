import Image from "next/image";
import { img } from "@/data/images";
import { mailtoHref, site } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Notch } from "@/components/ui/Notch";
import { Breadcrumbs } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Contact us",
  description: "Talk to a Kenya safari specialist by email or through our enquiry form. We reply within one working day.",
  path: "/contact",
  image: img("lamu-dhow").src,
});

/** Split layout (reference contacts page): tall image left, head + form right. */
export default function ContactPage() {
  const photo = img("lamu-dhow");
  return (
    <section className="pt-24 pb-20 md:pt-28 md:pb-28">
      <div className="container-x">
        <Breadcrumbs crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <div className="mt-8 grid gap-2 md:grid-cols-2">
          <div className="animate-fade-up relative min-h-[22rem] overflow-hidden rounded-[var(--radius-card)] md:min-h-[46rem]">
            <Image src={photo.src} alt={photo.alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            <div className="absolute top-0 right-0 rounded-bl-[var(--radius-card)] bg-cream py-3 pr-0 pl-5 text-sm font-medium text-charcoal">
              <Notch corner="bl" className="top-0 -left-6" />
              <Notch corner="bl" className="right-0 -bottom-6" />
              Replies within one working day
            </div>
          </div>
          <div className="animate-fade-up flex flex-col gap-10 rounded-[var(--radius-card)] bg-paper p-6 [animation-delay:120ms] md:p-10">
            <div className="flex flex-col gap-6">
              <Eyebrow>Contact</Eyebrow>
              <h1 className="text-h2">Get in touch</h1>
              <p className="max-w-md text-lg text-stone">A real person who knows Kenya well will read your message and reply within one working day.</p>
            </div>
            <ContactForm />
            <dl className="grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-stone">Email</dt>
                <dd className="mt-1 text-lg text-charcoal">
                  <a href={mailtoHref} className="hover:text-acacia">{site.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt className="text-stone">Office</dt>
                <dd className="mt-1 text-charcoal">{site.contact.address}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-stone">Hours</dt>
                <dd className="mt-1 text-charcoal">{site.contact.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
