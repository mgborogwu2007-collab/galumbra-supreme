import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb, writeDb } from "@/lib/data";

export async function POST(request: Request) {
  const body = await request.json();
  const db = await readDb();

  if (!body.email || !body.password || !body.name || !body.handle) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const existing = db.users.some((user) => user.email === body.email.toLowerCase() || user.handle === body.handle.toLowerCase());
  if (existing) {
    return NextResponse.json({ error: "User already exists" }, { status: 409 });
  }

  const newUser = {
    id: `user_${Date.now()}`,
    name: body.name,
    email: body.email.toLowerCase(),
    handle: body.handle.toLowerCase().replace(/^@/, ""),
    password: body.password,
    role: "Creator",
    bio: "Building a better digital culture.",
    followers: 14200,
    following: 396,
    avatar: body.name.slice(0, 2).toUpperCase(),
    premium: false,
  };

  db.users.unshift(newUser);
  await writeDb(db);

  cookies().set("galumbra_session", newUser.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return NextResponse.json({ ok: true, user: { id: newUser.id, name: newUser.name, email: newUser.email, handle: newUser.handle } });
}
