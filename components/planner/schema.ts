import { z } from "zod";

export const ROUTE_IDS = ["mara-classic", "mara-amboseli", "mara-laikipia", "samburu-laikipia", "bush-beach", "migration", "gorillas", "not-sure"] as const;
export const BUDGETS = ["value-luxury", "premium", "ultra", "not-sure"] as const;
export const ADD_ONS = ["insurance-info", "international-flights", "light-aircraft", "balloon", "beach"] as const;
export const CONTACT_METHODS = ["email", "whatsapp", "telephone"] as const;

const todayIso = () => new Date().toISOString().slice(0, 10);

export const plannerSchema = z
  .object({
    // Step 1 — When
    arrivalDate: z
      .string()
      .min(1, "Please choose an arrival date.")
      .refine((v) => v >= todayIso(), "Arrival date must be in the future."),
    nights: z.number({ error: "Please enter a number of nights." }).int().min(1, "At least 1 night.").max(50, "Up to 50 nights."),
    dateFlexibility: z.enum(["exact", "approximate"], { error: "Are your dates exact or approximate?" }),
    travellerType: z.enum(["first", "experienced"], { error: "Let us know if this is your first safari." }),
    // Step 2 — Where
    routes: z.array(z.enum(ROUTE_IDS)).min(1, "Choose at least one route, or “Not sure yet”."),
    routeNotes: z.string().max(1000, "Please keep this under 1,000 characters.").optional(),
    // Step 3 — Budget
    budget: z.enum(BUDGETS, { error: "Please choose a budget level." }),
    // Step 4 — Who
    adults: z.number().int().min(1, "At least one adult.").max(20),
    children: z.number().int().min(0).max(10),
    childAges: z.array(z.number({ error: "Age required." }).int().min(0, "Age required.").max(17)),
    addOns: z.array(z.enum(ADD_ONS)),
    // Step 5 — Contact
    name: z.string().trim().min(2, "Please tell us your name."),
    email: z.email("Please enter a valid email address."),
    phoneCode: z.string().min(1),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9 ()-]{6,18}$/, "Please enter a valid phone number."),
    contactMethods: z.array(z.enum(CONTACT_METHODS)).min(1, "Choose at least one way to reach you."),
    notes: z.string().max(2000, "Please keep this under 2,000 characters.").optional(),
  })
  .superRefine((v, ctx) => {
    if (v.childAges.length !== v.children) {
      ctx.addIssue({ code: "custom", path: ["childAges"], message: "Please add an age for each child." });
    }
  });

export type PlannerValues = z.infer<typeof plannerSchema>;

export const STEPS = [
  { id: "when", label: "When", title: "When would you like to travel?", fields: ["arrivalDate", "nights", "dateFlexibility", "travellerType"] },
  { id: "where", label: "Where", title: "Where would you like to go?", fields: ["routes", "routeNotes"] },
  { id: "budget", label: "Style", title: "What style of travel suits you?", fields: ["budget"] },
  { id: "who", label: "Who", title: "Who is travelling?", fields: ["adults", "children", "childAges", "addOns"] },
  { id: "contact", label: "Contact", title: "How can we reach you?", fields: ["name", "email", "phoneCode", "phone", "contactMethods", "notes"] },
] as const satisfies readonly { id: string; label: string; title: string; fields: readonly (keyof PlannerValues)[] }[];

export const defaultPlannerValues: Partial<PlannerValues> = {
  arrivalDate: "",
  nights: 8,
  routes: [],
  routeNotes: "",
  adults: 2,
  children: 0,
  childAges: [],
  addOns: [],
  name: "",
  email: "",
  phoneCode: "+44",
  phone: "",
  contactMethods: ["email"],
  notes: "",
};

export const countryCodes = [
  ["+1", "US/Canada"], ["+44", "UK"], ["+353", "Ireland"], ["+61", "Australia"], ["+64", "New Zealand"],
  ["+49", "Germany"], ["+33", "France"], ["+31", "Netherlands"], ["+41", "Switzerland"], ["+46", "Sweden"],
  ["+47", "Norway"], ["+45", "Denmark"], ["+34", "Spain"], ["+39", "Italy"], ["+971", "UAE"],
  ["+65", "Singapore"], ["+27", "South Africa"], ["+254", "Kenya"], ["+91", "India"], ["+86", "China"], ["+81", "Japan"],
] as const;
