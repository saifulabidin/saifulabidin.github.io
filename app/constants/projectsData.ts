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
  // Enterprise / Company Systems (Private Repositories)
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

  // Fullstack Projects (from fullstack-project/index.html & index.html in old-pages)
  {
    id: 10,
    title: "Book Trading Club",
    description: "A platform that enables users to trade books with each other. Features include user authentication, book listing, trade proposals, and profile management.",
    tech_stack: ["React", "Node.js", "MongoDB", "Mongoose"],
    image_url: "/images/project/fullstack/book-trading-club.jpg",
    github_url: "https://github.com/saifulabidin/book-trading-club",
    live_url: "https://book-trading-club.vercel.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 10
  },
  {
    id: 11,
    title: "Nightlife Coordination App",
    description: "An application that helps users coordinate their nightlife activities. Users can search for venues, indicate their attendance, and see how many people are going to each venue.",
    tech_stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image_url: "/images/project/fullstack/nightlife-app.jpg",
    github_url: "https://github.com/saifulabidin/nightlife-app",
    live_url: "https://nightlife-app-staging.up.railway.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 11
  },
  {
    id: 12,
    title: "Fake Pinterest",
    description: "A Pinterest-inspired application where users can upload, save, and organize images. Features include masonry layout, image upload, user collections, and social sharing.",
    tech_stack: ["React", "Node.js", "MongoDB", "Firebase"],
    image_url: "/images/project/fullstack/fake-pinterest.jpg",
    github_url: "https://github.com/saifulabidin/fake-pinterest",
    live_url: "https://fake-pinterest.vercel.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 12
  },
  {
    id: 13,
    title: "Balance Scan",
    description: "A fullstack application for tracking financial balances with real-time updates and comprehensive analytics. This project features a responsive dashboard with data visualization, multi-currency support, and blockchain transaction monitoring.",
    tech_stack: ["React", "Node.js", "Web3", "MongoDB"],
    image_url: "/images/project/fullstack/balance-scan.jpg",
    github_url: "https://github.com/saifulabidin/balancescan-fullstack",
    live_url: "https://balance-scan.netlify.app",
    category: "Fullstack",
    is_private: false,
    sort_order: 13
  },
  {
    id: 14,
    title: "Cuaca Ceria (Weather App)",
    description: "A responsive weather forecast application with a user-friendly interface showing 7-day forecasts. Includes real-time weather updates, location-based forecasting, interactive maps, and severe weather alerts.",
    tech_stack: ["Node.js", "HTML/CSS/JavaScript", "7timer.info API", "Geolocation"],
    image_url: "/images/project/fullstack/cuaca-ceria.jpg",
    github_url: "https://github.com/saifulabidin/cuaca-ceria",
    live_url: "https://weather-checker-eu.netlify.app/",
    category: "Frontend",
    is_private: false,
    sort_order: 14
  },
  {
    id: 15,
    title: "Voting App",
    description: "A full-stack polling platform where users can create, participate, and analyze polls with real-time visualization. Features include user authentication, vote validation, custom poll creation, and detailed analytics with data export.",
    tech_stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    image_url: "/images/project/fullstack/voting-app.jpg",
    github_url: "https://github.com/saifulabidin/Voting-App",
    live_url: "https://voting-app-fullstack.netlify.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 15
  },
  {
    id: 16,
    title: "Chart Stock Market",
    description: "A real-time stock market charting application with interactive visualizations and market analysis tools.",
    tech_stack: ["Node.js", "React", "WebSockets"],
    image_url: "/images/project/fullstack/stock-market.jpg",
    github_url: "https://github.com/saifulabidin/Chart-Stock-Market",
    live_url: "https://zonal-elegance-production.up.railway.app/",
    category: "Fullstack",
    is_private: false,
    sort_order: 16
  },

  // Frontend Micro-apps (from frontend-project/index.html in old-pages)
  {
    id: 17,
    title: "JavaScript Calculator",
    description: "A fully functional calculator app with keyboard support, built using React.",
    tech_stack: ["React", "JavaScript", "CSS Grid"],
    image_url: "/images/project/frontend/javascript-calculator.png",
    github_url: "https://codepen.io/saifulabidin/pen/emmrJKo",
    live_url: "/frontend-project/JavaScript-Calculator/index.html",
    category: "Frontend",
    is_private: false,
    sort_order: 17
  },
  {
    id: 18,
    title: "25+5 Clock",
    description: "A Pomodoro timer application with customizable work and break intervals.",
    tech_stack: ["React", "Hooks", "Audio API"],
    image_url: "/images/project/frontend/25-5-clock.png",
    github_url: "https://codepen.io/saifulabidin/pen/myyLVaw",
    live_url: "/frontend-project/25-5-clock/index.html",
    category: "Frontend",
    is_private: false,
    sort_order: 18
  },
  {
    id: 19,
    title: "Drum Machine",
    description: "An interactive drum pad app with keyboard support and sound bank switching.",
    tech_stack: ["React", "Audio API", "Event Listeners"],
    image_url: "/images/project/frontend/drum-machine.png",
    github_url: "https://codepen.io/saifulabidin/pen/WbbJQxr",
    live_url: "/frontend-project/Drum-Machine/index.html",
    category: "Frontend",
    is_private: false,
    sort_order: 19
  },
  {
    id: 20,
    title: "Markdown Previewer",
    description: "A real-time markdown editor and previewer with a responsive layout.",
    tech_stack: ["React", "Marked.js", "Responsive Design"],
    image_url: "/images/project/frontend/Markdown-Previewer.png",
    github_url: "https://codepen.io/saifulabidin/pen/dPPeYbj",
    live_url: "/frontend-project/Markdown-Previewer/index.html",
    category: "Frontend",
    is_private: false,
    sort_order: 20
  },
  {
    id: 21,
    title: "Random Quote Machine",
    description: "A quote generator with social media sharing and animated transitions.",
    tech_stack: ["JavaScript", "API Integration", "CSS Animations"],
    image_url: "/images/project/frontend/Random-Quote-Machine.png",
    github_url: "https://codepen.io/saifulabidin/pen/ZYYoGNB",
    live_url: "/frontend-project/Random-Quote-Machine/index.html",
    category: "Frontend",
    is_private: false,
    sort_order: 21
  }
];
