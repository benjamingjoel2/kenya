import { img } from "@/data/images";
import { ParallaxBand } from "./ParallaxBand";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function MigrationBand() {
  return (
    <ParallaxBand image={img("migration-crossing")}>
      <div className="container-x flex min-h-[80svh] flex-col items-center justify-center py-28 text-center">
        <Reveal>
          <p className="eyebrow text-gold-pale">July – October · Masai Mara</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-h1 text-white">
            Two million hooves, one river, and a front-row seat you will never forget.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-white/85">
            The best Great Migration camps sell out up to a year ahead. Talk to us early and we will place you where the
            herds are likely to be.
          </p>
          <ButtonLink href="/experiences/great-migration" variant="light" arrow className="mt-10">
            The Great Migration
          </ButtonLink>
        </Reveal>
      </div>
    </ParallaxBand>
  );
}
