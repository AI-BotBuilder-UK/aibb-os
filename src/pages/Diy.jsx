export default function Diy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#1e3a8a] text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <p className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          DIY • Toolkit & Playbooks
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold md:text-6xl leading-tight">
          Expert-Grade <span className="text-fuchsia-300">AI Toolkits</span> You Can Ship Today
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
          Battle-tested prompts, agents, RAG recipes, and deployment guides for Vercel/Cloudflare/Supabase.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#toolkit" className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow">
            📦 Get the DIY Toolkit
          </a>
          <a href="#library" className="rounded-xl border border-white/30 px-6 py-3 font-semibold">
            📚 See All Playbooks
          </a>
        </div>
      </section>

      {/* Cards */}
      <section id="library" className="container mx-auto px-6 pb-10 grid gap-6 md:grid-cols-3">
        {[
          { title: "Plug-and-Play Prompts", desc: "Agent/tool prompts for common ops and sales workflows." },
          { title: "Deployment Recipes", desc: "Step-by-step for Vercel, Cloudflare, Supabase & more." },
          { title: "Templates & Starters", desc: "Production-ready UI blocks and boilerplates." },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-white/90">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* What’s Inside */}
      <section id="toolkit" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">What’s Inside the Toolkit</h2>
        <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-white/90">
          <li>• Prompt packs (agents, RAG, workflows) with notes.</li>
          <li>• Example repos and scripts to copy/paste.</li>
          <li>• Evaluation checklists and growth guides.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-2xl font-bold">Grab the toolkit and ship faster</h3>
        <p className="mt-2 text-white/90">Everything we wish we had on day one.</p>
        <a href="#" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow">
          📦 Get the DIY Toolkit
        </a>
      </section>
    </main>
  );
}
