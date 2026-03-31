export default function ServicesSection() {
  const services = [
    {
      title: "Climate Project Development",
      desc: "REDD+, ARR, mangroves and regenerative agriculture with full MRV systems.",
    },
    {
      title: "Climate Finance",
      desc: "Structuring access to GCF, GEF and blended finance mechanisms.",
    },
    {
      title: "Policy & Article 6",
      desc: "NDC implementation, carbon registries and international carbon markets.",
    },
    {
      title: "Digital & MRV",
      desc: "Satellite monitoring, geospatial data and real-time dashboards.",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
