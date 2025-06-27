import { useEffect, useState } from "react";
import { getProjects } from "../component/projectService";
import type { Project } from "../types/project";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <div key={p.id} className="border rounded p-4 shadow">
          <h2 className="text-lg font-bold">{p.name}</h2>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}
