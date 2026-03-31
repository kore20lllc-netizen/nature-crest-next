export default function ProjectsSection() {
  const projects = [
    {
      title: "Reforestation Program",
      location: "Central Africa",
      image: "/assets/forest-hero.jpg",
      description: "Large-scale ecosystem restoration improving biodiversity and livelihoods.",
    },
    {
      title: "Community Agroforestry",
      location: "West Africa",
      image: "/assets/forest-hero.jpg",
      description: "Integrating agriculture with forest systems to boost resilience.",
    },
    {
      title: "Carbon Capture Initiative",
      location: "Global",
      image: "/assets/forest-hero.jpg",
      description: "Reducing emissions through verified environmental programs.",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Our Projects</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real-world initiatives delivering measurable environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-green-700 font-medium">{project.location}</p>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-3 text-sm">{project.description}</p>

                <a
                  href="#"
                  className="inline-block mt-4 text-green-700 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
