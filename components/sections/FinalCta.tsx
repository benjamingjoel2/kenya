import { img } from "@/data/images";
import { whatsappHref } from "@/config/site";
import { ParallaxBand } from "./ParallaxBand";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function FinalCta({ title = "Plan your safari", text }: { title?: string; text?: string }) {
  return (
    <ParallaxBand image={img("giraffe-sunset")}>
      <div className="container-x flex min-h-[70svh] flex-col justify-center py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold-pale">Your journey starts with a conversation</p>
          <h2 className="mt-6 text-display text-white">{title}</h2>
          <p className="mt-6 max-w-xl text-lead text-white/85">
            {text ??
              "Tell us a little about who is travelling and what you dream of seeing. Your specialist will come back within one working day with ideas, not a sales pitch."}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/plan-your-safari" variant="gold" arrow>
              Plan your safari
            </ButtonLink>
            <ButtonLink href={whatsappHref()} variant="outline-light">
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </span>
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </ParallaxBand>
  );
}
