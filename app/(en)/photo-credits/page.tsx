import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";
import { photoCredits } from "@/data/photoCredits";
import { img } from "@/data/images";

export const metadata = buildMetadata({ title: "Photo credits", description: "Who took the photographs on the Safari Njema website, the licence each one is used under and where to find the original.", path: "/photo-credits" });

export default function Page() {
  return (
    <LegalPage title="Photo credits" path="/photo-credits" updated="13 November 2026">
      <p>Many photographs on this website come from Wikimedia Commons and are used under Creative Commons licences. The photographers and licences are listed here rather than on the photos themselves. Follow the source link to see each original and its full licence details.</p>
      <div role="list" className="mt-10 flex flex-col divide-y divide-charcoal/10 border-y border-charcoal/10">
        {photoCredits.map((c) => {
          const image = img(c.imageKey);
          return (
            <div role="listitem" key={c.file} className="flex gap-4 py-6 sm:gap-5">
              <Image src={image.src} alt={image.alt} width={128} height={96} sizes="128px" loading="lazy" className="h-16 w-20 shrink-0 sm:h-24 sm:w-32 rounded-[var(--radius-media)] object-cover" />
              <div className="min-w-0 text-base leading-relaxed">
                <p className="font-medium text-charcoal [overflow-wrap:anywhere]">{c.title}</p>
                <p className="text-stone">
                  {c.author ? <>By {c.author}</> : <>Author named on the source page</>}
                  {" · "}
                  {c.licenceUrl ? (
                    <a href={c.licenceUrl} rel="license noopener" target="_blank" className="underline underline-offset-2 hover:text-charcoal">{c.licence}</a>
                  ) : (
                    <>Public domain</>
                  )}
                  {" · "}
                  <a href={c.sourceUrl} rel="noopener" target="_blank" className="underline underline-offset-2 hover:text-charcoal">Source on Wikimedia Commons</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-10">The other photographs on this website come from Unsplash and are used under the <a href="https://unsplash.com/license" rel="noopener" target="_blank">Unsplash licence</a>.</p>
    </LegalPage>
  );
}
