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
type Entry = { id: string; alt: string; tone: Tone };

const registry = {
  // Hero & brand
  "mara-golden-hour": { id: "1516426122078-c23e76319801", alt: "Acacia trees on the Masai Mara plains at golden hour", tone: "gold" },
  "mara-plains": { id: "1547970810-dc1eac37d174", alt: "Open grassland of the Masai Mara stretching to the horizon", tone: "gold" },
  "migration-crossing": { id: "1534567153574-2b12153a87f0", alt: "Wildebeest crossing the Mara River during the Great Migration", tone: "earth" },
  "wildebeest-herd": { id: "1549366021-9f761d450615", alt: "A long column of wildebeest moving across the savanna", tone: "gold" },
  "balloon-sunrise": { id: "1507608158173-1dcec673a2e5", alt: "Hot air balloon drifting over the plains at sunrise", tone: "dusk" },
  "lion-pride": { id: "1546182990-dffeafbe841d", alt: "Lioness resting in golden grass", tone: "gold" },
  "lion-male": { id: "1614027164847-1b28cfe1df60", alt: "Male lion with a dark mane looking across the plains", tone: "gold" },
  "leopard-tree": { id: "1456926631375-92c8ce872def", alt: "Leopard draped along the branch of an acacia tree", tone: "earth" },
  "cheetah": { id: "1534188753412-3e26d0d618d6", alt: "Cheetah scanning the grassland from a termite mound", tone: "gold" },
  "elephant-kilimanjaro": { id: "1547471080-7cc2caa01a7e", alt: "Elephants walking beneath Mount Kilimanjaro in Amboseli", tone: "earth" },
  "elephant-family": { id: "1557050543-4d5f4e07ef46", alt: "Elephant family walking through dusty savanna", tone: "earth" },
  "giraffe-sunset": { id: "1547721064-da6cfb341d50", alt: "Giraffe silhouetted against an orange sunset", tone: "dusk" },
  "reticulated-giraffe": { id: "1518709766631-a6a7f45921c3", alt: "Reticulated giraffe browsing an acacia in Samburu", tone: "earth" },
  "rhino": { id: "1598894000396-bc30e0996899", alt: "White rhino grazing in a conservancy", tone: "green" },
  "zebra": { id: "1501706362039-c06b2d715385", alt: "Zebras standing together in the grass", tone: "gold" },
  "flamingos": { id: "1497206365907-f5e630693df0", alt: "Flamingos wading along a Rift Valley lake shore", tone: "sea" },
  "buffalo": { id: "1590419690008-905895e8fe0d", alt: "Cape buffalo watching from the long grass", tone: "earth" },
  "game-drive": { id: "1523805009345-7448845a9e53", alt: "Open safari vehicle on a game drive at dawn", tone: "gold" },
  "walking-safari": { id: "1504173010664-32509aeebb62", alt: "Guests on a guided walking safari through the bush", tone: "earth" },
  "horseback": { id: "1553284965-83fd3e82fa5a", alt: "Riders on horseback crossing open plains", tone: "gold" },
  "maasai-culture": { id: "1489392191049-fc10c97e64b6", alt: "Maasai elders in red shuka cloth on the savanna", tone: "dusk" },
  "samburu-landscape": { id: "1516026672322-bc52d61a55d5", alt: "Dry riverbed and doum palms in Samburu", tone: "earth" },
  "laikipia-plateau": { id: "1504945005722-33670dcaf685", alt: "Wide Laikipia plateau with Mount Kenya in the distance", tone: "green" },
  "mount-kenya": { id: "1621414050946-1b936a78491f", alt: "Jagged peaks of Mount Kenya above the clouds", tone: "night" },
  "tsavo-red-earth": { id: "1535941339077-2dd1c7963098", alt: "Red-dusted elephants of Tsavo by a waterhole", tone: "earth" },
  "lake-naivasha": { id: "1575550959106-5a7defe28b56", alt: "Lake Naivasha with fever trees at the water's edge", tone: "green" },
  "hells-gate": { id: "1580060839134-75a5edca2e99", alt: "Towering cliffs of Hell's Gate gorge", tone: "earth" },
  "nairobi-skyline": { id: "1611348524140-53c9a25263d6", alt: "Nairobi skyline with giraffes in Nairobi National Park", tone: "dusk" },
  "meru-river": { id: "1544735716-392fe2489ffa", alt: "Palm-lined river winding through Meru National Park", tone: "green" },
  "lewa-landscape": { id: "1521651201144-634f700b36ef", alt: "Rolling grassland of Lewa with acacia and kopjes", tone: "green" },

  // Coast
  "diani-beach": { id: "1590523277543-a94d2e4eb00b", alt: "White sand and turquoise water on Diani Beach", tone: "sea" },
  "lamu-dhow": { id: "1544551763-46a013bb70d5", alt: "Traditional dhow sailing off Lamu at sunset", tone: "dusk" },
  "lamu-town": { id: "1519046904884-53103b34b206", alt: "Carved wooden doorway in Lamu Old Town", tone: "earth" },
  "watamu-coast": { id: "1507525428034-b723cf961d3e", alt: "Watamu's coral-fringed bay at low tide", tone: "sea" },
  "beach-villa": { id: "1540541338287-41700207dee6", alt: "Beach villa terrace with a pool facing the Indian Ocean", tone: "sea" },

  // Stays
  "tented-camp": { id: "1493246507139-91e8fad9978e", alt: "Canvas safari tent with a deck overlooking the plains", tone: "gold" },
  "tent-interior": { id: "1520250497591-112f2f40a3f4", alt: "Interior of a luxury safari tent with four-poster bed", tone: "earth" },
  "lodge-pool": { id: "1566073771259-6a8506099945", alt: "Infinity pool at a conservancy lodge looking over the valley", tone: "green" },
  "bush-dinner": { id: "1414235077428-338989a2e8c0", alt: "Candlelit dinner table set up in the bush", tone: "night" },
  "sundowner": { id: "1528543606781-2f6e6857f318", alt: "Sundowner drinks at sunset on safari", tone: "dusk" },
  "campfire": { id: "1475483768296-6163e08872a1", alt: "Guests gathered around a campfire under the stars", tone: "night" },

  // Extensions & people
  "gorilla": { id: "1581852017103-68ac65514cf7", alt: "Mountain gorilla resting in the forest", tone: "green" },
  "family-safari": { id: "1504609773096-104ff2c73ba4", alt: "Family with binoculars on a safari vehicle", tone: "gold" },
  "honeymoon": { id: "1516815231560-8f41ec531527", alt: "Couple watching the sunset from a private deck", tone: "dusk" },
  "photographer": { id: "1452587925148-ce544e77e70d", alt: "Photographer with a long lens in a safari vehicle", tone: "gold" },
  "specialist": { id: "1531123897727-8f129e1688ce", alt: "Safari specialist portrait (placeholder)", tone: "earth" },
  "conservation": { id: "1551316679-9c6ae9dec224", alt: "Ranger on patrol in a wildlife conservancy", tone: "green" },
  "binoculars": { id: "1516422213484-21437def6ac0", alt: "Pair of binoculars resting on a safari map", tone: "earth" },
} satisfies Record<string, Entry>;

export type ImageKey = keyof typeof registry;

const usePlaceholders = process.env.NEXT_PUBLIC_IMAGE_PLACEHOLDERS === "1";

export function img(key: ImageKey, altOverride?: string): Img {
  const e: Entry = registry[key];
  return {
    src: usePlaceholders
      ? `/placeholders/${e.tone}.svg`
      : `https://images.unsplash.com/photo-${e.id}?auto=format&fit=crop&w=2400&q=80`,
    alt: altOverride ?? e.alt,
  };
}
