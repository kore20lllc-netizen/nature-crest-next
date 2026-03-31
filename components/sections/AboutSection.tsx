export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">About Nature Crest</h2>

        <p className="mt-6 text-lg text-gray-600">
          Nature Crest is committed to developing scalable environmental solutions
          that restore ecosystems, empower communities, and drive sustainable growth.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">

          <div>
            <h3 className="font-semibold text-lg">Mission</h3>
            <p className="text-gray-600 mt-2">Deliver measurable environmental impact.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Vision</h3>
            <p className="text-gray-600 mt-2">A sustainable future powered by nature.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Approach</h3>
            <p className="text-gray-600 mt-2">Science-backed, scalable, community-driven.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
