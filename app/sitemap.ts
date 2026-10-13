import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { safaris } from "@/data/safaris";
import { stays } from "@/data/stays";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => new URL(p, site.url).toString();
  const statics = ["/", "/destinations", "/safaris", "/experiences", "/stays", "/about", "/conservation", "/testimonials", "/faq", "/contact", "/plan-your-safari", "/blog", "/privacy", "/terms", "/cookies"];
  return [
    ...statics.map((p) => ({ url: u(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...destinations.map((d) => ({ url: u(`/destinations/${d.slug}`), priority: 0.8 })),
    ...safaris.map((s) => ({ url: u(`/safaris/${s.slug}`), priority: 0.8 })),
    ...experiences.map((e) => ({ url: u(`/experiences/${e.slug}`), priority: 0.6 })),
    ...stays.map((s) => ({ url: u(`/stays/${s.slug}`), priority: 0.6 })),
    ...getAllPosts().map((p) => ({ url: u(`/blog/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ];
}
