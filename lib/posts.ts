import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { img, type ImageKey } from "@/data/images";
import type { PostMeta } from "@/data/types";

const DIR = path.join(process.cwd(), "content/blog");

type Frontmatter = Omit<PostMeta, "slug" | "cover"> & { coverKey: ImageKey };

function read(slug: string) {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;
  const meta: PostMeta = {
    slug,
    title: fm.title,
    excerpt: fm.excerpt,
    date: fm.date,
    author: fm.author,
    tags: fm.tags ?? [],
    readingTime: fm.readingTime,
    ...(fm.seoTitle ? { seoTitle: fm.seoTitle } : {}),
    cover: img(fm.coverKey),
  };
  return { meta, content };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => read(f.replace(/\.mdx$/, "")).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug) || !fs.existsSync(path.join(DIR, `${slug}.mdx`))) return null;
  return read(slug);
}
