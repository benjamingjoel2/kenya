import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Privacy policy", description: "How Safari Njema collects, uses and protects your personal information.", path: "/privacy" });

export default function Page() {
  return (
    <LegalPage title="Privacy policy" path="/privacy">
      <p>How Safari Njema collects, uses and protects your personal information.</p>
    </LegalPage>
  );
}
