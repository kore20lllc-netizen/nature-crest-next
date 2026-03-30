export default function InitiativesSection() {
  const initiatives = [
    {
      title: "AFRICO2 Platform",
      desc: "A continental platform to scale high-integrity carbon projects across Africa.",
    },
    {
      title: "30M+ Tons Initiative",
      desc: "A large-scale pipeline targeting millions of tons of verified carbon credits.",
    },
    {
      title: "CASIF",
      desc: "Climate Adaptation & Sustainable Investment Facility enabling blended finance for resilience.",
    },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center mb-16">
          Global Initiatives
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((item, i) => (
            <div key={i} className="card bg-white">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
