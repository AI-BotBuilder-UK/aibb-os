export default function Dwy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-700 via-fuchsia-500 to-blue-600 text-white">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Do-With-You — Academy
        </h1>

        <p className="mt-6 text-xl max-w-3xl">
          Learn our playbooks, frameworks, and templates. Build alongside us with
          weekly workshops, office hours, and hands-on reviews.
        </p>

        <a
          href="https://cal.com/your-link"  /* change this */
          className="inline-block mt-10 rounded-xl bg-white/95 px-6 py-3 font-semibold text-violet-700 shadow hover:bg-white"
        >
          🎓 Join the Academy
        </a>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold">Weekly Workshops</h3>
            <p className="mt-2 text-white/90">
              Live sessions where we implement, together.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold">Templates & Playbooks</h3>
            <p className="mt-2 text-white/90">
              Copy-paste systems for speed and consistency.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <h3 className="text-2xl font-bold">1:1 Reviews</h3>
            <p className="mt-2 text-white/90">
              Get feedback on your builds so you ship faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
