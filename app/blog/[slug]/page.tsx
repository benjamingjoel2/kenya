import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/config/site";
import { buildMetadata, JsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/cards/PostCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/sections/FinalCta";
import { Pills } from "@/components/sections/DetailBits";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) return {};
  const m = post.meta;
  return buildMetadata({ title: m.title, description: m.excerpt, path: `/blog/${m.slug}`, image: m.cover.src, type: "article" });
}

const components = {
  a: ({ href = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} target="_blank" rel="noopener noreferrer" {...props} />,
};

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();
  const { meta, content } = post;
  const more = getAllPosts().filter((p) => p.slug !== meta.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: meta.title,
          description: meta.excerpt,
          datePublished: meta.date,
          image: meta.cover.src,
          author: { "@type": "Organization", name: meta.author },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${site.url}/blog/${meta.slug}`,
        }}
      />
      <PageHero
        image={meta.cover}
        eyebrow={`${formatDate(meta.date)} · ${meta.readingTime}`}
        title={meta.title}
        intro={meta.excerpt}
        crumbs={[{ label: "Home", href: "/" }, { label: "Journal", href: "/blog" }, { label: meta.title }]}
      />
      <article className="section-y bg-cream">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-stone">Written by</p>
              <p className="mt-2 font-semibold text-charcoal">{meta.author}</p>
              <div className="mt-6">
                <Pills items={meta.tags} />
              </div>
            </div>
          </aside>
          <div className="prose-safari lg:col-span-8 lg:col-start-5">
            <MDXRemote source={content} components={components} />
          </div>
        </div>
      </article>
      {more.length > 0 && (
        <section className="section-y bg-sand/60">
          <div className="container-x">
            <SectionHeading eyebrow="Keep reading" title="More from the journal" />
            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {more.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalCta />
    </>
  );
}
