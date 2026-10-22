import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.email() });

export async function POST(req: Request) {
  const parsed = schema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  // Never log the address itself: it would end up in the hosting logs.
  console.info("[newsletter] new signup");
  // TODO: add to email platform (e.g. Mailchimp/Brevo/ConvertKit) and send The Kenya Safari Guide PDF.
  return NextResponse.json({ ok: true });
}
