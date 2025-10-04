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
    <main className="min-h-screen overflow-x-hidden bg-[#19222D]">
      
      {/* Navigation - Header Element */}
      <Navigation />

      {/* Hero Section - Introduction */}
      <HeroSection />

      {/* Main Content Sections */}
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
