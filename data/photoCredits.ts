// i18n-skip-strings
// Photo credits: author, licence and source of every Wikimedia Commons photo in public/photos.
// Mirrors public/photos/CREDITS.md; keep the two in step when a photo is swapped.
// Rendered on /photo-credits (linked from the footer). Credits are never shown on the photos themselves.
import type { ImageKey } from "./images";

export type PhotoCredit = {
  file: string;
  /** Registry key of the image that uses this file (for the thumbnail and its alt text). */
  imageKey: ImageKey;
  /** Title of the file on Wikimedia Commons. */
  title: string;
  /** Empty when Commons gives no author name (the page then points to the Commons page). */
  author: string;
  licence: string;
  /** Empty for public-domain files. */
  licenceUrl: string;
  sourceUrl: string;
};

export const photoCredits: PhotoCredit[] = [
  { file: "amboseli-maasai.jpg", imageKey: "maasai-culture", title: "Maasai people from Amboseli.jpg", author: "Ninaras", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Maasai_people_from_Amboseli.jpg" },
  { file: "hells-gate-cliffs.jpg", imageKey: "hells-gate", title: "Cliff on the Hells Gate Game Park.jpg", author: "Shadychiri", licence: "CC BY 4.0", licenceUrl: "https://creativecommons.org/licenses/by/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Cliff_on_the_Hells_Gate_Game_Park.jpg" },
  { file: "kenya-horseback-safari.jpg", imageKey: "horseback", title: "Horseback Safari in Kenya.jpg", author: "Hugh Lunnon", licence: "CC BY-SA 2.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Horseback_Safari_in_Kenya.jpg" },
  { file: "lake-naivasha.jpg", imageKey: "lake-naivasha", title: "Lake Naivasha Shoreline.jpg", author: "Kenenock", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Lake_Naivasha_Shoreline.jpg" },
  { file: "mara-balloon-dawn.jpg", imageKey: "balloon-sunrise", title: "Maasai Mara National Reserve Kenya.jpg", author: "Svein-Magne Tunli - tunliweb.no", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Maasai_Mara_National_Reserve_Kenya.jpg" },
  { file: "mara-cheetah.jpg", imageKey: "cheetah", title: "Guepardo (Acinonyx jubatus), reserva natural Masái Mara, Kenia, 2024-05-19, DD 49.jpg", author: "Diego Delso", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Guepardo_(Acinonyx_jubatus),_reserva_natural_Mas%C3%A1i_Mara,_Kenia,_2024-05-19,_DD_49.jpg" },
  { file: "mara-river-crossing.jpg", imageKey: "migration-crossing", title: "Western white-bearded wildebeest (Connochaetes taurinus mearnsi) Mara River crossing 2d.jpg", author: "Charles J. Sharp", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Western_white-bearded_wildebeest_(Connochaetes_taurinus_mearnsi)_Mara_River_crossing_2d.jpg" },
  { file: "mara-wildebeest-herd.jpg", imageKey: "wildebeest-herd", title: "Western white-bearded wildebeest (Connochaetes taurinus mearnsi) Mara River crossing 1a.jpg", author: "Charles J. Sharp", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Western_white-bearded_wildebeest_(Connochaetes_taurinus_mearnsi)_Mara_River_crossing_1a.jpg" },
  { file: "masai-mara-plains.jpg", imageKey: "mara-plains", title: "Masai Mara.JPG", author: "", licence: "CC BY-SA 2.5", licenceUrl: "https://creativecommons.org/licenses/by-sa/2.5", sourceUrl: "https://commons.wikimedia.org/wiki/File:Masai_Mara.JPG" },
  { file: "meru-lodge-terrace.jpg", imageKey: "honeymoon", title: "Meru National Park, Kenya (30819593984).jpg", author: "Nina R from Africa", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Meru_National_Park,_Kenya_(30819593984).jpg" },
  { file: "meru-river-pool.jpg", imageKey: "meru-river", title: "Meru National Park, Kenya - 31624346696.jpg", author: "Nina R", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Meru_National_Park,_Kenya_-_31624346696.jpg" },
  { file: "mount-kenya-batian-nelion.jpg", imageKey: "mount-kenya", title: "Batian Nelion and pt Slade in the foreground Mt Kenya.JPG", author: "User:Chris 73", licence: "CC BY-SA 3.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Batian_Nelion_and_pt_Slade_in_the_foreground_Mt_Kenya.JPG" },
  { file: "nairobi-park-skyline.jpg", imageKey: "nairobi-skyline", title: "A giraffe with a beautiful background of Nairobi City Skyline.jpg", author: "Alexmbogo", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:A_giraffe_with_a_beautiful_background_of_Nairobi_City_Skyline.jpg" },
  { file: "nakuru-buffalo.jpg", imageKey: "buffalo", title: "Búfalo cafre (Syncerus caffer), parque nacional del lago Nakuru, Kenia, 2024-05-18, DD 85.jpg", author: "Diego Delso", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:B%C3%BAfalo_cafre_(Syncerus_caffer),_parque_nacional_del_lago_Nakuru,_Kenia,_2024-05-18,_DD_85.jpg" },
  { file: "ol-kinyei-walking-safari.jpg", imageKey: "walking-safari", title: "2015-06-15 Maasai guide shoots a traditional hunting bow and arrow during a walking safari, Ol Kinyei Conservancy in the Maasai Mara, Kenya 0035.jpg", author: "Make it Kenya", licence: "Public domain", licenceUrl: "", sourceUrl: "https://commons.wikimedia.org/wiki/File:2015-06-15_Maasai_guide_shoots_a_traditional_hunting_bow_and_arrow_during_a_walking_safari,_Ol_Kinyei_Conservancy_in_the_Maasai_Mara,_Kenya_0035.jpg" },
  { file: "ol-pejeta-impala.jpg", imageKey: "laikipia-plateau", title: "Impala, Ol Pejeta Conservancy, Kenya (32921970948).jpg", author: "Ray in Manila", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Impala,_Ol_Pejeta_Conservancy,_Kenya_(32921970948).jpg" },
  { file: "ol-pejeta-rhinos.jpg", imageKey: "conservation", title: "Southern White Rhinos, Ol Pejeta Conservancy, Kenya (44968104354).jpg", author: "Ray in Manila", licence: "CC BY 2.0", licenceUrl: "https://creativecommons.org/licenses/by/2.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Southern_White_Rhinos,_Ol_Pejeta_Conservancy,_Kenya_(44968104354).jpg" },
  { file: "samburu-landscape.jpg", imageKey: "samburu-landscape", title: "Reserve samburu faune 2.jpg", author: "Daniel Fafard (Dreamdan)", licence: "CC BY-SA 3.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Reserve_samburu_faune_2.jpg" },
  { file: "samburu-reticulated-giraffe.jpg", imageKey: "reticulated-giraffe", title: "Reticulated giraffe bending over to eat in Samburu National Reserve, Kenya.jpg", author: "Daniel Case", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Reticulated_giraffe_bending_over_to_eat_in_Samburu_National_Reserve,_Kenya.jpg" },
  { file: "tsavo-red-elephant.jpg", imageKey: "tsavo-red-earth", title: "Red elephant in dirt.jpg", author: "Byrdyak", licence: "CC BY-SA 4.0", licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_elephant_in_dirt.jpg" },
];
