'use client';

import { Timeline } from "../Timelines/Timeline";

const workExperienceData = [
  {
    title: "2020 - 2022",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Self-Taught Developer Journey</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Began my journey into web development through intensive self-study, online courses, and hands-on practice with various technologies.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Dicoding Indonesia Academy</strong> - Completed fundamental and advanced web development courses
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Built first portfolio website</strong> using vanilla HTML, CSS, and JavaScript
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Learned core technologies</strong> - JavaScript, React, Node.js, databases
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Established strong foundation</strong> in computer science principles and best practices
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Junior Full Stack Developer</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Started professional development career by contributing to open-source projects and building personal projects while completing advanced certifications.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Completed FreeCodeCamp curriculum</strong> - 1,800+ hours of coding challenges and projects
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Built 20+ projects</strong> including 5 major full-stack applications
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Contributed to 3 open-source projects</strong> with over 100 GitHub contributions
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Mastered MERN stack</strong> and modern development practices
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023 - 2025",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Freelance Full Stack Developer</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Worked as a freelance developer, creating custom web applications and solutions for various clients across different industries while expanding skills into mobile development.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Developed 15+ web applications</strong> using modern technologies like React, Next.js, and Node.js
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Client satisfaction rate of 98%</strong> with timely delivery and quality code
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Built scalable APIs</strong> serving 10,000+ daily requests
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Expanded into mobile development</strong> learning Flutter and Dart for cross-platform apps
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025 - Present",
    content: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-[#C6F10E]">Full Stack Developer - PT. Infinity Blessing</h3>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Currently working as a versatile developer handling backend, frontend, and mobile development using Flutter. Responsible for building comprehensive digital solutions across multiple platforms.
        </p>
        <div className="mb-4">
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Backend Development</strong> - Building robust APIs and server-side applications
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Frontend Development</strong> - Creating responsive and interactive user interfaces
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Mobile Development</strong> - Developing cross-platform mobile apps with Flutter & Dart
          </div>
          <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-2">
            ✅ <strong>Full-Stack Solutions</strong> - Delivering end-to-end digital products for business needs
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gradient-to-r from-[#C6F10E]/20 to-[#19222D]/50 p-4 rounded-lg border border-[#C6F10E]/30">
            <h4 className="text-[#C6F10E] font-semibold mb-2">Current Role Highlights</h4>
            <ul className="text-neutral-300 text-xs md:text-sm space-y-1">
              <li>• Multi-platform development expertise</li>
              <li>• Cross-functional team collaboration</li>
              <li>• Modern development stack implementation</li>
              <li>• Agile development methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-[#20293A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Work <span className="text-[#C6F10E]">Experience</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          My professional journey from self-taught developer to full-stack engineer, showcasing growth through continuous learning and real-world application development.
        </p>
        <Timeline data={workExperienceData} />
      </div>
    </section>
  );
}
