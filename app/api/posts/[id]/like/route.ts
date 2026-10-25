import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readDb, writeDb } from "@/lib/data";

export async function GET() {
  const db = await readDb();
  return NextResponse.json({ posts: db.posts.slice(0, 10) });
}

export async function POST(request: Request) {
  const body = await request.json();
  const db = await readDb();
  const sessionUserId = cookies().get("galumbra_session")?.value;
  const user = db.users.find((item) => item.id === sessionUserId);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const post = {
    id: `post_${Date.now()}`,
    authorId: user.id,
    author: user.name,
    authorHandle: user.handle,
    role: user.role,
    avatar: user.avatar,
    content: body.content,
    image: body.image || undefined,
    likes: 0,
    comments: 0,
    shares: 0,
    tags: body.tags || [],
    createdAt: new Date().toLocaleString(),
  };

  db.posts.unshift(post);
  await writeDb(db);

  return NextResponse.json({ ok: true, post });
}
