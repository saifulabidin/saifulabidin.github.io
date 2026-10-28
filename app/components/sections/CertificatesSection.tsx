'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { staticCertificates, Certificate } from "@/app/constants/certificatesData";

const MobileCertificateSlider = ({ certificates }: { certificates: Certificate[] }) => {
  const t = useTranslations("certificates");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoSliding || certificates.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoSliding, certificates.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoSliding(false);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchEndX.current - touchStartX.current > 50) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
      );
    }

    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 5000);
  };

  if (certificates.length === 0) return null;

  return (
    <div className="relative">
      <div 
        ref={sliderRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="w-full flex-shrink-0 px-2">
              <div className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-neo-md">
                <div className="relative w-full border-b-2 border-black bg-neutral-900" style={{ aspectRatio: '1.41/1' }}>
                  <Image
                    src={cert.image_url}
                    alt={cert.title}
                    width={1526}
                    height={1080}
                    className="w-full h-full object-contain"
                    priority
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#C6F10E] text-black border-2 border-black px-2.5 py-1 rounded-lg text-xs font-black shadow-[2px_2px_0px_0px_#000]">
                      {cert.date}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-black font-display mb-2">{cert.title}</h3>
                  <div className="mb-3">
                    <span className="inline-block bg-[#A6FAFF] border border-black px-2 py-0.5 rounded text-xs font-black uppercase shadow-[1px_1px_0px_0px_#000]">
                      {cert.issuer}
                    </span>
                  </div>
                  {cert.credential_url && (
                    <a
                      href={cert.credential_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#FFDE59] text-black font-black text-xs uppercase px-3 py-1.5 rounded-lg border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                    >
                      <span>{t("verify_btn")}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

      {certificates.length > 1 && (
        <div className="flex justify-center mt-5 space-x-1">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-11 h-11 flex items-center justify-center p-2 cursor-pointer"
              aria-label={`Go to certificate slide ${index + 1}`}
            >
              <span className={`w-3.5 h-3.5 rounded-full border-2 border-black transition-all ${
                index === currentIndex ? 'bg-[#C6F10E] scale-125 shadow-[1px_1px_0px_0px_#000]' : 'bg-white'
              }`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function CertificatesSection() {
  const t = useTranslations("certificates");
  const [certificates, setCertificates] = useState<Certificate[]>(staticCertificates);
  const [loading] = useState(false);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('/api/public/certificates');
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setCertificates(data);
          }
        }
      } catch {
        // Fallback remains staticCertificates
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="py-20 md:py-28 bg-[#FAF7EE] border-y-2 md:border-y-[3px] border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFDE59] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            {t("title")}{" "}
            <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-2xl mx-auto mt-3">
            {t("desc")}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block bg-white border-2 border-black p-6 rounded-2xl shadow-neo-md font-black text-lg">
              Loading verified credentials...
            </div>
          </div>
        ) : (
          <>
            {/* Mobile View - Slider */}
            <div className="block lg:hidden mb-12 max-w-xl mx-auto">
              <MobileCertificateSlider certificates={certificates} />
            </div>

            {/* Desktop View - Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-white border-2 md:border-[3px] border-black rounded-2xl shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="relative w-full border-b-2 border-black bg-neutral-900 overflow-hidden" style={{ aspectRatio: '1.41/1' }}>
                      <Image
                        src={cert.image_url}
                        alt={cert.title}
                        width={1526}
                        height={1080}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-[#C6F10E] text-black border-2 border-black px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-black text-black font-display mb-2">{cert.title}</h3>
                      <div className="mb-4">
                        <span className="inline-block bg-[#A6FAFF] border border-black px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wide shadow-[1px_1px_0px_0px_#000]">
                          {cert.issuer}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-neutral-600 mb-4">
                        <span>{t("issued_label")} {cert.date}</span>
                        {cert.renewed && (
                          <>
                            <span>•</span>
                            <span className="text-black bg-[#C6F10E] px-1.5 py-0.2 rounded border border-black">{t("renewed_label")} {cert.renewed}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    {cert.credential_url && (
                      <a
                        href={cert.credential_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#FFDE59] text-black font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl border-2 border-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all cursor-pointer"
                      >
                        <span>{t("verify_cert_btn")}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

        {/* Milestone Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-black p-4 rounded-xl shadow-neo text-center">
            <div className="text-3xl font-black text-black font-display mb-1">8+</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-800">{t("stat_certs")}</div>
          </div>
          <div className="bg-[#FF90E8] border-2 border-black p-4 rounded-xl shadow-neo text-center">
            <div className="text-3xl font-black text-black font-display mb-1">1,800+</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_hours")}</div>
          </div>
          <div className="bg-[#A6FAFF] border-2 border-black p-4 rounded-xl shadow-neo text-center">
            <div className="text-3xl font-black text-black font-display mb-1">27+</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_projects")}</div>
          </div>
          <div className="bg-[#C6F10E] border-2 border-black p-4 rounded-xl shadow-neo text-center">
            <div className="text-3xl font-black text-black font-display mb-1">5+</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_years")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
