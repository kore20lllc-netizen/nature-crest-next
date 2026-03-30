"use client";

export default function AudienceSection() {

  const audiences = [
    {
      id: "governments",
      title: "Governments",
      problem: "Limited capacity to structure scalable climate projects.",
      whatWeDo: [
        "Policy & framework design",
        "Project structuring",
        "Execution partnerships"
      ],
      outcomes: [
        "Bankable climate programs",
        "International funding access",
        "Measurable impact"
      ],
      microCase: {
        title: "National Program",
        description: "Structured a multi-region reforestation initiative."
      },
      cta: "Work with us"
    },
    {
      id: "investors",
      title: "Investors",
      problem: "Lack of high-quality, de-risked climate opportunities.",
      whatWeDo: [
        "Deal sourcing",
        "Due diligence",
        "Execution oversight"
      ],
      outcomes: [
        "Verified projects",
        "Clear ROI pathways",
        "Risk reduction"
      ],
      microCase: {
        title: "Carbon Portfolio",
        description: "Built a diversified carbon asset pipeline."
      },
      cta: "Explore opportunities"
    },
    {
      id: "organizations",
      title: "Organizations",
      problem: "Difficulty executing climate initiatives at scale.",
      whatWeDo: [
        "Program design",
        "Technology integration",
        "Field execution"
      ],
      outcomes: [
        "Scalable programs",
        "Operational efficiency",
        "Real impact"
      ],
      microCase: {
        title: "NGO Partnership",
        description: "Implemented community-based conservation projects."
      },
      cta: "Partner with us"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2>Who We Work With</h2>
          <p className="mt-4">
            Tailored solutions for governments, investors, and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <div key={a.id} className="card">
              <h3 className="mb-2">{a.title}</h3>
              <p className="text-sm mb-4">{a.problem}</p>

              <ul className="text-sm mb-4 space-y-1">
                {a.whatWeDo.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="text-green-600 hover:text-green-800 font-medium text-sm"
              >
                {a.cta}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
