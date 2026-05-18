import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gray-800 py-8 text-white">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-center md:text-left">

          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Jay Agrawal
          </h3>

          <p className="text-gray-400 mt-2 text-sm">
            AI/ML Engineer
          </p>

        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-2xl">

          <a
            href="https://github.com/Jay-agrawal15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/jay-agrawal-87321a215"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:agrawaljay654@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">

        © 2026 Jay Agrawal. All rights reserved.

      </div>

    </footer>
  )
}

export default Footer