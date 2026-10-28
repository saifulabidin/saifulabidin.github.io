"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  title?: string;
  description?: string;
}

export const Timeline = ({ data, title, description }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      {(title || description) && (
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-8 text-center">
          {title && (
            <h2 className="text-3xl md:text-5xl font-black text-black font-display mb-3">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-neutral-700 text-base md:text-lg font-medium max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-6xl mx-auto pb-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-16 md:gap-8"
          >
            {/* Sticky Marker & Year Pillar */}
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-32 self-start max-w-xs md:w-[280px]">
              <div className="h-9 w-9 absolute left-3 md:left-4 rounded-xl bg-[#C6F10E] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black text-black text-xs">
                {index + 1}
              </div>
              <div className="hidden md:block pl-16">
                <span className="inline-block bg-[#FFDE59] border-2 border-black px-3.5 py-1 rounded-xl text-base font-black text-black font-display shadow-neo-sm">
                  {item.title}
                </span>
              </div>
            </div>

            {/* Content Card Container */}
            <div className="relative pl-14 pr-4 md:pl-4 w-full">
              <div className="md:hidden block mb-4">
                <span className="inline-block bg-[#FFDE59] border-2 border-black px-3 py-1 rounded-xl text-sm font-black text-black font-display shadow-neo-sm">
                  {item.title}
                </span>
              </div>
              <div className="bg-white border-2 md:border-[3px] border-black p-5 sm:p-7 rounded-2xl shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo transition-all">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Vertical Backbone Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[29px] md:left-[33px] top-6 w-[3px] bg-black"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-[#C6F10E]"
          />
        </div>
      </div>
    </div>
  );
};
