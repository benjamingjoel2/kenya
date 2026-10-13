import { faqs } from "@/data/faqs";
import { img } from "@/data/images";
import type { FaqCategory } from "@/data/types";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/sections/FaqList";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Kenya safari FAQ",
  description: "Kenya eTA, park fees, vaccinations and malaria, the Great Migration, conservancies, luggage limits, safety, tipping and what to pack, answered by our specialists.",
  path: "/faq",
});

const categories: { id: FaqCategory; title: string }[] = [
  { id: "before-you-go", title: "Before you go" },
  { id: "health-safety", title: "Health & safety" },
  { id: "planning", title: "Planning your safari" },
  { id: "on-safari", title: "On safari" },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <PageHero
        size="sm"
        image={img("game-drive")}
        eyebrow="FAQ"
        title="Questions, answered"
        intro="The things travellers most often ask us. Can’t find yours? Message your specialist any time."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x flex flex-col gap-20">
          {categories.map((c) => {
            const items = faqs.filter((f) => (f.category ?? "planning") === c.id);
            if (!items.length) return null;
            return (
              <div key={c.id} className="grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <SectionHeading title={c.title} />
                </div>
                <div className="lg:col-span-8">
                  <FaqList faqs={items} schema={false} />
                </div>
              </div>
            );
          })}
          <p className="text-sm text-stone">
            Health and entry information is general guidance only, not medical or legal advice. Requirements change; always check
            official sources and consult a travel health professional.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
