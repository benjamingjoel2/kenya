import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Cookie policy", description: "How this website uses cookies and similar technologies.", path: "/cookies" });

export default function Page() {
  return (
    <LegalPage title="Cookie policy" path="/cookies">
      <p>How this website uses cookies and similar technologies.</p>
    </LegalPage>
  );
}
