function Experience() {

  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Maxgen Technologies Pvt. Ltd.",
      duration: "Feb 2023 – Apr 2023",

      points: [
        "Built a Skin Disease Detection model using deep learning and OpenCV.",
        "Gained proficiency with TensorFlow, Keras, Scikit-learn, and Pandas.",
        "Tools Used: Python, TensorFlow, Pandas, Jupyter Notebook, Google Colab.",
      ],
    },

    {
      title: "Data Science & ML Intern",
      company: "BrainyBeam Technologies Pvt. Ltd.",
      duration: "Jun 2022 – Jul 2022",

      points: [
        "Developed a Recommendation System using Sentiment Analysis.",
        "Applied NLP preprocessing, EDA, and model tuning on Kaggle datasets.",
        "Tools Used: Python, Pandas, NLTK, Jupyter Notebook.",
      ],
    },

    {
      title: "Research & Teaching Assistant",
      company: "Pandit Deendayal Energy University (PDEU)",
      duration: "",

      points: [
        "Assisted lab sessions for AI/ML courses and guided student projects.",
        "Supported professors in grading and technical mentoring.",
      ],
    },
  ]

  return (
    <section
      id="Experience"
      className="bg-black text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Experience
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold">
                {exp.title}
              </h3>

              <p className="text-cyan-400 mt-2 text-lg">
                {exp.company}
              </p>

              <p className="text-gray-400 mt-1 mb-6">
                {exp.duration}
              </p>

              <ul className="space-y-4 text-gray-300 leading-relaxed">

                {exp.points.map((point, idx) => (
                  <li key={idx}>
                    • {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Experience