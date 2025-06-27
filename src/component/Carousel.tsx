import React, { useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: "1",
    name: "Project One",
    description: "This is a description of project one.",
    techStack: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/user/project-one",
    liveUrl: "https://project-one.example.com",
    imageUrl: "./smaller_dp.jpg",
  },
  {
    id: "2",
    name: "Project Two",
    description: "This is a description of project two.",
    techStack: ["Next.js", "Firebase", "SCSS"],
    repoUrl: "https://github.com/user/project-two",
    imageUrl: "/project2.jpg",
  },
  {
    id: "3",
    name: "Project Three",
    description: "This is a description of project three.",
    techStack: ["Vue", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/user/project-three",
    liveUrl: "https://project-three.example.com",
    imageUrl: "/project3.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  }
  function next() {
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  }

  const project = projects[current];

  return (
    <section id="carousel" className="mt-16 container mx-auto px-4 text-center">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <div className="relative max-w-xl mx-auto bg-white p-6 text-left">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="mb-4 text-gray-700">{project.description}</p>

        <div className="mb-4">
          <strong>Tech Stack:</strong>{" "}
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Repo
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Live Site
            </a>
          )}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        >
          ›
        </button>
      </div>
    </section>
  );
}
