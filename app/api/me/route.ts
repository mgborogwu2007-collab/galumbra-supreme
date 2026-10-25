import { NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/data";

export async function POST(_request: Request, { params }: { params: { id: string } }) {
  const db = await readDb();
  const post = db.posts.find((item) => item.id === params.id);

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  post.likes += 1;
  await writeDb(db);

  return NextResponse.json({ ok: true, likes: post.likes });
}
