import type { Metadata } from "next";
import { site } from "@/config/site";

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image,
  type = "website",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = new URL(path, site.url).toString();
  const images = image ? [{ url: image, width: 1200, height: 630 }] : undefined;
  return {
    title: title ?? { absolute: `${site.name} · ${site.tagline}` },
    description,
    alternates: { canonical: url },
    openGraph: { title: title ?? site.name, description, url, siteName: site.name, locale: site.locale, type, ...(images && { images }) },
    twitter: { card: "summary_large_image", title: title ?? site.name, description, ...(images && { images: images.map((i) => i.url) }) },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
