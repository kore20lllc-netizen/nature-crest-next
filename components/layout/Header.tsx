"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

        <div className="font-bold text-lg">Nature Crest</div>

        <nav className="hidden md:flex gap-6">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <a href="#services" className="block py-2">Services</a>
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}
