import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-purple-900 text-purple-100 p-6 mt-20 text-center flex flex-col items-center gap-4">
      <p>© 2025 Jani&apos;s Portfolio. All rights reserved.</p>

      <div className="flex justify-center gap-6 text-2xl text-purple-100">
        <a
          href="https://www.instagram.com/aussieinkspire/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.linkedin.com/in/janitech2025"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}
