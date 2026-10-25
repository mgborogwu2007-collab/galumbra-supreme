import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-[#080b14] p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-violet-300">Premium</div>
          <h1 className="mt-3 text-5xl font-black">Power your platform.</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Starter', price: '$19', features: ['Advanced insights', 'Priority discovery', 'Creator analytics'] },
            { title: 'Supreme', price: '$49', features: ['Everything in Starter', 'AI content prompts', 'Community tools', 'Priority support'], highlight: true },
            { title: 'Empire', price: '$99', features: ['Everything in Supreme', 'Custom brand layer', 'White-label controls', 'Strategic advisory'] },
          ].map((plan) => (
            <div key={plan.title} className={`rounded-[28px] border p-6 ${plan.highlight ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/15 to-cyan-500/10' : 'border-white/10 bg-[#111827]/80'}`}>
              <div className="text-xs uppercase tracking-[0.24em] text-slate-400">{plan.title}</div>
              <div className="mt-4 text-4xl font-black text-white">{plan.price}<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="mt-6 space-y-3 text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-4 py-3 font-semibold ${plan.highlight ? 'bg-gradient-to-r from-violet-500 to-cyan-500 text-white' : 'border border-white/10 bg-white/5 text-slate-200'}`}>
                Choose plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">Back to app</Link>
        </div>
      </div>
    </main>
  );
}
