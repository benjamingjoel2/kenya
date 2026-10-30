/**
 * Single source of truth for brand, contact details and navigation.
 */

export const site = {
  name: "Safari Njema",
  tagline: "Tailor-made Kenya safaris & beach escapes",
  description:
    "Tailor-made Kenya safaris and beach escapes, planned by one dedicated specialist from your first message to the day you fly home.",
  signOff: "Safari njema.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://safarinjema.tourground.com",
  locale: "en_GB",

  contact: {
    email: "safarinjema@tourground.com",
    /** Business address: Spaces Eaton Place (IWG premium coworking), Gigiri, Nairobi. */
    address: "Spaces, Eaton Place, 2nd Floor, United Nations Crescent, Gigiri, Nairobi, Kenya",
    postalAddress: {
      streetAddress: "Eaton Place, 2nd Floor, United Nations Crescent, Gigiri",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    hours: "Specialists online Mon–Sat, 8am–7pm EAT",
  },

  stats: {
    yearsExperience: 15,
    partnerCamps: 60,
    parksCovered: 20,
  },

  /** Optional hero background video (mp4). Leave empty to use the hero image. */
  heroVideo: "",
  /**
   * Foreground cut-out layered in front of the giant hero word. Replace with a
   * transparent PNG cut from your hero photo (e.g. the acacia + ridge line).
   */
  heroForeground: "/hero/foreground.svg",
} as const;

export const nav = [
  { label: "Destinations", href: "/destinations" },
  { label: "Safaris", href: "/safaris" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  explore: [
    { label: "Destinations", href: "/destinations" },
    { label: "Safaris", href: "/safaris" },
    { label: "Experiences", href: "/experiences" },
    { label: "Stays", href: "/stays" },
    { label: "Plan your safari", href: "/plan-your-safari" },
  ],
  company: [
    { label: "About us", href: "/about" },
    { label: "Conservation", href: "/conservation" },
    { label: "Journal", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy" },
    { label: "Booking terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const mailtoHref = `mailto:${site.contact.email}`;
