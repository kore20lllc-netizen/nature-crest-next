"use client";

import { MapPin, TreeDeciduous, Bird, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Forest Conservation Initiative",
    region: "Central Africa",
    country: "Cameroon",
    type: "Reforestation",
    hectares: 12000,
    carbonValue: "$4.2M",
    coBenefits: "Biodiversity protection, community jobs",
    description:
      "Large-scale reforestation and conservation program designed to generate carbon credits.",
  },
  {
    title: "Mangrove Restoration Program",
    region: "West Africa",
    country: "Senegal",
    type: "Restoration",
    hectares: 8000,
    carbonValue: "$2.8M",
    coBenefits: "Coastal protection, fisheries support",
    description:
      "Restoring mangrove ecosystems to enhance carbon sequestration.",
  },
  {
    title: "Agroforestry Expansion",
    region: "East Africa",
    country: "Kenya",
    type: "Agroforestry",
    hectares: 5000,
    carbonValue: "$1.6M",
    coBenefits: "Farmer income, soil health",
    description:
      "Integrating trees into agriculture to improve productivity and capture carbon.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2>Our Projects</h2>
          <p className="mt-4">
            Real-world climate initiatives delivering measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="card overflow-hidden p-0">

              <div className="relative h-44">
                <img
                  src="/assets/forest-hero.jpg"
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">

                <div className="text-xs text-green-600 font-medium mb-1">
                  {project.type}
                </div>

                <h3 className="mb-2">{project.title}</h3>

                <p className="text-sm mb-4">{project.description}</p>

                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <TreeDeciduous className="w-4 h-4 text-green-600" />
                    {project.hectares} ha
                  </div>

                  <div className="font-semibold text-gray-900">
                    {project.carbonValue}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Bird className="w-4 h-4 text-green-600" />
                  {project.coBenefits}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {project.region}
                  </span>

                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-green-600 hover:text-green-800 font-medium"
                  >
                    Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
