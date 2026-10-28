'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { SkillData } from "../../constants/skillsData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SkillsSection() {
  const t = useTranslations("skills");
  return (
    <section id="skills" className="py-20 md:py-24 bg-[#FAF7EE] border-y-2 md:border-y-[3px] border-black relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-[#A6FAFF] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            {t("title")}{" "}
            <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-xl">
            {t("desc")}
          </p>
        </div>

        {/* Skills Carousel */}
        <div className="mb-14">
          <Swiper
            slidesPerView="auto"
            spaceBetween={24}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={4000}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="skills-swiper py-4"
          >
            {[...SkillData, ...SkillData, ...SkillData].map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer p-2">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-black rounded-2xl p-4 shadow-neo group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={skill.width}
                      height={skill.height}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-black font-black mt-2.5 text-center uppercase tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-black p-4 sm:p-5 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
            <div className="text-3xl sm:text-4xl font-black text-black font-display mb-1">5+</div>
            <div className="text-xs sm:text-sm font-bold text-neutral-800">{t("stat_exp")}</div>
          </div>
          <div className="bg-[#FFDE59] border-2 border-black p-4 sm:p-5 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
            <div className="text-3xl sm:text-4xl font-black text-black font-display mb-1">27+</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_projects")}</div>
          </div>
          <div className="bg-[#A6FAFF] border-2 border-black p-4 sm:p-5 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
            <div className="text-3xl sm:text-4xl font-black text-black font-display mb-1">15+</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_tools")}</div>
          </div>
          <div className="bg-[#B4F8C8] border-2 border-black p-4 sm:p-5 rounded-xl shadow-neo text-center hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all">
            <div className="text-3xl sm:text-4xl font-black text-black font-display mb-1">100%</div>
            <div className="text-xs sm:text-sm font-bold text-black">{t("stat_satisfaction")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
