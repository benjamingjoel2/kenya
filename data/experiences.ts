import type { Experience } from "./types";
import { img } from "./images";

export const experiences: Experience[] = [
  {
    slug: "great-migration",
    name: "The Great Migration",
    tagline: "Two million animals, one ancient circuit",
    summary:
      "Each year vast herds of wildebeest and zebra pour north into the Masai Mara. We place you where the action is, with the space to enjoy it.",
    body: [
      "The Great Migration is not a single event but a year-round, clockwise journey of wildebeest, zebra and gazelle through the Serengeti–Mara ecosystem, driven by rain and fresh grass. In Kenya, the herds typically arrive in the Masai Mara from July and linger until October, filling the plains and drawing lions, cheetahs and hyenas in their wake.",
      "The river crossings are the moments people dream about: thousands of animals gathering on the banks of the Mara or Talek, hesitating, then plunging in past waiting crocodiles. Crossings are unpredictable — some days bring several, others none — so patience and an experienced guide make all the difference. We favour camps with access to both the national reserve and the quieter private conservancies, so you can follow the herds without the crowds.",
      "Timing is everything, and so is placement. We track where the herds are moving each season and pair you with guides who read the river as well as the weather. Outside the crossings, the Mara is at its most abundant: predators are active, the light is golden and the plains seem to stretch forever.",
    ],
    hero: img("migration-crossing"),
    bestFor: ["First-time safari-goers", "Wildlife photographers", "Predator action", "Bucket-list travellers"],
    season: "July–October, peaking August–September",
    destinationSlugs: ["masai-mara"],
  },
  {
    slug: "hot-air-balloon-safaris",
    name: "Hot air balloon safaris",
    tagline: "The plains at sunrise, from a silent height",
    summary:
      "Lift off before dawn and drift over the Mara as the sun rises, then land for a champagne bush breakfast on the open savanna.",
    body: [
      "Few mornings compare. You rise in the dark, meet your pilot at the launch site as the burners roar into life, and lift gently into the cool air just as the first light spills across the plains. From above, the Mara reveals its patterns: game trails threading between acacias, herds scattered like seeds, the green ribbon of the river.",
      "Flights last around an hour, drifting with the wind at varying heights — sometimes skimming the treetops, sometimes climbing high for the full sweep of the landscape. Landing is part of the adventure, and is followed by a full breakfast served in the bush, often with a glass of something sparkling.",
      "Balloon safaris operate year-round in the Masai Mara, with especially memorable flights during the migration months. Places are limited and weather-dependent, so we reserve them when we confirm your camp, and build a relaxed afternoon into the day to make up for the early start.",
    ],
    hero: img("balloon-sunrise"),
    bestFor: ["Special occasions", "Honeymooners", "Landscape photography", "A once-in-a-lifetime moment"],
    season: "Year-round, with the migration months (July–October) especially popular",
    destinationSlugs: ["masai-mara"],
  },
  {
    slug: "big-five-safaris",
    name: "Big Five safaris",
    tagline: "Lion, leopard, elephant, buffalo and rhino",
    summary:
      "Kenya is one of the finest places in Africa to see all five in a single trip. We design routes that give you the best chance, without a box-ticking rush.",
    body: [
      "The 'Big Five' began as a hunter's list of the most dangerous animals to pursue on foot. Today it is a photographer's ambition, and Kenya delivers it beautifully. The Masai Mara is famed for lions and leopards, while elephant and buffalo are widespread across the country's great parks.",
      "Rhino are the hardest to find, which is why we often pair the Mara with a stay in Laikipia, Ol Pejeta or Lewa — conservancies where dedicated protection has helped black and white rhino populations recover. Lake Nakuru is another reliable stop on a shorter itinerary.",
      "A good Big Five safari is about more than a checklist. Our guides know the territories of individual leopards and the habits of resident prides, and they will happily linger at a sighting rather than racing to the next. The result is a trip that feels unhurried, yet rarely leaves anyone wanting.",
    ],
    hero: img("leopard-tree"),
    bestFor: ["First safaris", "Wildlife enthusiasts", "Families with older children", "Combining regions"],
    season: "Year-round; June–October and January–February offer the easiest viewing",
    destinationSlugs: ["masai-mara", "laikipia-ol-pejeta", "lewa", "lake-nakuru"],
  },
  {
    slug: "private-conservancies",
    name: "Private conservancies",
    tagline: "Fewer vehicles, more freedom, real impact",
    summary:
      "Kenya's community and private conservancies limit vehicle numbers and allow night drives, walks and off-road tracking — while channelling income to local landowners.",
    body: [
      "Many of Kenya's finest wildlife areas sit outside the national parks, on land leased from Maasai and Samburu landowners or held as private ranches. These conservancies cap the number of beds and vehicles, so a sighting is often yours alone — no queue of minibuses, no jostling for position.",
      "The rules are also more flexible. Depending on the conservancy, you can drive off-road to follow a leopard, go out after dark with a spotlight in search of aardvark and genet, walk with Maasai guides, or sleep out on a star bed. It is a richer, more intimate way to experience the bush.",
      "Just as importantly, conservancy fees are paid directly to the communities who own the land, creating a reason to keep it wild. When you stay in a conservancy, your visit supports grazing plans, ranger salaries, schools and healthcare. We work with partners who take that responsibility seriously.",
    ],
    hero: img("conservation"),
    bestFor: ["Repeat safari-goers", "Privacy and exclusivity", "Night drives and walks", "Conservation-minded travellers"],
    season: "Year-round; conservancies are particularly rewarding outside peak migration weeks",
    destinationSlugs: ["masai-mara", "laikipia-ol-pejeta", "lewa", "samburu"],
  },
  {
    slug: "walking-safaris",
    name: "Walking safaris",
    tagline: "The bush, at the pace of your own footsteps",
    summary:
      "Step out of the vehicle with an armed guide and a tracker to read the smaller stories of the bush — spoor, birdsong, plants and the thrill of being on foot.",
    body: [
      "On foot, the bush changes completely. You hear more, smell more and notice details that pass unseen from a vehicle: the fresh print of a hyena, a dung beetle at work, the medicinal bark a Maasai guide uses for toothache. It is safari at its most immersive.",
      "Walks are led by experienced, qualified guides, usually accompanied by an armed ranger or a local tracker, and typically last two to three hours in the cool of morning or late afternoon. Approaches to larger animals are made carefully and always with an eye on the wind.",
      "Walking is permitted in the private conservancies of the Mara and Laikipia, at Lewa and in Samburu's surrounding community lands, as well as in Tsavo. For the adventurous, we can arrange multi-day walking safaris with fly camps, where you move between simple overnight stops under canvas.",
    ],
    hero: img("walking-safari"),
    bestFor: ["Returning safari travellers", "Active couples and friends", "Nature lovers", "Slow travel"],
    season: "Year-round, avoiding the heaviest rains in April–May",
    destinationSlugs: ["laikipia-ol-pejeta", "lewa", "samburu", "tsavo"],
  },
  {
    slug: "horseback-safaris",
    name: "Horseback safaris",
    tagline: "Ride among zebra and giraffe",
    summary:
      "For confident riders, there is no finer way to cross the plains. Wildlife accepts a horse as just another animal, allowing remarkably close encounters.",
    body: [
      "Riding on safari is something else entirely. Plains game see a horse and rider as a single, unthreatening shape, so you can canter alongside zebra, walk quietly among giraffe and approach eland and oryx in a way no vehicle can match.",
      "Laikipia and the Mara conservancies are the heartlands of riding safaris in Kenya. Options range from a morning hack from your lodge to multi-day mobile rides, moving between camps and covering serious distance across wild country.",
      "Horses are well schooled and matched to each rider, but most rides require guests to be confident at all paces, including a sustained canter, and there are weight limits for the horses' welfare. Beginners can often enjoy gentle walking rides; we will advise honestly on what suits your experience.",
    ],
    hero: img("horseback"),
    bestFor: ["Experienced riders", "Adventurous travellers", "Families who ride", "Close plains-game encounters"],
    season: "June–October and December–March",
    destinationSlugs: ["laikipia-ol-pejeta", "masai-mara", "lewa"],
  },
  {
    slug: "rhino-tracking",
    name: "Rhino tracking",
    tagline: "On the trail of Kenya's conservation success",
    summary:
      "Track black and white rhino on foot or by vehicle with the rangers who protect them, in the sanctuaries that brought them back from the brink.",
    body: [
      "Kenya's rhino story is one of hard-won recovery. Numbers fell dramatically in the 1970s and 1980s, and today a growing population is protected in intensively guarded sanctuaries. Lewa and Ol Pejeta are among the most successful, and both welcome visitors who want to understand the work up close.",
      "Tracking is led by specialist guides and rangers who follow fresh spoor, dung middens and browse lines until the animal is found. On foot, the moment a black rhino emerges from the scrub is unforgettable. At Ol Pejeta you can also learn about the last two northern white rhino, cared for around the clock.",
      "Activities are arranged through your lodge or conservancy and often include time with anti-poaching teams, tracking dogs or the research staff. A portion of every visit supports the cost of protection — so the experience is as meaningful as it is thrilling.",
    ],
    hero: img("rhino"),
    bestFor: ["Conservation-minded travellers", "Walking enthusiasts", "Photographers", "Families with teenagers"],
    season: "Year-round; dry months (June–October, January–February) make tracking easier",
    destinationSlugs: ["lewa", "laikipia-ol-pejeta", "meru", "lake-nakuru"],
  },
  {
    slug: "bush-and-beach",
    name: "Bush & beach",
    tagline: "Dust and dawn drives, then the Indian Ocean",
    summary:
      "Follow your safari with days of white sand, warm water and Swahili flavour on the Kenyan coast — just a short flight from the bush.",
    body: [
      "After the early starts and full days of a safari, the coast is the perfect counterpoint. Light aircraft link the Mara, Amboseli and Tsavo with the coast in a matter of hours, so you can watch a lion at breakfast and swim in the Indian Ocean by late afternoon.",
      "Each stretch of coast has its own personality. Diani offers long white beaches and easy-going luxury; Watamu has a protected marine park ideal for snorkelling; Lamu is unhurried and timeless, with donkeys in the lanes and dhows on the channel. We match the beach to your mood as carefully as we choose your camp.",
      "We usually recommend at least four nights on the coast to properly unwind. Tsavo pairs especially well with Diani or Watamu by road or air, while Lamu suits travellers who want culture and quiet in equal measure.",
    ],
    hero: img("diani-beach"),
    bestFor: ["Honeymooners", "Families", "Longer trips", "Relaxing after safari"],
    season: "June–March; the coast is quieter and more humid in April–May",
    destinationSlugs: ["diani-beach", "watamu-malindi", "lamu", "tsavo"],
  },
  {
    slug: "honeymoon-safaris",
    name: "Honeymoon safaris",
    tagline: "Private decks, starlit dinners, endless horizons",
    summary:
      "Intimate camps, unhurried days and a few beautifully judged surprises — a honeymoon that feels entirely your own.",
    body: [
      "A safari honeymoon combines adventure with real romance. We choose small, intimate camps with private decks, outdoor baths and plunge pools, where the day can begin with a leopard sighting and end with dinner by lantern light under an enormous sky.",
      "We like to build in moments you will remember for a lifetime: a sunrise balloon flight over the Mara, a private sundowner on a hilltop kopje, a star bed in Laikipia or a dhow sail along the Lamu archipelago. Nothing is rushed, and nothing is generic.",
      "Most of our honeymooners finish with time on the coast, whether in a secluded Diani villa or a whitewashed house in Shela. Tell us how you like to travel, and we will shape the journey around you both.",
    ],
    hero: img("honeymoon"),
    bestFor: ["Newlyweds", "Anniversaries", "Couples seeking privacy", "Bush & beach combinations"],
    season: "Year-round; June–October and December–March are ideal",
    destinationSlugs: ["masai-mara", "laikipia-ol-pejeta", "lamu", "diani-beach"],
  },
  {
    slug: "family-safaris",
    name: "Family safaris",
    tagline: "Adventures that every generation will remember",
    summary:
      "Private vehicles, family tents and guides who love sharing the bush with children — safari designed around your family's rhythm.",
    body: [
      "A safari is one of the great family adventures, and Kenya does it exceptionally well. We favour camps and lodges with family tents or private houses, flexible meal times and a private vehicle, so you can set your own pace and stop whenever curiosity strikes.",
      "Many conservancies offer activities designed for younger guests: tracking lessons, bow-and-arrow sessions with Maasai guides, junior ranger programmes and bug hunts with a magnifying glass. Some camps have age limits for walks or open vehicles, and we always check these before recommending a property.",
      "We keep travel times short and plan routes that balance excitement with downtime — a swimming pool in Laikipia, a free afternoon by the river, a few days on the beach at the end. Lower-malaria-risk areas at altitude and child-friendly flight times are all part of the conversation.",
    ],
    hero: img("family-safari"),
    bestFor: ["Families with children of all ages", "Multi-generational groups", "School holidays", "Private vehicle safaris"],
    season: "Year-round; school holidays in July–August and December book up early",
    destinationSlugs: ["laikipia-ol-pejeta", "masai-mara", "diani-beach", "naivasha-hells-gate"],
  },
  {
    slug: "photographic-safaris",
    name: "Photographic safaris",
    tagline: "Better light, better positioning, better images",
    summary:
      "Specialist vehicles, patient guides and timings built around the light — whether you shoot with a phone or a 600mm lens.",
    body: [
      "Great wildlife photography comes down to light, patience and position. On a photographic safari we arrange a private vehicle, often with camera mounts, beanbags and a swivel seat, so you can work without compromise and stay with a subject for as long as it takes.",
      "Our guides understand photography: they know how to position the vehicle for the light, anticipate behaviour and keep the background clean. For serious shooters, we can arrange a professional photographic host or a dedicated photo-hide at a waterhole.",
      "The Mara during the migration is an obvious choice, but Amboseli's elephants beneath Kilimanjaro, Samburu's unique northern species and the flamingo-lined shores of Lake Nakuru all offer exceptional, varied opportunities.",
    ],
    hero: img("photographer"),
    bestFor: ["Keen amateurs and professionals", "Private vehicle users", "Migration season", "Small groups"],
    season: "Year-round; July–October for action, November–March for greener, softer landscapes",
    destinationSlugs: ["masai-mara", "amboseli", "samburu", "lake-nakuru"],
  },
  {
    slug: "maasai-samburu-culture",
    name: "Maasai & Samburu culture",
    tagline: "Meet the communities who share the land with wildlife",
    summary:
      "Respectful, community-led visits that go beyond the performance — guided by the people whose land, knowledge and stewardship make Kenya's wildlife areas possible.",
    body: [
      "The Maasai and Samburu are pastoralist communities whose way of life is closely tied to the land and the wildlife around it. Many of the guides, rangers and camp staff you will meet come from these communities, and their knowledge of animal behaviour and the landscape is extraordinary.",
      "We avoid staged 'village shows'. Instead, we arrange visits led by community members themselves — perhaps a morning walk to learn about medicinal plants, time with a family at their home, a visit to a school or women's beadwork collective, or a conversation about grazing and conservation. Visits are agreed with the community, and fees go directly to them.",
      "These encounters offer a genuine exchange and a deeper understanding of how people and wildlife coexist. We brief you beforehand on etiquette — including always asking before taking photographs — so the experience is respectful on both sides.",
    ],
    hero: img("maasai-culture"),
    bestFor: ["Curious travellers", "Families", "Conservancy stays", "Meaningful connections"],
    season: "Year-round",
    destinationSlugs: ["masai-mara", "samburu", "amboseli", "laikipia-ol-pejeta"],
  },
  {
    slug: "mount-kenya-trekking",
    name: "Mount Kenya trekking",
    tagline: "Africa's second-highest mountain, wild and uncrowded",
    summary:
      "Trek through bamboo forest and giant lobelias to Point Lenana at 4,985 metres, on a mountain far quieter than Kilimanjaro.",
    body: [
      "Mount Kenya is an ancient extinct volcano straddling the equator, its jagged summit peaks reaching 5,199 metres at Batian. For trekkers, the goal is Point Lenana, at 4,985 metres, reachable without technical climbing and rewarded with views across the whole of central Kenya.",
      "The routes pass through remarkable zones: montane forest home to elephant and colobus monkeys, dense bamboo, open moorland and an otherworldly alpine landscape of giant groundsels and lobelias. The Sirimon and Chogoria routes are among the most scenic, and a traverse combining them is a firm favourite.",
      "Most treks take five to seven days, allowing time to acclimatise properly. We arrange experienced mountain guides, porters and cooks, and can pair the climb with a relaxing stay in Laikipia or on the coast afterwards.",
    ],
    hero: img("mount-kenya"),
    bestFor: ["Fit, adventurous travellers", "Hikers seeking quieter trails", "Combining with Laikipia", "Active groups"],
    season: "January–February and late June–October",
    destinationSlugs: ["mount-kenya", "laikipia-ol-pejeta"],
  },
  {
    slug: "lamu-dhow-sailing",
    name: "Dhow sailing in Lamu",
    tagline: "Sail the Swahili coast as traders have for centuries",
    summary:
      "Board a traditional wooden dhow to explore the mangrove channels and sandbanks of the Lamu archipelago, with fresh seafood cooked on board.",
    body: [
      "Lamu Old Town is a UNESCO World Heritage Site and one of the oldest continuously inhabited Swahili settlements in East Africa. Its harbour is still busy with dhows — the lateen-sailed wooden vessels that have carried goods along the Indian Ocean for centuries.",
      "A day under sail might take you through the mangroves to a deserted sandbank for swimming and snorkelling, to Manda Island's ruins at Takwa, or simply drifting while the crew grills freshly caught fish. Sunset sails, with the light softening over Shela and the dunes, are particularly lovely.",
      "For a longer escape, we can arrange an overnight dhow trip, sleeping on deck beneath the stars. Combined with a few days in a traditional Lamu house, it is the most unhurried, atmospheric way to end a safari.",
    ],
    hero: img("lamu-dhow"),
    bestFor: ["Honeymooners", "Culture lovers", "Slow travel", "Ending a safari in style"],
    season: "July–March, avoiding the strongest winds and rains of April–June",
    destinationSlugs: ["lamu"],
  },
  {
    slug: "gorilla-trekking-extensions",
    name: "Gorilla trekking extensions",
    tagline: "An hour with mountain gorillas, a short flight away",
    summary:
      "Extend your Kenyan safari with a few days in Rwanda's Volcanoes National Park or Uganda's Bwindi — face to face with mountain gorillas in the wild.",
    body: [
      "Spending an hour with a family of mountain gorillas is among the most moving wildlife encounters on earth. From Nairobi, a short flight takes you to Kigali in Rwanda or Entebbe in Uganda, making a gorilla extension a natural addition to a Kenyan safari.",
      "In Rwanda's Volcanoes National Park, treks begin on the bamboo-clad slopes of the Virunga volcanoes and are usually shorter and more accessible. Uganda's Bwindi Impenetrable Forest lives up to its name — steeper, denser terrain, but with more habituated families and lower permit prices.",
      "Permits are strictly limited each day, so we recommend booking several months ahead, especially for peak months. Permit fees are set by the Rwandan and Ugandan authorities and are included in your tailor-made quote. A reasonable level of fitness is needed, and porters are available to help.",
    ],
    hero: img("gorilla"),
    bestFor: ["Once-in-a-lifetime experiences", "Primate enthusiasts", "Extending a Kenya safari", "Active travellers"],
    season: "Year-round; drier months of June–September and December–February are easiest",
    destinationSlugs: ["nairobi", "masai-mara"],
  },
];

export const getExperience = (slug: string) => experiences.find((e) => e.slug === slug);
