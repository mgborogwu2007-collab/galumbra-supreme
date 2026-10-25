import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";

const createPostSchema = z.object({
  content: z.string().min(1),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return NextResponse.json({ posts: posts.map((post) => ({
    id: post.id,
    author: post.user.name,
    authorHandle: post.user.handle,
    role: post.user.role,
    avatar: post.user.avatar,
    content: post.content,
    image: post.image,
    likes: post.likes,
    comments: post.comments,
    shares: post.shares,
    tags: post.tags,
    createdAt: post.createdAt.toISOString(),
  })) });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = createPostSchema.parse(await request.json());

  const post = await prisma.post.create({
    data: {
      userId: user.id,
      content: body.content,
      image: body.image,
      tags: body.tags || [],
    },
    include: { user: true },
  });

  return NextResponse.json({ ok: true, post: {
    id: post.id,
    author: post.user.name,
    authorHandle: post.user.handle,
    role: post.user.role,
    avatar: post.user.avatar,
    content: post.content,
    image: post.image,
    likes: post.likes,
    comments: post.comments,
    shares: post.shares,
    tags: post.tags,
    createdAt: post.createdAt.toISOString(),
  } });
}
