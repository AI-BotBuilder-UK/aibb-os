export default function Diy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 text-white">
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-10 text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
          DIY — Toolkit & Playbooks
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Master AI Systems<br className="hidden sm:block" />
          <span className="text-white/90"> with Expert-Grade Toolkits</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
          Get the exact templates, prompts, and deployment recipes we use internally.
          Build at your pace with clear, copy-paste instructions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-white text-indigo-700 font-semibold px-6 py-3 shadow hover:shadow-lg transition"
          >
            📦 Get the DIY Toolkit
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition"
          >
            📚 See All Playbooks
          </a>
        </div>
      </header>

      {/* quick features row */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Plug-and-Play Prompts", text: "Battle-tested prompt packs for agents, RAG, and workflows." },
          { title: "Deployment Recipes", text: "Step-by-step guides for Vercel, Cloudflare, Supabase & more." },
          { title: "Templates & Starters", text: "Production-ready UI blocks and boilerplates to ship fast." },
        ].map((f, i) => (
          <div key={i} className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/10">
            <h3 className="font-semibold text-xl">{f.title}</h3>
            <p className="mt-2 text-white/80">{f.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
