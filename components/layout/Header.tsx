"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe, Building2, Leaf, Users } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Nature Crest"
            className="h-[120px] w-auto object-contain flex-shrink-0"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12 text-base font-medium">

          {/* SOLUTIONS MEGA MENU */}
          <div className="relative group">

            <button className="text-green-800 hover:text-yellow-600 flex items-center gap-1">
              Solutions <span className="text-yellow-600">▾</span>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-[800px] bg-white border rounded-2xl shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 z-50">

              <div className="grid grid-cols-2 gap-10 p-10">

                {/* COLUMN 1 */}
                <div className="space-y-6">

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-green-50 transition cursor-pointer group/item">
                    <Globe className="text-green-700 group-hover/item:text-yellow-600 transition" />
                    <div>
                      <h4 className="font-semibold text-green-900 group-hover/item:text-yellow-600 transition">
                        For Governments
                      </h4>
                      <p className="text-sm text-gray-600">
                        NDC implementation and policy frameworks
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-green-50 transition cursor-pointer group/item">
                    <Building2 className="text-green-700 group-hover/item:text-yellow-600 transition" />
                    <div>
                      <h4 className="font-semibold text-green-900 group-hover/item:text-yellow-600 transition">
                        For Corporates
                      </h4>
                      <p className="text-sm text-gray-600">
                        Nature-based solutions and compliance
                      </p>
                    </div>
                  </div>

                </div>

                {/* COLUMN 2 */}
                <div className="space-y-6">

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-green-50 transition cursor-pointer group/item">
                    <Leaf className="text-green-700 group-hover/item:text-yellow-600 transition" />
                    <div>
                      <h4 className="font-semibold text-green-900 group-hover/item:text-yellow-600 transition">
                        For Investors
                      </h4>
                      <p className="text-sm text-gray-600">
                        Carbon assets and climate finance structuring
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-3 rounded-lg hover:bg-green-50 transition cursor-pointer group/item">
                    <Users className="text-green-700 group-hover/item:text-yellow-600 transition" />
                    <div>
                      <h4 className="font-semibold text-green-900 group-hover/item:text-yellow-600 transition">
                        For Developers
                      </h4>
                      <p className="text-sm text-gray-600">
                        Community-driven carbon project support
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* BOTTOM STRIP */}
              <div className="bg-green-50 px-10 py-6 rounded-b-2xl flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Explore tailored solutions
                </p>

                <a
                  href="#solutions"
                  className="px-4 py-2 rounded-full bg-green-800 text-white text-sm hover:bg-yellow-600"
                >
                  View All →
                </a>
              </div>

            </div>
          </div>

          <a href="#projects" className="text-green-800 hover:text-yellow-600">Projects</a>
          <a href="#insights" className="text-green-800 hover:text-yellow-600">Insights</a>
          <a href="#about" className="text-green-800 hover:text-yellow-600">About</a>
          <a href="#contact" className="text-green-800 hover:text-yellow-600">Contact</a>

        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4">

          <div>
            <p className="font-semibold text-green-800">Solutions</p>
            <div className="ml-4 mt-2 text-sm text-gray-600 space-y-1">
              <p>For Governments</p>
              <p>For Investors</p>
              <p>For Corporates</p>
              <p>For Developers</p>
            </div>
          </div>

          <a href="#projects">Projects</a>
          <a href="#insights">Insights</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

        </div>
      )}
    </header>
  );
}
