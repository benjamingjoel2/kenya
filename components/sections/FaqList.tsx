import type { Faq } from "@/data/types";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/lib/seo";

export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }}
        />
      )}
      <Accordion items={faqs.map((f) => ({ q: f.q, a: <p>{f.a}</p> }))} />
    </>
  );
}
