import { FaBriefcase, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    role: "AI Trainer (Prompt Engineer)",
    company: "Handshake AI",
    type: "Remote",
    duration: "Aug 2026 – Present",
    description:
      "Working on AI training and data-quality programs by designing, evaluating, and refining prompts and model responses. Following structured evaluation criteria and quality guidelines to help improve the reliability and performance of AI systems.",
    highlights: [
      "Design and evaluate prompts to test and improve AI model responses.",
      "Review model outputs against defined quality benchmarks and evaluation guidelines.",
      "Contribute high-quality training data that supports AI model development and improvement.",
    ],
    tech: ["Prompt Engineering", "AI Evaluation", "LLM", "Data Quality"],
  },
  {
    role: "Open Source Contributor",
    company: "Braidpool",
    type: "Web3 Platform",
    duration: "Aug 2025 – Present",
    description:
      "Contributing to an open-source Web3 platform by resolving frontend and UI issues and improving the overall user experience. Collaborating with a distributed development team through Git and GitHub while following clean and maintainable coding practices.",
    highlights: [
      "Resolved 10+ frontend and UI-related issues using React and JavaScript.",
      "Improved interface consistency, responsiveness, and overall usability.",
      "Collaborated with a distributed team using Git and GitHub through pull requests and code reviews.",
      "Submitted and merged multiple pull requests into the production codebase.",
    ],
    tech: ["React", "JavaScript", "Git", "GitHub", "Web3"],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#05060a] text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="text-indigo-400 font-medium mb-3">My Journey</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Professional and open-source experience focused on AI evaluation,
            frontend development, and collaborative software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Icon */}
                <div
                  className="absolute left-0 md:left-2 top-1 w-8 h-8
                             rounded-full bg-indigo-500/20 border border-indigo-400/40
                             flex items-center justify-center"
                >
                  <FaBriefcase
                    size={13}
                    className="text-indigo-400"
                  />
                </div>

                {/* Experience Card */}
                <div
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl
                             border border-white/10 p-6 md:p-8
                             transition-all duration-300
                             hover:-translate-y-1
                             hover:border-indigo-500/30
                             hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  {/* Top Section */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">
                        {experience.role}
                      </h3>

                      <p className="text-indigo-400 font-medium">
                        {experience.company}
                        <span className="text-gray-500 mx-2">•</span>
                        <span className="text-gray-400 font-normal">
                          {experience.type}
                        </span>
                      </p>
                    </div>

                    <span
                      className="text-sm text-gray-400 bg-white/5
                                 border border-white/10 px-4 py-2
                                 rounded-full whitespace-nowrap w-fit"
                    >
                      {experience.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {experience.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="text-indigo-400 mt-1">▹</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full
                                   bg-indigo-500/10 text-indigo-300
                                   border border-indigo-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}