# Images needed

## Wrong photos replaced by illustrations

An audit (October 2026) found that many stock photos in `data/images.ts` did not show what their caption said, for example a husky for "Cape buffalo", radishes for the Laikipia plateau, Cape Town for Hell’s Gate, Mount Everest for Meru, the Maldives for Diani Beach and Canada’s Moraine Lake for a tented camp. Those slots now show the site's own illustrated artwork (flagged as a placeholder in the image registry) until a correct photo is sourced. Searching for and checking replacement photos was not possible from the build environment, so each one is listed here.

| Image key | Should show | Used in | What to source |
| --- | --- | --- | --- |
| `mara-plains` | the Masai Mara plains | registry only (not currently shown) | A location-verified photo of the Masai Mara plains (its Unsplash page location matches, or Creative Commons with credit) |
| `migration-crossing` | wildebeest crossing the Mara River | `data/destinations.ts` `data/experiences.ts` `data/routes.ts` `data/safaris.ts` `content/blog/when-to-see-the-great-migration.mdx` | A location-verified photo of wildebeest crossing the Mara River (its Unsplash page location matches, or Creative Commons with credit) |
| `wildebeest-herd` | a column of wildebeest on the savanna | registry only (not currently shown) | A location-verified photo of a column of wildebeest on the savanna (its Unsplash page location matches, or Creative Commons with credit) |
| `balloon-sunrise` | a hot-air balloon over the plains at sunrise | `app/experiences/page.tsx` `app/plan-your-safari/page.tsx` `components/home/HomeSections.tsx` `data/destinations.ts` `data/experiences.ts` | A location-verified photo of a hot-air balloon over the plains at sunrise (its Unsplash page location matches, or Creative Commons with credit) |
| `cheetah` | a cheetah on a termite mound | registry only (not currently shown) | A location-verified photo of a cheetah on a termite mound (its Unsplash page location matches, or Creative Commons with credit) |
| `reticulated-giraffe` | a reticulated giraffe in Samburu | `data/destinations.ts` `data/stays.ts` `data/routes.ts` `data/safaris.ts` | A location-verified photo of a reticulated giraffe in Samburu (its Unsplash page location matches, or Creative Commons with credit) |
| `buffalo` | a Cape buffalo | `data/destinations.ts` | A location-verified photo of a Cape buffalo (its Unsplash page location matches, or Creative Commons with credit) |
| `walking-safari` | a guided walking safari | `data/destinations.ts` `data/experiences.ts` | A location-verified photo of a guided walking safari (its Unsplash page location matches, or Creative Commons with credit) |
| `horseback` | a horseback safari | `data/destinations.ts` `data/experiences.ts` `data/stays.ts` | A location-verified photo of a horseback safari (its Unsplash page location matches, or Creative Commons with credit) |
| `maasai-culture` | Maasai elders in red shuka cloth | `app/about/page.tsx` `components/home/HomeSections.tsx` `data/destinations.ts` `data/experiences.ts` | A location-verified photo of Maasai elders in red shuka cloth (its Unsplash page location matches, or Creative Commons with credit) |
| `samburu-landscape` | the Samburu landscape | `data/destinations.ts` `data/stays.ts` | A location-verified photo of the Samburu landscape (its Unsplash page location matches, or Creative Commons with credit) |
| `laikipia-plateau` | the Laikipia plateau with Mount Kenya | `data/destinations.ts` `data/stays.ts` `data/routes.ts` `data/safaris.ts` | A location-verified photo of the Laikipia plateau with Mount Kenya (its Unsplash page location matches, or Creative Commons with credit) |
| `mount-kenya` | the peaks of Mount Kenya | `components/home/HomeSections.tsx` `components/home/KenyaDotMap.tsx` `data/destinations.ts` `data/experiences.ts` | A location-verified photo of the peaks of Mount Kenya (its Unsplash page location matches, or Creative Commons with credit) |
| `tsavo-red-earth` | red-dusted elephants in Tsavo | `data/destinations.ts` | A location-verified photo of red-dusted elephants in Tsavo (its Unsplash page location matches, or Creative Commons with credit) |
| `lake-naivasha` | Lake Naivasha | `data/destinations.ts` | A location-verified photo of Lake Naivasha (its Unsplash page location matches, or Creative Commons with credit) |
| `hells-gate` | the cliffs of Hell’s Gate | `data/destinations.ts` | A location-verified photo of the cliffs of Hell’s Gate (its Unsplash page location matches, or Creative Commons with credit) |
| `nairobi-skyline` | Nairobi National Park with the city skyline | `data/destinations.ts` | A location-verified photo of Nairobi National Park with the city skyline (its Unsplash page location matches, or Creative Commons with credit) |
| `meru-river` | a river in Meru National Park | `data/destinations.ts` | A location-verified photo of a river in Meru National Park (its Unsplash page location matches, or Creative Commons with credit) |
| `lewa-landscape` | the Lewa grasslands | `data/destinations.ts` `data/stays.ts` | A location-verified photo of the Lewa grasslands (its Unsplash page location matches, or Creative Commons with credit) |
| `diani-beach` | Diani Beach | `components/home/KenyaDotMap.tsx` `data/destinations.ts` `data/experiences.ts` `data/stays.ts` `data/routes.ts` `data/safaris.ts` `content/blog/planning-a-bush-and-beach-trip.mdx` | A location-verified photo of Diani Beach (its Unsplash page location matches, or Creative Commons with credit) |
| `lamu-dhow` | a dhow off Lamu | `app/contact/page.tsx` `components/home/HomeSections.tsx` `data/destinations.ts` `data/experiences.ts` `data/stays.ts` | A location-verified photo of a dhow off Lamu (its Unsplash page location matches, or Creative Commons with credit) |
| `lamu-town` | a carved doorway in Lamu Old Town | `data/destinations.ts` `data/stays.ts` | A location-verified photo of a carved doorway in Lamu Old Town (its Unsplash page location matches, or Creative Commons with credit) |
| `watamu-coast` | the Watamu coast | `data/destinations.ts` `data/stays.ts` | A location-verified photo of the Watamu coast (its Unsplash page location matches, or Creative Commons with credit) |
| `beach-villa` | a beach villa on the Kenyan coast | `app/stays/page.tsx` `data/destinations.ts` `data/stays.ts` `data/types.ts` | A location-verified photo of a beach villa on the Kenyan coast (its Unsplash page location matches, or Creative Commons with credit) |
| `tented-camp` | a tented safari camp | `app/stays/page.tsx` `data/stays.ts` `data/types.ts` | A location-verified photo of a tented safari camp (its Unsplash page location matches, or Creative Commons with credit) |
| `tent-interior` | the interior of a safari tent | `data/stays.ts` | A location-verified photo of the interior of a safari tent (its Unsplash page location matches, or Creative Commons with credit) |
| `bush-dinner` | a dinner set up in the bush | `data/stays.ts` | A location-verified photo of a dinner set up in the bush (its Unsplash page location matches, or Creative Commons with credit) |
| `sundowner` | sundowner drinks on safari | `app/about/page.tsx` `data/destinations.ts` `data/stays.ts` | A location-verified photo of sundowner drinks on safari (its Unsplash page location matches, or Creative Commons with credit) |
| `gorilla` | a mountain gorilla | `data/experiences.ts` `data/routes.ts` `data/safaris.ts` | A location-verified photo of a mountain gorilla (its Unsplash page location matches, or Creative Commons with credit) |
| `family-safari` | a family on safari | `data/experiences.ts` `data/safaris.ts` | A location-verified photo of a family on safari (its Unsplash page location matches, or Creative Commons with credit) |
| `honeymoon` | a honeymoon deck at sunset | `data/destinations.ts` `data/experiences.ts` `data/safaris.ts` | A location-verified photo of a honeymoon deck at sunset (its Unsplash page location matches, or Creative Commons with credit) |
| `photographer` | a photographer on safari | `data/experiences.ts` | A location-verified photo of a photographer on safari (its Unsplash page location matches, or Creative Commons with credit) |
| `specialist` | a safari specialist | registry only (not currently shown) | A location-verified photo of a safari specialist (its Unsplash page location matches, or Creative Commons with credit) |
| `conservation` | a ranger on patrol | `app/conservation/page.tsx` `data/destinations.ts` `data/experiences.ts` | A location-verified photo of a ranger on patrol (its Unsplash page location matches, or Creative Commons with credit) |
| `binoculars` | binoculars on a safari map | `app/blog/page.tsx` `data/routes.ts` | A location-verified photo of binoculars on a safari map (its Unsplash page location matches, or Creative Commons with credit) |

## Photos kept, still to verify

The remaining Unsplash photos show plausible subjects (lions, a leopard, rhino, zebra, Kilimanjaro above the plains, a lodge pool, a campfire). Their alt text has been corrected to describe what each photo actually shows, but their locations have not been checked. Before launch, confirm each one on its Unsplash page, or replace it with your own photography.

## Named venues

No real hotel, lodge, restaurant or café is named on the site. The stays in `data/stays.ts` are fictional sample properties. When real partner camps and lodges replace them, each must show that real property, using images the venue allows (its media kit or press page with terms that allow use by travel partners, or Creative Commons images with credit).
