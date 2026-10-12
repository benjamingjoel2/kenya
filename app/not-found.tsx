import { img } from "@/data/images";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero size="lg" image={img("zebra")} eyebrow="404" title="This trail has gone cold" intro="The page you were looking for has wandered off. Let's get you back on track.">
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/" variant="gold" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/safaris" variant="outline-light">
          Explore safaris
        </ButtonLink>
      </div>
    </PageHero>
  );
}
