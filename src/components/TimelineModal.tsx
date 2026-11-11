import React from 'react';
import { X, Calendar, MapPin, Building, Award, CheckCircle2 } from 'lucide-react';
import { TimelineItem } from '../data/portfolioData';

interface TimelineModalProps {
  item: TimelineItem | null;
  onClose: () => void;
}

export const TimelineModal: React.FC<TimelineModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all my-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Accent Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-amber-400 to-sky-500" />

        {/* Modal Image Header */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img
            src={item.image}
            alt={item.imageAlt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block rounded-md bg-rose-500/90 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
              {item.yearDisplay}
            </span>
            <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-slate-200 flex items-center gap-2 mt-1">
              <span>{item.organization}</span>
              <span>·</span>
              <span>{item.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-rose-500" />
              {item.period}
            </span>
            <span className="flex items-center gap-1">
              <Building className="h-3.5 w-3.5 text-sky-500" />
              {item.organization}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              {item.location}
            </span>
          </div>

          {/* Overview summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Experience Summary
            </h4>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Key Details & Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Key Responsibilities & Highlights
            </h4>
            <ul className="space-y-2">
              {item.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-rose-500 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Gained */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Clinical & Professional Competencies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {item.skillsGained.map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Personal Reflection */}
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 dark:border-rose-950/60 dark:bg-rose-950/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5 mb-1">
              <Award className="h-3.5 w-3.5 text-rose-500" />
              Gabriella&apos;s Reflection & Clinical Takeaway
            </h4>
            <p className="text-xs italic leading-relaxed text-slate-700 dark:text-slate-300">
              &ldquo;{item.reflection}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-100 dark:border-slate-800 px-6 py-4 flex justify-end bg-slate-50 dark:bg-slate-900/60">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
