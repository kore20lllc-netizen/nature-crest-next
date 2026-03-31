export default function InsightsSection() {
  const insights = [
    {
      title: "Climate Trends",
      desc: "Latest insights on global environmental changes."
    },
    {
      title: "Impact Reports",
      desc: "Transparent reporting on project outcomes."
    },
    {
      title: "Research",
      desc: "Data-driven strategies for sustainability."
    },
  ];

  return (
    <section id="insights" className="py-24 md:py-32 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Insights</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Knowledge and data shaping sustainable decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((i, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">{i.title}</h3>
              <p className="mt-3 text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
