'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { staticProjects, Project } from "@/app/constants/projectsData";

const ProjectCard = ({ project }: { project: Project }) => {
  const isPrivateProject = project.github_url === "#private-repository";
  const isInternalDemo = project.live_url === "#company-internal";
  const isFrontendProject = project.category === "Frontend";

  const getProjectImage = () => {
    if (project.github_url === "#private-repository") {
      return "/images/project/privateproject.png";
    }
    return project.image_url;
  };

  return (
    <div className="bg-white border-2 md:border-[3px] border-black rounded-2xl shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo transition-all flex flex-col h-full overflow-hidden">
      {/* Thumbnail Header */}
      <div className="h-48 relative border-b-2 border-black bg-neutral-100 overflow-hidden flex-shrink-0">
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#FFDE59] text-black border-2 border-black px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">
            {project.category}
          </span>
        </div>
        <Image
          src={getProjectImage()}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-black text-black font-display mb-2.5 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-neutral-700 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech_stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-[#FFFDF5] text-black border border-black shadow-[1px_1px_0px_0px_#000]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-black/10">
          <div className="flex items-center gap-2.5">
            {!isPrivateProject && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#A6FAFF] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                title={project.github_url.includes('codepen.io') ? "View on CodePen" : "View Source Code on GitHub"}
                aria-label={`Source code for ${project.title}`}
              >
                {project.github_url.includes('codepen.io') ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
              </a>
            )}

            {!isInternalDemo && (
              <a
                href={project.live_url}
                target={project.live_url.startsWith('http') ? "_blank" : undefined}
                rel={project.live_url.startsWith('http') ? "noopener noreferrer" : undefined}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#C6F10E] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                title="View Live Platform"
                aria-label={`Live platform for ${project.title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15,3 21,3 21,9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>

          {isPrivateProject && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-black bg-neutral-200 text-neutral-800 border border-black shadow-[1px_1px_0px_0px_#000]">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <circle cx="12" cy="16" r="1"></circle>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Private System
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/public/projects');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setProjects(data);
          }
        }
      } catch {
        // Fallback remains staticProjects
      }
    };

    fetchProjects();
  }, []);

  const categoryList = ["All", "Backend", "Frontend", "API", "Mobile", "Fullstack"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FF90E8] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            Production Implementations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            Featured <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">Projects</span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-2xl mx-auto mt-3">
            Enterprise systems, high-availability APIs, and responsive customer interfaces built for production.
          </p>
        </div>

        {/* Neo-Brutalist Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categoryList.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`min-h-[44px] px-5 py-2.5 rounded-xl text-sm font-black border-2 border-black inline-flex items-center justify-center transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-[#C6F10E] text-black shadow-none translate-x-[3px] translate-y-[3px]' 
                    : 'bg-white text-black shadow-neo hover:bg-[#FFDE59] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        {loading ? (
          <div className="text-center py-16">
            <div className="inline-block bg-white border-2 border-black p-6 rounded-2xl shadow-neo-md font-black text-lg">
              Loading projects catalog...
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-block bg-white border-2 border-black p-8 rounded-2xl shadow-neo-md max-w-md">
              <h4 className="text-xl font-black text-black font-display mb-2">No projects in this category</h4>
              <p className="text-neutral-700 text-sm font-medium mb-4">Switch to another filter or view all available project entries.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="bg-[#C6F10E] border-2 border-black px-4 py-2 rounded-xl font-black text-sm shadow-neo-sm"
              >
                Show All Projects
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* View More on GitHub Callout */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/saifulabidin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFDE59] text-black font-black text-base py-3.5 px-8 rounded-xl border-2 md:border-[3px] border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
          >
            <span>Explore All Repositories on GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
