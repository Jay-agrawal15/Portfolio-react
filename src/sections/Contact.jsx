import { useRef } from "react"
import emailjs from "@emailjs/browser"

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!")
        },
        (error) => {
          alert("Failed to send message")
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <section
      id="Contact"
      className="bg-black text-white py-24 min-h-screen"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-cyan-400 transition duration-300">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 text-gray-300 text-lg">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-xl flex-shrink-0" />

                <span className="break-all">
                  agrawaljay654@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-xl flex-shrink-0" />

                <span>
                  8511499921
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-xl flex-shrink-0" />

                <a
                  href="https://linkedin.com/in/jay-agrawal-87321a215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-xl flex-shrink-0" />

                <a
                  href="https://github.com/Jay-agrawal15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-xl flex-shrink-0" />

                <span>
                  Ahmedabad, India
                </span>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-6 md:p-8 hover:border-cyan-400 transition duration-300">

            <h3 className="text-2xl font-bold mb-6">
              Send a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300 hover:scale-105"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact