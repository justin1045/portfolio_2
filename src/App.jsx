import { useState } from "react"
import  Loading  from "./components/Loading"
import "./index.css"
import Navbar from "./components/Navbar"
import MobileMenu from "./components/MobileMenu"
import Home from "./components/section/Home"
import About from "./components/section/About"
import Projects from "./components/section/Projects"
import Contact from "./components/section/Contact"
import Footer from "./components/Footer"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Loading onComplete={() => setIsLoaded(true)} />
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-200`}>

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>
    </>
  )
}

export default App