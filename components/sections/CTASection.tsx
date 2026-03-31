export default function CTASection() {
  return (
    <section className="py-20 bg-green-800 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold">
          Initiate a High-Impact Climate Project
        </h2>

        <p className="mt-4 text-green-100 text-lg">
          Engage with our team to structure, develop, and scale verified climate initiatives.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
          >
            Start a Project
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
}
