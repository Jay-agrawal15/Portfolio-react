import { motion } from "framer-motion"
import profile from "../assets/profile.png"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm

            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jay Agrawal
            </span>

          </h2>

          <h3 className="mt-6 text-2xl md:text-3xl text-gray-300 font-semibold">
            AI/ML Engineer
          </h3>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
            Passionate about Artificial Intelligence,
            Deep Learning, Computer Vision,
            and AI-powered applications.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="/Jay Agrawal resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300 hover:scale-105"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6 text-lg">

            <a
              href="https://github.com/Jay-agrawal15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jay-agrawal-87321a215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:agrawaljay654@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              Email
            </a>

          </div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-30"></div>

            <img
              src={profile}
              alt="profile"
              className="relative rounded-3xl w-[320px] md:w-[380px] border border-gray-700 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero