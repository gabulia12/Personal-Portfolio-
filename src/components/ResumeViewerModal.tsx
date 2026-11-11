import React, { useState } from 'react';
import { X, Download, FileText, Check, Printer, ExternalLink, GraduationCap, Award, Stethoscope, Briefcase, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO, REFERENCES } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'digital' | 'pdf'>('digital');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + PERSONAL_INFO.resumePdfPath);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Top Palette Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-amber-400 to-sky-500" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3.5 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-rose-500" />
            <div>
              <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Gabriella Belder — Resume & Credentials
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Official Curriculum Vitae · Pre-Med Track
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex items-center bg-slate-200/80 dark:bg-slate-800 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setViewMode('digital')}
                className={`px-2.5 py-1 rounded-md font-medium transition ${viewMode === 'digital' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
              >
                Digital CV
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md font-medium transition ${viewMode === 'pdf' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-600 dark:text-slate-400'}`}
              >
                PDF View
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Gabriella_Belder_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-rose-600 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8">
          {viewMode === 'pdf' ? (
            <div className="h-[65vh] w-full rounded-xl border border-slate-200 overflow-hidden dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex flex-col">
              <iframe
                src={`${PERSONAL_INFO.resumePdfPath}#toolbar=1`}
                title="Gabriella Belder Resume PDF"
                className="w-full flex-1 border-0"
              />
              <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-500">Document: new_Resume-_Gabriella_Belder.pdf</span>
                <a
                  href={PERSONAL_INFO.resumePdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-600 hover:underline flex items-center gap-1 font-medium"
                >
                  Open in New Tab <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ) : (
            /* Digital CV Formatted View */
            <div className="max-w-3xl mx-auto space-y-7 text-slate-800 dark:text-slate-200">
              {/* CV Header */}
              <div className="text-center border-b border-slate-200 dark:border-slate-800 pb-5">
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Gabriella Belder
                </h1>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {PERSONAL_INFO.address} · Tel: {PERSONAL_INFO.phone} · Email:{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-600 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </p>
              </div>

              {/* Education & Credentials */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 border-b border-rose-100 dark:border-rose-950 pb-1">
                  <GraduationCap className="h-4 w-4" />
                  Education & Credentials
                </h2>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                      <span>Venice High School, Venice, FL</span>
                      <span className="text-slate-500 font-normal">Diploma May 2024</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-semibold text-slate-900 dark:text-white">
                      <span>Attending University of South Florida (Class of &apos;28)</span>
                      <span className="text-sky-600 font-semibold">Pre-Med Track</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Major: Biomedical Sciences / Health Science
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50 text-xs space-y-1">
                    <p>
                      <strong>High School GPA:</strong> Unweighted: 3.9 · Weighted: 4.8 · Class Rank: 36 / 629
                    </p>
                    <p>
                      <strong>College GPA:</strong> 3.7
                    </p>
                    <p>
                      <strong>Advanced Coursework:</strong> IB Program (IB Biology, IB Lit&Lang, IB Professional Skills, IB Philosophy), Medical Academy CTE Pathway Program (4-year program: Medical terminology, Anatomy and Physiology, Emergency Medical Skills, EKG class), AP (AP Human Geography, AP World History, AP Psychology).
                    </p>
                  </div>
                </div>
              </section>

              {/* Awards & Honors */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 border-b border-amber-100 dark:border-amber-950 pb-1">
                  <Award className="h-4 w-4" />
                  Awards & Honors
                </h2>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li>Coach&apos;s Award - Best Attitude Female for Venice High School Swim Team (2022)</li>
                  <li>Awarded Swim Team Captain for Venice High School Swim Team (2022-23 and 2023-24 seasons)</li>
                  <li>Hispanic Recognition Award — College Board</li>
                </ul>
              </section>

              {/* Skills & Certifications */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-sky-100 dark:border-sky-950 pb-1">
                  <Stethoscope className="h-4 w-4" />
                  Skills & Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span>EKG Certified</span>
                  </div>
                  <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    <span>CPR Certified / BLS Certified</span>
                  </div>
                  <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span>Stop the Bleed Certified</span>
                  </div>
                  <div className="flex items-center gap-2 rounded bg-slate-50 p-2 dark:bg-slate-800/50">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>Fluent in Spanish and Russian</span>
                  </div>
                </div>
              </section>

              {/* Activities & Shadowing */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-1">
                  <Briefcase className="h-4 w-4" />
                  Activities & Clinical Exposure
                </h2>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li>Four-year member of Venice High School Varsity Swim Team (Captain Jr. &amp; Sr. year)</li>
                  <li>Competitive swimmer for 8+ years (Venice YMCA Southwest Hurricanes)</li>
                  <li>USF Swim Club Risk Manager</li>
                  <li>Latinos in Action — Board Member &amp; Required Co-Chair</li>
                  <li>Shadowing at Dr. Masi MD Family Practice; shadowing at gastroenterologist Dr. Tariq J. Khan</li>
                  <li>Member of: Spanish Honor Society, National Honor Society (Vice President), Medical Academy, Think Pink, Key Club</li>
                </ul>
              </section>

              {/* Jobs & Experience */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Work Experience
                </h2>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li>Hostess/food runner at Irma&apos;s Tacos, Craft Beer and Tequila Bar</li>
                  <li>Swim instructor and lifeguard at YMCA of Southwest FL (Venice YMCA)</li>
                </ul>
              </section>

              {/* Volunteering */}
              <section className="space-y-3">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 border-b border-rose-100 dark:border-rose-950 pb-1">
                  <HeartHandshake className="h-4 w-4" />
                  Volunteering & Outreach
                </h2>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  <li><strong>USF Global Medical Brigades:</strong> Medical Mission trip to Panama for 1 week</li>
                  <li><strong>Moffitt Cancer Center:</strong> Weekly clinical setting volunteer (2025-2026)</li>
                  <li><strong>Southwest Hurricane Swim Team:</strong> Coaching, timing, loading water &amp; supplies for Hurricane Ian disaster relief</li>
                  <li><strong>Village on the Isle Assisted Living:</strong> Socialized with elderly residents</li>
                  <li><strong>Venice YMCA:</strong> Trunk or treat candy distribution, face painting, cleanup</li>
                  <li><strong>Key Club:</strong> Beach cleanup at Venice Beach and park beautification</li>
                </ul>
              </section>

              {/* References */}
              <section className="space-y-3">
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-1">
                  Professional & Clinical References
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {REFERENCES.map((ref, idx) => (
                    <div key={idx} className="rounded-lg border border-slate-100 p-2.5 dark:border-slate-800">
                      <p className="font-bold text-slate-900 dark:text-white">{ref.name}</p>
                      <p className="text-slate-600 dark:text-slate-400">{ref.title} — {ref.organization}</p>
                      <p className="text-slate-500">{ref.phone} {ref.email ? `· ${ref.email}` : ''}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 px-5 py-3.5 bg-slate-50 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <FileText className="h-3.5 w-3.5" />}
              <span>{copied ? 'Link Copied' : 'Copy Direct PDF Link'}</span>
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePdfPath}
              download="Gabriella_Belder_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-rose-600 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download PDF File</span>
            </a>
            <button
              onClick={onClose}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
