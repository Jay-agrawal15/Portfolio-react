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
            I'm an AI/ML Engineer with a strong foundation in machine learning, deep learning,
            computer vision, and AI-driven optimization. My work focuses on applying artificial intelligence 
            to solve complex real-world problems, ranging from predictive analytics and image classification to 
            scientific research and intelligent knowledge systems.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            During my Master's in Artificial Intelligence at Pandit Deendayal Energy University, I completed a 
            year-long research project titled "AI-Assisted Design Discovery in Nanophotonics." The project involved 
            solving an inverse design problem for spectral filtering devices using Deep Neural Networks and Differential 
            Evolution. By developing a surrogate AI model capable of predicting optical responses in milliseconds, I significantly 
            reduced the dependence on computationally expensive simulations that traditionally required around 15 minutes per run. 
            This research was presented at a national conference, and related manuscripts are being prepared for publication.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Beyond research, I have built and deployed multiple AI applications including computer vision systems, predictive analytics models, 
            customer churn prediction solutions, and Retrieval-Augmented Generation (RAG) assistants powered by Large Language Models. These projects 
            have strengthened my expertise in Python, TensorFlow, Scikit-learn, LangChain, FAISS, FastAPI, Docker, and modern AI development workflows.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
          I enjoy bridging the gap between research and practical applications by transforming complex AI concepts into scalable, real-world solutions.
          Currently, I am exploring Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI deployment, and intelligent agent systems while 
          continuously expanding my knowledge in emerging AI technologies.
          </p>

          {/* Education Section */}
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Education
          </h3>

          {/* MTech */}
          <div className="mb-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
              <h4 className="text-2xl font-semibold mb-2">
              Master of Technology – Artificial Intelligence
            </h4>
            {/* Degree Certificate */}
            <a
            href="/M.tech degree.pdf"
            target="_blank"
            rel = "noopener noreferrer"
            className="inline-block border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition text-sm">
              View Certificate 
            </a>
            </div>

            <a
            href="https://pdeu.ac.in/"
            target="_blank"
            rel = "noopener noreferrer"
            className="text-cyan-400 hover:text-red-300 transition"
            >
              Pandit Deendayal Energy University, Gandhinagar
            </a>

            {/* <p className="text-gray-400 mb-2">
              Pandit Deendayal Energy University, Gandhinagar
            </p> */}

            <p className="text-gray-400 mb-2">
              ● June 2025
            </p>

            <p className="text-gray-300 mb-4">
              ● CGPA: 8.32
            </p>

            <p className="text-gray-400 leading-relaxed">
              Relevant Coursework: Neural Networks, Pattern Recognition,
              Machine Learning, OpenCV, Time Series Analysis
            </p>
          </div>

          {/* BE */}
          <div className="mb-10">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">

            <h4 className="text-2xl font-semibold">
              Bachelor of Engineering – Computer Engineering
            </h4>

            <a
            href="/B.tech degree.pdf"
            target="_blank"
            rel = "noopener noreferrer"
            className="inline-block border border-cyan-400 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-400 hover:text-black transition text-sm"
            >
              View Certificate
            </a>
          </div>

          <a
          href="https://seti.sal.edu.in/"
          target="_blank"
          rel = "noopener noreferrer"
          className="text-cyan-400 hover:text-red-300 transition"
          > 
          Sal Engineering And Technical Institute
          </a>

            <p className="text-gray-400 mb-2">
              ● July 2023
            </p>

            <p className="text-gray-300">
             ● CGPA: 7.59
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