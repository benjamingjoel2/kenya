import type { Img } from "./types";

/**
 * Central image registry. Every image on the site is referenced by key, so
 * swapping a photo means editing one line here. Every entry is a real
 * photograph of the place or subject its alt text names; there is no drawn
 * artwork anywhere on the site.
 *
 * `id` is an Unsplash photo id (images.unsplash.com/photo-<id>).
 * `file` is a Wikimedia Commons photo downloaded into public/photos; its author
 * and licence are listed in public/photos/CREDITS.md.
 * Replace either with your own photography before launch.
 */
type Entry = { alt: string } & ({ id: string; file?: never } | { file: string; id?: never });

const registry = {
  // Hero & brand
  "mara-golden-hour": { id: "1516426122078-c23e76319801", alt: "Safari vehicle under acacia trees at sunset" },
  "mara-plains": { file: "masai-mara-plains.jpg", alt: "Herds grazing on the open plains of the Masai Mara" },
  "migration-crossing": { file: "mara-river-crossing.jpg", alt: "Wildebeest crossing the Mara River" },
  "wildebeest-herd": { file: "mara-wildebeest-herd.jpg", alt: "Wildebeest massing on the bank of the Mara River" },
  "balloon-sunrise": { file: "mara-balloon-dawn.jpg", alt: "Sunrise behind an acacia in the Masai Mara on a balloon safari morning" },
  "lion-pride": { id: "1546182990-dffeafbe841d", alt: "A lion walking through golden grass" },
  "lion-male": { id: "1614027164847-1b28cfe1df60", alt: "Male lion with a dark mane looking across the plains" },
  "leopard-tree": { id: "1456926631375-92c8ce872def", alt: "A leopard resting on a fallen branch" },
  "cheetah": { file: "mara-cheetah.jpg", alt: "A cheetah in the grass of the Masai Mara" },
  "elephant-kilimanjaro": { id: "1489392191049-fc10c97e64b6", alt: "Snow-capped Kilimanjaro rising above the plains" },
  "elephant-family": { id: "1557050543-4d5f4e07ef46", alt: "An elephant on the open plains" },
  "giraffe-sunset": { id: "1547721064-da6cfb341d50", alt: "A giraffe against the sky" },
  "reticulated-giraffe": { file: "samburu-reticulated-giraffe.jpg", alt: "A reticulated giraffe browsing in Samburu National Reserve" },
  "rhino": { id: "1598894000396-bc30e0996899", alt: "White rhino grazing in a conservancy" },
  "zebra": { id: "1501706362039-c06b2d715385", alt: "Close-up of a zebra" },
  "flamingos": { id: "1497206365907-f5e630693df0", alt: "A flamingo wading in shallow water" },
  "buffalo": { file: "nakuru-buffalo.jpg", alt: "A Cape buffalo in Lake Nakuru National Park" },
  "game-drive": { id: "1523805009345-7448845a9e53", alt: "A giraffe beside an acacia at sunset" },
  "walking-safari": { file: "ol-kinyei-walking-safari.jpg", alt: "A Maasai guide on a walking safari in Ol Kinyei Conservancy, Masai Mara" },
  "horseback": { file: "kenya-horseback-safari.jpg", alt: "Riders on a horseback safari in Kenya" },
  "maasai-culture": { file: "amboseli-maasai.jpg", alt: "Maasai men and women in red shuka cloth at Amboseli" },
  "samburu-landscape": { file: "samburu-landscape.jpg", alt: "An elephant under acacias in Samburu National Reserve" },
  "laikipia-plateau": { file: "ol-pejeta-impala.jpg", alt: "Impala at Ol Pejeta Conservancy on the Laikipia plateau" },
  "mount-kenya": { file: "mount-kenya-batian-nelion.jpg", alt: "Batian and Nelion, the twin summits of Mount Kenya" },
  "tsavo-red-earth": { file: "tsavo-red-elephant.jpg", alt: "A red-dusted elephant in Tsavo East National Park" },
  "lake-naivasha": { file: "lake-naivasha.jpg", alt: "Drowned acacias along the shore of Lake Naivasha" },
  "hells-gate": { file: "hells-gate-cliffs.jpg", alt: "The cliffs of Hell’s Gate National Park" },
  "nairobi-skyline": { file: "nairobi-park-skyline.jpg", alt: "A giraffe in Nairobi National Park with the city skyline behind" },
  "meru-river": { file: "meru-river-pool.jpg", alt: "A river pool in Meru National Park" },
  "lewa-landscape": { id: "1535680671320-c566e5ecddf7", alt: "Beisa oryx with Mount Kenya behind, at Lewa Wildlife Conservancy" },

  // Coast
  "diani-beach": { id: "1651860282131-e3257674ccd1", alt: "White sand and clear water at Diani Beach" },
  "lamu-dhow": { id: "1711802536786-149a0d0c5879", alt: "A traditional dhow under sail off Lamu" },
  "lamu-town": { id: "1711802536772-0ef59886bc1b", alt: "The waterfront of Lamu Town" },
  "watamu-coast": { id: "1667935837291-1dc178866251", alt: "Clear blue water on the Kenyan coast" },
  "beach-villa": { id: "1708119063168-4785d1359824", alt: "A beach house with a pool in Diani" },

  // Stays
  "tented-camp": { id: "1709420838688-ccd0517d6a2d", alt: "A safari tent on the grass in the Masai Mara" },
  "tent-interior": { id: "1709521681958-e5337c2478f2", alt: "The pool at a camp in the Mara Naboisho Conservancy" },
  "lodge-pool": { id: "1566073771259-6a8506099945", alt: "Lodge terrace with a pool and loungers" },
  "bush-dinner": { id: "1535758180808-99b1752d8522", alt: "An elephant beside a dinner table laid out at a Masai Mara camp" },
  "sundowner": { id: "1599921777960-ac7c40d1bc60", alt: "An acacia silhouetted against the sunset in the Masai Mara" },
  "campfire": { id: "1475483768296-6163e08872a1", alt: "Guests gathered around a campfire under the stars" },

  // Extensions & people
  "gorilla": { id: "1711198587711-2020c1e4a3a3", alt: "A mountain gorilla in Bwindi Impenetrable Forest, Uganda" },
  "family-safari": { id: "1709567484031-87bc70607500", alt: "A family out walking with their guides on safari" },
  "honeymoon": { file: "meru-lodge-terrace.jpg", alt: "A lodge terrace looking out over Meru National Park" },
  "photographer": { id: "1535082623926-b39352a03fb7", alt: "A safari vehicle among wildebeest in the Masai Mara" },
  "specialist": { id: "1499591934245-40b55745b905", alt: "Planning a route by hand on a paper map" },
  "conservation": { file: "ol-pejeta-rhinos.jpg", alt: "White rhinos grazing at Ol Pejeta Conservancy on the Laikipia plateau" },
  "binoculars": { id: "1452421822248-d4c2b47f0c81", alt: "A notebook, camera and lens laid out for a trip" },
} satisfies Record<string, Entry>;

export type ImageKey = keyof typeof registry;

export function img(key: ImageKey, altOverride?: string): Img {
  const e: Entry = registry[key];
  return {
    src: e.file ? `/photos/${e.file}` : `https://images.unsplash.com/photo-${e.id}?auto=format&fit=crop&w=2400&q=80`,
    alt: altOverride ?? e.alt,
  };
}
