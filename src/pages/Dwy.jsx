export default function Dwy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4c1d95] via-[#5b21b6] to-[#1e3a8a] text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24 text-center">
        <p className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          DIY with coaching • Do-With-You Academy
        </p>
        <h1 className="mx-auto max-w-4xl text-5xl font-extrabold md:text-6xl leading-tight">
          Master AI Systems with <span className="text-fuchsia-300">Expert Playbooks</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
          Learn frameworks we use internally. Workshops, office hours, reviews, and copy-paste templates so you ship
          confidently.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#join" className="rounded-xl bg-white text-gray-900 px-6 py-3 font-semibold shadow">
            🎓 Join the Academy
          </a>
          <a href="#curriculum" className="rounded-xl border border-white/30 px-6 py-3 font-semibold">
            See Curriculum
          </a>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section id="curriculum" className="container mx-auto px-6 pb-10 grid gap-6 md:grid-cols-3">
        {[
          { title: "Weekly Workshops", desc: "Live build-along sessions with Q&A." },
          { title: "Templates & Starters", desc: "UI blocks, prompts, and boilerplates." },
          { title: "1:1 Reviews", desc: "Get feedback on your build, faster." },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mt-2 text-white/90">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* Outcomes */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">What You’ll Ship</h2>
        <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-white/90">
          <li>• An agent or tool that actually helps your business today.</li>
          <li>• A repeatable stack (orchestration, RAG, evals) you can extend.</li>
          <li>• A roadmap for your next 90 days of shipping.</li>
        </ul>
      </section>

      {/* CTA */}
      <section id="join" className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-2xl font-bold">Join the next cohort</h3>
        <p className="mt-2 text-white/90">Limited seats. Get coaching, templates, and hands-on reviews.</p>
        <a href="#" className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 shadow">
          🎓 Apply Now
        </a>
      </section>
    </main>
  );
}
