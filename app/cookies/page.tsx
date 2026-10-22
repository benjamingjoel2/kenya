import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Cookie policy", description: "How the Safari Njema website uses cookies and similar technologies, and how you can manage your preferences.", path: "/cookies", noindex: true });

// DRAFT: matches what the site sets today (no cookies; one localStorage key for the
// trip planner). Update this page whenever analytics, embeds or chat are added.
export default function Page() {
  return (
    <LegalPage title="Cookie policy" path="/cookies" status="draft" updated="22 October 2026 (draft)">
      <p>
        Cookies are small files a website stores in your browser. Similar technologies, such as your browser’s local
        storage, work in much the same way. This page explains exactly what this website stores and why.
      </p>

      <h2>In short</h2>
      <p>
        This website doesn’t use cookies, analytics or advertising trackers. It stores one item in your browser, only
        when you use the trip planner, so you don’t lose your answers.
      </p>

      <h2>What we store</h2>
      <ul>
        <li>
          <strong>
            <code>sn-planner-v1</code>
          </strong>{" "}
          (local storage). This saves your trip-planner answers as you go, including your contact details and any
          notes, plus the step you’re on, so you can close the page and carry on later. It stays on your device and
          isn’t sent to us until you press send. It has no expiry date: it stays until you successfully send the planner
          or clear your browser data. If you use a shared or public computer, clear your browser data when you’re done.
          It’s strictly necessary for a feature you chose to use, so we don’t ask for consent. [CONFIRM with your legal
          adviser.]
        </li>
      </ul>
      <p>
        Fonts and images are served from our own website, so loading a page doesn’t send your details to Google, Unsplash
        or any other third party. [UPDATE if a hero video is added: its poster image currently loads directly from
        Unsplash.]
      </p>

      <h2>Other websites</h2>
      <p>
        If you click through to WhatsApp, Instagram, Facebook, YouTube or Pinterest, those services may set their own
        cookies under their own policies.
      </p>

      <h2>Managing it</h2>
      <p>
        You can clear stored data for this site at any time in your browser’s settings (look for “Cookies and site data”).
        Doing so only resets any unfinished trip plan.
      </p>

      <h2>If this changes</h2>
      <p>
        If we ever add analytics or other non-essential cookies, we’ll ask for your consent first and update this page. See
        our <Link href="/privacy">privacy policy</Link> for how we handle your information.
      </p>
    </LegalPage>
  );
}
