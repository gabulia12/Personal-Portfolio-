import React, { useState } from 'react';
import { Waves, Users, HeartHandshake, Award, Shield, CheckCircle2, Trophy, Clock } from 'lucide-react';
import { EXTRACURRICULARS } from '../data/portfolioData';

export const ExtracurricularsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredItems = activeTab === 'all' 
    ? EXTRACURRICULARS 
    : EXTRACURRICULARS.filter(item => item.id === activeTab);

  return (
    <section id="extracurriculars" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-950/30 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-rose-500 dark:text-rose-400">
            Athletics, Advocacy & Community
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Leadership & Extracurriculars
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Competitive swimming since age 10, collegiate club safety management, and dedicated board co-chair leadership in Latinos in Action.
          </p>

          {/* Filter Pills / Tabs */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-1 rounded-xl bg-slate-200/70 p-1 dark:bg-slate-800/80">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              All Activities ({EXTRACURRICULARS.length})
            </button>
            <button
              onClick={() => setActiveTab('competitive-swimming')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'competitive-swimming'
                  ? 'bg-white text-sky-600 shadow-sm dark:bg-slate-900 dark:text-sky-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Competitive Swimming
            </button>
            <button
              onClick={() => setActiveTab('latinos-in-action')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'latinos-in-action'
                  ? 'bg-white text-amber-600 shadow-sm dark:bg-slate-900 dark:text-amber-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Latinos in Action
            </button>
            <button
              onClick={() => setActiveTab('community-service')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === 'community-service'
                  ? 'bg-white text-rose-600 shadow-sm dark:bg-slate-900 dark:text-rose-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              Community Resilience
            </button>
          </div>
        </div>

        {/* Featured Spotlight: Swimming Hero Card (if All or Swimming selected) */}
        {(activeTab === 'all' || activeTab === 'competitive-swimming') && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-md dark:border-sky-950 dark:bg-slate-900 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Swimming Photo */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src="/src/assets/images/athletics_competitive_swim_1794356943152.jpg"
                  alt="Competitive Olympic swimming pool with swimmers competing in lane"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <span className="text-xs font-bold text-sky-300">Competitive Athletics</span>
                  <p className="font-display text-lg font-bold">10+ Years in Competitive Swimming</p>
                </div>
              </div>

              {/* Right Column: Swim Highlights */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 dark:text-sky-400">
                    <Waves className="h-4 w-4" />
                    <span>8+ Years Competitive Athlete · USF Swim Club</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">
                    USF Swim Club Risk Manager & Varsity Captain
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Competitive swimming since age 10 has forged my resilience, mental grit, and physical endurance. From training with Venice YMCA Southwest Hurricanes to serving as 2-year Varsity Team Captain and now University of South Florida Swim Club Risk Manager, the water has shaped my character.
                  </p>
                </div>

                {/* Key Swimming Milestones Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-3 dark:border-sky-950 dark:bg-sky-950/30">
                    <div className="flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-300">
                      <Shield className="h-3.5 w-3.5" />
                      Risk Manager
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                      Oversees travel safety, team emergency protocols, and event compliance at USF.
                    </p>
                  </div>
                  <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-3 dark:border-sky-950 dark:bg-sky-950/30">
                    <div className="flex items-center gap-1.5 font-bold text-sky-700 dark:text-sky-300">
                      <Trophy className="h-3.5 w-3.5" />
                      Coach&apos;s Award (2022)
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                      Best Attitude Female recipient for Venice High School Varsity Swim Team.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-sky-500" />
                    Since age 10 (8+ Years Club)
                  </span>
                  <span>·</span>
                  <span>Venice YMCA Southwest Hurricanes</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Latinos in Action & Community Service Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems
            .filter(item => item.id !== 'competitive-swimming' || activeTab === 'competitive-swimming')
            .map(item => {
              const isLIA = item.id === 'latinos-in-action';
              const borderTheme = isLIA 
                ? 'border-amber-200/80 dark:border-amber-900/60' 
                : 'border-rose-200/80 dark:border-rose-900/60';
              const textTheme = isLIA ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400';
              const iconTheme = isLIA ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300';

              return (
                <div
                  key={item.id}
                  className={`flex flex-col justify-between rounded-2xl border ${borderTheme} bg-white p-6 sm:p-7 shadow-sm dark:bg-slate-900 transition-all`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconTheme}`}>
                          {isLIA ? <Users className="h-4 w-4" /> : <HeartHandshake className="h-4 w-4" />}
                        </span>
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider ${textTheme}`}>
                            {item.role}
                          </p>
                          <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                            {item.title}
                          </h4>
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Initiatives & Impact
                      </h5>
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${textTheme}`} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.organization}</span>
                    {isLIA && (
                      <span className="font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <Award className="h-3.5 w-3.5" />
                        Hispanic Recognition Award
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
