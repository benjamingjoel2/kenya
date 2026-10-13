import type { Destination, MonthStatus } from "./types";
import { img } from "./images";

type Months = Destination["months"];

/** Typical inland safari pattern: dry seasons peak, long rains Apr–May, short rains Nov. */
const inlandSafari: Months = ["peak", "peak", "good", "rains", "rains", "peak", "peak", "peak", "peak", "peak", "rains", "good"];

/** Masai Mara: migration herds roughly Jul–Oct. */
const maraMonths: Months = ["peak", "peak", "good", "rains", "rains", "good", "migration", "migration", "migration", "migration", "rains", "good"];

/** Coast: long rains Apr–Jun (May wettest); Nov often fine. */
const coastMonths: Months = ["peak", "peak", "peak", "rains", "rains", "rains", "peak", "peak", "peak", "peak", "good", "peak"];

/** Mount Kenya climbing season. */
const mountainMonths: Months = ["peak", "peak", "good", "rains", "rains", "good", "peak", "peak", "peak", "good", "rains", "good"];

const m = (months: Months): [MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus, MonthStatus] =>
  [...months] as Months;

export const destinations: Destination[] = [
  {
    slug: "masai-mara",
    name: "Masai Mara",
    region: "mara",
    kind: "safari",
    tagline: "Big skies, big cats and the greatest wildlife show on earth",
    summary:
      "Kenya's most celebrated wilderness: rolling grassland, extraordinary predator sightings and, from July, the drama of the Great Migration.",
    overview: [
      "The Masai Mara is the northern tip of the vast Serengeti–Mara ecosystem, a sweep of red-oat grassland, acacia-dotted ridges and riverine forest along the Mara and Talek rivers. Its resident lion prides, cheetah and leopard make it one of the most rewarding places in Africa for big-cat viewing in any month.",
      "From roughly July to October, hundreds of thousands of wildebeest and zebra arrive from Tanzania's Serengeti, following the rains and fresh grazing. The herds' river crossings are as unpredictable as they are unforgettable, and patience is rewarded.",
      "Beyond the national reserve, a ring of private conservancies — Mara North, Olare Motorogi, Naboisho and others — is leased from Maasai landowners. Here vehicle numbers are capped, and walking, night drives and off-road tracking add a quieter, more intimate dimension.",
    ],
    hero: img("mara-golden-hour"),
    gallery: [img("migration-crossing"), img("lion-pride"), img("balloon-sunrise")],
    months: m(maraMonths),
    bestTimeNote:
      "July to October for the migration; January–February and June are excellent, quieter months with superb predator viewing and lower rates.",
    highlights: [
      "Mara River crossings during the Great Migration",
      "Exceptional lion, cheetah and leopard sightings year-round",
      "Sunrise hot-air balloon flight over the plains",
      "Walking and night drives in private conservancies",
      "Time with Maasai hosts and guides on their own land",
    ],
    wildlife: ["Wildebeest", "Plains zebra", "Lion", "Cheetah", "Leopard", "Spotted hyena", "Topi", "Nile crocodile"],
    gettingThere:
      "45–60-minute scheduled flight from Nairobi's Wilson Airport to one of several airstrips, or around 5–6 hours by road.",
    faqs: [
      {
        q: "Can we guarantee seeing a river crossing?",
        a: "No one honestly can. Crossings depend on rain, grazing and the herds' mood; some days bring several, others none. Staying three or four nights near the river during July–October gives you the best chance.",
      },
      {
        q: "Should we stay in the reserve or a conservancy?",
        a: "Often both. The reserve gives access to the main crossing points, while conservancies offer fewer vehicles, walking and night drives. We frequently combine the two.",
      },
      {
        q: "Is the Mara worth visiting outside migration season?",
        a: "Absolutely. Resident predators stay year-round, the grass is short and green after the rains, and you'll share sightings with far fewer vehicles.",
      },
    ],
  },
  {
    slug: "amboseli",
    name: "Amboseli",
    region: "amboseli",
    kind: "safari",
    tagline: "Elephants beneath Kilimanjaro",
    summary:
      "Big-tusked elephant herds, spring-fed swamps and Africa's highest mountain rising over the Tanzanian border.",
    overview: [
      "Amboseli lies in Kenya's south, on the dusty floor of an ancient lake bed at the foot of Kilimanjaro. Underground meltwater from the mountain feeds permanent swamps that draw wildlife throughout the dry months.",
      "It is famous above all for its elephants — some of the most closely studied in the world, thanks to decades of research — including several remarkable big tuskers. Watching a family wade into the Enkongo Narok swamp with the snows of Kibo behind is classic East Africa.",
      "The surrounding Maasai group ranches and private concessions, such as Kimana and Selenkay, offer walking, night drives and more secluded camps a short drive from the park.",
    ],
    hero: img("elephant-kilimanjaro"),
    gallery: [img("elephant-family"), img("buffalo"), img("maasai-culture")],
    months: m(inlandSafari),
    bestTimeNote:
      "The dry seasons (June–October and January–February) bring the clearest views and concentrated wildlife; Kilimanjaro is usually best seen early in the morning.",
    highlights: [
      "Big-tusked elephants against Kilimanjaro",
      "Observation Hill views over the swamps",
      "Excellent birdlife around the permanent marshes",
      "Walking and night drives in neighbouring Maasai concessions",
    ],
    wildlife: ["African elephant", "Cape buffalo", "Maasai giraffe", "Hippo", "Lion", "Spotted hyena", "Grey crowned crane", "Pelicans"],
    gettingThere:
      "Around 45 minutes by scheduled flight from Nairobi's Wilson Airport, or roughly 4–5 hours by road.",
    faqs: [
      {
        q: "Will we definitely see Kilimanjaro?",
        a: "Not guaranteed — the summit is often cloaked by midday. Early mornings and late afternoons in the dry season give the best odds.",
      },
      {
        q: "How long should we spend in Amboseli?",
        a: "Two or three nights is ideal, and it pairs naturally with Tsavo or a flight on to the Mara.",
      },
    ],
  },
  {
    slug: "samburu",
    name: "Samburu",
    region: "samburu",
    kind: "safari",
    tagline: "Arid beauty and the 'Samburu Special Five'",
    summary:
      "Sun-baked northern country along the Ewaso Ng'iro river, home to species found nowhere further south.",
    overview: [
      "North of the equator, the Samburu, Buffalo Springs and Shaba reserves straddle the Ewaso Ng'iro river, a ribbon of doum palms and riverine forest running through semi-desert scrub and rocky hills.",
      "This drier landscape supports a distinct cast: reticulated giraffe, Grevy's zebra, Beisa oryx, gerenuk and Somali ostrich — the so-called Samburu Special Five — alongside elephants that gather at the river in the heat of the day, and good leopard sightings.",
      "The Samburu people, close cousins of the Maasai, are proud pastoralists here, and community conservancies such as Kalama and Westgate offer genuine cultural connection alongside the wildlife.",
    ],
    hero: img("samburu-landscape"),
    gallery: [img("reticulated-giraffe"), img("elephant-family"), img("leopard-tree")],
    months: m(inlandSafari),
    bestTimeNote:
      "Wildlife concentrates along the river in the dry months, June–October and January–February. It's hot year-round, so midday is for siesta.",
    highlights: [
      "The Samburu Special Five in a single drive",
      "Elephants bathing in the Ewaso Ng'iro",
      "Visiting Samburu communities and singing wells",
      "Dramatic red-rock scenery and starry desert skies",
    ],
    wildlife: ["Reticulated giraffe", "Grevy's zebra", "Beisa oryx", "Gerenuk", "Somali ostrich", "African elephant", "Leopard", "Vulturine guineafowl"],
    gettingThere:
      "About 1 hour 15 minutes by scheduled flight from Nairobi's Wilson Airport, or around 6 hours by road.",
    faqs: [
      {
        q: "How does Samburu differ from the Mara?",
        a: "It's drier, quieter and wilder in feel, with northern species you won't see in the south. Many guests love it as a counterpoint to the Mara's open plains.",
      },
      {
        q: "Is it very hot?",
        a: "Days are warm to hot, often above 30°C, though evenings cool pleasantly. Camps are designed for the heat, many with pools.",
      },
    ],
  },
  {
    slug: "laikipia-ol-pejeta",
    name: "Laikipia & Ol Pejeta",
    region: "laikipia",
    kind: "safari",
    tagline: "Private ranches, rhinos and room to roam",
    summary:
      "A high plateau of private ranches and conservancies where conservation leads and activities go far beyond the game drive.",
    overview: [
      "Laikipia is a vast plateau stretching north-west from Mount Kenya, made up largely of private ranches and community lands managed for wildlife alongside livestock. It is home to a significant share of Kenya's black rhino and some of its most innovative conservation.",
      "Ol Pejeta Conservancy is the best-known: a sanctuary for black and southern white rhino, a chimpanzee sanctuary, and the place where the world's last two northern white rhinos live under round-the-clock protection.",
      "With few visitors and flexible rules, Laikipia is ideal for walking, horse and camel riding, night drives and fly-camping — and for families who want space and variety.",
    ],
    hero: img("laikipia-plateau"),
    gallery: [img("rhino"), img("horseback"), img("walking-safari")],
    months: m(inlandSafari),
    bestTimeNote:
      "Rewarding most of the year thanks to its altitude; the dry seasons of June–October and January–February are best for walking and riding.",
    highlights: [
      "Tracking black and white rhino on Ol Pejeta",
      "Horseback and camel safaris across open ranchland",
      "Night drives for aardvark, aardwolf and other nocturnal species",
      "Views of Mount Kenya's snow-streaked peaks",
      "Hands-on conservation experiences",
    ],
    wildlife: ["Black rhino", "Southern white rhino", "Grevy's zebra", "Reticulated giraffe", "African wild dog", "Lion", "Jackson's hartebeest", "Chimpanzee (sanctuary)"],
    gettingThere:
      "Around 1 hour by scheduled flight from Nairobi's Wilson Airport to Nanyuki or a ranch airstrip, or about 3–4 hours by road.",
    faqs: [
      {
        q: "Can we meet the northern white rhinos?",
        a: "Ol Pejeta offers supervised visits to the northern white rhino enclosure; we'll arrange this and explain the conservation story behind it.",
      },
      {
        q: "Is Laikipia good for children?",
        a: "Very. Private ranches allow flexible timings, exclusive-use houses and activities like camel rides that suit younger travellers.",
      },
    ],
  },
  {
    slug: "tsavo",
    name: "Tsavo East & West",
    region: "tsavo",
    kind: "safari",
    tagline: "Kenya's vast red-earth wilderness",
    summary:
      "Together the largest protected area in Kenya: red-dusted elephants, lava flows, crystal springs and a real sense of wild space.",
    overview: [
      "Divided by the Nairobi–Mombasa highway, Tsavo East and Tsavo West together cover more than 20,000 square kilometres. Tsavo East is flat, open and arid, cut by the Galana river; Tsavo West is hillier and volcanic, with lava flows and the spring-fed Mzima pools.",
      "Tsavo's elephants are famously coated in the region's red soil, and the park is also known for its maneless lions, historically remembered from the 'man-eaters' of the railway era.",
      "Its size means you rarely share a sighting, and it combines easily with Amboseli or the coast for a varied itinerary.",
    ],
    hero: img("tsavo-red-earth"),
    gallery: [img("elephant-family"), img("lion-male"), img("zebra")],
    months: m(inlandSafari),
    bestTimeNote:
      "June–October and January–February are driest, when animals gather at waterholes and rivers; the green season is beautiful but more spread out.",
    highlights: [
      "Red-dusted elephant herds",
      "Underwater hippo viewing at Mzima Springs",
      "Lugard Falls and the Galana river",
      "Ngulia rhino sanctuary",
      "Easy combination with the beach",
    ],
    wildlife: ["African elephant", "Maneless lion", "Fringe-eared oryx", "Lesser kudu", "Hippo", "Black rhino", "Hirola (rare)"],
    gettingThere:
      "Roughly 1 hour by light aircraft from Nairobi, a few hours by road from the coast, or by the Madaraka Express train to Voi or Mtito Andei.",
    faqs: [
      {
        q: "East or West — which should we choose?",
        a: "West for scenery and springs, East for open plains and big elephant herds. With enough time, a night or two in each is ideal.",
      },
      {
        q: "Can we combine Tsavo with Diani?",
        a: "Easily — Tsavo East is within a few hours' drive of the south coast, making it a natural bush-and-beach pairing.",
      },
    ],
  },
  {
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    region: "rift-valley",
    kind: "safari",
    tagline: "Rhinos and flamingos in the Rift Valley",
    summary:
      "A compact Rift Valley park with a soda lake, euphorbia forest and one of Kenya's most reliable rhino populations.",
    overview: [
      "Lake Nakuru National Park surrounds a shallow alkaline lake on the floor of the Great Rift Valley. When conditions suit, flamingos gather along its shores in pink drifts; numbers vary year to year as water levels change.",
      "The park is fenced and is an important rhino sanctuary for both black and white rhino, as well as Rothschild's giraffe. Woodlands of yellow fever trees and the tall candelabra euphorbia give it a character all its own.",
      "Within a few hours of Nairobi, it makes a rewarding stop between the capital and the Mara or Laikipia.",
    ],
    hero: img("flamingos"),
    gallery: [img("rhino"), img("leopard-tree"), img("buffalo")],
    months: m(inlandSafari),
    bestTimeNote:
      "Good most of the year; the dry seasons make for easier game viewing, while flamingo numbers depend on lake levels rather than the calendar.",
    highlights: [
      "Close encounters with black and white rhino",
      "Flamingos and pelicans along the shoreline",
      "Baboon Cliff viewpoint over the lake",
      "Makalia Falls and euphorbia forest",
    ],
    wildlife: ["White rhino", "Black rhino", "Rothschild's giraffe", "Lesser flamingo", "Great white pelican", "Leopard", "Lion", "Cape buffalo"],
    gettingThere:
      "Around 3–4 hours by road from Nairobi, often as part of a journey towards the Mara or Laikipia.",
    faqs: [
      {
        q: "Will we see flamingos?",
        a: "Possibly, but rising water levels in recent years have reduced numbers at Nakuru. We'll advise on current conditions and nearby lakes such as Bogoria if flamingos are a priority.",
      },
      {
        q: "Is a day visit enough?",
        a: "A full day works, but one night allows early-morning and late-afternoon drives when rhino and leopard are most active.",
      },
    ],
  },
  {
    slug: "naivasha-hells-gate",
    name: "Lake Naivasha & Hell's Gate",
    region: "rift-valley",
    kind: "safari",
    tagline: "Freshwater calm and gorges you can walk through",
    summary:
      "A freshwater lake fringed by fever trees, boat trips among hippos and cycling past zebra in Hell's Gate.",
    overview: [
      "Lake Naivasha is the highest of the Rift Valley lakes and one of the few freshwater ones, ringed by papyrus and yellow fever trees and alive with birds. Boat trips bring you close to hippos and fish eagles.",
      "Across the lake, Crescent Island is a private sanctuary where you can walk among giraffe, zebra and waterbuck. Nearby Hell's Gate National Park is one of the few parks where you can cycle or walk, through towering cliffs and down into the Ol Njorowa gorge.",
      "Just 90 minutes or so from Nairobi, Naivasha is a relaxed first or last stop, and an active counterpoint to vehicle-based safari.",
    ],
    hero: img("lake-naivasha"),
    gallery: [img("hells-gate"), img("giraffe-sunset"), img("zebra")],
    months: m(inlandSafari),
    bestTimeNote:
      "Pleasant almost year-round at this altitude; avoid Hell's Gate gorge during heavy rains, when flash floods can occur.",
    highlights: [
      "Boat safari among hippos and fish eagles",
      "Walking safari on Crescent Island",
      "Cycling and gorge walks in Hell's Gate",
      "Mount Longonot crater hike",
      "Easy reach from Nairobi",
    ],
    wildlife: ["Hippo", "African fish eagle", "Maasai giraffe", "Plains zebra", "Waterbuck", "Colobus monkey", "Rüppell's vulture"],
    gettingThere: "Around 1.5–2 hours by road from Nairobi.",
    faqs: [
      {
        q: "Is cycling in Hell's Gate safe?",
        a: "Yes, with an experienced guide and in suitable weather. There are no elephants or large predators routinely in the park, and the gorge is closed after heavy rain.",
      },
      {
        q: "How long should we stay?",
        a: "One or two nights is perfect, often at the start or end of a safari.",
      },
    ],
  },
  {
    slug: "lewa",
    name: "Lewa",
    region: "laikipia",
    kind: "safari",
    tagline: "A conservation pioneer at the foot of Mount Kenya",
    summary:
      "A UNESCO World Heritage conservancy renowned for rhino protection, exclusive camps and remarkable variety of activity.",
    overview: [
      "Lewa Wildlife Conservancy sits on the northern slopes beneath Mount Kenya and forms part of the Mount Kenya World Heritage Site. Once a cattle ranch, it became one of Africa's most influential models for community-led conservation.",
      "It protects significant numbers of black and white rhino and a large share of the world's endangered Grevy's zebra. With a handful of small, exclusive camps, sightings are shared with very few people.",
      "Walking, horse riding, night drives and visits to the conservancy's community projects make Lewa a place to understand conservation as much as to see wildlife.",
    ],
    hero: img("lewa-landscape"),
    gallery: [img("rhino"), img("conservation"), img("horseback")],
    months: m(inlandSafari),
    bestTimeNote:
      "Excellent from June to October and January to February; its altitude keeps it comfortable even in warmer months.",
    highlights: [
      "Black and white rhino tracking with conservancy rangers",
      "Grevy's zebra in good numbers",
      "Horse riding and walking among wildlife",
      "Insight into community conservation and schools projects",
    ],
    wildlife: ["Black rhino", "White rhino", "Grevy's zebra", "Reticulated giraffe", "Sitatunga", "Lion", "Leopard", "Gerenuk"],
    gettingThere:
      "Around 1 hour by scheduled or charter flight from Nairobi's Wilson Airport to the Lewa airstrip.",
    faqs: [
      {
        q: "How does Lewa compare with the wider Laikipia region?",
        a: "Lewa is a single, well-established conservancy with exceptionally strong rhino numbers; Laikipia offers a broader range of ranches. They sit side by side and combine well.",
      },
      {
        q: "Is there a conservancy fee?",
        a: "Yes. It funds security and community programmes, and we include it in your quote.",
      },
    ],
  },
  {
    slug: "meru",
    name: "Meru",
    region: "central",
    kind: "safari",
    tagline: "Born Free country, beautifully untouched",
    summary:
      "A lush, river-laced park east of Mount Kenya, little visited and full of character.",
    overview: [
      "Meru National Park is where Joy and George Adamson raised Elsa the lioness, the story told in Born Free. Thirteen rivers and many streams cross it, fringed by doum palms and riverine forest, giving it a greener feel than the northern reserves.",
      "After a difficult period decades ago, Meru has recovered well and now offers a wild, uncrowded experience, with a rhino sanctuary, elephant, buffalo and a good range of northern species.",
      "Few visitors make the journey, so you will often have sightings entirely to yourselves.",
    ],
    hero: img("meru-river"),
    gallery: [img("lion-pride"), img("rhino"), img("elephant-family")],
    months: m(inlandSafari),
    bestTimeNote:
      "Best in the dry seasons, June–October and January–February; some tracks become difficult during the rains.",
    highlights: [
      "Wild, uncrowded game drives",
      "Rhino sanctuary within the park",
      "Born Free history and Elsa's grave",
      "River scenery along the Rojewero and Tana",
    ],
    wildlife: ["Lion", "African elephant", "White rhino", "Reticulated giraffe", "Grevy's zebra", "Lesser kudu", "Hippo"],
    gettingThere:
      "About 1 hour 15 minutes by scheduled flight from Nairobi's Wilson Airport, or around 6 hours by road.",
    faqs: [
      {
        q: "Why is Meru so quiet?",
        a: "It's further off the classic circuit and has few camps — which is precisely its appeal for travellers who want the bush to themselves.",
      },
      {
        q: "What does Meru combine well with?",
        a: "Lewa, Laikipia or Samburu, for a northern circuit full of contrast.",
      },
    ],
  },
  {
    slug: "mount-kenya",
    name: "Mount Kenya",
    region: "central",
    kind: "mountain",
    tagline: "Africa's second-highest mountain, wild and glaciated",
    summary:
      "A jagged volcanic massif straddling the equator, with forest, moorland and high-altitude trekking to Point Lenana.",
    overview: [
      "At 5,199 metres, Batian is Africa's second-highest summit after Kilimanjaro. Mount Kenya is a UNESCO World Heritage Site, its slopes rising through montane forest and bamboo to giant-groundsel moorland and dwindling glaciers.",
      "Experienced climbers tackle the technical peaks of Batian and Nelion, while trekkers aim for Point Lenana at 4,985 metres, usually over four to five days on the Sirimon, Chogoria or Naro Moru routes.",
      "For those who prefer comfort, forest lodges on the lower slopes offer guided walks, birding and the chance to see forest elephants and bongo antelope.",
    ],
    hero: img("mount-kenya"),
    gallery: [img("laikipia-plateau"), img("walking-safari"), img("campfire")],
    months: m(mountainMonths),
    bestTimeNote:
      "January–February and July–September offer the most reliable trekking weather; avoid the April–May and November rains.",
    highlights: [
      "Trekking to Point Lenana for sunrise",
      "Chogoria route's lakes and gorges",
      "Giant lobelias and groundsels on the moorland",
      "Forest lodges with night-time wildlife viewing",
    ],
    wildlife: ["Forest elephant", "Mountain bongo (rare)", "Black-and-white colobus", "Rock hyrax", "Sykes' monkey", "Jackson's francolin"],
    gettingThere:
      "Around 3–4 hours by road from Nairobi to the trailheads near Nanyuki or Chogoria, or a short flight to Nanyuki.",
    faqs: [
      {
        q: "Do we need climbing experience for Point Lenana?",
        a: "No technical skills, but good fitness and proper acclimatisation are essential. Altitude sickness is a real risk, so we plan sensible ascent schedules.",
      },
      {
        q: "Can we combine a trek with safari?",
        a: "Yes — Laikipia, Lewa and Ol Pejeta are right on the doorstep, ideal for recovery after the climb.",
      },
    ],
  },
  {
    slug: "nairobi",
    name: "Nairobi",
    region: "nairobi",
    kind: "city",
    tagline: "The only capital with lions on its doorstep",
    summary:
      "A vibrant gateway city with a national park on its edge, elephant orphans and a growing food and design scene.",
    overview: [
      "Most journeys begin and end in Nairobi, and the city repays a night or two. Nairobi National Park lies just minutes from the centre, where rhino, lion and giraffe roam against a backdrop of skyscrapers.",
      "The Sheldrick Wildlife Trust's elephant orphanage, the Giraffe Centre and the Karen Blixen Museum make easy, rewarding visits, especially for families.",
      "Leafy suburbs such as Karen and Langata offer characterful boutique hotels, while the city's restaurants, markets and galleries showcase contemporary Kenyan creativity.",
    ],
    hero: img("nairobi-skyline"),
    gallery: [img("giraffe-sunset"), img("elephant-family"), img("rhino")],
    months: m(inlandSafari),
    bestTimeNote:
      "Nairobi is a year-round stop; its altitude of around 1,700 metres keeps temperatures mild, with cooler evenings in July and August.",
    highlights: [
      "Game drive in Nairobi National Park",
      "Private visit to the Sheldrick elephant orphanage",
      "Feeding Rothschild's giraffe at the Giraffe Centre",
      "Karen Blixen Museum and Karen's garden hotels",
      "Contemporary Kenyan food, art and design",
    ],
    wildlife: ["Black rhino", "Lion", "Maasai giraffe", "Cape buffalo", "Orphaned elephants (Sheldrick)", "Rothschild's giraffe (Giraffe Centre)"],
    gettingThere:
      "Jomo Kenyatta International Airport has direct flights from Europe, the Middle East and beyond; Wilson Airport handles safari flights.",
    faqs: [
      {
        q: "Do we need to spend a night in Nairobi?",
        a: "Often it's sensible after a long-haul flight, and it allows a morning at the elephant orphanage before flying on to safari.",
      },
      {
        q: "Is Nairobi safe for visitors?",
        a: "With sensible precautions, yes. We arrange private transfers and recommend well-located hotels, so you're looked after throughout.",
      },
    ],
  },
  {
    slug: "diani-beach",
    name: "Diani Beach",
    region: "coast",
    kind: "coast",
    tagline: "Powder-white sand on the Indian Ocean",
    summary:
      "Kenya's classic beach: a long reef-protected shore, warm water and the perfect finale to a safari.",
    overview: [
      "South of Mombasa, Diani's 17-kilometre stretch of soft white sand is protected by an offshore coral reef, creating calm, turquoise lagoons ideal for swimming and snorkelling.",
      "Coastal forest behind the beach shelters Angolan colobus and other primates, while the Kisite-Mpunguti Marine Park to the south offers some of Kenya's best snorkelling and dolphin sightings.",
      "From barefoot villas to polished resorts, Diani makes a relaxed and easy end to a safari, with kitesurfing, diving and dhow trips for those who can't sit still.",
    ],
    hero: img("diani-beach"),
    gallery: [img("beach-villa"), img("lamu-dhow"), img("honeymoon")],
    months: m(coastMonths),
    bestTimeNote:
      "December–March and July–October are hot, dry and settled; April–June brings the long rains, heaviest in May.",
    highlights: [
      "Snorkelling and dolphins in Kisite-Mpunguti Marine Park",
      "Kitesurfing on the trade winds",
      "Dhow trips to Wasini Island",
      "Colobus monkeys in coastal forest",
      "Whale sharks seasonally offshore",
    ],
    wildlife: ["Indian Ocean bottlenose dolphin", "Green turtle", "Whale shark (seasonal)", "Humpback whale (Jul–Oct)", "Angolan colobus", "Reef fish and corals"],
    gettingThere:
      "Around 1.5 hours by scheduled flight from Nairobi to Ukunda or Mombasa, or direct by light aircraft from the Mara and Tsavo.",
    faqs: [
      {
        q: "Can we fly straight from safari to Diani?",
        a: "Yes — direct light-aircraft routes from the Mara and other parks often save a connection through Nairobi.",
      },
      {
        q: "When can we see humpback whales?",
        a: "Humpbacks migrate along the coast roughly from July to October, and whale-watching boats run from Diani and Watamu.",
      },
    ],
  },
  {
    slug: "lamu",
    name: "Lamu",
    region: "coast",
    kind: "coast",
    tagline: "Swahili soul on a car-free island",
    summary:
      "A UNESCO-listed Swahili town of carved doors, donkeys and dhows, surrounded by quiet islands and mangroves.",
    overview: [
      "Lamu Old Town is the oldest continuously inhabited Swahili settlement in East Africa and a UNESCO World Heritage Site. Its narrow lanes, coral-stone houses and intricately carved doors have changed little over centuries.",
      "There are almost no cars; life moves by donkey, on foot and by dhow. Nearby Shela village offers long, empty dunes and beaches, while Manda and Kiwayu islands hold barefoot-luxury hideaways.",
      "Days revolve around sailing, swimming, fresh seafood and the call to prayer drifting over the rooftops — an unhurried, deeply atmospheric end to any journey.",
    ],
    hero: img("lamu-dhow"),
    gallery: [img("lamu-town"), img("beach-villa"), img("sundowner")],
    months: m(coastMonths),
    bestTimeNote:
      "Settled and sunny from July to October and December to March; many smaller properties close during the long rains, April–June.",
    highlights: [
      "Sunset dhow sailing among the islands",
      "Wandering Lamu Old Town's alleys and carved doorways",
      "Shela's endless dunes and beach",
      "Mangrove channels and Takwa ruins on Manda",
      "Lamu Cultural Festival (dates vary)",
    ],
    wildlife: ["Dolphins", "Sea turtles", "Mangrove kingfisher", "Crab plover", "Reef fish", "Donkeys (the island's transport)"],
    gettingThere: "About 1.5 hours by scheduled flight from Nairobi to Manda Island, then a short boat ride.",
    faqs: [
      {
        q: "What should we wear in Lamu town?",
        a: "Lamu is a conservative Muslim community, so covering shoulders and knees in town is respectful; beachwear is fine at your property and on the beach.",
      },
      {
        q: "Is Lamu suitable for families?",
        a: "Yes, for those who enjoy a gentle pace. Shela and Manda have family-friendly houses with pools and plenty of space.",
      },
    ],
  },
  {
    slug: "watamu-malindi",
    name: "Watamu & Malindi",
    region: "coast",
    kind: "coast",
    tagline: "Marine parks, coral gardens and coastal forest",
    summary:
      "A relaxed stretch of north coast with protected reefs, turtle conservation and the ruins of a lost Swahili town.",
    overview: [
      "Watamu sits within a marine national park and reserve, its coral gardens and sandbanks among the best on the Kenyan coast for snorkelling and diving. Local Ocean Conservation works here protecting sea turtles.",
      "Inland, the Arabuko-Sokoke Forest is the largest remnant of coastal forest in East Africa and home to rare endemics, while the atmospheric Gede Ruins reveal a medieval Swahili town reclaimed by forest.",
      "Neighbouring Malindi has a long Italian connection, good restaurants and deep-sea fishing, and lies close to the dramatic Marafa 'Hell's Kitchen' sandstone canyon.",
    ],
    hero: img("watamu-coast"),
    gallery: [img("beach-villa"), img("lamu-dhow"), img("sundowner")],
    months: m(coastMonths),
    bestTimeNote:
      "Best from July to October and December to March, with calm, clear water for snorkelling; April–June is the rainy season.",
    highlights: [
      "Snorkelling in Watamu Marine National Park",
      "Turtle conservation visits",
      "Birding in Arabuko-Sokoke Forest",
      "Gede Ruins and Mida Creek at sunset",
      "Deep-sea fishing from Malindi",
    ],
    wildlife: ["Green and hawksbill turtles", "Whale shark (seasonal)", "Manta ray", "Golden-rumped elephant shrew", "Sokoke scops owl", "Crab plover"],
    gettingThere:
      "About 1 hour by scheduled flight from Nairobi to Malindi, then 30 minutes by road to Watamu.",
    faqs: [
      {
        q: "Is Watamu good for snorkelling?",
        a: "Excellent — the marine park's coral gardens are best at low tide, and calm months from July to March offer the clearest water.",
      },
      {
        q: "Watamu or Diani?",
        a: "Diani is livelier with a longer beach; Watamu is quieter, with more marine and cultural interest. We'll match it to your style.",
      },
    ],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
