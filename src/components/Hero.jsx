import { FaGithub, FaFileAlt } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import TypingText from "./TypingText";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="bg-[#05060a] w-full">
      <div
        className="relative pt-32 pb-20 px-6
                   max-w-7xl mx-auto
                   flex flex-col md:flex-row items-center gap-12 text-white"
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6 text-center md:text-left animate-fadeUp">
          <span
            className="inline-block px-4 py-1.5 rounded-full
                           bg-indigo-500/10 border border-indigo-500/20
                           text-indigo-400 text-sm font-medium"
          >
            Available for new opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            I am{" "}
            <span className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]">
              Md Javed
            </span>
          </h1>

          <div className="mt-2 h-[44px] md:h-[52px]">
            <p className="text-2xl md:text-3xl font-semibold">
              <TypingText />
            </p>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl">
            I build scalable, accessible, and high-performance web applications.
          </p>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            Computer Science undergraduate with hands-on experience in
            full-stack web development and open-source collaboration.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-indigo-500
                         hover:bg-indigo-600 transition
                         text-white font-semibold shadow-lg shadow-indigo-500/30"
            >
              View My Work
            </a>

            <a
              href="https://github.com/mdjaved17"
              target="_blank"
              className="px-6 py-3 rounded-full border border-white/20
                         hover:bg-white/5 transition
                         flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={resume}
              className="px-6 py-3 rounded-full text-gray-300
                         hover:text-white hover:bg-white/5 transition
                         flex items-center gap-2"
            >
              <FaFileAlt />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full
                            bg-indigo-500/30 blur-[120px]"
            />

            {/* Gradient Ring */}
            <div
              className="absolute inset-0 rounded-full p-[3px]
                         bg-gradient-to-tr from-indigo-500 to-purple-500
                         animate-float"
            >
              <div className="w-full h-full rounded-full bg-[#05060a] overflow-hidden">
                <img
                  src={profile}
                  alt="Md Javed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
