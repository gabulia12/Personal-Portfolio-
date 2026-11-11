import React from 'react';
import { ShieldCheck, Heart, Award, Languages, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
            Clinical Preparedness & Technical Skills
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Coursework
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Equipped with nationally recognized life-saving certifications, clinical technical training, and international multilingual communication skills.
          </p>
        </div>

        {/* 4 Cards: Certifications Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, idx) => {
            const isPink = cert.badgeType === 'pink';
            const isBlue = cert.badgeType === 'blue';
            const isYellow = cert.badgeType === 'yellow';

            const borderClass = isPink 
              ? 'border-rose-200/80 hover:border-rose-400 dark:border-rose-900/60'
              : isBlue 
                ? 'border-sky-200/80 hover:border-sky-400 dark:border-sky-900/60'
                : 'border-amber-200/80 hover:border-amber-400 dark:border-amber-900/60';

            const iconClass = isPink 
              ? 'bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400'
              : isBlue 
                ? 'bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400'
                : 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400';

            return (
              <div
                key={idx}
                className={`flex flex-col justify-between rounded-2xl border ${borderClass} bg-white p-5 shadow-xs dark:bg-slate-900 transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconClass}`}>
                      {isPink ? <Heart className="h-4 w-4" /> : isBlue ? <ShieldCheck className="h-4 w-4" /> : <Award className="h-4 w-4" />}
                    </span>
                    <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Credential Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dual Panels: Languages & Pre-Med Coursework */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                <Languages className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  Language Proficiencies
                </h3>
                <p className="text-xs text-slate-500">Trilingual medical communication assets</p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {PERSONAL_INFO.languages.map((lang, lIdx) => (
                <div key={lIdx} className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.language}</span>
                    <span className="ml-2 text-slate-400">·</span>
                    <span className="ml-2 text-slate-500 dark:text-slate-400">{lang.level}</span>
                  </div>
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400">Clinical Asset</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 italic">
              Proven ability to communicate with patients and translate during medical missions in Panama and healthcare settings.
            </p>
          </div>

          {/* Academic Track */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                <BookOpen className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                  Advanced Academic Foundations
                </h3>
                <p className="text-xs text-slate-500">IB Diploma coursework & CTE Medical Pathway</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-800 dark:text-slate-200">CTE Medical Academy</p>
                <p className="text-[11px] text-slate-500">4-Year Program · Anatomy, Physiology & Emergency Skills</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-800 dark:text-slate-200">International Baccalaureate</p>
                <p className="text-[11px] text-slate-500">IB Biology, IB Philosophy, IB Lit & Lang</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-800 dark:text-slate-200">College Board Honors</p>
                <p className="text-[11px] text-slate-500">National Hispanic Recognition Award</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-800/60">
                <p className="font-semibold text-slate-800 dark:text-slate-200">University of South Florida</p>
                <p className="text-[11px] text-slate-500">Biomedical Sciences · Class of 2028 (3.7 GPA)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
