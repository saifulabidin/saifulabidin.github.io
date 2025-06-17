'use client';

import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2022",
    image: "/images/sertifikat/freecodecamp-responsive-web-design.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp", 
    date: "2022",
    image: "/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Backend Development and APIs",
    issuer: "FreeCodeCamp",
    date: "2023",
    image: "/images/sertifikat/freecodecamp-backend-development-and-apis.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    date: "2023",
    image: "/images/sertifikat/freecodecamp-scientic-computing-with-python.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Legacy Backend Challenges",
    issuer: "FreeCodeCamp",
    date: "2023", 
    image: "/images/sertifikat/freecodecamp-legacy-backend.jpg",
    credentialUrl: "https://freecodecamp.org/certification"
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2022",
    image: "/images/sertifikat/dicoding-dasar-pemrograman-javascript.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  },
  {
    title: "Belajar Backend Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia", 
    date: "2023",
    image: "/images/sertifikat/dicoding-belajar-backend-pemula-dengan-javascript.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  },
  {
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
    credentialUrl: "https://dicoding.com/certificates"
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-[#20293A]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Certifications & <span className="text-[#C6F10E]">Achievements</span></h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Professional certifications and achievements that validate my skills and commitment to continuous learning in software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-[#19222D] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-[#C6F10E] text-black px-2 py-1 rounded-full text-xs font-semibold">
                    {cert.date}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-[#C6F10E] text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">Issued: {cert.date}</p>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C6F10E] hover:text-white transition-colors text-sm"
                  >
                    <span>View Credential</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15,3 21,3 21,9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">8+</div>
            <div className="text-gray-300">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">1800+</div>
            <div className="text-gray-300">Hours Studied</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#C6F10E] mb-2">5+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
