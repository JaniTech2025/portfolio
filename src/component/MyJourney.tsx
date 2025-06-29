import type { JSX } from "react";

interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

const journey: JourneyItem[] = [
  {
    year: "1999",
    title: "The Spark That Started It All",
    description:
      "Discovered BASIC and Visual Basic in school and was fascinated by how computers followed instructions. This sparked my interest in tech.",
  },
  {
    year: "2001",
    title: "Studied Computer Science",
    description:
      "Pursued a Bachelor's degree in Information Technology, laying the groundwork in software fundamentals.",
  },
  {
    year: "2005",
    title: "Fortran, Mainframe & Linux Shell scripting, Insurance Domain",
    description:
      "Started my career working in the tech industry. GOt an opportunity to be a module lead for an insurance Software. Gained international experience by working onsite in the U.S.",
  },
  {
    year: "2012",
    title: "Master’s in Information Technology",
    description:
      "Expanded my knowledge through coursework in core Computer Science subjects like Algorithms, Operating Systems & Data mining. Did a course in Cyber Laws. which was an upcoming field at theat time.",
  },
  {
    year: "Teaching Phase",
    title: "Educator & Mentor",
    description:
      "I started teaching Computer Science in colleges. My motive was to bridge the between tech industry and classroom learning.",
  },
  {
    year: "2016",
    title: "Australia Transition - Exploring New Paths",
    description:
      "After moving to Australia, I pursued interior design professionally. Even while working in retail, I found myself taking notes on ways to improve the daily workflow of sales consultants — a reflection of my ongoing interest in practical, user-focused problem solving.",
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
      className="w-full px-4 py-16 bg-indigo-100 text-indigo-900"
    >
      <h2 className="font-heading text-2xl font-bold text-center mb-16">.My Journey.</h2>

      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
        <div className="absolute left-4 sm:left-6 top-0 h-full w-1 bg-indigo-100 z-0" />

        {journey.map((item, idx) => (
          <div
            key={idx}
            className="mb-10 ml-10 sm:ml-14 relative"
          >
            <span className="absolute left-[-22px] sm:left-[-26px] top-2 w-5 h-5 bg-indigo-100 border-4 border-[#7D93C4] rounded-full z-10" />

            <div className="text-indigo-900">
              <time className="font-body block text-sm font-semibold text-indigo-900 mb-1">
                {item.year}
              </time>
              <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
              <p className="font-body text-indigo-900/90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
