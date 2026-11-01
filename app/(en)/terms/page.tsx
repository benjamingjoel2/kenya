import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = buildMetadata({ title: "Booking terms", description: "The terms that apply when Safari Njema plans and arranges a tailor-made Kenya safari for you: quotes, deposits, changes, cancellations and insurance.", path: "/terms" });

export default function Page() {
  return (
    <LegalPage title="Booking terms" path="/terms" updated="1 November 2026">
      <h2>About these terms</h2>
      <p>These terms apply to the tailor-made travel arrangements that Safari Njema, of Spaces, Eaton Place, 2nd Floor, United Nations Crescent, Gigiri, Nairobi, Kenya (“we”, “us”), plans for you. Please read them before you confirm a booking. When you confirm a booking you accept them on behalf of everyone in your party, and you confirm that you are at least 18 and have their authority to do so.</p>
      <p>These are general principles. The quote and booking confirmation we send you set out the specific arrangements, deposit, balance due date and cancellation charges for your trip, and they form part of your contract with us.</p>
      <h2>Enquiries and quotes</h2>
      <p>Sending us an enquiry through the website, by email or any other way does not commit you to anything. We will reply with ideas and, when you are ready, a written quote.</p>
      <p>Quotes are based on availability and supplier rates at the time we write them. Nothing is held for you until you confirm and we confirm back in writing. We will always tell you if anything in a quote changes before you book.</p>
      <h2>Booking, deposit and balance</h2>
      <p>Your booking is confirmed when you accept our quote, we receive the deposit stated in it, and we send you a written booking confirmation. Your contract with us starts from that point.</p>
      <p>The balance is due by the date shown in your quote and booking confirmation. If it is not paid on time, we may treat the booking as cancelled by you and apply the cancellation charges below.</p>
      <p>Some suppliers (for example certain lodges, flights and permits) need full payment when they are booked. Where this applies we will tell you before you confirm.</p>
      <p>Unless your quote states otherwise, the deposit is 30% of the total price and the balance is due 60 days before departure; if you book within 60 days of departure, the full price is due when you book.</p>
      <h2>Prices</h2>
      <p>Prices on this website are shown as “From” a per-person amount. They are a guide, not an offer: the price of your trip is the one in the written quote we send you, and it is fixed when we confirm your booking in writing.</p>
      <p>The price of your trip is the price in your booking confirmation. We will only change it after confirmation if a cost outside our control changes, such as government taxes, park or conservation fees, or fuel surcharges set by a carrier, and we will show you how any change is worked out. If a change is significant, you may cancel without paying cancellation charges.</p>
      <h2>What is included</h2>
      <p>Your quote and booking confirmation list exactly what is included: typically accommodation, the meals stated, private transfers and transport, the guiding, activities and entrance or park fees listed, and our support before and during your trip. Unless your quote says otherwise, the price does not include international flights, visas, travel insurance, vaccinations and medical costs, tips, drinks and meals not listed, optional activities and personal expenses.</p>
      <h2>Changes you ask for</h2>
      <p>We will always try to help if you want to change your trip after booking. Changes depend on availability and on the suppliers’ own terms, and any extra cost they charge will be passed on to you, together with any reasonable administration cost we tell you about in advance.</p>
      <h2>If you cancel</h2>
      <p>You may cancel at any time by writing to us; the cancellation takes effect on the day we receive it. Because we commit money to suppliers on your behalf, unless your quote states otherwise the following charges apply, as a percentage of the total price: more than 60 days before departure, loss of the deposit (30%); 60 to 31 days, 50%; 30 to 15 days, 75%; 14 days or fewer, or if you do not travel, 100%.</p>
      <p>Where a supplier’s own terms are stricter, for example non-refundable flights, permits or peak-season stays, your quote will say so and those charges apply instead. Your travel insurance may cover cancellation charges.</p>
      <h2>If we change or cancel your trip</h2>
      <p>Occasionally we have to make changes, for example when a camp or flight is no longer available. If we make a significant change before you travel, we will tell you as soon as possible and offer you a choice of accepting it, taking a comparable alternative, or cancelling with a full refund of what you have paid us.</p>
      <p>We may need to cancel or change arrangements because of events outside anyone’s control, such as extreme weather, natural disasters, epidemics, civil unrest or official travel advice against travel. In that case we will help you rearrange, and refund what we are able to recover from suppliers.</p>
      <h2>Travel insurance</h2>
      <p>Comprehensive travel insurance is a condition of travelling with us. It must cover cancellation, medical treatment, emergency evacuation and repatriation, and any activities you plan to do. Please arrange it when you book so you are covered if you have to cancel.</p>
      <h2>Passports, visas and health</h2>
      <p>You are responsible for having a valid passport, any visas or electronic travel authorisations, and any vaccinations or health certificates required for your journey, including for transit countries. We are happy to share general guidance, but entry rules change, so please check them with the relevant embassy or official government source and with a travel-health professional well before you travel.</p>
      <h2>Our responsibility to you</h2>
      <p>We will plan your trip with reasonable skill and care, and we choose our suppliers carefully. Many services are provided by independent suppliers under their own terms and the laws of the country where they operate.</p>
      <p>We are not responsible for any loss, injury or damage caused by you or anyone in your party, by a third party not connected with the arrangements we provide, or by events outside our control. Where the law allows, our liability is limited to the price of your trip. Nothing in these terms limits liability that cannot legally be limited, such as liability for death or personal injury caused by our negligence.</p>
      <p>Wildlife is wild and outdoor activities carry some risk. Please follow the advice of your guides and lodge staff at all times.</p>
      <h2>Your responsibilities</h2>
      <p>Please give us accurate information, including the names on your passports and any medical, dietary or accessibility needs that affect your trip. Please respect local laws, customs and the rules of the parks and places you visit.</p>
      <h2>Force majeure</h2>
      <p>We are not liable for changes, delays or cancellations caused by unusual and unforeseeable circumstances beyond our control whose consequences could not have been avoided even with all due care, such as war or the threat of war, civil unrest, terrorism, natural disasters, extreme weather, epidemics, fire, the closure of airports or ports, industrial action, and government action or official advice against travel. If force majeure prevents your trip, we will refund everything we are able to recover from suppliers and help you rearrange.</p>
      <h2>Complaints</h2>
      <p>If something is not right while you are travelling, tell your guide, the property or us straight away so it can be put right on the spot. If it cannot be resolved, write to us at <a href="mailto:safarinjema@tourground.com">safarinjema@tourground.com</a> within 28 days of your return and we will reply in full.</p>
      <h2>Governing law</h2>
      <p>These terms, and any dispute arising from them, are governed by the laws of Kenya, and the courts of Kenya have jurisdiction. If you live elsewhere, this does not take away any mandatory rights you have under the consumer law of your country of residence, and you may also bring proceedings there. We will always try to resolve a complaint by agreement first.</p>
      <h2>Data protection</h2>
      <p>We use your personal information only as described in our <Link href="/privacy">Privacy Policy</Link>.</p>
      <h2>Contact</h2>
      <p>Safari Njema, Spaces, Eaton Place, 2nd Floor, United Nations Crescent, Gigiri, Nairobi, Kenya. Email: <a href="mailto:safarinjema@tourground.com">safarinjema@tourground.com</a>.</p>
    </LegalPage>
  );
}
