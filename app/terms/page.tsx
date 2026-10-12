import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Booking terms", description: "The terms that apply when you book a safari with Safari Njema.", path: "/terms" });

export default function Page() {
  return (
    <LegalPage title="Booking terms">
      <p>The terms that apply when you book a safari with Safari Njema.</p>
    </LegalPage>
  );
}
