'use client';

import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-[#19222D]/80 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[#C6F10E] text-xl font-bold">Saiful Abidin</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-[#C6F10E] transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-[#C6F10E] transition-colors">About</a>
              <a href="#skills" className="text-white hover:text-[#C6F10E] transition-colors">Skills</a>
              <a href="#education" className="text-white hover:text-[#C6F10E] transition-colors">Education</a>
              <a href="#experience" className="text-white hover:text-[#C6F10E] transition-colors">Experience</a>
              <a href="#projects" className="text-white hover:text-[#C6F10E] transition-colors">Projects</a>
              <a href="#certificates" className="text-white hover:text-[#C6F10E] transition-colors">Certificates</a>
              <a href="#contact" className="text-white hover:text-[#C6F10E] transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
}
