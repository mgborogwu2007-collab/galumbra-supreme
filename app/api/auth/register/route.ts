import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  handle: z.string().min(2),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = registerSchema.parse(await request.json());
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: body.email.toLowerCase() },
          { handle: body.handle.toLowerCase() },
        ],
      },
    });

    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email.toLowerCase(),
        handle: body.handle.toLowerCase(),
        password: passwordHash,
        role: "Creator",
        followers: 14200,
        following: 396,
        avatar: body.name.slice(0, 2).toUpperCase(),
        bio: "Building a better digital culture.",
      },
    });

    cookies().set("galumbra_session", user.id, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({ ok: true, user: { id: user.id, name: user.name, handle: user.handle, email: user.email } });
  } catch (error) {
    return NextResponse.json({ error: "Invalid registration data" }, { status: 400 });
  }
}
