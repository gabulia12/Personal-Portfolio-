import React from 'react';
import { Download, Heart, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Gabriella Belder
            </span>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Pre-Med Biomedical Sciences · University of South Florida Class of 2028
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#brand-card" className="hover:text-rose-500 transition">Brand Card</a>
            <a href="#timeline" className="hover:text-sky-500 transition">Timeline</a>
            <a href="#specialties" className="hover:text-amber-500 transition">Specialties</a>
            <a href="#extracurriculars" className="hover:text-rose-500 transition">Athletics</a>
            <a href="#contact" className="hover:text-sky-500 transition">Contact</a>
          </div>

          {/* Action & Top Return */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Gabriella_Belder_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              <Download className="h-3 w-3 text-rose-500" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-white transition"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-100 dark:border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Gabriella Belder. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Aspiring to heal with heart, science, and empathy <Heart className="h-3 w-3 text-rose-500 inline fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
