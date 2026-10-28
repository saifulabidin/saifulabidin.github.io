export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  image_url: string;
  github_url: string;
  live_url: string;
  category: string;
  is_private: boolean;
  sort_order: number;
}

export const staticProjects: Project[] = [
  // Backend Projects
  {
    id: 1,
    title: "Employee Attendance Backend System",
    description: "Comprehensive backend system for employee attendance management with real-time tracking, shift management, overtime calculation, and detailed reporting. Features role-based authentication and integration with biometric devices.",
    tech_stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Redis", "Cron Jobs", "RESTful API", "Docker"],
    image_url: "/images/project/company/attendance-backend.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Backend",
    is_private: true,
    sort_order: 1
  },
  {
    id: 2,
    title: "Sales Data Collection Backend",
    description: "Backend system for sales team to input and manage customer data collected in the field. Features geolocation tracking, customer relationship management, lead scoring, and territory management with Google Maps integration.",
    tech_stack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Geolocation", "JWT", "Multer", "Redis"],
    image_url: "/images/project/company/sales-backend.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Backend",
    is_private: true,
    sort_order: 2
  },

  // API Projects
  {
    id: 3,
    title: "Attendance Mobile App API",
    description: "RESTful API service specifically designed for the Flutter mobile attendance application. Handles GPS location tracking, photo capture validation, real-time synchronization, and offline data management.",
    tech_stack: ["Node.js", "Express", "MongoDB", "Socket.io", "Google Maps API", "Firebase", "JWT"],
    image_url: "/images/project/company/attendance-api.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "API",
    is_private: true,
    sort_order: 3
  },
  {
    id: 4,
    title: "Sales Management API",
    description: "Specialized API for the Flutter sales application enabling real-time customer data synchronization, location-based services, photo uploads, and offline-first architecture for field operations.",
    tech_stack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Cloudinary", "Socket.io", "JWT"],
    image_url: "/images/project/company/sales-api.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "API",
    is_private: true,
    sort_order: 4
  },

  // Frontend Projects
  {
    id: 5,
    title: "Bestie Tissue Landing Page",
    description: "Modern and responsive landing page for Bestie Tissue product featuring AI-powered chatbot integration with Google Gemini, interactive store locator with Google Maps, product showcase, and lead generation forms.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Google Gemini AI", "Framer Motion", "React Hook Form"],
    image_url: "/images/project/company/bestie-tissue.jpg",
    github_url: "#private-repository",
    live_url: "https://bestie-tissue.com",
    category: "Frontend",
    is_private: true,
    sort_order: 5
  },
  {
    id: 6,
    title: "Attendance Admin Panel",
    description: "Web-based administrative dashboard for HR and management to monitor employee attendance, generate reports, manage shifts, approve leave requests, and configure system settings with comprehensive analytics.",
    tech_stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "React Query", "Zustand"],
    image_url: "/images/project/company/attendance-admin.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Frontend",
    is_private: true,
    sort_order: 6
  },
  {
    id: 7,
    title: "Sales Performance Admin Dashboard",
    description: "Comprehensive admin panel for monitoring sales team performance, analyzing customer data, tracking territories, generating sales reports, and visualizing key performance indicators with interactive charts.",
    tech_stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Google Maps", "React Query"],
    image_url: "/images/project/company/sales-admin.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Frontend",
    is_private: true,
    sort_order: 7
  },

  // Mobile Projects
  {
    id: 8,
    title: "Employee Attendance Mobile App",
    description: "Cross-platform mobile application built with Flutter for employee clock-in/out, GPS location tracking, photo verification, leave requests, attendance history, and real-time notifications.",
    tech_stack: ["Flutter", "Dart", "Provider", "HTTP", "Geolocator", "Camera", "Local Storage", "Firebase"],
    image_url: "/images/project/company/attendance-mobile.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Mobile",
    is_private: true,
    sort_order: 8
  },
  {
    id: 9,
    title: "Sales Field Mobile Application",
    description: "Flutter-based mobile app for sales representatives to input customer data, capture geotagged photos, record customer interactions, manage leads, and sync data in real-time while working in the field.",
    tech_stack: ["Flutter", "Dart", "Provider", "Geolocator", "Camera", "Google Maps", "HTTP", "SQLite"],
    image_url: "/images/project/company/sales-mobile.jpg",
    github_url: "#private-repository",
    live_url: "#company-internal",
    category: "Mobile",
    is_private: true,
    sort_order: 9
  },

  // Fullstack & Web Apps
  {
    id: 10,
    title: "Balance Scan",
    description: "Fullstack application for tracking financial balances with real-time updates and comprehensive analytics. Features a responsive dashboard with data visualization, multi-currency support, and blockchain transaction monitoring.",
    tech_stack: ["React", "Node.js", "Web3", "MongoDB", "Express", "Tailwind CSS"],
    image_url: "/images/project/fullstack/balance-scan.jpg",
    github_url: "https://github.com/saifulabidin/balancescan-fullstack",
    live_url: "https://balance-scan.netlify.app",
    category: "Fullstack",
    is_private: false,
    sort_order: 10
  },
  {
    id: 11,
    title: "Cuaca Ceria (Weather App)",
    description: "Responsive weather forecast application showing 7-day forecasts with real-time meteorological metrics, location-based forecasting, and interactive regional maps.",
    tech_stack: ["Node.js", "JavaScript", "HTML/CSS", "Weather API", "Geolocation"],
    image_url: "/images/project/fullstack/cuaca-ceria.jpg",
    github_url: "https://github.com/saifulabidin/cuaca-ceria",
    live_url: "https://weather-checker-eu.netlify.app/",
    category: "Frontend",
    is_private: false,
    sort_order: 11
  },
  {
    id: 12,
    title: "Chart Stock Market",
    description: "Fullstack real-time stock tracking application with interactive visualizations, WebSocket live pricing updates, and technical market trend analysis tools.",
    tech_stack: ["Node.js", "React", "WebSockets", "Chart.js", "Express", "MongoDB"],
    image_url: "/images/project/fullstack/stock-market.jpg",
    github_url: "https://github.com/saifulabidin/Chart-Stock-Market",
    live_url: "https://zonal-elegance-production.up.railway.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 12
  },
  {
    id: 13,
    title: "Book Trading Club",
    description: "Community platform for book enthusiasts to trade, exchange, catalogue personal libraries, and request books from fellow members worldwide.",
    tech_stack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    image_url: "/images/project/fullstack/book-trading-club.jpg",
    github_url: "https://github.com/saifulabidin/book-trading-club",
    live_url: "https://book-trading-club.vercel.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 13
  },
  {
    id: 14,
    title: "Nightlife Coordination App",
    description: "Location-aware platform helping users find, RSVP, and coordinate visits to local nightlife venues, events, and evening entertainment spaces.",
    tech_stack: ["Node.js", "Express", "MongoDB", "Yelp API", "Passport.js"],
    image_url: "/images/project/fullstack/nightlife-app.jpg",
    github_url: "https://github.com/saifulabidin/nightlife-app",
    live_url: "https://nightlife-app-production.up.railway.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 14
  },
  {
    id: 15,
    title: "Fake Pinterest",
    description: "Image discovery and curation platform inspired by Pinterest with dynamic masonry grid layouts, personal board collections, and image search.",
    tech_stack: ["React", "Node.js", "MongoDB", "Cloudinary", "Express"],
    image_url: "/images/project/fullstack/fake-pinterest.jpg",
    github_url: "https://github.com/saifulabidin/fake-pinterest",
    live_url: "https://fake-pinterest.vercel.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 15
  },
  {
    id: 16,
    title: "Voting App",
    description: "Fullstack polling application allowing authenticated users to create custom polls, share voting links, cast votes, and observe real-time chart results.",
    tech_stack: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
    image_url: "/images/project/fullstack/voting-app.jpg",
    github_url: "https://github.com/saifulabidin/voting-app",
    live_url: "https://voting-app-production.up.railway.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 16
  },
  {
    id: 17,
    title: "Markdown Previewer",
    description: "Fast in-browser Markdown editor with instant live HTML preview, syntax highlighting, and GitHub Flavored Markdown compliance.",
    tech_stack: ["React", "Marked.js", "Prism.js", "CSS3"],
    image_url: "/images/project/frontend/Markdown-Previewer.png",
    github_url: "https://github.com/saifulabidin/markdown-previewer",
    live_url: "https://saifulabidin.github.io/markdown-previewer",
    category: "Frontend",
    is_private: false,
    sort_order: 17
  },
  {
    id: 18,
    title: "JavaScript Calculator",
    description: "Formula-logic precision web calculator with chained operations, decimal validation, and clear error boundaries conforming to FCC specifications.",
    tech_stack: ["React", "JavaScript", "HTML5", "CSS3"],
    image_url: "/images/project/frontend/javascript-calculator.png",
    github_url: "https://github.com/saifulabidin/javascript-calculator",
    live_url: "https://saifulabidin.github.io/javascript-calculator",
    category: "Frontend",
    is_private: false,
    sort_order: 18
  },
  {
    id: 19,
    title: "25 + 5 Clock (Pomodoro)",
    description: "Productivity timer supporting customizable work/break session intervals, audio alerts, pause/resume, and active cycle indicators.",
    tech_stack: ["React", "HTML5 Audio", "CSS3", "JavaScript"],
    image_url: "/images/project/frontend/25-5-clock.png",
    github_url: "https://github.com/saifulabidin/25-5-clock",
    live_url: "https://saifulabidin.github.io/25-5-clock",
    category: "Frontend",
    is_private: false,
    sort_order: 19
  },
  {
    id: 20,
    title: "Drum Machine",
    description: "Interactive musical pad with 9 audio trigger zones, keyboard keybind listener mappings, dynamic volume control, and sound clip display.",
    tech_stack: ["React", "Web Audio", "CSS3", "JavaScript"],
    image_url: "/images/project/frontend/drum-machine.png",
    github_url: "https://github.com/saifulabidin/drum-machine",
    live_url: "https://saifulabidin.github.io/drum-machine",
    category: "Frontend",
    is_private: false,
    sort_order: 20
  },
  {
    id: 21,
    title: "Random Quote Machine",
    description: "Inspirational quote generator fetching wisdom quotes dynamically with Twitter intent sharing and color palette transitions.",
    tech_stack: ["React", "Quotable API", "CSS3", "JavaScript"],
    image_url: "/images/project/frontend/Random-Quote-Machine.png",
    github_url: "https://github.com/saifulabidin/random-quote-machine",
    live_url: "https://saifulabidin.github.io/random-quote-machine",
    category: "Frontend",
    is_private: false,
    sort_order: 21
  }
];
