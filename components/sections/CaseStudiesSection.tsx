export default function CaseStudiesSection() {
  const cases = [
    {
      title: "Government – Article 6 Architecture",
      desc: "Designed institutional frameworks for a Central African country, now serving as a regional model.",
    },
    {
      title: "Investors – Carbon Pipeline",
      desc: "Structured a 5M+ tCO₂ portfolio across Latin America for a European fund.",
    },
    {
      title: "Flagship – Cameroon Project",
      desc: "10,000-hectare reforestation and agroforestry project in Adamaoua.",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center mb-16">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
