import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Research from "./sections/Research"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Experience from "./sections/Experience"



function App() {
  return (
    <div className="bg-black min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Research />

      <Experience />

      <Projects />

      <Contact />

      <Footer/>

    </div>
  )
}

export default App