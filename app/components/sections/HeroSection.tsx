'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";
import RotatingText from "../RotatingText/RotatingText";

const Lanyard = dynamic(() => import("../Lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <div className="w-12 h-12 border-4 border-black border-t-[#C6F10E] rounded-full animate-spin mb-3"></div>
      <span className="font-black text-xs uppercase tracking-wider text-black">Loading 3D Canvas...</span>
    </div>
  ),
});

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [is3DActive, setIs3DActive] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl min-h-[calc(100vh-8rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 w-full items-center">
          {/* ID Badge / 3D Model Column - Visible on Desktop */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center min-h-[580px]">
            <div className="absolute inset-4 rounded-3xl border-2 border-dashed border-neutral-300 pointer-events-none" />

            {isDesktop && (
              is3DActive ? (
                <div className="relative w-full h-[580px] flex items-center justify-center">
                  {/* Toggle back to 2D Badge */}
                  <button
                    onClick={() => setIs3DActive(false)}
                    className="absolute top-2 right-2 z-20 bg-white border-2 border-black px-3.5 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-neo-sm hover:bg-[#FF90E8] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer text-black"
                    aria-label="Switch back to 2D badge view"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    2D Badge Mode
                  </button>
                  <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
                </div>
              ) : (
                <div className="relative z-10 flex flex-col items-center">
                  {/* Lanyard Top Strap & Clip Simulation */}
                  <div className="flex flex-col items-center -mb-3 z-10">
                    <div className="w-8 h-10 bg-[#FFDE59] border-2 border-black rounded-t-md shadow-neo-sm flex items-center justify-center">
                      <span className="w-2.5 h-2.5 bg-black rounded-full" />
                    </div>
                    <div className="w-12 h-4 bg-neutral-200 border-2 border-black rounded-sm shadow-neo-sm" />
                  </div>

                  {/* Neo-Brutalist ID Card */}
                  <div className="w-[340px] bg-white border-3 border-black rounded-3xl shadow-neo-lg p-6 flex flex-col items-center relative transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo">
                    {/* Card Slot Hole */}
                    <div className="w-14 h-2.5 bg-neutral-200 border-2 border-black rounded-full mb-4" />

                    {/* Card Top Category Pill */}
                    <div className="inline-flex items-center gap-1.5 bg-[#FF90E8] text-black border-2 border-black px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider shadow-neo-sm mb-4">
                      <span className="w-2 h-2 rounded-full bg-black"></span>
                      Engineer ID
                    </div>

                    {/* Profile Photo Frame */}
                    <div className="w-28 h-28 rounded-2xl bg-[#FFDE59] border-2 border-black overflow-hidden shadow-neo-sm relative mb-4">
                      <Image
                        src="/images/profil/profile.jpeg"
                        alt="Saiful Abidin - Full Stack Engineer"
                        width={112}
                        height={112}
                        priority
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Identity Information */}
                    <h3 className="text-2xl font-black text-black font-display tracking-tight text-center">
                      Saiful Abidin
                    </h3>
                    <p className="text-xs font-black text-neutral-600 uppercase tracking-widest mt-1 mb-4 text-center">
                      Full Stack & Systems Engineer
                    </p>

                    {/* Metadata Grid */}
                    <div className="w-full grid grid-cols-2 gap-2 p-2.5 bg-[#FFFDF5] border-2 border-black rounded-xl mb-5 shadow-neo-sm text-center">
                      <div className="border-r-2 border-black/20 pr-1">
                        <span className="block text-[10px] font-black uppercase tracking-wider text-neutral-500">Exp Level</span>
                        <span className="text-xs font-black text-black">5+ Years</span>
                      </div>
                      <div className="pl-1">
                        <span className="block text-[10px] font-black uppercase tracking-wider text-neutral-500">Timezone</span>
                        <span className="text-xs font-black text-black">GMT+7 (ID)</span>
                      </div>
                    </div>

                    {/* Interactive 3D Launch CTA */}
                    <button
                      onClick={() => setIs3DActive(true)}
                      className="w-full min-h-[44px] py-3 px-4 bg-[#C6F10E] text-black font-black text-xs uppercase tracking-wider rounded-xl border-2 border-black shadow-neo hover:bg-[#FFDE59] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
                      aria-label="Launch interactive 3D WebGL physics simulation"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      <span>Launch 3D Physics Lanyard</span>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Hero Content Column */}
          <div className="col-span-1 lg:col-span-6 flex items-center justify-center w-full">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              {/* Availability Badge & Rotating Text */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 bg-[#C6F10E] text-black border-2 border-black px-3.5 py-1 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-neo-sm">
                  <span className="w-2.5 h-2.5 bg-black rounded-full animate-ping"></span>
                  Available For
                </div>
                <RotatingText
                  texts={['Full-Stack Solutions', 'Frontend Systems', 'Backend & Cloud', 'Mobile Development']}
                  mainClassName="px-3 py-1 bg-[#FFDE59] text-black border-2 border-black rounded-xl font-black text-xs sm:text-sm uppercase tracking-wide shadow-neo-sm inline-flex"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2200}
                />
              </div>

              {/* Headline */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-[1.08] tracking-tight font-display">
                  I&apos;m Saiful Abidin
                </h1>
                
                <div className="inline-block bg-[#A6FAFF] border-2 md:border-[3px] border-black px-4 py-1.5 rounded-xl shadow-neo-sm">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-black font-display tracking-tight">
                    Full Stack Developer
                  </span>
                </div>
              </div>

              {/* Bio Description */}
              <p className="text-base sm:text-lg text-neutral-800 font-medium leading-relaxed">
                Professional Full Stack Engineer from Indonesia with over 5 years of practical experience. Specializing in high-performance React and Next.js applications, scalable Node.js services, robust relational databases, and enterprise mobile architectures.
              </p>

              {/* Key Stats in Neo-Brutalist Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-2">
                <div className="bg-white border-2 border-black p-3.5 sm:p-4 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-black font-display">5+</div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-700 mt-0.5">Years Exp</div>
                </div>
                <div className="bg-[#B4F8C8] border-2 border-black p-3.5 sm:p-4 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-black font-display">27+</div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-0.5">Projects</div>
                </div>
                <div className="bg-[#FF90E8] border-2 border-black p-3.5 sm:p-4 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-black font-display">100%</div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-800 mt-0.5">Satisfaction</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6F10E] text-black font-black text-base py-3.5 px-8 rounded-xl border-2 md:border-[3px] border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                >
                  Let&apos;s Work Together
                </a>
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black font-black text-base py-3.5 px-8 rounded-xl border-2 md:border-[3px] border-black shadow-neo hover:bg-[#FFDE59] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                >
                  View Featured Work
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-neutral-600 mr-1">Social Profiles:</span>
                
                <a 
                  href="https://github.com/saifulabidin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#A6FAFF] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                  title="GitHub Profile"
                  aria-label="Saiful Abidin GitHub profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                <a 
                  href="https://linkedin.com/in/saiful-abidin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#C6F10E] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                  title="LinkedIn Profile"
                  aria-label="Saiful Abidin LinkedIn profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a 
                  href="https://twitter.com/syaifulosd" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#FFBD59] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                  title="Twitter Profile"
                  aria-label="Saiful Abidin Twitter profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a 
                  href="https://instagram.com/itssabidz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#FF90E8] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                  title="Instagram Profile"
                  aria-label="Saiful Abidin Instagram profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
