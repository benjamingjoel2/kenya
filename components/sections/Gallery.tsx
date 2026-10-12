import Image from "next/image";
import type { Img } from "@/data/types";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Gallery({ images }: { images: Img[] }) {
  return (
    <RevealGroup className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.slice(0, 3).map((im, i) => (
        <RevealItem key={`${im.src}-${i}`} className={cn("group relative overflow-hidden rounded-[var(--radius-card)]", i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-[3/4]" : "aspect-[3/4]")}>
          <Image src={im.src} alt={im.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
