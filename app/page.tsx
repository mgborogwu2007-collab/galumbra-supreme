"use client";

import {
  Bell,
  Compass,
  Flame,
  Heart,
  Home,
  MessageCircle,
  MoonStar,
  Search,
  Send,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { useMemo, useState } from "react";

type FeedTab = "For You" | "Following" | "Trending" | "Communities";

type Post = {
  id: number;
  author: string;
  handle: string;
  role: string;
  avatar: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
};

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Explore", icon: Compass },
  { label: "Trending", icon: TrendingUp },
  { label: "Messages", icon: MessageCircle },
  { label: "Communities", icon: Users },
  { label: "Settings", icon: Settings },
];

const creatorCards = [
  {
    name: "Nyra Vale",
    handle: "@nyravale",
    niche: "AI Strategist",
    followers: "1.4M",
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
  },
  {
    name: "Keon Arlo",
    handle: "@keonarlo",
    niche: "Founder Storytelling",
    followers: "820K",
    accent: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
    name: "Selene Moss",
    handle: "@selenemoss",
    niche: "Culture & Media",
    followers: "2.1M",
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
];

const stats = [
  { label: "Active creators", value: "2.9M" },
  { label: "Conversations", value: "89M" },
  { label: "Growth velocity", value: "4.8x" },
  { label: "Creator revenue", value: "$12M" },
];

const trendTopics = [
  { topic: "#AIRevolution", posts: "182K" },
  { topic: "#CreatorEconomy", posts: "94K" },
  { topic: "#GenZCulture", posts: "63K" },
  { topic: "#ProductVision", posts: "41K" },
  { topic: "#DesignSystems", posts: "28K" },
];

const communityPanels = [
  { name: "Signal Founders", members: "170K", focus: "Startups & scale" },
  { name: "Vision Lab", members: "92K", focus: "Design + strategy" },
  { name: "Creative Flow", members: "64K", focus: "Creators + media" },
];

const initialPosts: Post[] = [
  {
    id: 1,
    author: "Maya Keene",
    handle: "@mayakeene",
    role: "Product Visionary",
    avatar: "MK",
    time: "2h ago",
    content:
      "The best brands aren't built by chasing attention. They're built by creating a signal people instantly recognize and trust. Culture is a compounding asset.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    likes: 18240,
    comments: 3412,
    shares: 968,
    tags: ["#BrandPower", "#Culture", "#Vision"],
  },
  {
    id: 2,
    author: "Darius Stone",
    handle: "@dariusstone",
    role: "Founder / Builder",
    avatar: "DS",
    time: "5h ago",
    content:
      "Product-market fit is not the end goal. It's the beginning of a system that compounds trust, speed, and narrative. Build before you broadcast.",
    likes: 24010,
    comments: 1840,
    shares: 1320,
    tags: ["#BuildInPublic", "#Startup", "#Narrative"],
  },
  {
    id: 3,
    author: "Lena Frost",
    handle: "@lenafrost",
    role: "Culture Lead",
    avatar: "LF",
    time: "8h ago",
    content:
      "Great communities don't just react. They accelerate each other. When people feel seen, they bring energy, ideas, and momentum to the whole room.",
    likes: 16320,
    comments: 2198,
    shares: 778,
    tags: ["#Community", "#Growth", "#CreatorPower"],
  },
];

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState<FeedTab>("For You");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const q = search.toLowerCase();
      const matchesSearch =
        q === "" ||
        post.author.toLowerCase().includes(q) ||
        post.handle.toLowerCase().includes(q) ||
        post.content.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesSearch;
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-white/10 bg-[#0d1220]/80 shadow-[0_0_60px_rgba(108,92,231,0.18)] backdrop-blur-xl">
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 font-black text-lg shadow-[0_10px_25px_rgba(99,102,241,0.5)]">
                G
              </div>
              <div>
                <div className="text-lg font-black tracking-[0.14em] text-white">
                  GALUMBRA
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-slate-400">
                  Supreme
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              {["Home", "Explore", "Creators", "Communities", "Premium"].map(
                (item) => (
                  <button
                    key={item}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      item === "Home"
                        ? "bg-white/10 text-white ring-1 ring-white/10"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/10 sm:inline-flex">
                <Search size={18} />
              </button>
              <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/10 sm:inline-flex">
                <Bell size={18} />
              </button>
              <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/10 sm:inline-flex">
                <MoonStar size={18} />
              </button>
              <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.45)] transition hover:scale-[1.02]">
                Launch
              </button>
            </div>
          </header>

          <div className="grid gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)_360px] lg:px-8">
            <aside className="space-y-6">
              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-bold">
                    GS
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">
                      Galumbra Supreme
                    </div>
                    <div className="text-xs text-slate-400">@galumbra</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-lg font-black text-white">14.2K</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Followers
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-lg font-black text-white">2.8K</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Posts
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <div className="text-lg font-black text-white">396</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Following
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Navigation
                  </div>
                  <Sparkles size={14} className="text-violet-400" />
                </div>

                <div className="space-y-2">
                  {navItems.map(({ label, icon: Icon, active }) => (
                    <button
                      key={label}
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                        active
                          ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white ring-1 ring-violet-400/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                        <Icon size={16} />
                      </div>
                      <span className="font-medium">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Communities
                  </div>
                  <Users size={16} className="text-cyan-400" />
                </div>

                <div className="space-y-3">
                  {communityPanels.map((community) => (
                    <div
                      key={community.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-white">
                          {community.name}
                        </div>
                        <div className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                          Live
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-slate-400">
                        {community.members} members
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        {community.focus}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-[28px] border border-violet-500/20 bg-gradient-to-r from-violet-500/15 via-slate-900/80 to-cyan-500/15 p-5 sm:p-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-[720px]">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-violet-200">
                      <Flame size={12} />
                      Elite digital communities
                    </div>
                    <h1 className="text-4xl font-black leading-tight sm:text-5xl">
                      Build influence.
                      <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent">
                        {" "}
                        Lead culture.
                      </span>
                    </h1>
                    <p className="mt-4 max-w-xl text-base text-slate-300">
                      Galumbra Supreme is where future-minded creators, founders,
                      and communities unlock momentum through bold ideas,
                      meaningful conversations, and premium discovery.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.45)] transition hover:scale-[1.02]">
                      Create Post
                    </button>
                    <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10">
                      Go Live
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-white/10 bg-[#111827]/80 p-4"
                  >
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      {stat.label}
                    </div>
                    <div className="mt-3 text-3xl font-black text-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Trending voices
                  </div>
                  <button className="text-sm font-medium text-cyan-300">
                    View all
                  </button>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  {creatorCards.map((creator) => (
                    <div
                      key={creator.name}
                      className="rounded-[22px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4"
                    >
                      <div
                        className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${creator.accent} text-xl font-black text-white shadow-lg`}
                      >
                        {creator.name
                          .split(" ")
                          .map((p) => p[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div className="text-lg font-bold text-white">
                        {creator.name}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {creator.handle}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-violet-300">
                        {creator.niche}
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-slate-300">
                          {creator.followers} followers
                        </div>
                        <button className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-200">
                          Follow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {(["For You", "Following", "Trending", "Communities"] as FeedTab[]).map(
                      (tab) => (
                        <button
                          key={tab}
                          onClick={() => setSelectedTab(tab)}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            selectedTab === tab
                              ? "bg-white text-slate-900"
                              : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
                    <Search size={15} />
                    <input
                      aria-label="Search posts or creators"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-40 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                      placeholder="Search"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="rounded-[26px] border border-white/10 bg-[#0b1220] p-4 sm:p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 font-bold text-white">
                            {post.avatar}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <div className="font-bold text-white">{post.author}</div>
                              <div className="text-sm text-slate-400">
                                {post.handle}
                              </div>
                            </div>
                            <div className="text-xs uppercase tracking-[0.14em] text-slate-500">
                              {post.role} • {post.time}
                            </div>
                          </div>
                        </div>

                        <button className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
                          •••
                        </button>
                      </div>

                      <div className="mt-4 text-[16px] leading-7 text-slate-200">
                        {post.content}
                      </div>

                      {post.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {post.image && (
                        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10">
                          <img
                            src={post.image}
                            alt="Post"
                            className="h-[260px] w-full object-cover sm:h-[320px]"
                          />
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-5 text-sm text-slate-300">
                          <button className="flex items-center gap-2 transition hover:text-pink-300">
                            <Heart size={16} />
                            {post.likes.toLocaleString()}
                          </button>
                          <button className="flex items-center gap-2 transition hover:text-cyan-300">
                            <MessageCircle size={16} />
                            {post.comments.toLocaleString()}
                          </button>
                          <button className="flex items-center gap-2 transition hover:text-violet-300">
                            <Send size={16} />
                            {post.shares.toLocaleString()}
                          </button>
                        </div>

                        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/10">
                          Save
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Trending
                  </div>
                  <TrendingUp size={16} className="text-violet-400" />
                </div>

                <div className="space-y-3">
                  {trendTopics.map((item, index) => (
                    <div
                      key={item.topic}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3"
                    >
                      <div>
                        <div className="font-semibold text-white">{item.topic}</div>
                        <div className="text-xs text-slate-400">
                          {item.posts} conversations
                        </div>
                      </div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        #{index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-cyan-500/10 p-4">
                <div className="mb-3 flex items-center gap-2 text-violet-200">
                  <Star size={16} />
                  <div className="text-xs uppercase tracking-[0.22em]">
                    Premium
                  </div>
                </div>

                <h3 className="text-2xl font-black text-white">
                  Own your current.
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Unlock creator tools, priority discovery, deeper analytics, and
                  an elevated digital presence built for authority.
                </p>

                <button className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 font-semibold text-white shadow-[0_12px_28px_rgba(99,102,241,0.45)]">
                  Upgrade to Supreme
                </button>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Live now
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="text-xs font-medium">Online</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Signal Room — AI product strategy",
                    "Creator Sprint — brand x media",
                    "Vision Lab — design systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3"
                    >
                      <div className="text-sm text-white">{item}</div>
                      <Video size={15} className="text-cyan-300" />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
