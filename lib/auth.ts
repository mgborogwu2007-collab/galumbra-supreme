import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function getCurrentUser() {
  const sessionId = cookies().get("galumbra_session")?.value;
  if (!sessionId) return null;

  return prisma.user.findUnique({
    where: { id: sessionId },
  });
}
