import React from 'react';
import { Download, ArrowDown, Sparkles, Heart, Activity, Dumbbell, ShieldCheck, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Dynamic Ambient Background with user's palette (Pink, Yellow, Blue) */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-rose-100/40 via-amber-50/30 to-sky-100/30 blur-3xl dark:from-rose-950/20 dark:via-amber-950/10 dark:to-sky-950/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status kicker without pills */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="text-rose-500 dark:text-rose-400">Pre-Medical Candidate</span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-600 dark:text-sky-400">USF Health Sciences</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-600 dark:text-amber-400">Class of 2028</span>
            </div>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white" style={{ textWrap: 'balance' }}>
              Preparing for a life in medicine with empathy, discipline, and purpose.
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
              Hello! I’m <strong className="font-semibold text-slate-900 dark:text-white">Gabriella Belder</strong>, a third-year pre-med student at the University of South Florida graduating in Biomedical Sciences. As an aspiring physician, I am exploring my passions across <span className="font-semibold text-rose-500 dark:text-rose-400">OB/GYN</span>, <span className="font-semibold text-sky-600 dark:text-sky-400">primary care</span>, and <span className="font-semibold text-amber-500 dark:text-amber-400">sports medicine</span>.
            </p>

            {/* Specialty Exploration Preview Tagline */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Heart className="h-3.5 w-3.5 text-rose-500" />
                OB/GYN
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Activity className="h-3.5 w-3.5 text-sky-500" />
                Primary Care
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-slate-700 dark:text-slate-200">
                <Dumbbell className="h-3.5 w-3.5 text-amber-500" />
                Sports Medicine
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.resumePdfPath}
                download="Gabriella_Belder_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all active:scale-95 whitespace-nowrap"
              >
                <Download className="h-4 w-4 text-rose-400 dark:text-rose-600" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#timeline"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:bg-slate-800 transition-all whitespace-nowrap"
              >
                <span>View Clinical Journey</span>
                <ArrowDown className="h-4 w-4 text-sky-500" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              >
                <span>Preview Resume Online →</span>
              </button>
            </div>

            {/* Trust markers & verified certifications */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800 pt-5 w-full">
              <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                EKG & BLS Certified
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                Venice & Tampa, FL
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Bilingual (Spanish & Russian)
              </span>
            </div>
          </div>

          {/* Right Column: Visual Showcase Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl shadow-rose-500/10 dark:border-slate-800 dark:bg-slate-900">
              {/* Card visual header */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src="/src/assets/images/avatar_gabriella_premed_1794356939961.jpg"
                  alt="Gabriella Belder - Pre-Med Biomedical Sciences Candidate"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 font-medium">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    University of South Florida
                  </div>
                  <h3 className="font-display text-xl font-bold leading-tight mt-0.5">
                    Gabriella Belder
                  </h3>
                  <p className="text-xs text-slate-300">
                    Biomedical Sciences · Class of 2028
                  </p>
                </div>
              </div>

              {/* Floating Quick Insight Snippet */}
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <span className="text-slate-500">Current Focus</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Clinical Shadowing & Medical Missions
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-slate-100 dark:border-slate-800 pb-2.5">
                  <span className="text-slate-500">Athletic Leadership</span>
                  <span className="font-semibold text-sky-600 dark:text-sky-400">
                    USF Swim Club Risk Manager
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Community Role</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    Latinos in Action Co-Chair
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI metrics strip below hero split */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60 shadow-sm">
          {PERSONAL_INFO.stats.map((stat, idx) => {
            const colors = ['text-rose-500', 'text-sky-500', 'text-amber-500', 'text-emerald-500'];
            return (
              <div key={idx} className="flex flex-col">
                <span className={`font-display text-2xl sm:text-3xl font-extrabold tabular-nums ${colors[idx % colors.length]}`}>
                  {stat.value}
                </span>
                <span className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
