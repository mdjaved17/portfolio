import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTerminal,
  FaTools,
  FaBrain,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Languages",
    icon: <FaTerminal className="w-6 h-6 text-indigo-400" />,
    skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode className="w-6 h-6 text-indigo-400" />,
    skills: ["React.js", "HTML", "CSS", "Redux Toolkit"],
  },
  {
    title: "Backend",
    icon: <FaServer className="w-6 h-6 text-indigo-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="w-6 h-6 text-indigo-400" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Core Concepts",
    icon: <FaCode className="w-6 h-6 text-indigo-400" />,
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Problem Solving",
    ],
  },
  {
    title: "AI & Tools",
    icon: <FaBrain className="w-6 h-6 text-indigo-400" />,
    skills: [
      "ChatGPT",
      "GitHub Copilot",
      "Prompt Engineering",
      "Git",
      "GitHub",
      "AWS",
      "VS Code",
      "Postman",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#05060a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-indigo-500 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-lg
                         border border-white/10 transition-all duration-300
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              <div
                className="mb-6 inline-flex p-3 rounded-xl bg-white/10
                           group-hover:scale-110 transition-transform"
              >
                {group.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full
                               bg-white/10 text-gray-300
                               border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}