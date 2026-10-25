import Link from "next/link";
import { profileHighlights } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 text-2xl font-black text-white">GS</div>
              <div>
                <div className="text-3xl font-black">Galumbra Supreme</div>
                <div className="text-sm text-slate-400">@galumbra • Founder / Platform</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Message</button>
              <Link href="/premium" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white">Upgrade</Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {profileHighlights.map((item) => (
              <div key={item.label} className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-lg font-black text-white">{item.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Bio</div>
            <p className="leading-7 text-slate-300">
              Galumbra Supreme was created to help creators and communities build trust, momentum, and identity in a crowded digital world. We focus on premium discovery, impossible-to-ignore storytelling, and growth through genuine connection.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Fast facts</div>
            <ul className="space-y-3 text-slate-300">
              <li>• Founder-led community platform</li>
              <li>• Premium content and creator tools</li>
              <li>• AI-assisted discovery and networking</li>
              <li>• Built for ambitious digital culture</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
