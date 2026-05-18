const skillCategories = [
  {
    title: "Programming & Core",

    skills: [
      "Python",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "Machine Learning & Deep Learning",

    skills: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Keras",
      "Scikit-Learn",
      "ANN",
      "Transfer Learning",
    ],
  },

  {
    title: "Computer Vision",

    skills: [
      "OpenCV",
      "Computer Vision",
    ],
  },

  {
    title: "LLM & RAG",

    skills: [
      "LangChain",
      "RAG",
      "LLMs",
      "FAISS",
    ],
  },

  {
    title: "Backend & Deployment",

    skills: [
      "FastAPI",
      "Docker",
      "Streamlit",
    ],
  },

  {
    title: "Data & Visualization",

    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-black text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-cyan-400">
          Technical Skills
        </h2>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-xl text-sm font-medium hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills