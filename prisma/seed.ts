import { PrismaClient } from '@prisma/client';
import { staticProjects } from '../app/constants/projectsData';
import { staticCertificates } from '../app/constants/certificatesData';

const prisma = new PrismaClient();

async function main() {
  // Seed all projects
  await prisma.project.createMany({
    data: staticProjects.map(({ id, ...rest }) => rest),
    skipDuplicates: true,
  });

  // Seed all certificates
  await prisma.certificate.createMany({
    data: staticCertificates.map(({ id, ...rest }) => rest),
    skipDuplicates: true,
  });
}

main()
  .catch(() => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
