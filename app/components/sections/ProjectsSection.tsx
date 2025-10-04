'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Project {
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

// Helper function to render project links
const renderProjectLinks = (project: Project) => {
  const isPrivateProject = project.github_url === "#private-repository";
  const isInternalDemo = project.live_url === "#company-internal";
  const isFrontendProject = project.category === "Frontend";

  return (
    <div className="flex space-x-3">
      {/* GitHub Link - Only show for public projects */}
      {!isPrivateProject && (
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C6F10E] hover:text-white transition-colors"
          title="View Source Code"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      )}

      {/* Live Demo Link - Only show for Frontend projects or public projects */}
      {(isFrontendProject || !isInternalDemo) && (
        <a
          href={project.live_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C6F10E] hover:text-white transition-colors"
          title="View Live Demo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15,3 21,3 21,9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      )}

      {/* Private Project Badge - Show for private projects */}
      {isPrivateProject && (
        <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <circle cx="12" cy="16" r="1"></circle>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Private Project
        </span>
      )}
    </div>
  );
};

// Static fallback data
const staticProjects: Project[] = [
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
  {
    id: 3,
    title: "Bestie Tissue Landing Page",
    description: "Modern and responsive landing page for Bestie Tissue product featuring AI-powered chatbot integration with Google Gemini, interactive store locator with Google Maps, product showcase, and lead generation forms.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Google Gemini AI", "Framer Motion", "React Hook Form"],
    image_url: "/images/project/company/bestie-tissue.jpg",
    github_url: "#private-repository",
    live_url: "https://bestie-tissue.com",
    category: "Frontend",
    is_private: true,
    sort_order: 3
  }
];

// Project Card Component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  // Use 404 image for private projects
  const getProjectImage = () => {
    if (project.github_url === "#private-repository") {
      return "/images/project/privateproject.png";
    }
    return project.image_url;
  };

  return (
    <div className="bg-[#20293A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
            {project.category}
          </span>
        </div>
        <Image
          src={getProjectImage()}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech_stack.map((tech, idx) => (
            <span key={idx} className="bg-[#19222D] text-[#C6F10E] px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        {renderProjectLinks(project)}
      </div>
    </div>
  );
};

// Mobile Slider Component
const MobileProjectSlider = ({ projects, categoryIcon, categoryName }: { projects: Project[], categoryIcon: string, categoryName: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoSliding || projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Auto slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoSliding, projects.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoSliding(false); // Pause auto slide on touch
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next slide
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous slide
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    }

    // Resume auto slide after 5 seconds
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  if (projects.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
        {categoryIcon} {categoryName} Projects
      </h3>
      
      <div className="relative">
        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="overflow-hidden rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#C6F10E] scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-slide indicator */}
        {projects.length > 1 && (
          <div className="flex justify-center mt-2">
            <div className={`text-xs text-gray-400 flex items-center gap-1 ${isAutoSliding ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`w-2 h-2 rounded-full ${isAutoSliding ? 'bg-[#C6F10E] animate-pulse' : 'bg-gray-400'}`}></div>
              Auto-sliding {isAutoSliding ? 'ON' : 'OFF'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch projects from database
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/admin/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          // Fallback to static data if API fails
          setProjects(staticProjects);
        }
      } catch (error) {
        // Fallback to static data
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = [
    { name: "Backend", icon: "🖥️", projects: projects.filter(p => p.category === "Backend") },
    { name: "API", icon: "🔌", projects: projects.filter(p => p.category === "API") },
    { name: "Frontend", icon: "💻", projects: projects.filter(p => p.category === "Frontend") },
    { name: "Mobile", icon: "📱", projects: projects.filter(p => p.category === "Mobile") }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">My <span className="text-[#C6F10E]">Projects</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          A showcase of my professional work and current projects I&apos;m developing at PT. Infinity Blessing Indonesia, 
          featuring enterprise-level applications, mobile development, and innovative business solutions.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-400">Loading projects...</div>
          </div>
        ) : (
          <>
            {/* Mobile View - Slider */}
            <div className="block md:hidden">
              {categories.map((category, categoryIndex) => (
                <MobileProjectSlider
                  key={categoryIndex}
                  projects={category.projects}
                  categoryIcon={category.icon}
                  categoryName={category.name}
                />
              ))}
            </div>

            {/* Desktop View - Grid */}
            <div className="hidden md:block">
              {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <h3 className="text-2xl font-semibold mb-8 text-center">
                    {category.icon} {category.name} Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.projects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/saifulabidin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent hover:bg-[#C6F10E] hover:text-black text-[#C6F10E] border-2 border-[#C6F10E] py-3 px-8 rounded-md font-medium transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>View All Projects on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
