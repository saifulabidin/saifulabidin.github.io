export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  renewed?: string;
  image_url: string;
  credential_url?: string;
  sort_order: number;
}

export const staticCertificates: Certificate[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "2022",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-responsive-web-design.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/responsive-web-design",
    sort_order: 1
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "2022",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/javascript-algorithms-and-data-structures-v8",
    sort_order: 2
  },
  {
    id: 3,
    title: "Backend Development and APIs",
    issuer: "FreeCodeCamp",
    date: "2023",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-backend-development-and-apis.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/back-end-development-and-apis",
    sort_order: 3
  },
  {
    id: 4,
    title: "Scientific Computing with Python",
    issuer: "FreeCodeCamp",
    date: "2023",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-scientic-computing-with-python.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/scientific-computing-with-python-v7",
    sort_order: 4
  },
  {
    id: 5,
    title: "Legacy Backend Challenges",
    issuer: "FreeCodeCamp",
    date: "2023",
    renewed: "2025",
    image_url: "/images/sertifikat/freecodecamp-legacy-backend.jpg",
    credential_url: "https://www.freecodecamp.org/certification/saifulabidin/legacy-back-end",
    sort_order: 5
  },
  {
    id: 6,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2022",
    renewed: "2025",
    image_url: "/images/sertifikat/dicoding-dasar-pemrograman-javascript.jpg",
    credential_url: "https://www.dicoding.com/certificates/0LZ0R0E63P65",
    sort_order: 6
  },
  {
    id: 7,
    title: "Belajar Backend Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2023",
    renewed: "2025",
    image_url: "/images/sertifikat/dicoding-belajar-backend-pemula-dengan-javascript.svg",
    credential_url: "https://www.dicoding.com/certificates/1OP828KJ1PQK",
    sort_order: 7
  },
  {
    id: 8,
    title: "Belajar Dasar Cloud dan Gen AI di AWS",
    issuer: "Dicoding Indonesia",
    date: "2024",
    renewed: "2025",
    image_url: "/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
    credential_url: "https://www.dicoding.com/certificates/N9ZO9RE76XG5",
    sort_order: 8
  }
];
