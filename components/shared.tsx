import {
  Bell,
  Compass,
  Flame,
  Heart,
  Home,
  MessageCircle,
  Search,
  Send,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

export function TopNav() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 font-black text-lg shadow-[0_10px_25px_rgba(99,102,241,0.5)]">
          G
        </div>
        <div>
          <div className="text-lg font-black tracking-[0.14em] text-white">GALUMBRA</div>
          <div className="text-[10px] uppercase tracking-[0.4em] text-slate-400">Supreme</div>
        </div>
      </div>

      <nav className="hidden items-center gap-2 md:flex">
        {[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Communities", href: "/communities" },
          { label: "Messages", href: "/messages" },
          { label: "Premium", href: "/premium" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/10 sm:inline-flex"> <Search size={18} /> </button>
        <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:bg-white/10 sm:inline-flex"> <Bell size={18} /> </button>
        <a href="/profile" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.45)] transition hover:scale-[1.02]">
          Profile
        </a>
      </div>
    </header>
  );
}

export function LeftSidebar() {
  return (
    <aside className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 font-bold">
            GS
          </div>
          <div>
            <div className="text-base font-bold text-white">Galumbra Supreme</div>
            <div className="text-xs text-slate-400">@galumbra</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["14.2K", "Followers"],
            ["2.8K", "Posts"],
            ["396", "Following"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
              <div className="text-lg font-black text-white">{value}</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Navigation</div>
          <Sparkles size={14} className="text-violet-400" />
        </div>

        <div className="space-y-2">
          {[
            { label: "Home", href: "/", icon: Home, active: true },
            { label: "Explore", href: "/explore", icon: Compass },
            { label: "Trending", href: "/#trending", icon: TrendingUp },
            { label: "Messages", href: "/messages", icon: MessageCircle },
            { label: "Communities", href: "/communities", icon: Users },
            { label: "Settings", href: "/profile", icon: Settings },
          ].map(({ label, href, icon: Icon, active }) => (
            <a
              key={label}
              href={href}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                active
                  ? "bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-white ring-1 ring-violet-400/30"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5"><Icon size={16} /></div>
              <span className="font-medium">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function RightRail() {
  return (
    <aside className="space-y-6">
      <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Trending</div>
          <TrendingUp size={16} className="text-violet-400" />
        </div>
        <div className="space-y-3">
          {[
            ["#AIRevolution", "182K"],
            ["#CreatorEconomy", "94K"],
            ["#GenZCulture", "63K"],
            ["#ProductVision", "41K"],
          ].map(([topic, count], index) => (
            <div key={topic} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div>
                <div className="font-semibold text-white">{topic}</div>
                <div className="text-xs text-slate-400">{count} conversations</div>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">#{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-indigo-500/10 to-cyan-500/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-violet-200">
          <Flame size={16} />
          <div className="text-xs uppercase tracking-[0.22em]">Premium</div>
        </div>
        <h3 className="text-2xl font-black text-white">Own your current.</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Unlock creator tools, priority discovery, deeper analytics, and an elevated digital presence built for authority.
        </p>
        <a href="/premium" className="mt-5 block w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-center font-semibold text-white shadow-[0_12px_28px_rgba(99,102,241,0.45)]">
          Upgrade to Supreme
        </a>
      </div>

      <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Live now</div>
          <div className="flex items-center gap-2 text-green-400"><span className="h-2 w-2 rounded-full bg-green-400" /><span className="text-xs font-medium">Online</span></div>
        </div>
        <div className="space-y-3">
          {[
            "Signal Room — AI product strategy",
            "Creator Sprint — brand x media",
            "Vision Lab — design systems",
          ].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="text-sm text-white">{item}</div>
              <Video size={15} className="text-cyan-300" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function PostCard({ post }: { post: any }) {
  return (
    <article className="rounded-[26px] border border-white/10 bg-[#0b1220] p-4 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 font-bold text-white">
            {post.avatar}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="font-bold text-white">{post.author}</div>
              <div className="text-sm text-slate-400">{post.handle}</div>
            </div>
            <div className="text-xs uppercase tracking-[0.14em] text-slate-500">{post.role} • {post.time}</div>
          </div>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">•••</button>
      </div>

      <div className="mt-4 text-[16px] leading-7 text-slate-200">{post.content}</div>

      {post.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">{tag}</span>
          ))}
        </div>
      )}

      {post.image && (
        <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10">
          <img src={post.image} alt="Post" className="h-[260px] w-full object-cover sm:h-[320px]" />
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <div className="flex items-center gap-5 text-sm text-slate-300">
          <button className="flex items-center gap-2 transition hover:text-pink-300"><Heart size={16} /> {post.likes.toLocaleString()}</button>
          <button className="flex items-center gap-2 transition hover:text-cyan-300"><MessageCircle size={16} /> {post.comments.toLocaleString()}</button>
          <button className="flex items-center gap-2 transition hover:text-violet-300"><Send size={16} /> {post.shares.toLocaleString()}</button>
        </div>
        <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-white/10">Save</button>
      </div>
    </article>
  );
}

export function FeedComposer() {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#111827]/80 p-4">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-bold text-white">GS</div>
        <div className="text-sm text-slate-300">Share something with your community</div>
      </div>
      <textarea
        className="w-full min-h-[100px] rounded-2xl border border-white/10 bg-[#0b1220] p-4 text-white placeholder:text-slate-500 focus:outline-none"
        placeholder="What are you building today?"
      />
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
          <span>📷 Photo</span>
          <span>🎥 Video</span>
          <span>📍 Location</span>
          <span>😊 Mood</span>
        </div>
        <button className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 font-semibold text-white shadow-[0_10px_25px_rgba(99,102,241,0.45)]">Publish</button>
      </div>
    </div>
  );
}
