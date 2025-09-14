export default function Dfy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#1e3a8a] text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <p className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          Done For You • White-Glove Service
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold md:text-6xl leading-tight">
          We Build, Launch & Scale Your <span className="text-fuchsia-300">AI Systems</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
          Strategy, architecture, agents, RAG, vector DBs, orchestration, deployment, and ongoing optimisation. You
          focus on the business—our team ships the whole thing.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#contact" className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow">
            🚀 Book a Call
          </a>
          <a href="#portfolio" className="rounded-xl border border-white/30 px-6 py-3 font-semibold">
            View Portfolio
          </a>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="container mx-auto px-6 pb-10 grid gap-6 md:grid-cols-3">
        {[
          { title: "Custom AI Agents", desc: "Task-specific or multi-agent systems tailored to your workflows." },
          { title: "SaaS & Platforms", desc: "Full-stack apps with auth, billing, analytics, and admin." },
          { title: "Orchestration & RAG", desc: "Retriever pipelines, tools, memory, and evaluation." },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-white/90">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">How We Work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            { step: "01", title: "Roadmap in 48h", desc: "Milestones, owners, cost, and timelines." },
            { step: "02", title: "Architecture", desc: "Agents, vector DBs, tools, and infra plan." },
            { step: "03", title: "Build & Ship", desc: "We implement, test, and iterate quickly." },
            { step: "04", title: "Optimise", desc: "Analytics, evals, and growth improvements." },
          ].map((x) => (
            <div key={x.step} className="rounded-2xl bg-white/10 p-6">
              <div className="text-sm opacity-80">{x.step}</div>
              <div className="mt-1 text-lg font-semibold">{x.title}</div>
              <p className="mt-2 text-white/90">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section id="portfolio" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Recent Wins</h2>
        <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-white/90">
          <li>• Automated onboarding agent cut manual ops by 60%.</li>
          <li>• RAG upgrade reduced hallucinations & support tickets.</li>
          <li>• Launched a paid AI tool MVP in 3 weeks.</li>
        </ul>
      </section>

      {/* CTA */}
      <section id="contact" className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-2xl font-bold">Ready to move fast with a senior team?</h3>
        <p className="mt-2 text-white/90">We’ll map use-cases, plan the stack, and build it end-to-end.</p>
        <a href="#" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow">
          🚀 Book a Call
        </a>
      </section>
    </main>
  );
}
