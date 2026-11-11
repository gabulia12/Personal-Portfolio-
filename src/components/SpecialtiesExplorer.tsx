import React, { useState } from 'react';
import { Heart, Activity, Dumbbell, Sparkles, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { SPECIALTIES, SpecialtyInterest } from '../data/portfolioData';

export const SpecialtiesExplorer: React.FC = () => {
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>(SPECIALTIES[0].id);

  const activeSpecialty = SPECIALTIES.find(s => s.id === activeSpecialtyId) || SPECIALTIES[0];

  const getSpecialtyIcon = (id: string) => {
    switch (id) {
      case 'obgyn':
        return <Heart className="h-5 w-5" />;
      case 'primary-care':
        return <Activity className="h-5 w-5" />;
      case 'sports-medicine':
        return <Dumbbell className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  const getSpecialtyTheme = (color: string) => {
    switch (color) {
      case 'pink':
        return {
          tabActive: 'bg-rose-500 text-white shadow-md shadow-rose-500/20',
          accentText: 'text-rose-600 dark:text-rose-400',
          bgLight: 'bg-rose-50/70 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/50',
          tagBg: 'bg-rose-100/80 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
          iconRing: 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400'
        };
      case 'blue':
        return {
          tabActive: 'bg-sky-600 text-white shadow-md shadow-sky-600/20',
          accentText: 'text-sky-600 dark:text-sky-400',
          bgLight: 'bg-sky-50/70 dark:bg-sky-950/20 border-sky-100 dark:border-sky-900/50',
          tagBg: 'bg-sky-100/80 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
          iconRing: 'bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400'
        };
      case 'yellow':
        return {
          tabActive: 'bg-amber-500 text-white shadow-md shadow-amber-500/20',
          accentText: 'text-amber-600 dark:text-amber-400',
          bgLight: 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/50',
          tagBg: 'bg-amber-100/80 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
          iconRing: 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400'
        };
      default:
        return {
          tabActive: 'bg-slate-900 text-white',
          accentText: 'text-slate-900',
          bgLight: 'bg-slate-50 border-slate-100',
          tagBg: 'bg-slate-100 text-slate-800',
          iconRing: 'bg-slate-100 text-slate-700'
        };
    }
  };

  const currentTheme = getSpecialtyTheme(activeSpecialty.accentColor);

  return (
    <section id="specialties" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center justify-center gap-1.5">
            <Compass className="h-3.5 w-3.5" />
            Clinical Explorations & Passions
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Medical Specialty Interests
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            While I remain eager to discover and learn from every clinical rotation, three fields currently inspire my drive toward medicine.
          </p>
        </div>

        {/* 3 Interactive Specialty Selectors */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
          {SPECIALTIES.map(specialty => {
            const isSelected = specialty.id === activeSpecialtyId;
            const theme = getSpecialtyTheme(specialty.accentColor);
            
            return (
              <button
                key={specialty.id}
                onClick={() => setActiveSpecialtyId(specialty.id)}
                className={`flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all ${
                  isSelected
                    ? `${theme.bgLight} border-current shadow-sm ring-1 ring-current`
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'
                }`}
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform ${isSelected ? 'scale-110' : ''} ${theme.iconRing}`}>
                  {getSpecialtyIcon(specialty.id)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white truncate">
                      {specialty.name}
                    </h3>
                    <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 text-slate-900 dark:text-white' : 'text-slate-400'}`} />
                  </div>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {specialty.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className={`mt-6 rounded-2xl border p-6 sm:p-8 transition-all ${currentTheme.bgLight}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Philosophy & Background */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${currentTheme.accentText}`}>
                  Specialty Spotlight
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {activeSpecialty.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {activeSpecialty.tagline}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Clinical Overview
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeSpecialty.overview}
                </p>
              </div>

              <div className="rounded-xl border border-white/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/70 shadow-xs">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${currentTheme.accentText} flex items-center gap-1.5`}>
                  <Sparkles className="h-3.5 w-3.5" />
                  Why It Draws Me
                </h4>
                <p className="mt-1.5 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  {activeSpecialty.whyItDrawsMe}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Synergies & Focus Areas */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-xl border border-white/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/70 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Relevant Gabriella Background
                </h4>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeSpecialty.relevantBackground}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Key Focus Areas & Clinical Rotations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSpecialty.clinicalFocus.map((focus, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 rounded-lg border border-white/60 bg-white/60 px-3 py-2 text-xs font-medium text-slate-800 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200"
                    >
                      <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 ${currentTheme.accentText}`} />
                      <span className="truncate">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exploration Note */}
              <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                * Note: As a third-year pre-med student, I maintain an open, inquisitive mindset and look forward to third- and fourth-year clinical clerkships in medical school to solidify my residency pursuit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
