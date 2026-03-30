"use client";

import { Eye, Target, Users } from "lucide-react";

const teamMembers = [
  { name: "Jocelyne Landry Tsonang", role: "Operations Manager", initials: "JT" },
  { name: "Dr. Alex Leunemi", role: "Climate Finance & Carbon Markets", initials: "AL" },
  { name: "Donald", role: "East Africa Lead (Kenya)", initials: "DK" },
];

const advisors = [
  { name: "Yasmine", role: "Advisory Board", initials: "YA" },
  { name: "Christian", role: "Advisory Board", initials: "CH" },
  { name: "Dr. Guy Merlin Nguenang", role: "Advisory Board", initials: "GN" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Who We Are
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Nature Crest is a climate and nature solutions platform focused on
            designing scalable, high-impact initiatives across carbon markets,
            conservation finance, and digital infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 h-full border-t-4 border-green-500 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-green-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To help shape a future where climate resilience, biodiversity,
              finance, and execution work together at scale.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 h-full border-t-4 border-gray-900 shadow-sm">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-green-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To partner with governments, investors, and institutions to
              structure and deliver practical climate and nature-based solutions
              with measurable impact.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-800 text-sm font-medium">
            <Users className="w-4 h-4" />
            Team & Advisors
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-4">
            Leadership and Advisory Network
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A multidisciplinary team bringing together operations, climate finance,
            regional expertise, and advisory guidance.
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Core Team
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 text-green-800 flex items-center justify-center mx-auto mb-4 font-semibold">
                  {member.initials}
                </div>
                <h5 className="text-lg font-semibold text-gray-900">{member.name}</h5>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Advisory Board
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4 font-semibold">
                  {advisor.initials}
                </div>
                <h5 className="text-lg font-semibold text-gray-900">{advisor.name}</h5>
                <p className="text-sm text-gray-600 mt-1">{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
