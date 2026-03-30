import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section bg-white">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1>
            Unlocking Africa's Natural Capital for Global Climate Solutions
          </h1>

          <p className="mt-6 text-lg">
            Nature Crest originates, structures, and scales high-integrity carbon
            and nature-based projects across Africa.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary flex items-center gap-2">
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="#projects" className="btn-outline">
              Explore Platform
            </a>
          </div>

          <div className="mt-10 flex gap-10 text-sm">
            <div>
              <div className="text-2xl font-bold text-forest">50+</div>
              <div className="text-muted">Projects</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-forest">30+</div>
              <div className="text-muted">Countries</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-forest">100M+</div>
              <div className="text-muted">tCO₂</div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="/assets/forest-hero.jpg"
            alt="Climate"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
