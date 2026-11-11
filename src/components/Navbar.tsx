import React, { useState } from 'react';
import { Download, Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#top" 
          className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-slate-900 dark:text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-rose-500 via-amber-400 to-sky-500 text-xs font-black text-white shadow-sm transition-transform group-hover:scale-105">
            GB
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Gabriella Belder
          </span>
        </a>

        {/* Zone 2: Nav Links (Clean single-line text links) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a 
            href="#brand-card" 
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap shrink-0"
          >
            Brand Card
          </a>
          <a 
            href="#timeline" 
            className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            Clinical Timeline
          </a>
          <a 
            href="#specialties" 
            className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Medical Interests
          </a>
          <a 
            href="#extracurriculars" 
            className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors whitespace-nowrap shrink-0"
          >
            Athletics & Leadership
          </a>
          <a 
            href="#contact" 
            className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action + Utility Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={PERSONAL_INFO.resumePdfPath}
            download="Gabriella_Belder_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:from-rose-600 hover:to-sky-700 transition-all hover:shadow active:scale-95 whitespace-nowrap shrink-0"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex md:hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <FileText className="h-3.5 w-3.5 text-rose-500" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Open mobile navigation menu"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-slate-800 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 px-4 pt-3 pb-6 dark:border-slate-800 dark:bg-slate-950/95">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a
              href="#brand-card"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-rose-500"
            >
              Digital Brand Card
            </a>
            <a
              href="#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-sky-500"
            >
              Clinical Timeline
            </a>
            <a
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-amber-500"
            >
              Medical Interests
            </a>
            <a
              href="#extracurriculars"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-rose-500"
            >
              Athletics & Leadership
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-sky-500"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.resumePdfPath}
                download="Gabriella_Belder_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-lg bg-rose-500 py-2.5 text-xs font-semibold text-white shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 py-2 text-xs font-semibold text-slate-800 dark:text-slate-100"
              >
                <FileText className="h-4 w-4 text-sky-500" />
                <span>Preview Resume in Browser</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
