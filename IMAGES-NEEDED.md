# Images needed

## Illustrations replaced with real photos (November 2026)

Every slot that showed the site's drawn tone artwork now shows a real photograph. The drawn fallback is gone: `NEXT_PUBLIC_IMAGE_PLACEHOLDERS`, `public/placeholders/`, `scripts/make-placeholders.mjs` and the hero's drawn ridge cut-out (`public/hero/foreground.svg`) have been removed; the hero photo now fades into the dark ground with a CSS gradient. Commons photos are downloaded into `public/photos` (author and licence in `public/photos/CREDITS.md`); Unsplash photos are referenced by id. Where no photo of the exact subject was found, the nearest true subject is used and the alt text says what the photo shows.

| Done | Image key | Was meant to show | Photo now used | Nearest-match note |
| --- | --- | --- | --- | --- |
| [x] | `mara-plains` | the Masai Mara plains | Commons `masai-mara-plains.jpg` |  |
| [x] | `migration-crossing` | wildebeest crossing the Mara River | Commons `mara-river-crossing.jpg` |  |
| [x] | `wildebeest-herd` | a column of wildebeest on the savanna | Commons `mara-wildebeest-herd.jpg` |  |
| [x] | `balloon-sunrise` | a hot-air balloon over the plains at sunrise | Commons `mara-balloon-dawn.jpg` | Sunrise in the Mara on a balloon morning; balloon not prominent |
| [x] | `cheetah` | a cheetah on a termite mound | Commons `mara-cheetah.jpg` | Cheetah in the Mara grass, not on a termite mound |
| [x] | `reticulated-giraffe` | a reticulated giraffe in Samburu | Commons `samburu-reticulated-giraffe.jpg` |  |
| [x] | `buffalo` | a Cape buffalo | Commons `nakuru-buffalo.jpg` | Lake Nakuru |
| [x] | `walking-safari` | a guided walking safari | Commons `ol-kinyei-walking-safari.jpg` |  |
| [x] | `horseback` | a horseback safari | Commons `kenya-horseback-safari.jpg` |  |
| [x] | `maasai-culture` | Maasai elders in red shuka cloth | Commons `amboseli-maasai.jpg` | Maasai at Amboseli, men and women |
| [x] | `samburu-landscape` | the Samburu landscape | Commons `samburu-landscape.jpg` |  |
| [x] | `laikipia-plateau` | the Laikipia plateau with Mount Kenya | Commons `ol-pejeta-impala.jpg` | Impala at Ol Pejeta (Laikipia); Mount Kenya not in frame |
| [x] | `mount-kenya` | the peaks of Mount Kenya | Commons `mount-kenya-batian-nelion.jpg` |  |
| [x] | `tsavo-red-earth` | red-dusted elephants in Tsavo | Commons `tsavo-red-elephant.jpg` |  |
| [x] | `lake-naivasha` | Lake Naivasha | Commons `lake-naivasha.jpg` |  |
| [x] | `hells-gate` | the cliffs of Hell’s Gate | Commons `hells-gate-cliffs.jpg` |  |
| [x] | `nairobi-skyline` | Nairobi National Park with the city skyline | Commons `nairobi-park-skyline.jpg` |  |
| [x] | `meru-river` | a river in Meru National Park | Commons `meru-river-pool.jpg` |  |
| [x] | `lewa-landscape` | the Lewa grasslands | Unsplash `photo-1535680671320-c566e5ecddf7` |  |
| [x] | `diani-beach` | Diani Beach | Unsplash `photo-1651860282131-e3257674ccd1` |  |
| [x] | `lamu-dhow` | a dhow off Lamu | Unsplash `photo-1711802536786-149a0d0c5879` |  |
| [x] | `lamu-town` | a carved doorway in Lamu Old Town | Unsplash `photo-1711802536772-0ef59886bc1b` | Lamu Town waterfront, not a carved doorway |
| [x] | `watamu-coast` | the Watamu coast | Unsplash `photo-1667935837291-1dc178866251` | Kenya south-coast water (Unsplash: "The beautiful south coast of Kenya"); no verified Watamu photo found |
| [x] | `beach-villa` | a beach villa on the Kenyan coast | Unsplash `photo-1708119063168-4785d1359824` |  |
| [x] | `tented-camp` | a tented safari camp | Unsplash `photo-1709420838688-ccd0517d6a2d` |  |
| [x] | `tent-interior` | the interior of a safari tent | Unsplash `photo-1709521681958-e5337c2478f2` | Pool at a Naboisho camp; no verified Kenyan tent-interior photo found |
| [x] | `bush-dinner` | a dinner set up in the bush | Unsplash `photo-1535758180808-99b1752d8522` | An elephant at a dinner table in a Mara camp |
| [x] | `sundowner` | sundowner drinks on safari | Unsplash `photo-1599921777960-ac7c40d1bc60` | An acacia at sunset in the Mara |
| [x] | `gorilla` | a mountain gorilla | Unsplash `photo-1711198587711-2020c1e4a3a3` | Bwindi, Uganda (the gorilla extension) |
| [x] | `family-safari` | a family on safari | Unsplash `photo-1709567484031-87bc70607500` | A family walking with guides (location not stated on Unsplash) |
| [x] | `honeymoon` | a honeymoon deck at sunset | Commons `meru-lodge-terrace.jpg` | A lodge terrace over Meru National Park |
| [x] | `photographer` | a photographer on safari | Unsplash `photo-1535082623926-b39352a03fb7` | A safari vehicle among wildebeest in the Mara |
| [x] | `specialist` | a safari specialist | Unsplash `photo-1499591934245-40b55745b905` | A route planned on a paper map |
| [x] | `conservation` | a ranger on patrol | Commons `ol-pejeta-rhinos.jpg` | White rhinos at Ol Pejeta Conservancy, not a ranger |
| [x] | `binoculars` | binoculars on a safari map | Unsplash `photo-1452421822248-d4c2b47f0c81` | A trip-planning flat lay (notebook, camera, lens) |

## Photos kept, still to verify

The remaining Unsplash photos show plausible subjects (lions, a leopard, rhino, zebra, Kilimanjaro above the plains, a lodge pool, a campfire). Their alt text has been corrected to describe what each photo actually shows, but their locations have not been checked. Before launch, confirm each one on its Unsplash page, or replace it with your own photography.

## Named venues

No real hotel, lodge, restaurant or café is named on the site. The stays in `data/stays.ts` are fictional sample properties. When real partner camps and lodges replace them, each must show that real property, using images the venue allows (its media kit or press page with terms that allow use by travel partners, or Creative Commons images with credit).
