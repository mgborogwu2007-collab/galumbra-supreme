import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";

const DEFAULT_COMMUNITIES = [
  { name: "Signal Founders", members: 170000, focus: "Startups & scale" },
  { name: "Vision Lab", members: 92000, focus: "Design + strategy" },
  { name: "Creative Flow", members: 64000, focus: "Creators + media" },
  { name: "The Studio Circle", members: 41000, focus: "Product + brand" },
];

const DEFAULT_USERS = [
  {
    name: "Galumbra Supreme",
    email: "galumbra@demo.com",
    handle: "galumbra",
    password: "demo123",
    role: "Platform",
    bio: "A premium digital ecosystem for creators, founders, and communities.",
    followers: 14200,
    following: 396,
    avatar: "GS",
    premium: true,
  },
  {
    name: "Nyra Vale",
    email: "nyra@demo.com",
    handle: "nyravale",
    password: "demo123",
    role: "AI Strategist",
    bio: "Helping teams turn AI into a real growth engine.",
    followers: 1400000,
    following: 345,
    avatar: "NV",
    premium: true,
  },
  {
    name: "Keon Arlo",
    email: "keon@demo.com",
    handle: "keonarlo",
    password: "demo123",
    role: "Founder Storytelling",
    bio: "Story-first product design for bold companies.",
    followers: 820000,
    following: 220,
    avatar: "KA",
    premium: false,
  },
];

async function seed() {
  const communityCount = await prisma.community.count();
  if (communityCount === 0) {
    await prisma.community.createMany({ data: DEFAULT_COMMUNITIES });
  }

  const userCount = await prisma.user.count();
  if (userCount === 0) {
    const bcrypt = (await import("bcryptjs")).default;
    for (const user of DEFAULT_USERS) {
      await prisma.user.create({
        data: {
          ...user,
          password: await bcrypt.hash(user.password, 10),
        },
      });
    }
  }

  const postsCount = await prisma.post.count();
  if (postsCount === 0) {
    const users = await prisma.user.findMany();
    const usersByHandle = Object.fromEntries(users.map((user) => [user.handle, user]));
    const seedPosts = [
      {
        userId: usersByHandle.nyravale.id,
        content: "The best brands aren't built by chasing attention. They're built by creating a signal people instantly recognize and trust. Culture is a compounding asset.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        tags: ["#BrandPower", "#Culture", "#Vision"],
        likes: 18240,
        comments: 3412,
        shares: 968,
      },
      {
        userId: usersByHandle.keonarlo.id,
        content: "Product-market fit is not the end goal. It's the beginning of a system that compounds trust, speed, and narrative. Build before you broadcast.",
        tags: ["#BuildInPublic", "#Startup", "#Narrative"],
        likes: 24010,
        comments: 1840,
        shares: 1320,
      },
      {
        userId: usersByHandle.galumbra.id,
        content: "Great communities don't just react. They accelerate each other. When people feel seen, they bring energy, ideas, and momentum to the whole room.",
        tags: ["#Community", "#Growth", "#CreatorPower"],
        likes: 16320,
        comments: 2198,
        shares: 778,
      },
    ];

    await prisma.post.createMany({ data: seedPosts });
  }
}

export async function ensureSeed() {
  await seed();
}
