'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C6F10E]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#C6F10E]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#C6F10E] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Hello! I&apos;m <span className="text-[#C6F10E]">Saiful Abidin</span>
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              A passionate <strong className="text-[#C6F10E]">Full Stack Developer</strong> from Indonesia with over 5 years of experience in creating digital solutions.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left Column - About Text */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#C6F10E] mb-4">My Journey</h4>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Currently working at <strong className="text-[#C6F10E]">PT. Infinity Blessing Indonesia</strong>, where I develop comprehensive applications ranging from employee management systems to sales platforms.
                  </p>
                  <p>
                    My journey started as a self-taught developer, and I&apos;ve evolved into a versatile professional skilled in both <strong className="text-[#C6F10E]">frontend and backend development</strong>, as well as <strong className="text-[#C6F10E]">mobile app development using Flutter</strong>.
                  </p>
                  <p>
                    I specialize in modern technologies including <strong className="text-[#C6F10E]">React, Next.js, Node.js, and Flutter</strong>, with experience in building scalable applications that serve real business needs.
                  </p>
                </div>
              </div>

              {/* Current Focus Card */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 lg:p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-[#C6F10E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C6F10E]/10">
                <h4 className="text-xl lg:text-2xl font-semibold text-[#C6F10E] mb-6 flex items-center">
                  <div className="w-3 h-3 bg-[#C6F10E] rounded-full mr-3 animate-pulse"></div>
                  Current Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🚀", title: "Full Stack Development", desc: "End-to-end web solutions with modern frameworks" },
                    { icon: "📱", title: "Mobile App Development", desc: "Cross-platform apps with Flutter & React Native" },
                    { icon: "🏢", title: "Enterprise Applications", desc: "Scalable business solutions for companies" },
                    { icon: "⚙️", title: "API Development", desc: "RESTful & GraphQL APIs with robust architecture" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-600/30">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#C6F10E]/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{item.title}</div>
                        <div className="text-sm text-gray-400 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Personal Info & CV Download */}
            <div className="lg:col-span-1 space-y-6">
              {/* Personal Info Card */}
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 lg:p-8 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-[#C6F10E]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#C6F10E]/10">
                <h4 className="text-xl lg:text-2xl font-semibold text-[#C6F10E] mb-6 flex items-center justify-center lg:justify-start">
                  <div className="w-3 h-3 bg-[#C6F10E] rounded-full mr-3"></div>
                  Personal Info
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: "🌏", title: "Based in Indonesia", desc: "Remote work available worldwide" },
                    { icon: "💼", title: "5+ Years Experience", desc: "Proven track record in development" },
                    { icon: "🎓", title: "Self-taught Developer", desc: "Continuous learner and tech enthusiast" },
                    { icon: "✨", title: "Open to Opportunities", desc: "Ready for exciting new challenges" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-600/30">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#C6F10E]/10 rounded-lg flex items-center justify-center">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{item.title}</div>
                        <div className="text-sm text-gray-400 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download CV Button */}
              <div className="text-center">
                <a 
                  href="/CV-SaifulAbidin.pdf" 
                  download 
                  className="inline-flex items-center gap-3 bg-[#C6F10E] hover:bg-[#a5c70c] text-black py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-[#C6F10E]/25 w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download My CV
                </a>
                <p className="text-gray-400 text-sm mt-2">Get my detailed resume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
