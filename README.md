# Safari Njema: marketing site

*"Safari njema"* is Swahili for "have a good journey". This is the marketing site for Safari Njema: tailor-made Kenya safaris and beach escapes, planned by one dedicated specialist.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · MDX**.

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
config/site.ts        Brand name, contact details, WhatsApp number, socials, nav, hero layers
data/                 Typed content: destinations, experiences, safaris, stays, testimonials, faqs, planner routes
data/images.ts        Central image registry (one line per photo)
content/blog/*.mdx    Journal posts (frontmatter + Markdown)
app/                  Routes (pages generated from /data via generateStaticParams)
components/           layout/ · ui/ · cards/ · sections/ · planner/
app/api/*             plan, newsletter, contact (log payloads; TODOs for email/CRM)
```

Every page is generated from `/data` and `/content`, so moving to a CMS means swapping those modules for API calls. The types in `data/types.ts` are the contract.

## Before launch: placeholders to replace

- **`config/site.ts`**: `[EMAIL]`, `[NUMBER]` (WhatsApp, digits only, international format), phone, address, socials, stats, membership badges.
- **Hero cut-out**: `public/hero/foreground.svg` is a placeholder silhouette layered in front of the giant hero word; replace with a transparent cut-out from your hero photo (`site.heroForeground`).
- **Photos**: every image is an Unsplash placeholder in `data/images.ts`. The photo IDs were not checked, so swap any that fail to load, and ideally use your own photography.
- **Logo**: a text and SVG placeholder in `components/layout/Logo.tsx`.
- **Testimonials**: all are marked as placeholders (`data/testimonials.ts`) and labelled on the site.
- **Stays**: fictional sample properties (`data/stays.ts`).
- **FAQ facts** (eTA, KWS cashless payments, health, tipping guidance): review them with your team.
- **Legal pages** (`/privacy`, `/terms`, `/cookies`) are stubs.
- **Map**: `components/sections/MapPlaceholder.tsx` is a stylised placeholder.
- **API routes**: `app/api/plan`, `newsletter` and `contact` currently `console.log` the payload. Wire them up to email/CRM (see the TODOs).

## Features

- Enquiry-led: no fixed prices anywhere. Every safari, stay and experience leads to the trip planner or WhatsApp for a tailor-made quote.
- Trip planner at `/plan-your-safari`, also available as a modal from any "Start planning" button:
  - five validated steps (react-hook-form + zod)
  - progress saved in localStorage
  - submits to `/api/plan`
- Floating WhatsApp button, newsletter ("The Kenya Safari Guide") with a success state, FAQ accordion.
- SEO:
  - per-page metadata and canonical URLs
  - JSON-LD (TravelAgency, TouristTrip, FAQPage, BlogPosting)
  - `sitemap.xml`, `robots.txt` and a generated OG image
- Accessibility:
  - skip link, landmarks and visible focus states
  - focus-trapped dialogs
  - labelled fields with announced errors
  - `prefers-reduced-motion` support

Safari njema.
