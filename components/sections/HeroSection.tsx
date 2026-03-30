import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section bg-white">
      <div className="container grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1>Climate Solutions Built for Scale</h1>

          <p className="mt-6">
            We design and execute nature-based climate projects across Africa.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="btn-primary">
              Contact
            </a>
            <a href="#projects" className="btn-outline">
              Projects
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            alt="Forest"
            className="rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
