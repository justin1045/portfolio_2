import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'

// Register GSAP plugins globally (once)
gsap.registerPlugin(ScrollTrigger, SplitText)

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Initialize Lenis smooth scroll
const lenis = new Lenis({
  duration: prefersReducedMotion ? 0 : 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: !prefersReducedMotion,
  syncTouch: false,       // Keep native touch scrolling on iOS/Android
  touchMultiplier: 1,
  autoResize: true,       // Handle orientation changes on tablets
})

// Globally disable GSAP animations if reduced motion is preferred
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(1000); // Instantly finish animations
}

// Connect Lenis to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
