const projects = [
  {
    id: 1,
    title: "Food Delivery Platform",
    category: "Web App",
    shortDescription: "A responsive food delivery web app with product browsing, cart flow, and modern UI interactions.",
    problem: "Food ordering interfaces need to be fast, clear, and easy to use across devices.",
    solution: "Built a responsive React-based interface with clean navigation, reusable components, and a deployment-ready structure.",
    keyFeatures: [
      "Responsive food listing UI",
      "Cart and order-style user flow",
      "Modern landing page sections",
      "Mobile-first layout"
    ],
    techStack: ["React", "Tailwind CSS", "Firebase"],
    role: "Frontend development, UI structure, responsive implementation",
    liveUrl: "https://food-del-zeta-azure.vercel.app/",
    repoUrl: null,
    status: "Live",
    takeaway: "Improved my ability to structure real-world UI flows and responsive cards.",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Expense Tracker UI",
    category: "Dashboard",
    shortDescription: "A clean and interactive personal finance dashboard for tracking expenses and visualizing data.",
    problem: "Financial data can be overwhelming if not presented with clear visual hierarchy and structure.",
    solution: "Developed an interactive dashboard focusing on data visualization and clean layout for quick scanning.",
    keyFeatures: [
      "Interactive data visualizations",
      "Clean dashboard layout",
      "Transaction history lists",
      "Responsive data grids"
    ],
    techStack: ["HTML/JS", "Tailwind CSS", "Chart.js"],
    role: "Frontend development, data visualization, UI layout",
    liveUrl: "https://expense-tracker-gilt-theta.vercel.app/",
    repoUrl: null,
    status: "Live",
    takeaway: "Gained hands-on experience integrating third-party charting libraries with custom UI.",
    color: "#06b6d4",
  },
  {
    id: 3,
    title: "Pokémon Search & Filter",
    category: "Interactive Interface",
    shortDescription: "A fast search and filter interface integrating with a public API to display a large dataset.",
    problem: "Users need to instantly search and filter through hundreds of items without UI lag.",
    solution: "Implemented efficient client-side filtering and search against a REST API with CSS flip animations.",
    keyFeatures: [
      "Instant search functionality",
      "Type-based filtering",
      "CSS flip card animations",
      "API integration"
    ],
    techStack: ["HTML/JS", "Tailwind CSS", "REST API"],
    role: "API integration, state management, CSS animations",
    liveUrl: "https://pokemon-project-vert.vercel.app/",
    repoUrl: null,
    status: "Live",
    takeaway: "Deepened my understanding of efficient DOM manipulation and REST API integration.",
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Infinite Image Gallery",
    category: "Web App",
    shortDescription: "A visually immersive gallery that loads images continuously via infinite scroll.",
    problem: "Loading large numbers of high-resolution images can cause browser lag and bad UX.",
    solution: "Built a custom intersection observer implementation to load assets smoothly as the user scrolls.",
    keyFeatures: [
      "Infinite scrolling logic",
      "Intersection Observer API",
      "Responsive masonry layout",
      "Optimized asset loading"
    ],
    techStack: ["HTML/JS", "CSS", "Intersection Observer"],
    role: "Core logic, performance optimization, UI development",
    liveUrl: "https://infinite-scrolling-six-cyan.vercel.app/",
    repoUrl: null,
    status: "Live",
    takeaway: "Mastered the Intersection Observer API for performance optimization.",
    color: "#ec4899",
  }
];

export default projects;
