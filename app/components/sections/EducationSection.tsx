'use client';

import { useTranslations } from "next-intl";
import { Timeline } from "../Timelines/Timeline";

export default function EducationSection() {
  const t = useTranslations("education");

  const educationData = [
    {
      title: "2020 - 2022",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#C6F10E] border border-black rounded-full"></span>
            <h3 className="text-xl font-black text-black font-display">{t("t1_title")}</h3>
          </div>
          <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed max-w-prose">
            {t("t1_desc")}
          </p>
          <div className="space-y-1">
            {[
              { platform: t("t1_item1_name"), detail: t("t1_item1_desc") },
              { platform: t("t1_item2_name"), detail: t("t1_item2_desc") },
              { platform: t("t1_item3_name"), detail: t("t1_item3_desc") },
              { platform: t("t1_item4_name"), detail: t("t1_item4_desc") }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2.5 border-b border-neutral-100 last:border-b-0">
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
            <h3 className="text-xl font-black text-black font-display">{t("t2_title")}</h3>
          </div>
          <p className="text-neutral-700 text-sm font-medium mb-5 leading-relaxed max-w-prose">
            {t("t2_desc")}
          </p>
          <div className="space-y-1">
            {[
              { platform: t("t2_item1_name"), detail: t("t2_item1_desc") },
              { platform: t("t2_item2_name"), detail: t("t2_item2_desc") },
              { platform: t("t2_item3_name"), detail: t("t2_item3_desc") },
              { platform: t("t2_item4_name"), detail: t("t2_item4_desc") }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2.5 border-b border-neutral-100 last:border-b-0">
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

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
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
        <Timeline data={educationData} />
      </div>
    </section>
  );
}
