/**
 * Single source of truth for brand, contact details, navigation and currencies.
 * Replace the [BRACKETED] placeholders before launch.
 */

export const site = {
  name: "Safari Njema",
  tagline: "Tailor-made Kenya safaris & beach escapes",
  description:
    "Tailor-made Kenya safaris and beach escapes, planned by one dedicated specialist from your first message to the day you fly home.",
  signOff: "Safari njema.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.safarinjema.example",
  locale: "en_GB",

  contact: {
    email: "[EMAIL]",
    phone: "+254 700 000 000",
    phoneHref: "tel:+254700000000",
    /** Digits only, international format, no "+" — used for wa.me links. */
    whatsapp: "[NUMBER]",
    whatsappDisplay: "+254 700 000 000",
    address: "Westlands, Nairobi, Kenya",
    hours: "Specialists online Mon–Sat, 8am–7pm EAT · WhatsApp support 24/7 while you travel",
  },

  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Pinterest", href: "https://pinterest.com/" },
  ],

  /** Membership badge placeholders — swap for real logos once confirmed. */
  memberships: [
    { short: "KATO", label: "Kenya Association of Tour Operators (placeholder)" },
    { short: "KTB", label: "Magical Kenya / Kenya Tourism Board (placeholder)" },
    { short: "EK", label: "Ecotourism Kenya (placeholder)" },
    { short: "KWS", label: "Kenya Wildlife Service partner (placeholder)" },
  ],

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
    { label: "Testimonials", href: "/testimonials" },
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

export const currencies = {
  USD: { symbol: "$", label: "US Dollar", locale: "en-US" },
  EUR: { symbol: "€", label: "Euro", locale: "de-DE" },
  GBP: { symbol: "£", label: "British Pound", locale: "en-GB" },
  AUD: { symbol: "A$", label: "Australian Dollar", locale: "en-AU" },
  CAD: { symbol: "C$", label: "Canadian Dollar", locale: "en-CA" },
  KES: { symbol: "KSh", label: "Kenyan Shilling", locale: "en-KE" },
} as const;

export type CurrencyCode = keyof typeof currencies;
export const baseCurrency: CurrencyCode = "USD";

/**
 * Indicative rates: 1 USD = X. TODO: replace with a live rates source
 * (e.g. fetched daily in a route handler and cached).
 */
export const exchangeRates: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  AUD: 1.52,
  CAD: 1.37,
  KES: 129,
};

export const whatsappHref = (text = "Hello Safari Njema, I'd love help planning a Kenya safari.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailtoHref = `mailto:${site.contact.email}`;
