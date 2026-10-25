import Link from "next/link";
import { communities } from "@/lib/mock-data";

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Communities</div>
            <h1 className="mt-2 text-4xl font-black">Crowds that move culture</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Back to feed</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {communities.map((community, index) => (
            <div key={community.name} className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${index % 2 === 0 ? 'from-violet-500 to-cyan-400' : 'from-emerald-500 to-cyan-400'} font-black text-white`}>
                  {community.name.slice(0,2).toUpperCase()}
                </div>
                <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-300">Live</span>
              </div>
              <div className="text-xl font-bold text-white">{community.name}</div>
              <div className="mt-2 text-sm text-slate-400">{community.members} members</div>
              <div className="mt-3 text-sm text-slate-300">{community.focus}</div>
              <button className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 font-semibold text-white">Join community</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
