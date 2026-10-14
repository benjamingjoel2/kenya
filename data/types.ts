export type Img = { src: string; alt: string };

export type RegionId = "mara" | "amboseli" | "samburu" | "laikipia" | "tsavo" | "rift-valley" | "central" | "nairobi" | "coast";

/** Month-by-month guide, Jan → Dec. */
export type MonthStatus = "migration" | "peak" | "good" | "rains";

export type Faq = { q: string; a: string; category?: FaqCategory };
export type FaqCategory = "before-you-go" | "health-safety" | "on-safari" | "planning";

export interface Destination {
  slug: string;
  name: string;
  region: RegionId;
  kind: "safari" | "coast" | "city" | "mountain";
  tagline: string;
  summary: string;
  overview: string[];
  hero: Img;
  gallery: Img[];
  months: [MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus];
  bestTimeNote: string;
  highlights: string[];
  wildlife: string[];
  /** e.g. "45 min flight from Nairobi" */
  gettingThere: string;
  faqs: Faq[];
}

export interface Experience {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  body: string[];
  hero: Img;
  bestFor: string[];
  season: string;
  destinationSlugs: string[];
}

export type BudgetTier = "value-luxury" | "premium" | "ultra";

export interface ItineraryDay {
  /** "Day 1" or "Days 2–4" */
  day: string;
  title: string;
  body: string;
  stay?: string;
  meals?: string;
}

export interface Safari {
  slug: string;
  title: string;
  nights: number;
  regions: string[];
  destinationSlugs: string[];
  experienceSlugs: string[];
  budget: BudgetTier;
  inclusionLine: string;
  highlights: string[];
  hero: Img;
  summary: string;
  bestTime: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export type StayType = "tented-camp" | "conservancy-lodge" | "beach-villa" | "lamu-house";

export interface Stay {
  slug: string;
  name: string;
  type: StayType;
  destinationSlug: string;
  location: string;
  summary: string;
  body: string[];
  features: string[];
  hero: Img;
  gallery: Img[];
}

export interface Testimonial {
  id: string;
  name: string;
  from: string;
  trip: string;
  quote: string;
  /** All seed testimonials are placeholders until real reviews are collected. */
  placeholder: true;
}

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  cover: Img;
  tags: string[];
  readingTime: string;
  /** Optional shorter <title> for search results (falls back to title). */
  seoTitle?: string;
}
