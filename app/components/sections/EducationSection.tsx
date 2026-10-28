'use client';

import { Timeline } from "../Timelines/Timeline";

const educationData = [
  {
    title: "2020 - 2022",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#C6F10E] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Self-Taught Engineering Discipline</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Intensive self-directed software curriculum focused on computer science fundamentals, algorithm mastery, and full-stack development through top open-access platforms.
        </p>
        <div className="space-y-3">
          {[
            { platform: "Dicoding Academy", detail: "Web Development and Backend Architectures with JavaScript & Node.js" },
            { platform: "FreeCodeCamp", detail: "Responsive Web Design, JavaScript Algorithms & Data Structures (1,800+ Hours)" },
            { platform: "Official Framework Docs", detail: "Deep specification study of React, TypeScript, Node.js, and PostgreSQL internals" },
            { platform: "Hands-on Practical Labs", detail: "End-to-end sandbox implementation of full-stack CRUD apps and REST APIs" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#C6F10E] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.platform}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2023 - Present",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#A6FAFF] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Continuous Learning & Applied Mastery</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Active technical advancement via enterprise production deployments, modern framework migrations, cloud certifications, and high-load architectural paradigms.
        </p>
        <div className="space-y-3">
          {[
            { platform: "Advanced Full-Stack Engineering", detail: "Next.js App Router, SSR, Turbopack, and NextAuth v5 state management" },
            { platform: "Mobile Development", detail: "Cross-platform mobile apps with Flutter, Bloc architecture, and offline sync" },
            { platform: "Cloud & Container Systems", detail: "Docker multi-stage builds, Caddy reverse proxy, and AWS cloud basics" },
            { platform: "Enterprise Application Delivery", detail: "Production backend systems at PT. Infinity Blessing Indonesia" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#A6FAFF] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.platform}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FFDE59] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            Academic & Independent Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            Education & <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">Learning</span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-2xl mx-auto mt-3">
            A disciplined trajectory combining structured self-learning with production engineering experience.
          </p>
        </div>
        <Timeline data={educationData} />
      </div>
    </section>
  );
}
