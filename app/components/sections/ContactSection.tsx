'use client';

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import ContactForm from "../Contact/ContactForm";

const GoogleMapComponent = dynamic(() => import("../ui/GoogleMapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[280px] p-6 bg-[#FFFDF5] flex items-center justify-center font-bold text-sm text-black">
      Loading interactive map coordinates...
    </div>
  ),
});

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#C6F10E] text-black border-2 border-black px-3.5 py-1 rounded-full font-black text-xs uppercase tracking-wider shadow-neo-sm mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black font-display tracking-tight">
            {t("title")}{" "}
            <span className="bg-[#FFDE59] border-2 border-black px-3 py-0.5 rounded-xl shadow-neo-sm">
              {t("title_highlight")}
            </span>
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-medium max-w-2xl mx-auto mt-3">
            {t("desc")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column - Contact Details & Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-2 md:border-[3px] border-black p-6 sm:p-7 rounded-2xl shadow-neo-md">
              <h3 className="text-2xl font-black text-black font-display mb-6 pb-3 border-b-2 border-black">
                {t("direct_title")}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-[#FFFDF5]">
                  <div className="w-11 h-11 bg-[#C6F10E] border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-black text-xs uppercase tracking-wide">{t("email_title")}</h4>
                    <a href="mailto:contact@sabidzpro.is-a.dev" className="text-neutral-800 text-sm font-bold hover:underline">
                      contact@sabidzpro.is-a.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-[#FFFDF5]">
                  <div className="w-11 h-11 bg-[#FFDE59] border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-black text-xs uppercase tracking-wide">{t("phone_title")}</h4>
                    <p className="text-neutral-800 text-sm font-bold">+62 822-4203-4791</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl bg-[#FFFDF5]">
                  <div className="w-11 h-11 bg-[#A6FAFF] border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-black text-xs uppercase tracking-wide">{t("base_location_title")}</h4>
                    <p className="text-neutral-800 text-sm font-bold">{t("base_location_val")}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t-2 border-black/10 mt-6">
                <h4 className="text-black font-black text-xs uppercase tracking-wider mb-3">{t("handles_title")}</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/saifulabidin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#A6FAFF] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                    title="GitHub Profile"
                    aria-label="Saiful Abidin GitHub profile contact"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com/in/saiful-abidin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#C6F10E] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                    title="LinkedIn Profile"
                    aria-label="Saiful Abidin LinkedIn profile contact"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/syaifulosd" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl border-2 border-black bg-white hover:bg-[#FFBD59] text-black shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none flex items-center justify-center transition-all cursor-pointer"
                    title="Twitter Profile"
                    aria-label="Saiful Abidin Twitter profile contact"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="bg-white border-2 md:border-[3px] border-black p-5 rounded-2xl shadow-neo-md overflow-hidden">
              <h4 className="text-base font-black text-black font-display mb-3">{t("coords_title")}</h4>
              <div className="rounded-xl border border-neutral-300 overflow-hidden">
                <GoogleMapComponent 
                  center={{ lat: -7.9288452, lng: 110.8288609 }}
                  zoom={16}
                  markerPosition={{ lat: -7.9288452, lng: 110.8288609 }}
                  markerTitle="SS Sabidz Shop"
                  markerDescription="Saiful Abidin's Location"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 md:border-[3px] border-black p-6 sm:p-8 rounded-2xl shadow-neo-md">
              <h3 className="text-2xl font-black text-black font-display mb-2">
                {t("inquiry_title")}
              </h3>
              <p className="text-neutral-700 text-sm font-medium mb-6">
                {t("inquiry_desc")}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
