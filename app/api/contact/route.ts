import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";

export async function POST(req: Request) {
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  // Never log the message itself: names and emails would end up in the hosting logs.
  console.info("[contact] new message received");
  // TODO: forward to the team inbox / CRM.
  return NextResponse.json({ ok: true });
}
