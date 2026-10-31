# Safari Njema: marketing site

*"Safari njema"* is Swahili for "have a good journey". This is the marketing site for Safari Njema: tailor-made Kenya safaris and beach escapes, planned by one dedicated specialist.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · MDX**. Framer Motion is only loaded by the trip planner and the safari filters; scroll reveals, parallax and menus are CSS plus a few lines of `requestAnimationFrame`.

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
```

### Environment

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and OG tags. |
| `NEXT_PUBLIC_IMAGE_PLACEHOLDERS` | Set to `1` to use the local SVG placeholders in `public/placeholders/` instead of Unsplash photos (handy offline or in CI). |

## Where things live

```
config/site.ts        Brand name, contact email, business address, nav, hero layers
data/                 Typed content: destinations, experiences, safaris, stays, faqs, planner routes
data/images.ts        Central image registry (one line per photo)
content/blog/*.mdx    Journal posts (frontmatter + Markdown)
app/                  Routes (pages generated from /data via generateStaticParams)
components/           layout/ · ui/ · cards/ · sections/ · planner/
app/api/*             plan, newsletter, contact (log payloads; TODOs for email/CRM)
```

Every page is generated from `/data` and `/content`, so moving to a CMS means swapping those modules for API calls. The types in `data/types.ts` are the contract.

## Before launch: placeholders to replace

- **`config/site.ts`**: stats (years, partner camps, parks). The email (`safarinjema@tourground.com`) and business address (Spaces, Eaton Place, Gigiri, Nairobi) are set; confirm the coworking arrangement before launch.
- **Hero cut-out**: `public/hero/foreground.svg` is a placeholder silhouette layered in front of the giant hero word; replace with a transparent cut-out from your hero photo (`site.heroForeground`).
- **Photos**: every image is an Unsplash placeholder in `data/images.ts`. The photo IDs were not checked, so swap any that fail to load, and ideally use your own photography.
- **Logo**: a text and SVG placeholder in `components/layout/Logo.tsx`.
- **Stays**: fictional sample properties (`data/stays.ts`). When real partner camps replace them, use images the venue allows (see `IMAGES-NEEDED.md`).
- **FAQ facts** (eTA, KWS cashless payments, health, tipping guidance): review them with your team.
- **Legal pages** (`/privacy`, `/terms`, `/cookies`) are complete drafts; have a lawyer review them before launch.
- **Map**: `components/sections/MapPlaceholder.tsx` is a stylised placeholder.
- **API routes**: `app/api/plan`, `newsletter` and `contact` currently `console.log` the payload. Wire them up to email/CRM (see the TODOs).

## Languages (EN · FR · DE · ES)

English is the source and lives at the root URLs; French, German and Spanish are pre-rendered under `/fr`, `/de`, `/es` with no translation library in the browser.

- `npm run build` / `npm run dev` first run `scripts/i18n.mjs`, which copies `app/(en)` to `app/{fr,de,es}` and `components`, `data`, `config`, `lib` to `i18n/gen/<locale>`, replacing visible English strings with the translations in `i18n/{fr,de,es}.json` and prefixing internal links. Generated folders are git-ignored; the build fails if a string has no translation (`npm run i18n -- --missing` lists them).
- Blog translations live in `content/blog-{fr,de,es}` (same slugs as `content/blog`).
- `components/layout/LanguageSwitcher.tsx` (header and mobile menu) links to the same page in each language; no automatic redirects. `lib/i18n-paths.ts` builds hreflang alternates (used by `lib/seo.tsx` and `app/sitemap.ts`).
- When you add or change English copy, add the translation to all three JSON files.

## Features

- Enquiry-led: no fixed prices anywhere. Every safari, stay and experience leads to the trip planner or the contact form for a tailor-made quote.
- Trip planner at `/plan-your-safari`, also available as a modal from any "Start planning" button:
  - five validated steps (react-hook-form + zod)
  - progress saved in localStorage
  - submits to `/api/plan`
- Newsletter ("The Kenya Safari Guide") with a success state, FAQ accordion. No phone numbers, WhatsApp, social links or testimonials by owner decision.
- SEO:
  - per-page metadata and canonical URLs
  - JSON-LD (TravelAgency, TouristTrip, FAQPage, BlogPosting)
  - `sitemap.xml`, `robots.txt` and a generated OG image
- Accessibility:
  - skip link, landmarks and visible focus states
  - focus-trapped dialogs
  - labelled fields with announced errors
  - `prefers-reduced-motion` support
- Performance: CSS-driven reveals (one shared observer), no animation library on first load, trimmed `next/image` widths, long-lived caching for static assets (`vercel.json`).

Safari njema.
