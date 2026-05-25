import { useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import StickyCTA from "./components/StickyCTA";
import Home from "./components/section/Home";
import TrustBar from "./components/section/TrustBar";
import Services from "./components/section/Services";
import Projects from "./components/section/Projects";
import About from "./components/section/About";
import Testimonials from "./components/section/Testimonials";
import Contact from "./components/section/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <Loading onComplete={() => setIsLoaded(true)} />

      {/* Aurora Background */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb-3" />
      </div>

      {/* Grain Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll Progress (desktop/tablet) */}
      <ScrollProgress />

      {/* Main Content — PSYCHOLOGY-DRIVEN ORDER */}
      <div
        className={`relative z-10 min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* 1. HOOK — Who are you? Why should I care? */}
        <Home />

        {/* 2. TRUST — Numbers don't lie (anchoring) */}
        <TrustBar />

        {/* 3. VALUE — What's in it for me? */}
        <Services />

        {/* 4. PROOF — Show, don't tell */}
        <Projects />

        {/* 5. COMFORT — Reduce anxiety about the process */}
        <About />

        {/* 6. VALIDATION — Others trust you */}
        <Testimonials />

        {/* 7. ACTION — Make it easy to say yes */}
        <Contact />

        <Footer />
      </div>

      {/* Sticky CTA (mobile only) */}
      <StickyCTA />
    </>
  );
}

export default App;