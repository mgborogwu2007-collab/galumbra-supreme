import Link from "next/link";
import { communities, creatorCards, messages, posts, profileHighlights, quickLinks, stats, trendTopics } from "@/lib/mock-data";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-violet-300">Discovery</div>
            <h1 className="mt-2 text-4xl font-black">Explore</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Back to feed</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Categories</div>
            <div className="mt-4 space-y-2">
              {['For You','Creators','Communities','Media','AI','Startups','Design','Culture'].map((category) => (
                <button key={category} className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-slate-200">
                  <span>{category}</span>
                  <span className="text-slate-500">›</span>
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-white/10 bg-[#111827]/80 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                  <div className="mt-3 text-3xl font-black text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-4">
              <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Trending creators</div>
              <div className="grid gap-4 md:grid-cols-3">
                {creatorCards.map((creator) => (
                  <div key={creator.name} className="rounded-[22px] border border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-4">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${creator.accent} text-lg font-black text-white`}>{creator.name.split(' ').map((part) => part[0]).join('').slice(0,2)}</div>
                    <div className="text-lg font-bold text-white">{creator.name}</div>
                    <div className="text-sm text-slate-400">{creator.handle}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-violet-300">{creator.niche}</div>
                    <button className="mt-4 w-full rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-sm font-semibold text-violet-200">Follow</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-4">
              <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Hot topics</div>
              <div className="flex flex-wrap gap-2">
                {trendTopics.map((item) => (
                  <span key={item.topic} className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-sm text-violet-200">{item.topic}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
