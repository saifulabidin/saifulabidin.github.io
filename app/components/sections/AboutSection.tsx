'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  const technicalPillars = [
    { icon: "/icons/rocket.svg", title: t("pillar1_title"), desc: t("pillar1_desc") },
    { icon: "/icons/mobile.svg", title: t("pillar2_title"), desc: t("pillar2_desc") },
    { icon: "/icons/building.svg", title: t("pillar3_title"), desc: t("pillar3_desc") },
    { icon: "/icons/api.svg", title: t("pillar4_title"), desc: t("pillar4_desc") }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFDE59] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            {t("title")}{" "}
            <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">
              {t("title_highlight")}
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Journey & Current Focus */}
            <div className="lg:col-span-8 space-y-8">
              {/* My Journey Card */}
              <div className="bg-white border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
                <span className="inline-block bg-[#A6FAFF] border-2 border-black px-3 py-1 rounded-lg font-black text-sm uppercase tracking-wide mb-4">
                  {t("card1_tag")}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-black font-display mb-4">
                  {t("card1_title")}
                </h3>
                <div className="space-y-4 text-neutral-800 text-base sm:text-lg leading-relaxed font-medium">
                  <p>{t("p1")}</p>
                  <p>{t("p2")}</p>
                  <p>{t("p3")}</p>
                </div>
              </div>

              {/* Current Focus Card */}
              <div className="bg-[#FFFDF5] border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 bg-[#C6F10E] border border-black rounded-full"></span>
                  <h4 className="text-xl sm:text-2xl font-black text-black font-display">
                    {t("pillars_title")}
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technicalPillars.map((item, index) => (
                    <div key={index} className="flex items-start gap-3.5 p-3 rounded-lg hover:bg-black/[0.03] transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#FFDE59] border-2 border-black rounded-lg flex items-center justify-center text-black">
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
                  <span>{t("profile_overview")}</span>
                  <span className="w-3 h-3 bg-[#A6FAFF] border border-black rounded-full"></span>
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: "/icons/globe.svg", title: t("item_location_label"), desc: t("item_location_val") },
                    { icon: "/icons/briefcase.svg", title: t("item_exp_label"), desc: t("item_exp_val") },
                    { icon: "/icons/graduation.svg", title: t("item_discipline_label"), desc: t("item_discipline_val") },
                    { icon: "/icons/sparkles.svg", title: t("item_avail_label"), desc: t("item_avail_val") }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3.5 p-3 rounded-xl bg-neutral-50">
                      <div className="flex-shrink-0 w-9 h-9 bg-[#C6F10E] border-2 border-black rounded-lg flex items-center justify-center text-black">
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
                <h4 className="font-black text-black text-lg mb-2 font-display">{t("cv_title")}</h4>
                <p className="text-neutral-800 text-xs sm:text-sm font-medium mb-4">
                  {t("cv_desc")}
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
                  {t("cv_download_btn")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
