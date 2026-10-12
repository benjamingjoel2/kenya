import { img } from "@/data/images";
import { PageHero } from "./PageHero";

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <PageHero size="sm" image={img("mara-plains")} eyebrow="Legal" title={title} crumbs={[{ label: "Home", href: "/" }, { label: title }]} />
      <section className="section-y bg-cream">
        <div className="container-x">
          <div className="prose-safari">
            <p>
              <strong>Placeholder.</strong> This page is a template. Replace it with your own text, reviewed by a qualified legal adviser, before launch.
            </p>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
