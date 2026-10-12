import { img } from "./images";
import type { Img } from "./types";

/** Route combinations offered in the trip planner (step 2). */
export type PlannerRoute = { id: string; name: string; blurb: string; image: Img };

export const plannerRoutes: PlannerRoute[] = [
  { id: "mara-classic", name: "Masai Mara classic", blurb: "Big cats and big skies in Kenya's most famous reserve.", image: img("lion-pride") },
  { id: "mara-amboseli", name: "Mara & Amboseli", blurb: "Savanna plains plus elephants beneath Kilimanjaro.", image: img("elephant-kilimanjaro") },
  { id: "mara-laikipia", name: "Mara & Laikipia", blurb: "Classic game viewing paired with rhino country and walking.", image: img("laikipia-plateau") },
  { id: "samburu-laikipia", name: "Samburu & Laikipia", blurb: "The wild north: rare species, rivers and big landscapes.", image: img("reticulated-giraffe") },
  { id: "bush-beach", name: "Bush & beach", blurb: "Safari, then barefoot days on Diani or Lamu.", image: img("diani-beach") },
  { id: "migration", name: "Great Migration special", blurb: "July–October river crossings, timed and placed with care.", image: img("migration-crossing") },
  { id: "gorillas", name: "Kenya & gorilla trekking", blurb: "Add Rwanda or Uganda for an hour with mountain gorillas.", image: img("gorilla") },
  { id: "not-sure", name: "Not sure yet", blurb: "Tell us what you love and we'll suggest a route.", image: img("binoculars") },
];

export const budgetTiers = [
  { id: "value-luxury", name: "Value luxury", range: "approx. $450–700", note: "per person per day", text: "Comfortable, characterful camps with excellent guiding, often mixing road and air travel." },
  { id: "premium", name: "Premium", range: "approx. $700–1,200", note: "per person per day", text: "Private conservancies, smaller camps and light-aircraft flights between parks." },
  { id: "ultra", name: "Ultra luxury", range: "approx. $1,200+", note: "per person per day", text: "The finest camps and villas, private vehicles and exclusive-use options." },
  { id: "not-sure", name: "Not sure yet", range: "", note: "", text: "Happy to see a few options. Your specialist will explain the trade-offs." },
] as const;

export const addOns = [
  { id: "insurance-info", name: "Travel insurance information", text: "We'll share what to look for in a policy (we don't sell insurance)." },
  { id: "international-flights", name: "International flights", text: "Help finding flights to Nairobi or Mombasa." },
  { id: "light-aircraft", name: "Light-aircraft safari flights", text: "Fly between parks instead of driving." },
  { id: "balloon", name: "Hot air balloon safari", text: "A dawn flight over the Mara with champagne breakfast." },
  { id: "beach", name: "Beach extension", text: "A few days on Diani, Watamu or Lamu to finish." },
] as const;
