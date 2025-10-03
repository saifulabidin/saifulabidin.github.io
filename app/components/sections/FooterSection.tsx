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
    <footer className="py-8 bg-[#19222D] border-t border-[#2A3749]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="text-[#C6F10E] text-xl font-bold">Saiful Abidin</div>
            <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
            <p className="mt-1">Made with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>

        {/* Policy Links */}
        <div className="border-t border-[#2A3749] pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm">
            <Link 
              href="/privacy-policy"
              className="text-gray-400 hover:text-[#C6F10E] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-gray-600">•</span>
            <Link 
              href="/cookie-policy"
              className="text-gray-400 hover:text-[#C6F10E] transition-colors"
            >
              Cookie Policy
            </Link>
            <span className="hidden sm:inline text-gray-600">•</span>
            <button
              onClick={handleCookieSettings}
              className="text-gray-400 hover:text-[#C6F10E] transition-colors"
            >
              Cookie Settings
            </button>
            <span className="hidden sm:inline text-gray-600">•</span>
            <Link 
              href="/#contact"
              className="text-gray-400 hover:text-[#C6F10E] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
