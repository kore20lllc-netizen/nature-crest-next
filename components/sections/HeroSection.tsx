import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unlocking Africa’s Natural Capital for Global Climate Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Nature Crest originates, structures, and scales high-integrity carbon
            and nature-based projects across Africa—transforming climate
            opportunities into credible, investable assets.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Book a Strategy Call
            </a>
            <a href="#projects" className="border px-6 py-3 rounded-lg">
              Explore Projects
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-gray-500">
            <span>50+ Projects</span>
            <span>30+ Countries</span>
            <span>100M+ tCO₂ Managed</span>
          </div>
        </div>

        <div>
          <img
            src="/assets/forest-hero.jpg"
            alt="Climate Solutions"
            className="rounded-xl w-full"
          />
        </div>

      </div>
    </section>
  );
}
