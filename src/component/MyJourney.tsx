import type { JSX } from "react";

interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

const journey: JourneyItem[] = [
  {
    year: "2000s",
    title: "The Spark That Started It All",
    description:
      "Discovered BASIC and Visual Basic in school and was amazed by how computers followed instructions. This sparked my lifelong interest in tech.",
  },
  {
    year: "2005",
    title: "Studied Computer Science",
    description:
      "Pursued a Bachelor's degree in Information Technology, laying the groundwork in software fundamentals.",
  },
  {
    year: "Early Career",
    title: "Fortran, Mainframe & Linux Shell scripting, Insurance Domain",
    description:
      "Started my career working on enterprise systems and became a module lead for an insurance product. Gained international experience by working onsite in the U.S.",
  },
  {
    year: "Postgraduate",
    title: "Master’s in Information Technology",
    description:
      "Expanded my knowledge through coursework in core Computer Science subjects like Algorithms, Operating Systems & Data mining. Did a course in Cyber Laws",
  },
  {
    year: "Teaching Phase",
    title: "Educator & Mentor",
    description:
      "Motivated to make learning accessible, I started teaching tech in colleges to bridge the gap between tech industry and College education",
  },
  {
    year: "Australia Transition",
    title: "Exploring New Paths",
    description:
      "Moved to Australia and explored interior design professionally. Even in retail, I looked for ways to improve CRM systems with tech.",
  },
  {
    year: "2024",
    title: "Back to Tech _nology Program",
    description:
      "Joined _nology to re-enter tech. Learned to manage tasks with Trello, timebox efficiently, and build Full stack apps.",
  },
];

export default function MyJourney(): JSX.Element {
  return (
    <section
      id="journey"
      className="w-full px-4 py-12"
      style={{ backgroundColor: "#7D93C4" }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        .My Journey.
      </h2>

      <div className="relative border-l border-gray-300 ml-4">
        {journey.map((item, idx) => (
          <div key={idx} className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1.5"></div>
            <time className="text-sm text-gray-700 font-medium">{item.year}</time>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-800">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
