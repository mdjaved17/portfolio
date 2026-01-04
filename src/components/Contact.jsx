import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePaperAirplane } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#05060a] text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let&apos;s build something{" "}
              <span className="text-indigo-400">extraordinary</span>.
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Whether you have a project in mind or just want to connect,
              I&apos;m always open to meaningful conversations.
            </p>
          </div>

          {/* CONTACT DETAILS */}
          <a
            href="mailto:javedalam1731@gmail.com"
            className="flex items-center gap-4 group"
          >
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 
                            group-hover:border-indigo-400/50 transition">
              <HiOutlineMail className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">
                javedalam1731@gmail.com
              </p>
            </div>
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a
              href="https://github.com/mdjaved17"
              target="_blank"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 
                         hover:bg-white/10 transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/md-javed-171508aug/"
              target="_blank"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 
                         hover:bg-white/10 transition"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 bg-white/5 backdrop-blur-xl 
                        border border-white/10 rounded-3xl p-8 md:p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-white/5 border border-white/10 
                             px-4 py-4 focus:outline-none focus:border-indigo-400/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 
                             px-4 py-4 focus:outline-none focus:border-indigo-400/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-full rounded-xl bg-white/5 border border-white/10 
                           px-4 py-4 focus:outline-none focus:border-indigo-400/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full rounded-xl bg-white/5 border border-white/10 
                           px-4 py-4 focus:outline-none focus:border-indigo-400/50"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 
                         rounded-xl bg-indigo-500 hover:bg-indigo-600 
                         py-4 text-lg font-semibold transition shadow-lg 
                         shadow-indigo-500/20"
            >
              <HiOutlinePaperAirplane className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-24 pt-8 border-t border-white/10 
                         flex flex-col md:flex-row items-center 
                         justify-between gap-4 text-sm text-gray-400">
        <p>© 2026 Md Javed. Crafted with passion.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-indigo-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-indigo-400 transition">
            Terms of Service
          </a>
        </div>
      </footer>
    </section>
  );
}
