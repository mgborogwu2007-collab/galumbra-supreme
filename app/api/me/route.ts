import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const sessionId = cookies().get("galumbra_session")?.value;
  if (!sessionId) {
    return NextResponse.json({ user: null });
  }

  const user = await prisma.user.findUnique({ where: { id: sessionId } });
  if (!user) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email, handle: user.handle, role: user.role, bio: user.bio, followers: user.followers, following: user.following, premium: user.premium } });
}
