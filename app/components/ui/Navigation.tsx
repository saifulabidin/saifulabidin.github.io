'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import MobileNav from "../MobileNav/MobileNav";
import { LanguageSwitcher } from "../LanguageSwitcher";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("common");
  const tHero = useTranslations("hero");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-4 left-0 w-full z-50 px-4 pointer-events-none">
        <div className="container mx-auto max-w-7xl pointer-events-auto">
          <nav className="bg-white border-2 md:border-[3px] border-black shadow-neo-md rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="inline-flex items-center gap-2 bg-[#FFDE59] border-2 border-black px-3 py-1 rounded-xl shadow-neo-sm hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
            >
              <span className="font-black text-base sm:text-lg text-black tracking-tight">Saiful Abidin</span>
              <span className="w-2.5 h-2.5 bg-[#C6F10E] border border-black rounded-full animate-pulse"></span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a href="#home" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_home")}</a>
              <a href="#about" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_about")}</a>
              <a href="#skills" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_skills")}</a>
              <a href="#education" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_education")}</a>
              <a href="#experience" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_experience")}</a>
              <a href="#projects" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_projects")}</a>
              <a href="#certificates" className="text-black font-bold text-sm px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-black hover:bg-[#C6F10E] hover:shadow-neo-sm transition-all">{t("nav_certificates")}</a>
              <div className="pl-2 border-l-2 border-black">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-[#C6F10E] text-black font-black text-sm px-4 py-1.5 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
              >
                {tHero("cta_talk")}
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden">
              <button 
                onClick={toggleMobileMenu} 
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center border-2 border-black bg-[#C6F10E] rounded-xl shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </>
  );
}
