import { useState, useRef } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ChapterNav from "./components/ChapterNav";
import BackgroundSystem from "./components/BackgroundSystem";
import SectionBridge from "./components/SectionBridge";
import StickyCTA from "./components/StickyCTA";
import { sectionBridges } from "./data/sectionBridges";
import ScrollLight from "./components/ScrollLight";
import ProgressSpine from "./components/ProgressSpine";

import Home from "./components/section/Home";
import Services from "./components/section/Services";
import Projects from "./components/section/Projects";
import Process from "./components/section/Process";
import Skills from "./components/section/Skills";
import Credibility from "./components/section/Credibility";
import Contact from "./components/section/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainContainer = useRef(null);

  return (
    <div className="relative w-full overflow-x-hidden">
      <CustomCursor />
      <Loading onComplete={() => setIsLoaded(true)} />

      {/* Progress & Navigation */}
      <ScrollProgress />
      <ChapterNav />

      {/* Main Content — THE DEVELOPER JOURNEY */}
      <div
        ref={mainContainer}
        className={`relative z-10 min-h-screen transition-opacity duration-700 bg-[var(--bg-primary)] text-[var(--text-primary)] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <BackgroundSystem />
        <ScrollLight />
        <ProgressSpine />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          {/* 1. HOOK */}
          <Home />
          <SectionBridge {...sectionBridges.homeToServices} />

          {/* 2. VALUE */}
          <Services />
          <SectionBridge {...sectionBridges.servicesToProjects} />

          {/* 3. PROOF */}
          <Projects />
          <SectionBridge {...sectionBridges.projectsToProcess} />

          {/* 4. COMFORT (How I Work) */}
          <Process />
          <SectionBridge {...sectionBridges.processToSkills} />

          {/* 5. CAPABILITY (Stack) */}
          <Skills />
          <SectionBridge {...sectionBridges.skillsToCredibility} />

          {/* 6. CREDIBILITY (Expectations) */}
          <Credibility />
          <SectionBridge {...sectionBridges.credibilityToContact} />

          {/* 7. ACTION */}
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Sticky CTA (mobile only) */}
      <StickyCTA />
    </div>
  );
}

export default App;