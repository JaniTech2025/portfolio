import type { JSX } from "react";
import { FaCloud } from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiMysql,
  SiGit,
  SiSass,
  SiSpring,
} from "react-icons/si";

export default function FullStackDeveloper(): JSX.Element {
  return (
    <section id="skills" className="text-black py-6 sm:py-8 md:py-12 lg:py-16">
        <h2 className="font-heading text-2xl font-semibold mb-6 text-center">.My Skills.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Frontend</h3>
          <div className="font-body flex flex-col items-center gap-3 text-4xl text-blue-600">
            <SiReact title="React" />
            <SiTypescript title="TypeScript" />
            <SiSass title="SCSS" />
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Backend</h3>
          <div className="font-body flex flex-col items-center gap-3 text-4xl text-green-700">
            <SiSpring title="Spring Framework" />
            <FaCloud title="RESTful API" />
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Database</h3>
          <div className="font-body flex flex-col items-center gap-3 text-4xl text-indigo-600">
            <SiMysql title="MySQL" />
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-semibold mb-4">Tools</h3>
          <div className="font-body flex flex-col items-center gap-3 text-4xl text-gray-700">
            <SiGit title="Git" />
          </div>
        </div>

      </div>
    </section>
  );
}
