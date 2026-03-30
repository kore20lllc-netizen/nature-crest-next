export default function DigitalSection() {
  const capabilities: { title: string; description: string }[] = [
    {
      title: "Digital MRV",
      description:
        "Monitoring, reporting, and verification systems for carbon and nature projects.",
    },
    {
      title: "Project Intelligence",
      description:
        "Data-driven insights to optimize project performance and scalability.",
    },
    {
      title: "Platform Integration",
      description:
        "Connecting climate projects with digital infrastructure and global markets.",
    },
  ];

  return (
    <section id="digital" className="section bg-gray-50">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2>Digital Capabilities</h2>
          <p className="mt-4">
            Technology powering scalable climate and nature-based solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <div key={idx} className="card">
              <h3 className="mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
