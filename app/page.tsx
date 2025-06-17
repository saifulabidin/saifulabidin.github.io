'use client';

import SplashCursor from "./components/SplashCursor/SplashCursor";
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
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* Splash Cursor Effect */}
      <SplashCursor />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
