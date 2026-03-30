"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent (demo)");
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container max-w-3xl">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600">
            Let’s discuss your climate or nature-based initiative.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Organization</label>
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}
