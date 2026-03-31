export default function SolutionsSection() {
  const solutions = [
    {
      title: "For Governments",
      desc: "NDC implementation, Article 6 readiness, and climate policy frameworks",
    },
    {
      title: "For Investors",
      desc: "High-integrity carbon assets and climate finance structuring",
    },
    {
      title: "For Corporates",
      desc: "Nature-based solutions and sustainability compliance",
    },
    {
      title: "For Project Developers",
      desc: "Supporting communities and local organizations in carbon project development",
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Solutions <span className="text-yellow-600">^</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Tailored climate solutions across stakeholders and markets.
          </p>
        </div>

        <div className="space-y-10">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-green-900">
                {s.title}
              </h3>

              <p className="mt-2 text-gray-600 text-lg">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
