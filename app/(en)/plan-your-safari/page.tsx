import { buildMetadata } from "@/lib/seo";
import { img } from "@/data/images";
import { mailtoHref, site } from "@/config/site";
import { PageHero } from "@/components/sections/PageHero";
import { PlannerForm } from "@/components/planner/PlannerForm";
import { ChatIcon, ClockIcon, UserIcon } from "@/components/ui/Icons";

export const metadata = buildMetadata({
  title: "Plan your safari",
  description: "Tell us about your dream Kenya safari in five short steps. A dedicated specialist will reply within one working day.",
  path: "/plan-your-safari",
  image: img("balloon-sunrise").src,
});

const promises = [
  { icon: UserIcon, title: "One dedicated specialist", text: "The person who reads this is the person who plans your trip." },
  { icon: ClockIcon, title: "Reply within one working day", text: "First ideas, honest advice and a few questions, never a hard sell." },
  { icon: ChatIcon, title: "No obligation", text: "We refine your itinerary until it feels right. You decide when to book." },
];

export default function PlanYourSafariPage() {
  return (
    <>
      <PageHero
        size="sm"
        image={img("balloon-sunrise")}
        eyebrow="Trip planner"
        title="Plan your safari"
        intro="Five short steps, about three minutes. The more you tell us, the better your first ideas will be."
        crumbs={[{ label: "Home", href: "/" }, { label: "Plan your safari" }]}
      />
      <section className="section-y bg-cream">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <PlannerForm />
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 flex flex-col gap-8 rounded-[var(--radius-card)] bg-sand/70 p-8">
              {promises.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gold-dark" />
                  <div>
                    <p className="font-semibold text-charcoal">{title}</p>
                    <p className="mt-1 text-sm text-stone">{text}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-line pt-6 text-sm text-stone">
                Prefer email? Write to{" "}
                <a href={mailtoHref} className="font-semibold text-acacia underline underline-offset-2">
                  {site.contact.email}
                </a>
                .
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
