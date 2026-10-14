import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Privacy policy", description: "How Safari Njema collects, uses and protects the personal information you share when you enquire about or book a Kenya safari.", path: "/privacy", noindex: true });

export default function Page() {
  return (
    <LegalPage title="Privacy policy" path="/privacy">
      <p>How Safari Njema collects, uses and protects your personal information.</p>
    </LegalPage>
  );
}
