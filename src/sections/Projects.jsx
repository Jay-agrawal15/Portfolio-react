const projects = [
  {
    title: "AI Tech Knowledge Assistant (RAG)",

    description:
      "Built a full-stack Retrieval-Augmented Generation assistant using vector databases and LLM pipelines for intelligent document querying and contextual AI responses.",

    tech: [
      "LangChain",
      "FAISS",
      "FastAPI",
      "LLM",
      "React",
    ],

    github:
      "https://github.com/Jay-agrawal15/Fullstack-Rag-Ai-assistant",
  },

  {
    title: "House Price Prediction",

    description:
      "Performed exploratory data analysis and feature engineering on housing data. Used XGBoost regression, achieving an R² score of 0.82 on the test dataset.",

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "XGBoost",
    ],

    github:
      "https://github.com/Jay-agrawal15/House-price-prediction",
  },

  {
    title: "Customer Churn Prediction",

    description:
      "Developed an ANN-based customer churn prediction system with a machine learning pipeline and interactive prediction interface.",

    tech: [
      "Python",
      "TensorFlow",
      "ANN",
      "Streamlit",
    ],

    github:
      "https://github.com/Jay-agrawal15/Customer-Churn-Prediction",
  },

  {
    title: "Fruit Classification (Fresh vs Rotten)",

    description:
      "Built an image classifier using InceptionV3 with transfer learning, achieving 97% accuracy on validation data. Collected and preprocessed dataset, applied augmentation, and validated performance.",

    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Google Colab",
      "Transfer Learning",
    ],

    github: "",
  },
]


function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((item, idx) => (
                  <span
                    key={idx}
                    className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-lg text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  View GitHub →
                </a>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects