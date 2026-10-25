"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("galumbra@demo.com");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error || "Login failed");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#111827]/80 p-7">
        <div className="text-xs uppercase tracking-[0.3em] text-violet-300">Welcome back</div>
        <h1 className="mt-3 text-4xl font-black">Login to Galumbra Supreme</h1>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none" placeholder="••••••••" />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button className="w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 font-semibold text-white">Login</button>
        </form>

        <div className="mt-4 text-center text-sm text-slate-400">
          Need an account? <a href="/register" className="text-violet-300">Create one</a>
        </div>
      </div>
    </main>
  );
}
