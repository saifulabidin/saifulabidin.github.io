'use client';

import { Timeline } from "../Timelines/Timeline";

const educationData = [
  {
    title: "2020 - 2022",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Self-Taught Programming Journey</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Intensive self-directed learning through online platforms, documentation, and hands-on practice.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>FreeCodeCamp</strong> - Responsive Web Design, JavaScript Algorithms, and Data Structures
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Dicoding Academy</strong> - Web Development and Backend Development with JavaScript
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>YouTube University</strong> - Advanced concepts through practical tutorials and documentation
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Official Documentation</strong> - Deep diving into React, Node.js, and modern web technologies
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023 - Present",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Continuous Learning & Professional Development</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Ongoing education through advanced courses, professional certifications, and real-world project experience.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Advanced Full Stack Development</strong> - Enterprise-level application development
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Mobile Development</strong> - Flutter and cross-platform development
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Cloud Technologies</strong> - AWS fundamentals and cloud deployment
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Professional Experience</strong> - Real-world application development at PT. Infinity Blessing
          </div>
        </div>
      </div>
    ),
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Education & <span className="text-[#C6F10E]">Learning</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          My self-directed learning journey in software development, showcasing continuous growth through online platforms, 
          practical projects, and professional experience.
        </p>
        <Timeline data={educationData} />
      </div>
    </section>
  );
}
