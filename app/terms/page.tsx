import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Booking terms", description: "The terms and conditions that apply when you book a tailor-made Kenya safari or beach holiday with Safari Njema.", path: "/terms", noindex: true });

export default function Page() {
  return (
    <LegalPage title="Booking terms" path="/terms">
      <p>The terms that apply when you book a safari with Safari Njema.</p>
    </LegalPage>
  );
}
