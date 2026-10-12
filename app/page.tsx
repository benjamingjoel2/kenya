import { site } from "@/config/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/sections/Hero";
import { TrustRow } from "@/components/sections/TrustRow";
import { BrandIntro } from "@/components/sections/BrandIntro";
import {
  DestinationsSection,
  ExperiencesSection,
  FeaturedSafarisSection,
  LatestPostsSection,
  StaysSection,
  WhyUsSection,
} from "@/components/sections/HomeSections";
import { MigrationBand } from "@/components/sections/MigrationBand";
import { Newsletter } from "@/components/sections/Newsletter";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata = buildMetadata({});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          description: site.description,
          url: site.url,
          telephone: site.contact.phone,
          email: site.contact.email,
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          areaServed: "Kenya",
          sameAs: site.socials.map((s) => s.href),
        }}
      />
      <Hero />
      <TrustRow />
      <BrandIntro />
      <DestinationsSection />
      <FeaturedSafarisSection />
      <ExperiencesSection />
      <MigrationBand />
      <StaysSection />
      <WhyUsSection />
      <LatestPostsSection posts={getAllPosts()} />
      <Newsletter />
      <FinalCta />
    </>
  );
}
