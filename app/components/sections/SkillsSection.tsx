'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "../../constants/skillsData";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#19222D] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6F10E] to-green-400">Skills</span>
            {" & "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl">
            Using the latest technologies this world has to offer
          </p>
        </div>

        {/* Skills Carousel */}
        <div className="mb-16">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            speed={5000}
            allowTouchMove={false}
            modules={[Autoplay]}
            className="skills-swiper"
          >
            {/* Triple duplicate data for ultra smooth infinite loop */}
            {[...SkillData, ...SkillData, ...SkillData].map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 bg-[#20293A] rounded-2xl p-3 group-hover:bg-[#C6F10E] transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-xl">
                    <Image
                      src={skill.Image}
                      alt={skill.name}
                      width={skill.width}
                      height={skill.height}
                      className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm text-gray-300 mt-3 group-hover:text-[#C6F10E] transition-colors font-medium">
                    {skill.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">5+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">20+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
