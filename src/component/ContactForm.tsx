import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Submitted form:", form);
    setSubmitted(true);
    // TODO: integrate Firestore or backend API here
  }

  return (
    <section id="contact" className="mt-16 container mx-auto px-4 max-w-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>

      {submitted ? (
        <p className="text-green-600 text-center">Thanks! I’ll get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border rounded px-4 py-2"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border rounded px-4 py-2"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project or how I can help..."
            rows={5}
            className="border rounded px-4 py-2 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
