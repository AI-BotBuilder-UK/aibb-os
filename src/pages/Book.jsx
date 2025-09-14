export default function Book() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fuchsia-700 via-purple-700 to-slate-800 text-white">
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-10 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          Book a Strategy Session
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Go from Idea → Deployed<br className="hidden sm:block" />
          <span className="text-white/90"> with a 1:1 Expert</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          We’ll map your use-cases, choose the right stack, and hand you a concrete,
          low-risk plan to launch. If we’re a fit, we can build it for you.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="rounded-xl bg-white text-fuchsia-700 font-semibold px-6 py-3 shadow hover:shadow-lg transition"
          >
            🚀 Book a Call
          </a>
        </div>
      </header>

      {/* quick highlights */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid sm:grid-cols-2 gap-6">
        {[
          { title: "Roadmap in 48h", text: "Clear milestones, owners, cost, and timelines." },
          { title: "Architecture Review", text: "RAG, agents, vector DBs, and orchestration that fit your scope." },
          { title: "Risk & Feasibility", text: "De-risk experiments and choose the shortest path to value." },
          { title: "Build Options", text: "DIY/DWY/DFY pathways depending on your team and budget." },
        ].map((h, i) => (
          <div key={i} className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10">
            <h3 className="font-semibold text-xl">{h.title}</h3>
            <p className="mt-2 text-white/80">{h.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
