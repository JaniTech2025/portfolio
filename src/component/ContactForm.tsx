import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Oops, something went wrong. Please try again.");
      });
  }

  // Reset form and show it again
  function handleOkay() {
    setSubmitted(false);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="mt-16 container mx-auto px-4 max-w-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Get in Touch</h2>

      {submitted ? (
        <div className="text-center">
          <p className="text-green-600 mb-4">Thanks! I’ll get back to you shortly.</p>
          <button
            onClick={handleOkay}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Okay
          </button>
        </div>
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
