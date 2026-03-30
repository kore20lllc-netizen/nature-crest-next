"use client";

import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "Scaling Nature-Based Solutions",
    category: "Strategy",
    readTime: "5 min read",
    abstract:
      "How large-scale climate initiatives can be structured to deliver measurable impact and financial returns.",
  },
  {
    title: "Carbon Markets Explained",
    category: "Finance",
    readTime: "6 min read",
    abstract:
      "Understanding how carbon credits are generated, validated, and traded in global markets.",
  },
  {
    title: "Digital Tools for Climate Execution",
    category: "Technology",
    readTime: "4 min read",
    abstract:
      "Leveraging data platforms and automation to scale environmental project implementation.",
  },
];

export default function InsightsSection() {
  return (
    <section className="section bg-white">
      <div className="container">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
              Insights
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Perspectives on climate, finance, and execution.
            </p>
          </div>

          <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-800"
          >
            View all insights
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="text-xs text-green-600 font-medium uppercase mb-2">
                {insight.category}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {insight.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {insight.abstract}
              </p>

              <div className="text-xs text-gray-500">
                {insight.readTime}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
