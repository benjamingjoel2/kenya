import { site } from "@/config/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { getAllPosts } from "@/lib/posts";
import { Hero } from "@/components/home/Hero";
import {
  AboutSection,
  CombineSection,
  DestinationMap,
  DestinationStats,
  ExperiencesSection,
  FeaturedSafaris,
  JournalSection,
  PlanCta,
  StaysSection,
  WhyUs,
} from "@/components/home/HomeSections";
import { Newsletter } from "@/components/sections/Newsletter";

export const metadata = buildMetadata({});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            inLanguage: "en-GB",
            description: site.description,
          },
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "@id": `${site.url}/#organization`,
            name: site.name,
            description: site.description,
            url: site.url,
            logo: `${site.url}/icon.svg`,
            image: `${site.url}/opengraph-image`,
            email: site.contact.email,
            address: { "@type": "PostalAddress", ...site.contact.postalAddress },
            areaServed: { "@type": "Country", name: "Kenya" },
            knowsAbout: ["Kenya safaris", "Masai Mara", "Great Migration", "Private conservancies", "Bush and beach holidays"],
            contactPoint: [
              { "@type": "ContactPoint", contactType: "customer service", email: site.contact.email, availableLanguage: ["English", "Swahili"] },
            ],
          },
        ]}
      />
      <Hero />
      <DestinationStats />
      <AboutSection />
      <FeaturedSafaris />
      <CombineSection />
      <DestinationMap />
      <ExperiencesSection />
      <WhyUs />
      <StaysSection />
      <JournalSection posts={getAllPosts()} />
      <Newsletter />
      <PlanCta />
    </>
  );
}
