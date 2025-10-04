import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample projects
  await prisma.project.createMany({
    data: [
      {
        title: "Employee Attendance Backend System",
        description: "Comprehensive backend system for employee attendance management with real-time tracking, shift management, overtime calculation, and detailed reporting. Features role-based authentication and integration with biometric devices.",
        tech_stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Redis", "Cron Jobs", "RESTful API", "Docker"],
        image_url: "/images/project/company/attendance-backend.jpg",
        github_url: "#private-repository",
        live_url: "#company-internal",
        category: "Backend",
        is_private: true,
        sort_order: 1
      },
      {
        title: "Sales Data Collection Backend",
        description: "Backend system for sales team to input and manage customer data collected in the field. Features geolocation tracking, customer relationship management, lead scoring, and territory management with Google Maps integration.",
        tech_stack: ["Node.js", "Express", "MongoDB", "Google Maps API", "Geolocation", "JWT", "Multer", "Redis"],
        image_url: "/images/project/company/sales-backend.jpg",
        github_url: "#private-repository",
        live_url: "#company-internal",
        category: "Backend",
        is_private: true,
        sort_order: 2
      },
      {
        title: "Bestie Tissue Landing Page",
        description: "Modern and responsive landing page for Bestie Tissue product featuring AI-powered chatbot integration with Google Gemini, interactive store locator with Google Maps, product showcase, and lead generation forms.",
        tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "Google Gemini AI", "Framer Motion", "React Hook Form"],
        image_url: "/images/project/company/bestie-tissue.jpg",
        github_url: "#private-repository",
        live_url: "https://bestie-tissue.com",
        category: "Frontend",
        is_private: true,
        sort_order: 3
      }
    ],
    skipDuplicates: true
  });

  // Create sample certificates
  await prisma.certificate.createMany({
    data: [
      {
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "2022",
        renewed: "2025",
        image_url: "/images/sertifikat/freecodecamp-responsive-web-design.jpg",
        credential_url: "https://www.freecodecamp.org/certification/saifulabidin/responsive-web-design",
        sort_order: 1
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        date: "2022",
        renewed: "2025",
        image_url: "/images/sertifikat/freecodecamp-javascript-algorithms-and-data-structures.jpg",
        credential_url: "https://www.freecodecamp.org/certification/saifulabidin/javascript-algorithms-and-data-structures-v8",
        sort_order: 2
      },
      {
        title: "Belajar Dasar Cloud dan Gen AI di AWS",
        issuer: "Dicoding Indonesia",
        date: "2024",
        renewed: "2025",
        image_url: "/images/sertifikat/dicoding-belajar-dasar-cloud-dan-gen-ai-di-aws.jpg",
        credential_url: "https://www.dicoding.com/certificates/N9ZO9RE76XG5",
        sort_order: 3
      }
    ],
    skipDuplicates: true
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  })