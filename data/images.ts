import type { Img } from "./types";

/**
 * Central image registry. Every image on the site is referenced by key, so
 * swapping a photo means editing one line here.
 *
 * `id` is an Unsplash photo id (https://unsplash.com/photos/<id>). These are
 * placeholders — replace with your own photography before launch.
 * `tone` picks a local placeholder (public/placeholders/<tone>.svg) used when
 * NEXT_PUBLIC_IMAGE_PLACEHOLDERS=1, e.g. offline or in CI.
 */
type Tone = "gold" | "dusk" | "green" | "sea" | "earth" | "night";
/**
 * `placeholder: true`: the stock photo previously here showed the wrong place or subject, so the
 * slot shows the branded tone illustration until a correct photo is sourced (see IMAGES-NEEDED.md).
 */
type Entry = { id: string; alt: string; tone: Tone; placeholder?: true };

const registry = {
  // Hero & brand
  "mara-golden-hour": { id: "1516426122078-c23e76319801", alt: "Safari vehicle under acacia trees at sunset", tone: "gold" },
  "mara-plains": { id: "", alt: "Illustration standing in for a photo of the Masai Mara plains (photo to come)", tone: "gold", placeholder: true },
  "migration-crossing": { id: "", alt: "Illustration standing in for a photo of wildebeest crossing the Mara River (photo to come)", tone: "earth", placeholder: true },
  "wildebeest-herd": { id: "", alt: "Illustration standing in for a photo of a column of wildebeest on the savanna (photo to come)", tone: "gold", placeholder: true },
  "balloon-sunrise": { id: "", alt: "Illustration standing in for a photo of a hot-air balloon over the plains at sunrise (photo to come)", tone: "dusk", placeholder: true },
  "lion-pride": { id: "1546182990-dffeafbe841d", alt: "A lion walking through golden grass", tone: "gold" },
  "lion-male": { id: "1614027164847-1b28cfe1df60", alt: "Male lion with a dark mane looking across the plains", tone: "gold" },
  "leopard-tree": { id: "1456926631375-92c8ce872def", alt: "A leopard resting on a fallen branch", tone: "earth" },
  "cheetah": { id: "", alt: "Illustration standing in for a photo of a cheetah on a termite mound (photo to come)", tone: "gold", placeholder: true },
  "elephant-kilimanjaro": { id: "1489392191049-fc10c97e64b6", alt: "Snow-capped Kilimanjaro rising above the plains", tone: "earth" },
  "elephant-family": { id: "1557050543-4d5f4e07ef46", alt: "An elephant on the open plains", tone: "earth" },
  "giraffe-sunset": { id: "1547721064-da6cfb341d50", alt: "A giraffe against the sky", tone: "dusk" },
  "reticulated-giraffe": { id: "", alt: "Illustration standing in for a photo of a reticulated giraffe in Samburu (photo to come)", tone: "earth", placeholder: true },
  "rhino": { id: "1598894000396-bc30e0996899", alt: "White rhino grazing in a conservancy", tone: "green" },
  "zebra": { id: "1501706362039-c06b2d715385", alt: "Close-up of a zebra", tone: "gold" },
  "flamingos": { id: "1497206365907-f5e630693df0", alt: "A flamingo wading in shallow water", tone: "sea" },
  "buffalo": { id: "", alt: "Illustration standing in for a photo of a Cape buffalo (photo to come)", tone: "earth", placeholder: true },
  "game-drive": { id: "1523805009345-7448845a9e53", alt: "A giraffe beside an acacia at sunset", tone: "gold" },
  "walking-safari": { id: "", alt: "Illustration standing in for a photo of a guided walking safari (photo to come)", tone: "earth", placeholder: true },
  "horseback": { id: "", alt: "Illustration standing in for a photo of a horseback safari (photo to come)", tone: "gold", placeholder: true },
  "maasai-culture": { id: "", alt: "Illustration standing in for a photo of Maasai elders in red shuka cloth (photo to come)", tone: "dusk", placeholder: true },
  "samburu-landscape": { id: "", alt: "Illustration standing in for a photo of the Samburu landscape (photo to come)", tone: "earth", placeholder: true },
  "laikipia-plateau": { id: "", alt: "Illustration standing in for a photo of the Laikipia plateau with Mount Kenya (photo to come)", tone: "green", placeholder: true },
  "mount-kenya": { id: "", alt: "Illustration standing in for a photo of the peaks of Mount Kenya (photo to come)", tone: "night", placeholder: true },
  "tsavo-red-earth": { id: "", alt: "Illustration standing in for a photo of red-dusted elephants in Tsavo (photo to come)", tone: "earth", placeholder: true },
  "lake-naivasha": { id: "", alt: "Illustration standing in for a photo of Lake Naivasha (photo to come)", tone: "green", placeholder: true },
  "hells-gate": { id: "", alt: "Illustration standing in for a photo of the cliffs of Hell’s Gate (photo to come)", tone: "earth", placeholder: true },
  "nairobi-skyline": { id: "", alt: "Illustration standing in for a photo of Nairobi National Park with the city skyline (photo to come)", tone: "dusk", placeholder: true },
  "meru-river": { id: "", alt: "Illustration standing in for a photo of a river in Meru National Park (photo to come)", tone: "green", placeholder: true },
  "lewa-landscape": { id: "", alt: "Illustration standing in for a photo of the Lewa grasslands (photo to come)", tone: "green", placeholder: true },

  // Coast
  "diani-beach": { id: "", alt: "Illustration standing in for a photo of Diani Beach (photo to come)", tone: "sea", placeholder: true },
  "lamu-dhow": { id: "", alt: "Illustration standing in for a photo of a dhow off Lamu (photo to come)", tone: "dusk", placeholder: true },
  "lamu-town": { id: "", alt: "Illustration standing in for a photo of a carved doorway in Lamu Old Town (photo to come)", tone: "earth", placeholder: true },
  "watamu-coast": { id: "", alt: "Illustration standing in for a photo of the Watamu coast (photo to come)", tone: "sea", placeholder: true },
  "beach-villa": { id: "", alt: "Illustration standing in for a photo of a beach villa on the Kenyan coast (photo to come)", tone: "sea", placeholder: true },

  // Stays
  "tented-camp": { id: "", alt: "Illustration standing in for a photo of a tented safari camp (photo to come)", tone: "gold", placeholder: true },
  "tent-interior": { id: "", alt: "Illustration standing in for a photo of the interior of a safari tent (photo to come)", tone: "earth", placeholder: true },
  "lodge-pool": { id: "1566073771259-6a8506099945", alt: "Lodge terrace with a pool and loungers", tone: "green" },
  "bush-dinner": { id: "", alt: "Illustration standing in for a photo of a dinner set up in the bush (photo to come)", tone: "night", placeholder: true },
  "sundowner": { id: "", alt: "Illustration standing in for a photo of sundowner drinks on safari (photo to come)", tone: "dusk", placeholder: true },
  "campfire": { id: "1475483768296-6163e08872a1", alt: "Guests gathered around a campfire under the stars", tone: "night" },

  // Extensions & people
  "gorilla": { id: "", alt: "Illustration standing in for a photo of a mountain gorilla (photo to come)", tone: "green", placeholder: true },
  "family-safari": { id: "", alt: "Illustration standing in for a photo of a family on safari (photo to come)", tone: "gold", placeholder: true },
  "honeymoon": { id: "", alt: "Illustration standing in for a photo of a honeymoon deck at sunset (photo to come)", tone: "dusk", placeholder: true },
  "photographer": { id: "", alt: "Illustration standing in for a photo of a photographer on safari (photo to come)", tone: "gold", placeholder: true },
  "specialist": { id: "", alt: "Illustration standing in for a photo of a safari specialist (photo to come)", tone: "earth", placeholder: true },
  "conservation": { id: "", alt: "Illustration standing in for a photo of a ranger on patrol (photo to come)", tone: "green", placeholder: true },
  "binoculars": { id: "", alt: "Illustration standing in for a photo of binoculars on a safari map (photo to come)", tone: "earth", placeholder: true },
} satisfies Record<string, Entry>;

export type ImageKey = keyof typeof registry;

const usePlaceholders = process.env.NEXT_PUBLIC_IMAGE_PLACEHOLDERS === "1";

export function img(key: ImageKey, altOverride?: string): Img {
  const e: Entry = registry[key];
  return {
    src: usePlaceholders || e.placeholder
      ? `/placeholders/${e.tone}.svg`
      : `https://images.unsplash.com/photo-${e.id}?auto=format&fit=crop&w=2400&q=80`,
    alt: e.placeholder ? e.alt : (altOverride ?? e.alt),
    ...(e.placeholder ? { placeholder: true } : {}),
  };
}
