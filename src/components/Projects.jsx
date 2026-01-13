import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Vehicle Rental Platform",
    description:
      "A full-stack vehicle rental system with real-time booking, user management, and scalable backend APIs.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Resort Booking Platform",
    description:
      "A modern resort booking website featuring authentication, CRUD operations, and clean UI design.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/mdjaved17/resorts_booking",
    demo: "https://resorts-booking-2.onrender.com/listings",
  },
  {
    title: "Book Search App",
    description:
      "A book discovery app that fetches and displays data from Google Books API with a user-friendly interface.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    tech: ["JavaScript", "Google Books API", "CSS"],
    github: "https://github.com/mdjaved17/bookDetails",
    demo: "https://book-details.vercel.app/",
  },
  {
    title: "Emplooye Management System",
    description:
      "A responsive employee management system built to perform CRUD operations on employee records, leveraging browser localStorage for persistent client-side data storage.",
    image: "https://plus.unsplash.com/premium_photo-1720589103335-43589b70bd20?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["JavaScript", "Google Books API", "CSS"],
    github: "https://github.com/mdjaved17/empManagement",
    demo: "https://emp-management-nine.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#05060a] text-white"
    >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
        <p className="text-gray-400 max-w-2xl">
          A selection of projects showcasing my ability to design and build
          scalable, user-focused web applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100
                              transition-opacity flex items-center justify-center gap-4"
              >
                <a
                  href={project.github}
                  target="_blank"
                  className="p-3 bg-white text-black rounded-full hover:scale-110 transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="p-3 bg-indigo-500 text-white rounded-full hover:scale-110 transition"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
