export default function TrustSection() {
  const stats = [
    { value: "30M+", label: "Trees Planted" },
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Countries Impacted" },
    { value: "100K+", label: "Lives Affected" },
  ];

  return (
    <section className="py-24 md:py-32 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Proven Environmental Trusted Impact at Scale Social Impact
        </h2>

        <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
          Our initiatives are designed to deliver verified, long-term environmental and socio-economic outcomes at scale.
        </p>

        <div className="mt-16 grid md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-bold text-yellow-400">
                {s.value}
              </p>
              <p className="mt-2 text-green-100">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
