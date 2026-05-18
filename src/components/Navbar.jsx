import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const navLinks = [
  {
    name: "Home",
    path: "#home",
  },

  {
    name: "About",
    path: "#about",
  },

  {
    name: "Skills",
    path: "#skills",
  },

  {
    name: "Research",
    path: "#research",
  },

  {
    name: "Projects",
    path: "#projects",
  },

  {
    name: "Contact",
    path: "#Contact",
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Jay Agrawal
        </a>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((link, index) => (
            <li key={index}>

              <a
                href={link.path}
                className="text-gray-300 hover:text-cyan-400 transition duration-300 relative group"
              >
                {link.name}

                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </a>

            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >

          {menuOpen ? <HiX /> : <HiMenu />}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-gray-800">

          <ul className="flex flex-col items-center py-6 gap-6">

            {navLinks.map((link, index) => (
              <li key={index}>

                <a
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg"
                >
                  {link.name}
                </a>

              </li>
            ))}

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar