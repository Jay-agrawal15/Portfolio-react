import qr from "../assets/qr1.png"

function Research() {
  return (
    <section
      id="research"
      className="bg-black text-white py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Research Work
        </h2>

        {/* First Research Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 hover:border-cyan-400 transition duration-300">

          <div className="grid md:grid-cols-4 gap-10 items-center">

            {/* Left Content */}
            <div className="md:col-span-3">

              <h3 className="text-3xl font-bold mb-4 leading-snug">
                AI-Assisted Design Discovery in Nanophotonics – PDEU
              </h3>

              <p className="text-cyan-400 mb-6 text-lg">
                July 2024 – May 2025
              </p>

              <ul className="space-y-4 text-gray-300 leading-relaxed text-lg">

                <li>
                  • Solved an inverse design problem using Deep Neural Networks and Differential Evolution.
                </li>

                <li>
                  • Optimized 8-layer Distributed Bragg Reflectors (Sb₂S₃/SiO₂) for spectral filtering applications.
                </li>

                <li>
                  • Reduced simulation time from 15 minutes per run to milliseconds using a surrogate DNN model.
                </li>

                <li>
                  • Presented at ETOT–I Conference (SRM University, Andhra Pradesh, Jan 2025).
                </li>

                <li>
                  • Manuscript is written and will be submitted soon in a conference (expected November 2025).
                </li>

                <li>
                  • Preparing manuscript for journal publication.
                </li>

              </ul>

              {/* Drive Link */}
              <a
                href="https://drive.google.com/drive/folders/1mXKwuL98oAyBrBodBjZwOh4pjtGNaFVg?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition"
              >
                📂 Click here to view Thesis & Presentation
              </a>

            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center">

              <img
                src={qr}
                alt="QR Code"
                className="w-70 h-70 rounded-xl border border-gray-700"
              />

              <p className="text-gray-400 mt-4 text-sm text-center">
                Scan QR to access documents
              </p>

            </div>

          </div>

        </div>

        {/* Second Research Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-10 hover:border-cyan-400 transition duration-300 mt-10">

          <h3 className="text-3xl font-bold mb-4 leading-snug">
            LeafDoc: Plant Leaf Disease Detection Using AI
          </h3>

          <p className="text-cyan-400 mb-6 text-lg">
            Jan 2025 – May 2025
          </p>

          <ul className="space-y-4 text-gray-300 leading-relaxed text-lg">

            <li>
              • Worked on a plant leaf disease detection project using image classification techniques.
            </li>

            <li>
              • Performed dataset preparation, preprocessing, and trained CNN-based models.
            </li>

            <li>
              • Published the work in IEEE Xplore (AISTS 2025 Conference).
            </li>

            <li>
              • DOI:
              <span className="break-all block mt-1">
              10.1109/AISTS66100.2025.11233219
              </span>
            </li>

          </ul>

          {/* Publication Link */}
          <a
            href="https://doi.org/10.1109/AISTS66100.2025.11233219"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-cyan-400 font-semibold text-lg hover:text-cyan-300 transition"
          >
            📄 View Publication
          </a>

        </div>

      </div>

    </section>
  )
}

export default Research