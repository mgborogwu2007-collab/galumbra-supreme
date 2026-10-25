"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "Ava North", email: "ava@demo.com", handle: "avanorth", password: "demo123" });
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();
    if (!response.ok) {
      setError(data.error || "Creation failed");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#111827]/80 p-7">
        <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Create account</div>
        <h1 className="mt-3 text-4xl font-black">Join Galumbra Supreme</h1>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white focus:outline-none" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white focus:outline-none" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Handle</label>
            <input value={form.handle} onChange={(e) => setForm({ ...form, handle: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white focus:outline-none" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white focus:outline-none" />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button className="w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 font-semibold text-white">Create account</button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-400">
          Already have an account? <a href="/login" className="text-cyan-300">Login</a>
        </div>
      </div>
    </main>
  );
}
