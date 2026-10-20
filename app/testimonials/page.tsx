import { testimonials } from "@/data/testimonials";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({
  title: "Traveller stories",
  description: "What travellers say about planning a tailor-made Kenya safari with Safari Njema: one dedicated specialist, from first message to the day you fly home.",
  path: "/testimonials",
  image: img("bush-dinner").src,
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        size="sm"
        image={img("bush-dinner")}
        eyebrow="Traveller stories"
        title="In their words"
        intro="The reviews below are placeholders that show the layout. They will be replaced with genuine, attributable guest reviews before launch."
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <RevealItem key={t.id}>
                <TestimonialCard t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
