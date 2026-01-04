export default function Navbar() {
  return (
    <nav className="w-full px-6 py-6 bg-[#05060a]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-black tracking-tight text-white">
          MD JAVED<span className="text-indigo-400">.</span>
        </div>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex items-center gap-8
                     px-6 py-2.5 rounded-full
                     bg-white/5 backdrop-blur-md
                     border border-white/10"
        >
          <a
            href="#home"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Home
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-400 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile placeholder */}
        <div className="md:hidden"></div>
      </div>
    </nav>
  );
}
