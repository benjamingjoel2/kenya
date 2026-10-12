import { site } from "@/config/site";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ChatIcon, MapIcon, ScaleIcon, SunIcon, TentIcon, UserIcon } from "@/components/ui/Icons";

const items = [
  { icon: UserIcon, title: "One dedicated specialist", text: "The same person from first message to flight home." },
  { icon: SunIcon, title: `${site.stats.yearsExperience}+ years in Kenya`, text: "Hard-won knowledge of camps, guides and seasons." },
  { icon: TentIcon, title: `${site.stats.partnerCamps}+ partner camps & lodges`, text: "Personally visited, from intimate tented camps to beach villas." },
  { icon: ScaleIcon, title: "Fair, transparent pricing", text: "Clear quotes with park fees and flights itemised. No hidden extras." },
  { icon: ChatIcon, title: "24/7 WhatsApp support", text: "A real person on the end of the line while you travel." },
  { icon: MapIcon, title: `${site.stats.parksCovered}+ parks & regions`, text: "From the Mara to Samburu, Laikipia, Tsavo and the coast." },
];

export function TrustRow() {
  return (
    <section aria-label="Why travel with Safari Njema" className="border-b border-line bg-cream">
      <RevealGroup className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8 lg:py-20" stagger={0.06}>
        {items.map(({ icon: Icon, title, text }) => (
          <RevealItem key={title} className="flex flex-col gap-3">
            <Icon className="h-7 w-7 text-gold-dark" />
            <h2 className="font-sans text-[0.9375rem] font-semibold tracking-normal text-charcoal">{title}</h2>
            <p className="text-sm leading-relaxed text-stone">{text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
