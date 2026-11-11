import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, FileText, UserCheck } from 'lucide-react';
import { PERSONAL_INFO, REFERENCES } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Pre-Med Inquiries / Networking');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate active delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 700);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50/50 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Get In Touch
          </p>
          <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Connect with Gabriella
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Open to clinical shadowing opportunities, research collaborations, pre-medical mentorship, and professional dialogue.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & References */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Contact Coordinates
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Direct lines for academic and clinical communication.
              </p>

              <div className="mt-4 space-y-3.5 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:border-rose-300 dark:border-slate-800 dark:hover:border-rose-800 transition"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400">Email Address</p>
                    <p className="font-semibold text-slate-900 dark:text-white truncate group-hover:text-rose-600 dark:group-hover:text-rose-400">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 hover:border-sky-300 dark:border-slate-800 dark:hover:border-sky-800 transition"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 dark:bg-sky-950 dark:text-sky-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400">Direct Phone</p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-400">Location Base</p>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Tampa (USF) & Venice, Florida
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume download box */}
              <div className="mt-6 rounded-xl bg-gradient-to-tr from-rose-50 via-amber-50 to-sky-50 p-4 dark:from-rose-950/30 dark:via-amber-950/20 dark:to-sky-950/30 border border-rose-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-xs font-bold text-slate-900 dark:text-white">
                      Official Resume Document
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      PDF format updated for 2026/2027
                    </p>
                  </div>
                  <FileText className="h-5 w-5 text-rose-500" />
                </div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={PERSONAL_INFO.resumePdfPath}
                    download="Gabriella_Belder_Resume.pdf"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-rose-500 px-3 py-2 text-xs font-semibold text-white hover:bg-rose-600 shadow-xs transition"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={onOpenResume}
                    className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>

            {/* References Card */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-emerald-500" />
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                  Available References
                </h3>
              </div>
              <div className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {REFERENCES.map((ref, rIdx) => (
                  <div key={rIdx} className="border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{ref.name}</p>
                    <p className="text-[11px] text-slate-500">{ref.title} · {ref.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Whether you are a physician mentor, admissions coordinator, or fellow student, I look forward to hearing from you.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900/60 dark:bg-emerald-950/30">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500" />
                  <h4 className="mt-2 font-display text-base font-bold text-emerald-900 dark:text-emerald-200">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out! Gabriella will review your note and respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Dr. Sarah Johnson"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-rose-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="s.johnson@healthcenter.org"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-rose-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Subject / Topic
                    </label>
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-rose-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                    >
                      <option value="Pre-Med Inquiries / Networking">Pre-Med Inquiries / Networking</option>
                      <option value="Clinical Shadowing / Mentorship">Clinical Shadowing / Mentorship</option>
                      <option value="OB/GYN or Primary Care Discussion">OB/GYN or Primary Care Discussion</option>
                      <option value="Sports Medicine / Athletics Inquiry">Sports Medicine / Athletics Inquiry</option>
                      <option value="USF Swim Club / Latinos in Action">USF Swim Club / Latinos in Action</option>
                      <option value="General Encouragement">General Message</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Hi Gabriella, I came across your portfolio and wanted to connect regarding..."
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 focus:border-rose-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-800 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-sky-600 py-3 px-5 text-xs font-semibold text-white shadow-md hover:opacity-95 active:scale-[0.99] transition disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Message to Gabriella</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
