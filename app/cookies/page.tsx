import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Cookie policy", description: "How the Safari Njema website uses cookies and similar technologies, and how you can manage your preferences.", path: "/cookies", noindex: true });

export default function Page() {
  return (
    <LegalPage title="Cookie policy" path="/cookies">
      <p>How this website uses cookies and similar technologies.</p>
    </LegalPage>
  );
}
