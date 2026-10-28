'use client';

import { Timeline } from "../Timelines/Timeline";

const workExperienceData = [
  {
    title: "2020 - 2022",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#FFDE59] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Foundation & Early Engineering</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Began professional journey into web systems through project builds, algorithm problem sets, and practical coding challenges across core JavaScript runtimes.
        </p>
        <div className="space-y-3">
          {[
            { role: "Dicoding Indonesia Academy", detail: "Completed comprehensive full-stack and backend courses with distinction." },
            { role: "Portfolio & Interactive Prototypes", detail: "Shipped initial production portfolios and dynamic web applications." },
            { role: "Core Technologies", detail: "Engineered applications using JavaScript, Node.js, Express, and SQL databases." },
            { role: "Open Curriculum Completion", detail: "Completed 1,800+ hours of full-stack challenges across FreeCodeCamp." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#FFDE59] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.role}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2022 - 2023",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#A6FAFF] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Junior Full Stack Developer</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Delivered full-stack projects, contributed to developer open source repositories, and gained proficiency in enterprise architectural patterns.
        </p>
        <div className="space-y-3">
          {[
            { role: "Project Delivery", detail: "Constructed 20+ applications including 5 major end-to-end full-stack architectures." },
            { role: "Open Source Engagement", detail: "Contributed upstream fixes across 3 public repositories with 100+ GitHub contributions." },
            { role: "Full-Stack Specialization", detail: "Mastered React SPA and Node.js backend integrations with relational persistence." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#A6FAFF] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.role}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2023 - 2025",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#FF90E8] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Freelance Full Stack Engineer</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Partnered with startups and business clients to deliver bespoke web applications, headless commerce systems, and cross-platform mobile solutions.
        </p>
        <div className="space-y-3">
          {[
            { role: "Client App Delivery", detail: "Engineered and deployed 15+ production applications using React, Next.js, and Node.js." },
            { role: "High Reliability", detail: "Maintained 98% client satisfaction rate with verified zero-downtime SLA delivery." },
            { role: "Scalable API Architecture", detail: "Constructed high-throughput REST and GraphQL endpoints handling 10,000+ daily events." },
            { role: "Mobile Engineering", detail: "Expanded into cross-platform mobile development with Flutter, Dart, and Riverpod/Bloc." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#FF90E8] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.role}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "2025 - Present",
    content: (
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-[#C6F10E] border border-black rounded-full"></span>
          <h3 className="text-xl font-black text-black font-display">Full Stack Developer — PT. Infinity Blessing Indonesia</h3>
        </div>
        <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed">
          Lead engineer spearheading backend architectures, administrative portals, and mobile client ecosystems for real-time company operations.
        </p>
        <div className="space-y-3 mb-5">
          {[
            { role: "Enterprise Backend Systems", detail: "Architecting micro-services, background workers, and Postgres databases." },
            { role: "Interactive Frontend", detail: "Building responsive dashboards and web portals with Next.js and Tailwind CSS." },
            { role: "Mobile Client Apps", detail: "Designing and deploying production Flutter mobile apps for field staff." },
            { role: "Data Pipelines", detail: "Implementing automated geolocation mapping and reporting workflows." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFDF5] border border-black/80">
              <span className="flex-shrink-0 w-5 h-5 rounded bg-[#C6F10E] border border-black shadow-[1px_1px_0px_0px_#000] inline-flex items-center justify-center">
                <svg className="w-3 h-3 text-black stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <div className="text-xs sm:text-sm text-neutral-800">
                <strong className="font-black text-black">{item.role}</strong> — {item.detail}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-[#B4F8C8] border-2 border-black p-4 rounded-xl shadow-neo-sm">
          <h4 className="font-black text-black text-sm uppercase tracking-wide mb-2">Role Competencies</h4>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-neutral-800">
            <div>• Cross-Platform Delivery</div>
            <div>• Relational Schema Modeling</div>
            <div>• Cloud & Docker Deployment</div>
            <div>• Security & Auth Hardening</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FAF7EE] border-y-2 md:border-y-[3px] border-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#A6FAFF] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            Work <span className="bg-[#C6F10E] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">Experience</span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-2xl mx-auto mt-3">
            Real-world product engineering track record delivering scalable solutions.
          </p>
        </div>
        <Timeline data={workExperienceData} />
      </div>
    </section>
  );
}
