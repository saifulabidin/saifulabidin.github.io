'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  renewed?: string;
  image_url: string;
  credential_url?: string;
  sort_order: number;
}

// Static fallback data
const staticCertificates: Certificate[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2022",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-responsive-web-design.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/responsive-web-design",
    sort_order: 1
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2022",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/javascript-algorithms-and-data-structures-v8",
    sort_order: 2
  },
  {
    id: 3,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "2024",
    renewed: "2025",
    image_url: "/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
    credential_url: "https://www.dicoding.com/certificates/N9ZO9RE76XG5",
    sort_order: 3
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
                <div className="relative w-full" style={{ aspectRatio: '1.41/1' }}>
                  <Image
                    src={cert.image_url}
                    alt={cert.title}
                    width={1526}
                    height={1080}
                    className="w-full h-full object-contain bg-gray-900"
                    priority={index === 0}
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
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <span>Issued: {cert.date}</span>
                    {cert.renewed && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="text-[#C6F10E]">Renewed: {cert.renewed}</span>
                      </>
                    )}
                  </div>
                  {cert.credential_url && (
                    <a
                      href={cert.credential_url}
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
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch certificates from database
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('/api/admin/certificates');
        if (response.ok) {
          const data = await response.json();
          setCertificates(data);
        } else {
          // Fallback to static data if API fails
          setCertificates(staticCertificates);
        }
      } catch (error) {
        console.error('Error fetching certificates:', error);
        // Fallback to static data
        setCertificates(staticCertificates);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-16 md:py-24 bg-[#20293A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Certifications & <span className="text-[#C6F10E]">Achievements</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          Professional certifications and achievements that validate my skills and commitment to continuous learning in software development.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-400">Loading certificates...</div>
          </div>
        ) : (
          <>
            {/* Mobile View - Slider */}
            <div className="block lg:hidden mb-12 max-w-2xl mx-auto">
              <MobileCertificateSlider certificates={certificates} />
            </div>

            {/* Desktop View - Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-[#19222D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1.41/1' }}>
                <Image
                  src={cert.image_url}
                  alt={cert.title}
                  width={1526}
                  height={1080}
                  className="w-full h-full object-contain bg-gray-900 hover:scale-105 transition-transform duration-300"
                  loading="lazy"
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
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <span>Issued: {cert.date}</span>
                  {cert.renewed && (
                    <>
                      <span className="text-gray-600">•</span>
                      <span className="text-[#C6F10E]">Renewed: {cert.renewed}</span>
                    </>
                  )}
                </div>
                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
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
          </>
        )}

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
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">27+</div>
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
