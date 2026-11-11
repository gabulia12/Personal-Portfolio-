import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PersonalBrandCard } from './components/PersonalBrandCard';
import { TimelineSection } from './components/TimelineSection';
import { SpecialtiesExplorer } from './components/SpecialtiesExplorer';
import { ExtracurricularsSection } from './components/ExtracurricularsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gb_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('gb_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('gb_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-rose-500 selection:text-white">
      {/* Top Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <HeroSection onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Digital Personal Brand Card */}
        <PersonalBrandCard onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Scroll-Down Chronological Experience Timeline */}
        <TimelineSection />

        {/* Medical Specialty Interests: OB/GYN, Primary Care, Sports Medicine */}
        <SpecialtiesExplorer />

        {/* Extracurriculars: Competitive Swimming (USF Swim Club Risk Manager), Latinos in Action Co-Chair */}
        <ExtracurricularsSection />

        {/* Certifications: EKG, BLS/CPR, Stop the Bleed & Language Proficiencies */}
        <CertificationsSection />

        {/* Contact Coordinates & Inquiries */}
        <ContactSection onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Interactive Resume Viewer & Download Modal */}
      <ResumeViewerModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
