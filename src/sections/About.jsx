function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          About Me
        </h2>

        {/* About Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10">

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m an AI/ML Engineer with hands-on experience in machine learning,
            deep learning, and computer vision.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I completed a one-year research project on AI-assisted design in
            nanophotonics, where I used neural networks and optimization
            algorithms (Differential Evolution) to solve an inverse design
            problem.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Skilled in Python, TensorFlow, and model optimization, I aim to
            apply AI to create impactful, data-driven solutions in the real
            world.
          </p>

          {/* Education Section */}
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">
            Education
          </h3>

          {/* MTech */}
          <div className="mb-10">

            <h4 className="text-2xl font-semibold mb-2">
              Master of Technology – Artificial Intelligence
            </h4>

            <p className="text-gray-400 mb-2">
              Pandit Deendayal Energy University, Gandhinagar
            </p>

            <p className="text-gray-400 mb-2">
              📅 June 2025
            </p>

            <p className="text-gray-300 mb-4">
              📊 CGPA: 8.32
            </p>

            <p className="text-gray-400 leading-relaxed">
              Relevant Coursework: Neural Networks, Pattern Recognition,
              Machine Learning, OpenCV, Time Series Analysis
            </p>

          </div>

          {/* BE */}
          <div className="mb-10">

            <h4 className="text-2xl font-semibold mb-2">
              Bachelor of Engineering – Computer Engineering
            </h4>

            <p className="text-gray-400 mb-2">
              Sal Engineering and Technical Institute (GTU)
            </p>

            <p className="text-gray-400 mb-2">
              📅 July 2023
            </p>

            <p className="text-gray-300">
              📊 CGPA: 7.59
            </p>

          </div>

          {/* Resume Button */}
          <a
            href="Jay Agrawal resume.pdf"
            download
            className="inline-block mt-4 bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition"
          >
            📄 Download My Resume
          </a>

        </div>

      </div>

    </section>
  )
}

export default About