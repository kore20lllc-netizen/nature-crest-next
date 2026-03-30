import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1>
            Unlocking Africa’s Natural Capital for Global Climate Solutions
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Nature Crest originates, structures, and scales high-integrity carbon
            and nature-based projects across Africa.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Book a Strategy Call <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-outline">
              Explore Projects
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-gray-500">
            <div>
              <div className="text-xl font-semibold text-black">50+</div>
              Projects
            </div>
            <div>
              <div className="text-xl font-semibold text-black">30+</div>
              Countries
            </div>
            <div>
              <div className="text-xl font-semibold text-black">100M+</div>
              tCO₂
            </div>
          </div>
        </div>

        <div>
          <img
            src="/assets/forest-hero.jpg"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
