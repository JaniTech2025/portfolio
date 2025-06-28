import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;   
};

export default function PortfolioCards() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const snapshot = await getDocs(collection(db, "portfolio"));
        const items = snapshot.docs.map((doc) => {
          const data = doc.data() as Omit<Project, "imageUrl">;

          const localImageUrl = `/images/project${data.id}.png`;
          console.log(localImageUrl);

          return {
            ...data,
            imageUrl: localImageUrl,
          } as Project & { imageUrl: string };
        });
        setProjects(items);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    }

    fetchPortfolio();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-10">.My Projects.</h1>
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white shadow-md rounded-xl p-6 border border-gray-100 min-h-[450px]"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                onError={(e) => {
                   (e.currentTarget as HTMLImageElement).src = "/images/projects/placeholder.jpg";
                }}
               className="h-72 w-full object-cover rounded-md mb-4"/>

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(project.techStack) &&
                    project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                      >
                        <FaCode className="mr-1" /> {tech}
                      </span>
                    ))}
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black flex items-center"
                  title="View Repository"
                >
                  <FaGithub className="mr-1" /> Repo
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-900 flex items-center"
                    title="Live Site"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
