'use client';

import Link from 'next/link';

export default function FooterSection() {
  const handleCookieSettings = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookieConsent');
      localStorage.removeItem('cookieConsentDate');
      localStorage.removeItem('cookiePreferences');
      window.location.reload();
    }
  };

  return (
    <footer className="py-12 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <div className="inline-block bg-[#FFDE59] border-2 border-black px-3.5 py-1 rounded-xl font-black text-xl text-black shadow-neo-sm tracking-tight mb-2">
              Saiful Abidin
            </div>
            <p className="text-neutral-700 text-sm font-bold">
              Full Stack Developer & Systems Engineer
            </p>
          </div>

          <div className="text-neutral-800 text-xs sm:text-sm font-semibold text-center md:text-right space-y-1">
            <p>&copy; {new Date().getFullYear()} Saiful Abidin. All rights reserved.</p>
            <p className="text-neutral-600 font-medium">Built with precision using Next.js, Tailwind CSS and Bun.</p>
          </div>
        </div>

        {/* Policy Navigation Links */}
        <div className="border-t-2 border-black pt-6">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <Link 
              href="/privacy-policy"
              className="text-black font-black hover:bg-[#C6F10E] border-2 border-transparent hover:border-black hover:shadow-neo-sm px-3 py-2 min-h-[44px] inline-flex items-center rounded-lg transition-all"
            >
              Privacy Policy
            </Link>
            <span className="text-black font-black hidden sm:inline" aria-hidden="true">•</span>
            <Link 
              href="/cookie-policy"
              className="text-black font-black hover:bg-[#FFDE59] border-2 border-transparent hover:border-black hover:shadow-neo-sm px-3 py-2 min-h-[44px] inline-flex items-center rounded-lg transition-all"
            >
              Cookie Policy
            </Link>
            <span className="text-black font-black hidden sm:inline" aria-hidden="true">•</span>
            <button
              onClick={handleCookieSettings}
              className="text-black font-black hover:bg-[#A6FAFF] border-2 border-transparent hover:border-black hover:shadow-neo-sm px-3 py-2 min-h-[44px] inline-flex items-center rounded-lg transition-all cursor-pointer"
            >
              Cookie Settings
            </button>
            <span className="text-black font-black hidden sm:inline" aria-hidden="true">•</span>
            <Link 
              href="/#contact"
              className="text-black font-black hover:bg-[#B4F8C8] border-2 border-transparent hover:border-black hover:shadow-neo-sm px-3 py-2 min-h-[44px] inline-flex items-center rounded-lg transition-all"
            >
              Contact Direct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
