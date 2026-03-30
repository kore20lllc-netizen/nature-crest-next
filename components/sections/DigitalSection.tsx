export default function DigitalSection() {
  const features = [
    "Geospatial monitoring (satellite + GIS)",
    "Real-time deforestation alerts",
    "Biomass estimation",
    "End-to-end MRV workflows",
    "Decision dashboards for stakeholders",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">
            Digital Climate Infrastructure
          </h2>
          <p className="mt-4 text-gray-600">
            Technology ensuring transparency, accuracy, and trust across climate projects.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <li key={i} className="border rounded-lg p-4">
              {f}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
