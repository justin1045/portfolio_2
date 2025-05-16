
---

## ✨ How It Works

### 🔄 Scroll-Based Reveal Animation

- `ReviewOnScroll` uses `IntersectionObserver` to detect when a section enters the viewport.
- When the component is at least 20% visible, it adds the `visible` class to trigger a CSS animation.

**CSS in `index.css`:**

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/src
├── components
│ └── ReviewOnScroll.jsx // Handles scroll-based reveal animations
├── sections
│ ├── About.jsx // About section with skills and education
│ └── Contact.jsx // Contact form with EmailJS integration
├── App.jsx // Main application component
└── index.css // Tailwind + custom CSS (e.g. reveal classes)

# 💼 Developer Portfolio Website

This is a personal portfolio website built with **React**, **Tailwind CSS**, and **EmailJS** to showcase skills, projects, education, and experience. The site includes animated scroll-based reveals and a working contact form.

---

## 🔧 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Animation**: Intersection Observer (custom `ReviewOnScroll` component)
- **Contact Form**: EmailJS integration via `@emailjs/browser`

---

## 🚀 Features

- Animated "About" and "Contact" sections triggered on scroll
- Dynamic rendering of frontend/backend skills
- EmailJS-powered contact form
- Fully responsive and minimal design
- Smooth hover effects and transitions

---

