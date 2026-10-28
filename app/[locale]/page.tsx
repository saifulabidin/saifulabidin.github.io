import dynamic from "next/dynamic";
import { setRequestLocale } from "next-intl/server";
import { Navigation } from "../components/ui";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  EducationSection,
  ExperienceSection,
  FooterSection
} from "../components/sections";

const ProjectsSection = dynamic(() => import("../components/sections/ProjectsSection"));
const CertificatesSection = dynamic(() => import("../components/sections/CertificatesSection"));
const ContactSection = dynamic(() => import("../components/sections/ContactSection"));

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFFDF5] text-black neo-grid-bg selection:bg-[#C6F10E] selection:text-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
