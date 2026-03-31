export default function HeroSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Developing Bankable Climate Projects with Measurable Environmental Returns
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We structure and deliver high-integrity climate and nature-based solutions for governments, investors, and institutions seeking scalable, verifiable impact.
            measurable impact across communities, ecosystems, and economies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-green-800 text-white hover:bg-green-900 transition"
            >
              Explore Our Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 hover:border-green-700 transition"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="relative">
          <img
            src="/assets/dashboard-mockup.jpg"
            alt="Nature Crest"
            className="w-full rounded-2xl shadow-2xl"
          />

          {/* subtle overlay card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 text-sm">
            <p className="font-semibold text-green-700">+30M Trees Impact</p>
            <p className="text-gray-500">Across multiple initiatives</p>
          </div>
        </div>

      </div>
    </section>
  );
}
