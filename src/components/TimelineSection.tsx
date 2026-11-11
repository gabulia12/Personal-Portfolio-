import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Stethoscope, Globe, HeartPulse, BookOpen, Sparkles } from 'lucide-react';
import { TIMELINE_EXPERIENCES, TimelineItem } from '../data/portfolioData';
import { TimelineModal } from './TimelineModal';

export const TimelineSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredExperiences = filterCategory === 'all'
    ? TIMELINE_EXPERIENCES
    : TIMELINE_EXPERIENCES.filter(exp => exp.category === filterCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'clinical':
        return <Stethoscope className="h-4 w-4 text-rose-500" />;
      case 'global':
        return <Globe className="h-4 w-4 text-sky-500" />;
      case 'volunteer':
        return <HeartPulse className="h-4 w-4 text-rose-500" />;
      case 'academic':
        return <BookOpen className="h-4 w-4 text-amber-500" />;
      default:
        return <Sparkles className="h-4 w-4 text-slate-500" />;
    }
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'clinical':
        return {
          badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
          dot: 'bg-rose-500 ring-rose-200 dark:ring-rose-900',
          borderHover: 'hover:border-rose-300 dark:hover:border-rose-700'
        };
      case 'global':
        return {
          badge: 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300',
          dot: 'bg-sky-500 ring-sky-200 dark:ring-sky-900',
          borderHover: 'hover:border-sky-300 dark:hover:border-sky-700'
        };
      case 'volunteer':
        return {
          badge: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300',
          dot: 'bg-rose-500 ring-rose-200 dark:ring-rose-900',
          borderHover: 'hover:border-rose-300 dark:hover:border-rose-700'
        };
      case 'academic':
        return {
          badge: 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300',
          dot: 'bg-amber-500 ring-amber-200 dark:ring-amber-900',
          borderHover: 'hover:border-amber-300 dark:hover:border-amber-700'
        };
      default:
        return {
          badge: 'bg-slate-50 text-slate-700',
          dot: 'bg-slate-500 ring-slate-200',
          borderHover: 'hover:border-slate-300'
        };
    }
  };

  return (
    <section id="timeline" className="py-16 sm:py-20 bg-slate-50/60 dark:bg-slate-950/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Chronological Pre-Med Path
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Clinical & Academic Timeline
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            From high school Medical Academy rotations and EKG certification to international medical missions and clinical oncology volunteering.
          </p>

          {/* Interactive Filter Tabs (functional segmented control) */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1 rounded-xl bg-slate-200/70 p-1 dark:bg-slate-800/80">
            <button
              onClick={() => setFilterCategory('all')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filterCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              All Milestones ({TIMELINE_EXPERIENCES.length})
            </button>
            <button
              onClick={() => setFilterCategory('clinical')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filterCategory === 'clinical'
                  ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-900 dark:text-rose-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Clinical & Hospital
            </button>
            <button
              onClick={() => setFilterCategory('global')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filterCategory === 'global'
                  ? 'bg-white text-sky-600 shadow-sm dark:bg-slate-900 dark:text-sky-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Panama Mission
            </button>
            <button
              onClick={() => setFilterCategory('volunteer')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filterCategory === 'volunteer'
                  ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-900 dark:text-rose-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Moffitt Oncology
            </button>
            <button
              onClick={() => setFilterCategory('academic')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                filterCategory === 'academic'
                  ? 'bg-white text-amber-600 shadow-sm dark:bg-slate-900 dark:text-amber-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Barcelona Study Abroad
            </button>
          </div>
        </div>

        {/* Scroll-Down Chronological Timeline */}
        <div className="relative mt-14">
          {/* Central Vertical Timeline Rule */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-rose-400 via-sky-400 to-amber-400 dark:from-rose-600 dark:via-sky-600 dark:to-amber-600 hidden sm:block" 
            aria-hidden="true" 
          />

          <div className="space-y-12 sm:space-y-16">
            {filteredExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const theme = getCategoryTheme(exp.category);

              return (
                <div 
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Indicator (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-4 dark:bg-slate-900 transition-transform hover:scale-110 z-10">
                    <span className={`h-3.5 w-3.5 rounded-full ${theme.dot}`} />
                  </div>

                  {/* Date Pillar for opposite side on Desktop */}
                  <div className={`hidden sm:flex sm:w-1/2 px-8 ${isEven ? 'justify-end text-right' : 'justify-start text-left'}`}>
                    <div className="space-y-1">
                      <span className="font-display text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200">
                        {exp.yearDisplay}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Card Content Column */}
                  <div className="w-full sm:w-1/2 sm:px-6">
                    <div 
                      onClick={() => setSelectedItem(exp)}
                      className={`group cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${theme.borderHover}`}
                    >
                      {/* Mobile Date Header */}
                      <div className="flex sm:hidden items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                        <span className="font-display text-xs font-bold text-slate-800 dark:text-slate-200">
                          {exp.yearDisplay}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          {exp.period}
                        </span>
                      </div>

                      {/* Image Preview Container */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                        <img
                          src={exp.image}
                          alt={exp.imageAlt}
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold backdrop-blur-md ${theme.badge}`}>
                            {getCategoryIcon(exp.category)}
                            <span className="capitalize">{exp.category}</span>
                          </span>
                        </div>

                        <div className="absolute bottom-2.5 left-3 right-3 text-white">
                          <p className="text-[11px] text-slate-200 line-clamp-1 flex items-center gap-1.5">
                            <MapPin className="h-3 w-3 shrink-0 text-amber-300" />
                            {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="mt-4">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {exp.organization}
                        </p>
                        <h3 className="mt-0.5 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {exp.title}
                        </h3>

                        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                          {exp.summary}
                        </p>

                        {/* Competencies Tags */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {exp.skillsGained.slice(0, 3).map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                          {exp.skillsGained.length > 3 && (
                            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800">
                              +{exp.skillsGained.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* View Details Link */}
                        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs dark:border-slate-800">
                          <span className="font-semibold text-rose-500 group-hover:text-rose-600 dark:text-rose-400 flex items-center gap-1">
                            Expand Reflections & Log
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="text-[11px] text-slate-400">
                            Click to open
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Experience Details Modal */}
      <TimelineModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
