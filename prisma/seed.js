const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

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

  console.log('✅ Projects seeded successfully')

  // Create sample certificates
  await prisma.certificate.createMany({
    data: [
      {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        image_url: "/images/sertifikat/aws-architect.jpg",
        credential_url: "https://aws.amazon.com/verification",
        sort_order: 1
      },
      {
        title: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2023",
        renewed: "2024",
        image_url: "/images/sertifikat/gcp-developer.jpg",
        credential_url: "https://google.com/credentials",
        sort_order: 2
      }
    ],
    skipDuplicates: true
  });

  console.log('✅ Certificates seeded successfully')
  console.log('🎉 Database seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
