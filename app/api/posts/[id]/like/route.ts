import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const updated = await prisma.post.update({
    where: { id: post.id },
    data: { likes: post.likes + 1 },
  });

  return NextResponse.json({ ok: true, likes: updated.likes });
}
