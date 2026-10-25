import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb } from "@/lib/data";

export async function GET() {
  const sessionUserId = cookies().get("galumbra_session")?.value;
  if (!sessionUserId) {
    return NextResponse.json({ user: null });
  }

  const db = await readDb();
  const user = db.users.find((item) => item.id === sessionUserId);

  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      handle: user.handle,
      role: user.role,
      bio: user.bio,
      followers: user.followers,
      following: user.following,
      premium: user.premium,
    },
  });
}
