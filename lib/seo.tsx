import type { Metadata } from "next";
import { site } from "@/config/site";

const SUFFIX = ` · ${site.name}`;
const MAX_TITLE = 60;
const MAX_DESC = 158;

/** Trim to a word boundary so search snippets aren't cut mid-word. */
function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:–—-]+$/, "")}…`;
}

/**
 * Per-page metadata: title (brand suffix only when it fits ~60 chars), clamped
 * description, canonical URL, Open Graph + Twitter cards with a fallback image,
 * and optional noindex for placeholder pages.
 */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  noindex,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
}): Metadata {
  const url = new URL(path, site.url).toString();
  const desc = clamp(description, MAX_DESC);
  const fullTitle = title ? (title.length + SUFFIX.length <= MAX_TITLE ? `${title}${SUFFIX}` : title) : `${site.name} · ${site.tagline}`;
  const images = [image ? { url: image, width: 1200, height: 630 } : { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }];
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images,
      ...(type === "article" && publishedTime ? { publishedTime, authors: [site.name] } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: images.map((i) => i.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

/** BreadcrumbList structured data for a trail of { label, href }. */
export function breadcrumbLd(crumbs: { label: string; href?: string }[], currentPath?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href || (i === crumbs.length - 1 && currentPath) ? { item: new URL(c.href ?? currentPath!, site.url).toString() } : {}),
    })),
  };
}
