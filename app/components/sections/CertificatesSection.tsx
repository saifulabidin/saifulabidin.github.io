'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2022",
    image: "/images/sertifikat/freecodecamp-responsive-web-design.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp", 
    date: "2022",
    image: "/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Backend Development and APIs",
    issuer: "FreeCodeCamp",
    date: "2023",
    image: "/images/sertifikat/freecodecamp-backend-development-and-apis.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    date: "2023",
    image: "/images/sertifikat/freecodecamp-scientic-computing-with-python.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Legacy Backend Challenges",
    issuer: "FreeCodeCamp",
    date: "2023", 
    image: "/images/sertifikat/freecodecamp-legacy-backend.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2022",
    image: "/images/sertifikat/dicoding-dasar-pemrograman-javascript.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  },
  {
    title: "Belajar Backend Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia", 
    date: "2023",
    image: "/images/sertifikat/dicoding-belajar-backend-pemula-dengan-javascript.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  }
];

// Mobile Slider Component for Certificates
const MobileCertificateSlider = ({ certificates }: { certificates: Certificate[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoSliding || certificates.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Auto slide every 5 seconds for certificates

    return () => clearInterval(interval);
  }, [isAutoSliding, certificates.length]);

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
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - previous slide
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
      );
    }

    // Resume auto slide after 6 seconds
    setTimeout(() => setIsAutoSliding(true), 6000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 6000);
  };

  return (
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
          {certificates.map((cert, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-[#19222D] rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
                      {cert.date}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">{cert.title}</h3>
                  <p className="text-[#C6F10E] text-sm font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">Issued: {cert.date}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C6F10E] hover:text-white transition-colors text-sm"
                    >
                      <span>View Credential</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {certificates.length > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-[#C6F10E] scale-110' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-slide indicator */}
      {certificates.length > 1 && (
        <div className="flex justify-center mt-2">
          <div className={`text-xs text-gray-400 flex items-center gap-1 ${isAutoSliding ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-2 h-2 rounded-full ${isAutoSliding ? 'bg-[#C6F10E] animate-pulse' : 'bg-gray-400'}`}></div>
            Auto-sliding {isAutoSliding ? 'ON' : 'OFF'}
          </div>
        </div>
      )}
    </div>
  );
};

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-[#20293A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Certifications & <span className="text-[#C6F10E]">Achievements</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          Professional certifications and achievements that validate my skills and commitment to continuous learning in software development.
        </p>
        
        {/* Mobile View - Slider */}
        <div className="block lg:hidden mb-12">
          <MobileCertificateSlider certificates={certificates} />
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-[#19222D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {cert.date}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-[#C6F10E] text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">Issued: {cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C6F10E] hover:text-white transition-colors text-sm"
                  >
                    <span>View Credential</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">8+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">1800+</div>
            <div className="text-gray-300">Hours Studied</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
