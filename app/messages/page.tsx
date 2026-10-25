import Link from "next/link";
import { readDb } from "@/lib/data";

export default async function MessagesPage() {
  const db = await readDb();

  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-violet-300">Messages</div>
            <h1 className="mt-2 text-4xl font-black">Direct conversations</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">Back to feed</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[420px_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-4">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">Inbox</div>
            <div className="space-y-3">
              {db.messages.map((item) => (
                <div key={item.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">{item.name.slice(0,2).toUpperCase()}</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-[10px] text-slate-400">{item.time}</div>
                    </div>
                    <div className="truncate text-sm text-slate-400">{item.preview}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">NV</div>
                <div>
                  <div className="font-bold text-white">Nyra Vale</div>
                  <div className="text-xs text-emerald-400">online</div>
                </div>
              </div>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">Voice call</button>
            </div>

            <div className="space-y-4">
              <div className="max-w-[75%] rounded-2xl bg-white/5 p-3 text-slate-200">Let’s align the creator launch and the social proof assets.</div>
              <div className="ml-auto max-w-[75%] rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 p-3 text-white">Perfect. I’ll send the campaign message and you can confirm the audience split.</div>
              <div className="max-w-[75%] rounded-2xl bg-white/5 p-3 text-slate-200">Great. The premium narrative is strong — we need the tone to feel elite, not crowded.</div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <input className="flex-1 rounded-full border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none" placeholder="Type your message" />
              <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-white">Send</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
