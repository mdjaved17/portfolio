import { FaCodeBranch, FaAward, FaUsers } from "react-icons/fa";

export default function OpenSource() {
  return (
    <section className="py-24 px-6 bg-[#05060a] text-white">
      <div className="max-w-7xl mx-auto">
        
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-14
                     bg-white/5 backdrop-blur-xl border border-white/10"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-72 h-72 
                          bg-indigo-500/10 blur-[120px] 
                          -translate-y-1/2 translate-x-1/3" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-14">
            
            {/* LEFT CONTENT */}
            <div className="flex-1 space-y-8">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5
                           rounded-full bg-indigo-500/10 text-indigo-400
                           text-xs font-semibold tracking-wider uppercase"
              >
                <FaCodeBranch />
                Open Source
              </span>

              <h2 className="text-3xl md:text-4xl font-bold">
                Open Source Contributions
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Active open-source contributor on GitHub with hands-on experience
                in pull requests, bug fixes, UI improvements, and collaborative
                development workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-10 pt-4">
                
                {/* Stat 1 */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-white/10 border border-white/10">
                    <FaAward className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">150+</p>
                    <p className="text-sm text-gray-400">
                      DSA Problems Solved
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-white/10 border border-white/10">
                    <FaUsers className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Top 2.2%</p>
                    <p className="text-sm text-gray-400">
                      University Rank
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1 w-full max-w-md space-y-4">
              
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-1">
                  B.Tech in Computer Science
                </h4>
                <p className="text-indigo-400 font-medium">
                  Parul University
                </p>
                <p className="text-sm text-gray-400">
                  2023 — 2027
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
                <h4 className="font-semibold mb-3">
                  Open Source Highlights
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400" />
                    Consistently ranked in top 2.2% among peers
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-400" />
                    Contributed bug fixes and UI enhancements via GitHub PRs
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
