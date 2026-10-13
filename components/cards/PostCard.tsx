import Link from "next/link";
import type { PostMeta } from "@/data/types";
import { CardImage } from "@/components/ui/CardImage";
import { formatDate } from "@/lib/utils";

export function PostCard({ post, priority }: { post: PostMeta; priority?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col rounded-[var(--radius-card)] bg-paper p-2 pb-6">
      <CardImage image={post.cover} sizes="(min-width: 1024px) 33vw, 100vw" className="aspect-[3/2]" priority={priority} />
      <p className="mt-5 px-3 text-sm text-stone">
        <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
      </p>
      <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] px-3 transition-colors group-hover:text-acacia">{post.title}</h3>
      <p className="mt-3 line-clamp-2 px-3 text-stone">{post.excerpt}</p>
    </Link>
  );
}
