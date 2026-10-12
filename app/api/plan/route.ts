import { NextResponse } from "next/server";
import { plannerSchema } from "@/components/planner/schema";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = plannerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }
  const enquiry = { ...parsed.data, receivedAt: new Date().toISOString(), source: "trip-planner" };
  console.log("[plan-your-safari] new enquiry", JSON.stringify(enquiry, null, 2));
  // TODO: forward to email (e.g. Resend/Postmark) and CRM (e.g. HubSpot/Pipedrive), and send the traveller an auto-reply.
  return NextResponse.json({ ok: true });
}
