"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <div className="font-semibold text-lg text-forest">
          Nature Crest
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#services" className="hover:text-green-600">Services</a>
          <a href="#projects" className="hover:text-green-600">Projects</a>
          <a href="#insights" className="hover:text-green-600">Insights</a>
          <a href="#contact" className="btn-primary">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-6 gap-4 text-sm">
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#insights" onClick={() => setOpen(false)}>Insights</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary text-center">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
