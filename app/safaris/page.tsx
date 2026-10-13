import { safaris, budgetLabels } from "@/data/safaris";
import { getDestination } from "@/data/destinations";
import type { RegionId } from "@/data/types";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { SafariFilters } from "@/components/sections/SafariFilters";
import { PlanCta, WhyUs } from "@/components/home/HomeSections";

export const metadata = buildMetadata({
  title: "Kenya safaris & sample itineraries",
  description: "Tailor-made Kenya safari itineraries: Masai Mara, Amboseli, Laikipia, Samburu, bush & beach and gorilla extensions. Filter by region, length and budget.",
  path: "/safaris",
});

export default function SafarisPage() {
  const items = safaris.map((s) => ({
    safari: s,
    regions: [...new Set(s.destinationSlugs.map((d) => getDestination(d)?.region).filter((r): r is RegionId => !!r))],
  }));
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Safaris"
        title="Sample safaris, made to measure"
        intro="Use these as inspiration. Every journey is reshaped around your dates, interests and budget, and priced transparently."
        crumbs={[{ label: "Home", href: "/" }, { label: "Safaris" }]}
      />
      <section className="pt-14 pb-20 md:pb-28">
        <div className="container-x">
          <SafariFilters items={items} budgetLabels={budgetLabels} />
        </div>
      </section>
      <WhyUs />
      <PlanCta title="Don’t see quite the right trip?" text="Most of our travellers start with one of these and end somewhere entirely their own. Tell us what you’re dreaming of." />
    </>
  );
}
