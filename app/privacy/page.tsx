import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Privacy policy", description: "How Safari Njema collects, uses and protects the personal information you share when you enquire about or book a Kenya safari.", path: "/privacy", noindex: true });

// DRAFT: written from how the site works today (forms, storage, hosting). Every
// [BRACKETED] item and the retention periods need the owners and a legal adviser.
export default function Page() {
  return (
    <LegalPage title="Privacy policy" path="/privacy" status="draft" updated="22 October 2026 (draft)">
      <p>
        This policy explains what personal information Safari Njema collects when you use this website or plan a trip
        with us, why we collect it, who we share it with, and the choices you have.
      </p>

      <h2>Who we are</h2>
      <p>
        Safari Njema is a trading name of [LEGAL ENTITY NAME AND TYPE], registered in [COUNTRY] under number
        [REGISTRATION NUMBER], with its office at [FULL ADDRESS], Westlands, Nairobi, Kenya. We are the data controller for
        the information described here. [CONFIRM: registration with the Office of the Data Protection Commissioner,
        number …]
      </p>
      <p>You can contact us about privacy at [PRIVACY EMAIL].</p>

      <h2>What we collect</h2>
      <h3>When you plan a trip</h3>
      <p>Our trip planner asks for:</p>
      <ul>
        <li>
          your travel plans: arrival date, number of nights, whether your dates are flexible, whether it’s your first
          safari, the routes you’re interested in and any notes about them, your budget level, and any add-ons
        </li>
        <li>who is travelling: the number of adults and children, and the children’s ages</li>
        <li>your name, email address, phone number (with country code), and how you’d like us to contact you</li>
        <li>anything else you choose to tell us in the notes</li>
      </ul>
      <p>
        You may choose to tell us about dietary needs, mobility or health in the notes. Some of this is sensitive
        information. We only use it to plan and run your trip. [CONFIRM: who you share it with, for example only the camp
        or guide who needs it.] Please only include it if you’re comfortable doing so.
      </p>
      <h3>When you contact us or sign up for the guide</h3>
      <ul>
        <li>the contact form: your name, email address and message</li>
        <li>The Kenya Safari Guide: your email address</li>
        <li>email, phone or WhatsApp: whatever you share in the conversation</li>
      </ul>
      <h3>When you book</h3>
      <p>
        To arrange your trip we may also need passport details, dates of birth, flight details, emergency contacts and
        payment information. [CONFIRM what you collect at booking and how payments are taken.]
      </p>
      <h3>When you browse</h3>
      <p>
        Like any website, our hosting provider automatically records technical information, such as your IP address,
        browser type and the pages you request, to deliver the site and keep it secure. We don’t use analytics or
        advertising trackers. See our <Link href="/cookies">cookie policy</Link>.
      </p>

      <h2>Why we use it, and our legal basis</h2>
      <ul>
        <li>
          <strong>Planning and quoting your trip</strong>, and replying to your messages: this is a step you ask us to take
          before entering into a contract with you.
        </li>
        <li>
          <strong>Booking and running your trip</strong>: to perform our contract with you.
        </li>
        <li>
          <strong>Sensitive details you share</strong> (for example health or mobility): [CONFIRM with your legal adviser
          the lawful basis, and whether the planner needs an explicit consent checkbox for these details.]
        </li>
        <li>
          <strong>Sending The Kenya Safari Guide and our occasional letter</strong>: with your consent. [CONFIRM once the
          email platform is chosen: every email has an unsubscribe link.]
        </li>
        <li>
          <strong>Keeping the website secure</strong> and keeping business records: our legitimate interests and our legal
          obligations, for example tax and accounting rules.
        </li>
      </ul>
      <p>We never sell your information, and we don’t use it for automated decision-making.</p>

      <h2>Who we share it with</h2>
      <ul>
        <li>
          <strong>Our hosting provider</strong>, Vercel Inc. (United States), which runs this website.
        </li>
        <li>
          <strong>Our email and customer-management providers</strong>, which store enquiries and send our emails:
          [PROVIDERS, once chosen].
        </li>
        <li>
          <strong>The people who deliver your trip</strong> once you book: camps and lodges, guides, transfer companies,
          airlines and park authorities. [CONFIRM: they only get what they need.]
        </li>
        <li>
          <strong>WhatsApp</strong> (Meta), if you choose to message us there. Their own privacy policy applies.
        </li>
        <li>
          <strong>Authorities</strong>, where the law requires it.
        </li>
      </ul>

      <h2>International transfers</h2>
      <p>
        We are based in Kenya and some of our providers are in other countries, including the United States. When your
        information is transferred abroad, we make sure appropriate safeguards are in place. [CONFIRM the safeguards, for
        example standard contractual clauses.]
      </p>

      <h2>How long we keep it</h2>
      <ul>
        <li>Enquiries that don’t become a booking: [24 months] after our last contact, then deleted.</li>
        <li>Bookings: [7 years] after your trip, to meet accounting and legal requirements.</li>
        <li>Newsletter: [until you unsubscribe, once the email platform is set up].</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete your information, to restrict or object to how we use it, or to send
        it to you or someone else in a portable format. Where we rely on your consent, you can withdraw it at any time. To
        do any of these, email [PRIVACY EMAIL]. We’ll reply within [30 days].
      </p>
      <p>
        If you’re unhappy with how we’ve handled your information, please tell us first. You can also complain to Kenya’s
        Office of the Data Protection Commissioner, or to the data protection authority where you live, such as the
        Information Commissioner’s Office in the UK.
      </p>

      <h2>Keeping it safe</h2>
      <p>
        The website is served only over an encrypted connection. [CONFIRM how enquiries are stored once they’re
        forwarded to your inbox or CRM, and who on the team can access them.]
      </p>

      <h2>Changes to this policy</h2>
      <p>If we change how we use your information, we’ll update this page and change the date at the top.</p>
    </LegalPage>
  );
}
