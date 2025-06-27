import type { JSX } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";

export default function FullStackDeveloper(): JSX.Element {
  return (
    <section
      id="fullstack"
      className="w-full px-4 sm:px-8 py-8 mt-16"
      style={{ backgroundColor: "#FFFFFF" }}      
    >

    <h2 className="text-3xl font-bold text-center mb-8 text-black">
    <u>.My Skillset.</u>
    </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>
          <div className="flex flex-col items-center gap-3 text-4xl text-blue-600">
            <SiReact title="React" />
            <SiTypescript title="TypeScript" />
            <SiTailwindcss title="Tailwind CSS" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Backend</h3>
          <div className="flex flex-col items-center gap-3 text-4xl text-green-600">
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Database</h3>
          <div className="flex flex-col items-center gap-3 text-4xl text-indigo-600">
            <SiMongodb title="MongoDB" />
            <SiPostgresql title="PostgreSQL" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-col items-center gap-3 text-4xl text-gray-700">
            <SiDocker title="Docker" />
            <SiGit title="Git" />
          </div>
        </div>
      </div>
    </section>
  );
}
