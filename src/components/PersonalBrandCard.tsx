import React, { useState } from 'react';
import { 
  Check, 
  Copy, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Stethoscope, 
  Sparkles, 
  Award, 
  Share2, 
  ExternalLink,
  ShieldCheck,
  Languages
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PersonalBrandCardProps {
  onOpenResume: () => void;
}

export const PersonalBrandCard: React.FC<PersonalBrandCardProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'bio' | 'clinical' | 'connect'>('bio');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${PERSONAL_INFO.name}`,
      `TITLE:Pre-Med Biomedical Sciences Student`,
      `ORG:University of South Florida`,
      `EMAIL;TYPE=INTERNET:${PERSONAL_INFO.email}`,
      `TEL;TYPE=CELL:${PERSONAL_INFO.phone}`,
      `ADR;TYPE=HOME:;;13278 Famiglia Drive;Venice;FL;34293;USA`,
      `NOTE:${PERSONAL_INFO.shortBio}`,
      'END:VCARD'
    ].join('\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Gabriella_Belder.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="brand-card" className="relative py-12 lg:py-16">
      {/* Decorative ambient gradient backdrop in user's colors: Pink, Yellow, Blue */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute -top-12 left-1/4 h-80 w-80 rounded-full bg-rose-400/40 blur-3xl" />
        <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-amber-300/40 blur-3xl" />
        <div className="absolute -bottom-8 left-1/3 h-80 w-80 rounded-full bg-sky-400/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase text-rose-500 dark:text-rose-400">
            Digital Identity & Credential Card
          </p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Personal Brand Card
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            An interactive summary of my pre-medical background, clinical aspirations, and contact specifications.
          </p>
        </div>

        {/* The Card Container */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-xl shadow-rose-500/5 dark:border-slate-800 dark:bg-slate-900/95 transition-all">
          {/* Card Top Banner with Palette Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-400 to-sky-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Avatar & Quick Status */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-rose-500 via-amber-400 to-sky-500 opacity-75 blur-sm transition group-hover:opacity-100" />
                <div className="relative h-40 w-40 sm:h-44 sm:w-44 overflow-hidden rounded-full border-4 border-white bg-slate-100 dark:border-slate-900 shadow-md">
                  {!imageError ? (
                    <img
                      src="/src/assets/images/avatar_gabriella_premed_1794356939961.jpg"
                      alt="Gabriella Belder - Pre-Med Biomedical Student"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-tr from-rose-100 via-amber-50 to-sky-100 text-rose-600">
                      <GraduationCap className="h-12 w-12" />
                      <span className="mt-1 font-display text-sm font-bold">GB</span>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-medium text-rose-600 dark:text-rose-400">
                Aspiring Physician
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.university} · {PERSONAL_INFO.graduatingClass}
              </p>

              {/* Quick Spec Badges */}
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-medium text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
                  <Stethoscope className="h-3 w-3" />
                  Pre-Med
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-medium text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
                  <ShieldCheck className="h-3 w-3" />
                  EKG Certified
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-300">
                  <Languages className="h-3 w-3" />
                  Trilingual
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex w-full max-w-xs flex-col gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2 px-3 text-xs font-medium text-slate-800 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 transition"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Email Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                      <span>Copy Email ({PERSONAL_INFO.email})</span>
                    </>
                  )}
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={handleDownloadVCard}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-sky-50 py-2 px-3 text-xs font-semibold text-sky-700 hover:bg-sky-100 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900/60 transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Save Contact (.vcf)</span>
                  </button>
                  <button
                    onClick={onOpenResume}
                    className="flex items-center justify-center rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-600 transition"
                    title="View Resume in Modal"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Tabs & Content */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {/* Card Tabs Navigation */}
              <div className="flex items-center gap-1 border-b border-slate-100 pb-3 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('bio')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'bio'
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  Personal Bio & Goal
                </button>
                <button
                  onClick={() => setActiveTab('clinical')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'clinical'
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  Clinical Specs & Stats
                </button>
                <button
                  onClick={() => setActiveTab('connect')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeTab === 'connect'
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  Card Sharing & Coordinates
                </button>
              </div>

              {/* Tab 1: Bio & Overview */}
              {activeTab === 'bio' && (
                <div className="pt-4 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold tracking-wide uppercase text-slate-400 dark:text-slate-500">
                      Physician In The Making
                    </h4>
                    <p className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                      Pre-Med Biomedical Sciences Student · Aspiring Physician
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    &ldquo;{PERSONAL_INFO.bio}&rdquo;
                  </p>

                  <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                      Primary Clinical Fields of Interest
                    </h5>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <a 
                        href="#specialties"
                        className="group flex flex-col rounded-lg border border-rose-100 bg-white p-2.5 hover:border-rose-300 dark:border-rose-950 dark:bg-slate-900 transition"
                      >
                        <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center justify-between">
                          OB/GYN
                          <span className="text-[10px] text-slate-400">→</span>
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1">
                          Women&apos;s Health & Surgery
                        </span>
                      </a>
                      <a 
                        href="#specialties"
                        className="group flex flex-col rounded-lg border border-sky-100 bg-white p-2.5 hover:border-sky-300 dark:border-sky-950 dark:bg-slate-900 transition"
                      >
                        <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 flex items-center justify-between">
                          Primary Care
                          <span className="text-[10px] text-slate-400">→</span>
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1">
                          Family & Preventive Medicine
                        </span>
                      </a>
                      <a 
                        href="#specialties"
                        className="group flex flex-col rounded-lg border border-amber-100 bg-white p-2.5 hover:border-amber-300 dark:border-amber-950 dark:bg-slate-900 transition"
                      >
                        <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center justify-between">
                          Sports Medicine
                          <span className="text-[10px] text-slate-400">→</span>
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1">
                          Athletics & Rehabilitation
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Clinical Specs */}
              {activeTab === 'clinical' && (
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <span className="block text-[11px] font-medium text-slate-500">USF Major</span>
                      <span className="mt-0.5 block font-display text-sm font-bold text-slate-900 dark:text-white">
                        Biomedical Sci
                      </span>
                      <span className="text-[10px] text-slate-400">Pre-Med Track</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <span className="block text-[11px] font-medium text-slate-500">Academic Standing</span>
                      <span className="mt-0.5 block font-display text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        3.7 College GPA
                      </span>
                      <span className="text-[10px] text-slate-400">4.8 HS Weighted</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <span className="block text-[11px] font-medium text-slate-500">Athletics</span>
                      <span className="mt-0.5 block font-display text-sm font-bold text-sky-600 dark:text-sky-400">
                        8+ Years Swim
                      </span>
                      <span className="text-[10px] text-slate-400">Club Risk Manager</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
                      <span className="block text-[11px] font-medium text-slate-500">Languages</span>
                      <span className="mt-0.5 block font-display text-sm font-bold text-amber-600 dark:text-amber-400">
                        English, ES, RU
                      </span>
                      <span className="text-[10px] text-slate-400">Fluent Trilingual</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Active Certifications & Credentials
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5 dark:border-slate-800 dark:bg-slate-800/30">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">National EKG Certified</p>
                          <p className="text-[11px] text-slate-500">12-lead strip analysis & cardiac telemetry</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5 dark:border-slate-800 dark:bg-slate-800/30">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">BLS & CPR Certified</p>
                          <p className="text-[11px] text-slate-500">AHA Basic Life Support for Providers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5 dark:border-slate-800 dark:bg-slate-800/30">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">Stop the Bleed Certified</p>
                          <p className="text-[11px] text-slate-500">Trauma first response & tourniquet application</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-lg border border-slate-100 p-2.5 dark:border-slate-800 dark:bg-slate-800/30">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400 text-xs font-bold">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-100">YMCA Lifeguard & Instructor</p>
                          <p className="text-[11px] text-slate-500">Water rescue, safety management & instruction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Connect & Share */}
              {activeTab === 'connect' && (
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500">Primary Email</p>
                        <p className="font-semibold text-slate-900 dark:text-white truncate">
                          {PERSONAL_INFO.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500">Phone</p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {PERSONAL_INFO.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500">Location</p>
                        <p className="font-semibold text-slate-900 dark:text-white truncate">
                          {PERSONAL_INFO.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                        <Award className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500">Honors</p>
                        <p className="font-semibold text-slate-900 dark:text-white truncate">
                          Hispanic Recognition Award
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <button
                      onClick={handleCopyShareLink}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-500" />
                          <span>Portfolio Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5 text-slate-500" />
                          <span>Share Brand Card Link</span>
                        </>
                      )}
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Pre-Med Inquiry for Gabriella Belder`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Direct Message</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Quick Row */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-slate-700 dark:text-slate-200">Pre-Med Focus:</span>
                  <span>OB/GYN</span>
                  <span>·</span>
                  <span>Primary Care</span>
                  <span>·</span>
                  <span>Sports Medicine</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.resumePdfPath}
                    download="Gabriella_Belder_Resume.pdf"
                    className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 dark:text-rose-400"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Resume PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
