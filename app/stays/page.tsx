import { stays, stayTypeLabels } from "@/data/stays";
import type { StayType } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { PlanCta, StayPersonCard, WhyUs } from "@/components/home/HomeSections";

export const metadata = buildMetadata({
  title: "Safari camps, lodges & beach villas",
  description: "Tented camps, conservancy lodges, beach villas and Lamu houses we know personally, from the Masai Mara to the Kenya coast.",
  path: "/stays",
});

const order: StayType[] = ["tented-camp", "conservancy-lodge", "beach-villa", "lamu-house"];

export default function StaysPage() {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Stays"
        title="Places to rest your head"
        intro="Every camp, lodge and house we suggest is somewhere we have stayed ourselves and would happily send family."
        crumbs={[{ label: "Home", href: "/" }, { label: "Stays" }]}
      />
      <section className="pt-14 pb-20 md:pb-28">
        <div className="container-x flex flex-col gap-20">
          {order.map((t) => {
            const items = stays.filter((s) => s.type === t);
            if (!items.length) return null;
            return (
              <div key={t}>
                <SectionHeading eyebrow="Stay style" title={`${stayTypeLabels[t]}s`} />
                <RevealGroup className="mt-10 grid grid-cols-2 gap-2 lg:grid-cols-4">
                  {items.map((s) => (
                    <RevealItem key={s.slug}>
                      <StayPersonCard slug={s.slug} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </div>
      </section>
      <WhyUs />
      <PlanCta />
    </>
  );
}
