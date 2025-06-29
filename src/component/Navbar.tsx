import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-900 text-purple-100 p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-heading text-xl">Suba .Jani. Surianarayanan's Portfolio</h1>

        {/* Desktop menu: show at ≥700px */}
        <ul className="hidden custom:flex space-x-6">
          <li><a href="#intro" className="font-body hover:underline">About</a></li>
          <li><a href="#portfoliocards" className="font-body hover:underline">Projects</a></li>
          <li><a href="#skills" className="font-body hover:underline">Skills</a></li>
          <li><a href="#contact" className="font-body hover:underline">Contact</a></li>
        </ul>

        {/* Mobile menu button: show below 700px */}
        <button
          className="custom:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="custom:hidden bg-purple-900 px-4 pb-4 space-y-2 text-center">
          <li><a href="#intro" className="block font-body hover:underline" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#portfoliocards" className="block font-body hover:underline" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" className="block font-body hover:underline" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" className="block font-body hover:underline" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
