import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json();
  const db = await readDb();

  const user = db.users.find((item) => item.email === String(body.email).toLowerCase() && item.password === body.password);
  if (!user) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  cookies().set("galumbra_session", user.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email, handle: user.handle } });
}
