export default function InitiativesSection() {
  const initiatives: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    bullets: string[];
  }[] = [
    {
      id: "carbon",
      title: "Carbon Projects",
      tagline: "High-integrity carbon development",
      description:
        "We originate and structure carbon projects aligned with global standards and local impact.",
      bullets: [
        "Afforestation & reforestation",
        "REDD+ programs",
        "Carbon certification support",
      ],
    },
    {
      id: "finance",
      title: "Climate Finance",
      tagline: "Unlocking capital at scale",
      description:
        "Designing financial structures that attract institutional and private investment.",
      bullets: [
        "Blended finance",
        "Investor structuring",
        "Project bankability",
      ],
    },
    {
      id: "execution",
      title: "Project Execution",
      tagline: "From design to deployment",
      description:
        "End-to-end implementation with local partnerships and measurable outcomes.",
      bullets: [
        "Field operations",
        "Monitoring & reporting",
        "Community integration",
      ],
    },
  ];

  return (
    <section id="initiatives" className="section bg-white">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2>Key Initiatives</h2>
          <p className="mt-4">
            Scalable climate programs designed for real-world impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item) => (
            <div key={item.id} className="card">
              <h3 className="mb-1">{item.title}</h3>
              <p className="text-sm text-green-600 mb-3">{item.tagline}</p>
              <p className="text-sm mb-4">{item.description}</p>

              <ul className="text-sm space-y-1 mb-4">
                {item.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
