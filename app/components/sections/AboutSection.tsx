'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFDE59] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            About <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">My Journey</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Journey & Current Focus */}
            <div className="lg:col-span-8 space-y-8">
              {/* My Journey Card */}
              <div className="bg-white border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
                <div className="inline-block bg-[#A6FAFF] border-2 border-black px-3 py-1 rounded-lg font-black text-sm uppercase tracking-wide shadow-neo-sm mb-4">
                  Engineering Path
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black font-display mb-4">
                  Full Stack Engineer with Business Impact
                </h3>
                <div className="space-y-4 text-neutral-800 text-base sm:text-lg leading-relaxed font-medium">
                  <p>
                    Currently developing core enterprise solutions at <strong className="text-black bg-[#FFDE59] px-1.5 py-0.5 border border-black rounded shadow-[1px_1px_0px_0px_#000]">PT. Infinity Blessing Indonesia</strong>, orchestrating comprehensive systems from real-time employee tracking platforms to high-volume sales management pipelines.
                  </p>
                  <p>
                    My trajectory began through disciplined, intensive self-direction. Over the past 5+ years, that foundation has evolved into robust competency across the entire engineering lifecycle, including frontend architecture, resilient backend APIs, relational database design, and cross-platform mobile development with Flutter.
                  </p>
                  <p>
                    I construct clean, maintainable, and type-safe systems using modern standard toolchains including React, Next.js, TypeScript, Node.js, and PostgreSQL.
                  </p>
                </div>
              </div>

              {/* Current Focus Card */}
              <div className="bg-[#FFFDF5] border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 bg-[#C6F10E] border border-black rounded-full"></span>
                  <h4 className="text-xl sm:text-2xl font-black text-black font-display">
                    Core Technical Pillars
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "/icons/rocket.svg", title: "Full Stack Architecture", desc: "Production Next.js and React web apps with high performance and accessibility." },
                    { icon: "/icons/mobile.svg", title: "Cross-Platform Mobile", desc: "Native-quality mobile applications with Flutter and clean state management." },
                    { icon: "/icons/building.svg", title: "Enterprise Systems", desc: "Role-based platforms, inventory engines, and business automation workflows." },
                    { icon: "/icons/api.svg", title: "API & Data Design", desc: "RESTful endpoints, secure authentication, and optimized SQL database queries." }
                  ].map((item, index) => (
                    <div key={index} className="bg-white border-2 border-black p-4 rounded-xl shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#FFDE59] border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_#000] flex items-center justify-center text-black">
                        <Image src={item.icon} alt={item.title} width={20} height={20} className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-black text-sm sm:text-base mb-1">{item.title}</div>
                        <div className="text-xs sm:text-sm text-neutral-700 leading-normal">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Personal Info & CV Download */}
            <div className="lg:col-span-4 space-y-6">
              {/* Personal Info Card */}
              <div className="bg-white border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
                <h4 className="text-xl font-black text-black font-display mb-6 pb-3 border-b-2 border-black flex items-center justify-between">
                  <span>Profile Overview</span>
                  <span className="w-3 h-3 bg-[#A6FAFF] border border-black rounded-full"></span>
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: "/icons/globe.svg", title: "Location", desc: "Indonesia (Remote Worldwide)" },
                    { icon: "/icons/briefcase.svg", title: "Experience", desc: "5+ Years Active Engineering" },
                    { icon: "/icons/graduation.svg", title: "Discipline", desc: "Continuous Self-Taught Mastery" },
                    { icon: "/icons/sparkles.svg", title: "Availability", desc: "Open for High-Impact Projects" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3.5 p-3 rounded-xl border border-neutral-200 bg-[#FFFDF5]">
                      <div className="flex-shrink-0 w-9 h-9 bg-[#C6F10E] border-2 border-black rounded-lg flex items-center justify-center text-black shadow-[1px_1px_0px_0px_#000]">
                        <Image src={item.icon} alt={item.title} width={18} height={18} className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-black text-black text-xs sm:text-sm uppercase tracking-wide">{item.title}</div>
                        <div className="text-xs sm:text-sm text-neutral-700 font-medium">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV Neo-Card Button */}
              <div className="bg-[#B4F8C8] border-2 md:border-[3px] border-black p-6 rounded-2xl shadow-neo-md text-center">
                <h4 className="font-black text-black text-lg mb-2 font-display">Looking for My Resume?</h4>
                <p className="text-neutral-800 text-xs sm:text-sm font-medium mb-4">
                  Download a comprehensive PDF overview of technical competencies, project delivery, and career timeline.
                </p>
                <a 
                  href="/CV-SaifulAbidin.pdf" 
                  download 
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-black font-black py-3.5 px-6 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Curriculum Vitae
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
