import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { img } from "@/data/images";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { PageHero } from "@/components/sections/PageHero";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/Reveal";
import { PostCard } from "@/components/cards/PostCard";
import { Newsletter } from "@/components/sections/Newsletter";
import { ArrowIcon } from "@/components/ui/Icons";

export const metadata = buildMetadata({
  title: "Journal: Kenya safari advice & stories",
  description: "Practical, honest advice from our Kenya safari specialists: when to go, where to stay, the Great Migration, conservancies and bush & beach planning.",
  path: "/blog",
});

export default function BlogPage() {
  const [lead, ...rest] = getAllPosts();
  return (
    <>
      <PageHero
        size="sm"
        image={img("binoculars")}
        eyebrow="Journal"
        title="Field notes from Kenya"
        intro="Honest advice from people who spend their lives planning safaris."
        crumbs={[{ label: "Home", href: "/" }, { label: "Journal" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x">
          {lead && (
            <Reveal>
              <Link href={`/blog/${lead.slug}`} className="group grid items-center gap-10 lg:grid-cols-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)]">
                  <Image src={lead.cover.src} alt={lead.cover.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                </div>
                <div>
                  <p className="eyebrow text-gold-dark">Latest · {formatDate(lead.date)}</p>
                  <h2 className="mt-5 text-h2 transition-colors group-hover:text-acacia">{lead.title}</h2>
                  <p className="mt-5 text-lead text-stone">{lead.excerpt}</p>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold text-charcoal">
                    Read article <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
          <RevealGroup className="mt-24 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <RevealItem key={p.slug}>
                <PostCard post={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
