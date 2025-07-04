import type { JSX } from "react";
import { FaCloud } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiMysql,
  SiGit,
  SiSass,
  SiSpring,
  SiNestjs,
  SiGooglecloud, // for Firestore
  SiTrello,
} from "react-icons/si";

export default function FullStackDeveloper(): JSX.Element {
  return (
    <section id="skills" className="text-black py-6 sm:py-8 md:py-12 lg:py-16">
      <h2 className="font-heading text-2xl font-semibold mb-6 text-center">.My Skills.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {/* Frontend */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Frontend</h3>
          <div className="font-body flex flex-col items-center gap-4 text-blue-600">
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl" />
              <span className="text-sm mt-1">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl" />
              <span className="text-sm mt-1">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiSass className="text-4xl" />
              <span className="text-sm mt-1">SCSS</span>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Backend</h3>
          <div className="font-body flex flex-col items-center gap-4 text-green-700">
            <div className="flex flex-col items-center">
              <SiSpring className="text-4xl" />
              <span className="text-sm mt-1">Spring</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCloud className="text-4xl" />
              <span className="text-sm mt-1">REST API</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNestjs className="text-4xl" />
              <span className="text-sm mt-1">NestJS</span>
            </div>
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Database</h3>
          <div className="font-body flex flex-col items-center gap-4 text-indigo-600">
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl" />
              <span className="text-sm mt-1">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGooglecloud className="text-4xl" />
              <span className="text-sm mt-1">Firestore</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Tools</h3>
          <div className="font-body flex flex-col items-center gap-4 text-gray-700">
            <div className="flex flex-col items-center">
              <SiGit className="text-4xl" />
              <span className="text-sm mt-1">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTrello className="text-4xl" />
              <span className="text-sm mt-1">Trello</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}