import { prisma } from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const createUserSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  handle: z.string().min(2),
  password: z.string().min(6),
});

export async function createUser(input: z.infer<typeof createUserSchema>) {
  const hashed = await bcrypt.hash(input.password, 10);
  return prisma.user.create({
    data: {
      name: input.name,
      email: input.email.toLowerCase(),
      handle: input.handle.toLowerCase(),
      password: hashed,
      role: "Creator",
      bio: "Building a better digital culture.",
      avatar: input.name.slice(0, 2).toUpperCase(),
      followers: 0,
      following: 0,
      premium: false,
    },
  });
}
