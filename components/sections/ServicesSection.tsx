"use client";

import { TreeDeciduous, Landmark, Scale } from "lucide-react";

const services = [
  {
    title: "Nature-Based Solutions",
    description:
      "Design and implementation of large-scale environmental and carbon projects.",
    icon: TreeDeciduous,
  },
  {
    title: "Climate Finance",
    description:
      "Structuring funding mechanisms and investment-ready climate initiatives.",
    icon: Landmark,
  },
  {
    title: "Policy & Strategy",
    description:
      "Advisory support for governments and institutions on climate frameworks.",
    icon: Scale,
  },
];

export default function ServicesSection() {
  return (
    <section className="section bg-gray-50">
      <div className="container">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2>Our Services</h2>
          <p className="mt-4">
            We design, finance, and execute scalable climate and nature-based solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="card text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-700" />
                </div>

                <h3 className="mb-2">{service.title}</h3>

                <p className="text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
