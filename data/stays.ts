// Sample properties with fictional names — replace with your real partner camps and lodges.
import type { Stay, StayType } from "./types";
import { img } from "./images";

export const stayTypeLabels: Record<StayType, string> = {
  "tented-camp": "Tented camp",
  "conservancy-lodge": "Conservancy lodge",
  "beach-villa": "Beach villa",
  "lamu-house": "Lamu house",
};

export const stays: Stay[] = [
  {
    slug: "olkeri-mara-camp",
    name: "Olkeri Mara Camp",
    type: "tented-camp",
    destinationSlug: "masai-mara",
    location: "Private conservancy, Greater Mara",
    summary:
      "An intimate tented camp on a seasonal stream in one of the Mara's private conservancies, with the migration on the doorstep from July to October.",
    body: [
      "Olkeri sits beneath a stand of old fig trees, its canvas suites spaced well apart along a seasonal stream. Each has a wide deck facing the plains, an en-suite bathroom with indoor and outdoor showers, and the kind of quiet that lets you hear lions calling at night.",
      "Being in a private conservancy means few vehicles, off-road driving to follow sightings, night drives and walks with Maasai guides. The reserve and the Mara River crossings are within reach for full-day excursions during the migration.",
      "Rates are full board and include shared game activities, conservancy fees, house drinks and laundry. Private vehicles and balloon flights can be added on request.",
    ],
    features: [
      "8 canvas suites",
      "Night drives & guided walks",
      "Off-road tracking in the conservancy",
      "Full board with house drinks",
      "Bush breakfasts & sundowners",
      "Balloon flights on request",
    ],
    hero: img("tented-camp"),
    gallery: [img("tent-interior"), img("sundowner"), img("bush-dinner")],
  },
  {
    slug: "kilima-view-camp",
    name: "Kilima View Camp",
    type: "tented-camp",
    destinationSlug: "amboseli",
    location: "Community conservancy bordering Amboseli National Park",
    summary:
      "A relaxed tented camp facing Kilimanjaro, ideally placed for Amboseli's great tuskers and the swamps where elephants gather each day.",
    body: [
      "On clear mornings Kilimanjaro fills the view from every tent at Kilima View. The camp lies on a community conservancy just outside the park, combining easy access to Amboseli's swamps and elephant herds with the freedom to walk and drive at night on conservancy land.",
      "Tents are generously sized with handmade furniture, verandas and en-suite bathrooms. Evenings centre on the campfire, with dinner served under the stars or in the open-sided mess tent.",
      "Rates are full board with game drives in the national park and conservancy, park and conservancy fees, and local drinks. The camp is particularly popular with photographers, who come for the light on the mountain at dawn.",
    ],
    features: [
      "10 tents with Kilimanjaro views",
      "Game drives in park & conservancy",
      "Guided walks with Maasai guides",
      "Full board with local drinks",
      "Campfire evenings",
      "Photography-friendly vehicles",
    ],
    hero: img("elephant-kilimanjaro"),
    gallery: [img("tented-camp"), img("campfire"), img("tent-interior")],
  },
  {
    slug: "ewaso-river-camp",
    name: "Ewaso River Camp",
    type: "tented-camp",
    destinationSlug: "samburu",
    location: "Banks of the Ewaso Ng'iro, Samburu",
    summary:
      "A shaded riverside camp among doum palms, the ideal base for Samburu's rare northern species and its striking, arid beauty.",
    body: [
      "Ewaso River Camp sits under acacias and doum palms on the banks of the Ewaso Ng'iro, the lifeline of Samburu. Elephants cross the river in front of camp most afternoons, and the surrounding country is home to the 'Samburu Special Five': reticulated giraffe, Grevy's zebra, Beisa oryx, gerenuk and Somali ostrich.",
      "Tents are cool and airy, raised on wooden platforms with river-facing decks and open-air showers. A shaded pool offers welcome relief in the midday heat.",
      "Rates are full board and include game drives, park fees and house drinks. Guided walks and visits to nearby Samburu communities — arranged with and led by the community — can be added.",
    ],
    features: [
      "9 riverside tents",
      "Elephants crossing in front of camp",
      "Swimming pool",
      "Full board with house drinks",
      "Community-led cultural visits",
      "Guided walks on community land",
    ],
    hero: img("samburu-landscape"),
    gallery: [img("tented-camp"), img("reticulated-giraffe"), img("lodge-pool")],
  },
  {
    slug: "ngare-ridge-lodge",
    name: "Ngare Ridge Lodge",
    type: "conservancy-lodge",
    destinationSlug: "lewa",
    location: "Hillside above the Lewa plains",
    summary:
      "Stone-and-thatch cottages on a ridge with views to Mount Kenya, offering exceptional rhino tracking and a wide range of activities.",
    body: [
      "Built from local stone and thatch, Ngare Ridge Lodge looks out across the Lewa plains towards Mount Kenya. Each cottage has a fireplace, a private veranda and floor-to-ceiling windows framing the view, and the main house has a library, a dining terrace and an infinity pool.",
      "Lewa is one of Kenya's great rhino strongholds, and tracking black rhino on foot with the conservancy's rangers is a highlight. Horse riding, camel walks, night drives and visits to the conservancy's community projects are all on offer.",
      "Rates are all-inclusive, covering activities, conservancy fees, drinks and laundry. Private vehicles are included for families and groups booking a minimum number of cottages.",
    ],
    features: [
      "6 stone cottages with fireplaces",
      "Rhino tracking on foot",
      "Horse riding & camel walks",
      "Infinity pool",
      "All-inclusive, with drinks",
      "Night drives",
      "Views of Mount Kenya",
    ],
    hero: img("lodge-pool"),
    gallery: [img("lewa-landscape"), img("rhino"), img("bush-dinner")],
  },
  {
    slug: "laikipia-plateau-lodge",
    name: "Laikipia Plateau Lodge",
    type: "conservancy-lodge",
    destinationSlug: "laikipia-ol-pejeta",
    location: "Private ranch, Laikipia Plateau",
    summary:
      "A family-friendly lodge on a working wildlife ranch, with wide horizons, cooler air and a wonderful variety of activities.",
    body: [
      "Set on a private ranch on the Laikipia Plateau, this lodge offers the freedom of a large wilderness with almost no other visitors. At around 1,800 metres, the air is fresh and the risk of malaria lower — a draw for families with young children.",
      "Days are unhurried and flexible: game drives in search of wild dog, lion and elephant, walks and rides across the open plains, mountain biking, and visits to nearby Ol Pejeta to track rhino. Family suites and a children's programme make it easy for all ages.",
      "Rates are all-inclusive, covering activities on the ranch, conservancy fees, drinks and laundry. Day trips to Ol Pejeta can be arranged at a supplement.",
    ],
    features: [
      "7 cottages, incl. family suites",
      "Walks, rides & mountain biking",
      "Children's programme",
      "Swimming pool",
      "All-inclusive, with drinks",
      "Day trips to Ol Pejeta",
    ],
    hero: img("laikipia-plateau"),
    gallery: [img("lodge-pool"), img("horseback"), img("campfire")],
  },
  {
    slug: "mvuli-beach-villa",
    name: "Mvuli Beach Villa",
    type: "beach-villa",
    destinationSlug: "diani-beach",
    location: "Beachfront, south Diani",
    summary:
      "A whitewashed beachfront villa with its own pool and garden, steps from Diani's white sand and calm, reef-protected water.",
    body: [
      "Mvuli Beach Villa sits in a shaded garden of frangipani and palms, leading straight onto one of the quietest stretches of Diani Beach. Airy rooms with makuti roofs, a private pool and a terrace facing the ocean set the tone for easy days.",
      "Snorkelling and diving trips, kitesurfing, dhow sails to Wasini Island and visits to the Colobus Conservation centre are easily arranged. In the evening, a private chef can prepare Swahili-inspired seafood on the terrace.",
      "Rates are on a bed-and-breakfast basis, with half board available. The villa can be booked by the room or exclusively for families and groups.",
    ],
    features: [
      "5 en-suite bedrooms",
      "Private pool & beachfront garden",
      "Bed & breakfast, half board available",
      "Private chef on request",
      "Snorkelling & dhow trips",
      "Exclusive-use option",
    ],
    hero: img("beach-villa"),
    gallery: [img("diani-beach"), img("lamu-dhow"), img("sundowner")],
  },
  {
    slug: "pwani-watamu-villa",
    name: "Pwani House Watamu",
    type: "beach-villa",
    destinationSlug: "watamu-malindi",
    location: "Overlooking Watamu Marine National Park",
    summary:
      "A small, relaxed beach house overlooking Watamu's marine park — ideal for snorkelling, turtles and slow coastal days.",
    body: [
      "Pwani House looks out over the coral gardens of Watamu Marine National Park, where the water at low tide reveals rock pools and lagoons. It is an easy, unpretentious place, with a pool, shaded verandas and a cook who knows exactly how to prepare the morning's catch.",
      "Snorkelling in the marine park, visiting the local turtle conservation project, exploring the Gede Ruins and the Arabuko-Sokoke Forest, and sunset trips into Mida Creek are all close at hand.",
      "Rates are on a bed-and-breakfast basis, with half board available on request.",
    ],
    features: [
      "6 rooms with sea or garden views",
      "Swimming pool",
      "Bed & breakfast, half board available",
      "Snorkelling in the marine park",
      "Mida Creek sunset trips",
      "Close to Gede Ruins",
    ],
    hero: img("watamu-coast"),
    gallery: [img("beach-villa"), img("diani-beach"), img("lamu-dhow")],
  },
  {
    slug: "nyumba-shela-lamu",
    name: "Nyumba Shela",
    type: "lamu-house",
    destinationSlug: "lamu",
    location: "Shela village, Lamu Island",
    summary:
      "A restored Swahili house in Shela village, with carved doors, cool courtyards and a rooftop terrace looking over the Lamu channel.",
    body: [
      "Nyumba Shela is a traditional Swahili house, carefully restored with lime-plastered walls, carved wooden doors and plaster niches. Rooms open onto a cool central courtyard, and the rooftop terrace is the place for breakfast and sunset drinks above the channel.",
      "Shela's long, empty beach is a short walk away, and Lamu Old Town is a gentle dhow ride along the waterfront. The house team can arrange dhow sailing, sandbank picnics, a visit to the Takwa Ruins on Manda Island and walks through the old town's lanes.",
      "Rates are on a half-board basis, with breakfast and dinner prepared by the house cook. The house can also be booked exclusively.",
    ],
    features: [
      "4 bedrooms around a courtyard",
      "Rooftop terrace with channel views",
      "Half board with a house cook",
      "Plunge pool",
      "Dhow sailing & sandbank picnics",
      "Exclusive-use option",
    ],
    hero: img("lamu-town"),
    gallery: [img("lamu-dhow"), img("beach-villa"), img("sundowner")],
  },
];

export const getStay = (slug: string) => stays.find((s) => s.slug === slug);
