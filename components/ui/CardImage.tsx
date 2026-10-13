import Image from "next/image";
import type { Img } from "@/data/types";
import { cn } from "@/lib/utils";

/** Image frame with the signature slow hover-zoom. Parent needs the `group` class. */
export function CardImage({
  image,
  sizes,
  className,
  priority,
  overlay,
}: {
  image: Img;
  sizes: string;
  className?: string;
  priority?: boolean;
  overlay?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[var(--radius-media)] bg-sand", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-premium)] group-hover:scale-[1.05]"
      />
      {overlay && <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />}
    </div>
  );
}
