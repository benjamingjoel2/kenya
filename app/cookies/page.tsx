import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Cookie policy", description: "How the Safari Njema website uses cookies and your browser's local storage, and how to clear them.", path: "/cookies" });

export default function Page() {
  return (
    <LegalPage title="Cookie policy" path="/cookies" updated="30 October 2026">
      <h2>What cookies and local storage are</h2>
      <p>Cookies are small text files a website saves in your browser. Local storage is a similar feature that lets a website remember information on your own device. Neither is sent to us unless a page specifically reads it.</p>
      <h2>Cookies we use</h2>
      <p>This website does not set any cookies, and it does not use advertising or tracking cookies of any kind.</p>
      <h2>Local storage we use</h2>
      <p>We use your browser’s local storage only for features you choose to use:</p>
      <ul>
        <li>sn-planner-v1 (local storage): Remembers the answers and step you have reached in the trip planner, so you can come back and finish it later. It stays until you submit the planner (when we clear it) or clear your browser data.</li>
      </ul>
      <p>This information stays on your device. It is not sent to us until you choose to submit the form.</p>
      <h2>Analytics and third parties</h2>
      <p>We do not use analytics, advertising or social-media tracking on this website. Photographs and fonts are served from our own website, so no third party receives information about your visit when you load a page.</p>
      <h2>Consent and how to withdraw it</h2>
      <p>Because we only use storage that is strictly necessary for features you ask for, we do not need to ask for your consent and there is no cookie banner. If we ever add analytics or other optional cookies, we will ask for your consent first and you will be able to change your choice at any time.</p>
      <p>You can remove anything this site has stored at any time by clearing your browser’s site data for this website (usually under Settings, then Privacy, then Cookies and site data), or by using a private browsing window. You can also block cookies and storage entirely in your browser settings; the site will still work, but a half-completed trip planner will not be remembered.</p>
      <h2>Questions</h2>
      <p>If you have any questions about this policy, email us at <a href="mailto:safarinjema@tourground.com">safarinjema@tourground.com</a>. Our <Link href="/privacy">Privacy Policy</Link> explains how we handle personal information.</p>
    </LegalPage>
  );
}
