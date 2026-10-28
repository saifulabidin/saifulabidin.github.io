'use client';

import { Navigation } from "./components/ui";
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  CertificatesSection,
  ContactSection,
  FooterSection
} from "./components/sections";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFFDF5] text-black neo-grid-bg selection:bg-[#C6F10E] selection:text-black">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
