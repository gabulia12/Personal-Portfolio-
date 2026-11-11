export interface TimelineItem {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  yearDisplay: string;
  title: string;
  organization: string;
  location: string;
  category: 'clinical' | 'global' | 'academic' | 'volunteer';
  summary: string;
  image: string;
  imageAlt: string;
  details: string[];
  skillsGained: string[];
  reflection: string;
}

export interface SpecialtyInterest {
  id: string;
  name: string;
  accentColor: 'pink' | 'yellow' | 'blue';
  tagline: string;
  overview: string;
  whyItDrawsMe: string;
  relevantBackground: string;
  clinicalFocus: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  status: 'Active' | 'Certified';
  description: string;
  badgeType: 'blue' | 'pink' | 'yellow';
}

export interface Extracurricular {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  themeColor: 'blue' | 'yellow' | 'pink';
  image?: string;
}

export const PERSONAL_INFO = {
  name: "Gabriella Belder",
  preferredName: "Gabriella",
  title: "Third-Year Pre-Med Student · Biomedical Sciences",
  university: "University of South Florida",
  graduatingClass: "Class of 2028",
  major: "Health Sciences / Biomedical Sciences (Pre-Med Track)",
  location: "Tampa & Venice, Florida",
  email: "gabulia12@gmail.com",
  phone: "732-532-7313",
  address: "13278 Famiglia Drive, Venice FL, 34293",
  resumePdfPath: "/assets/aistudio/new_Resume-_Gabriella_Belder.docx__1__083ef71d.pdf",
  bio: "I am a third-year pre-med student graduating in Biomedical Sciences at the University of South Florida. My goal is to become a compassionate physician. While my specialty is still up in the air and I am eager to learn about different medical branches, my primary interests right now lie in Obstetrics & Gynecology (OB/GYN), Primary Care, and Sports Medicine. Grounded by years of competitive swimming, bilingual fluency, and hands-on clinical training, I strive to make healthcare accessible, empathetic, and patient-centered.",
  shortBio: "Pre-med Biomedical Sciences student at USF, aspiring physician exploring OB/GYN, primary care, and sports medicine. Passionate about clinical care, global health, and patient advocacy.",
  gpa: {
    highSchoolWeighted: "4.8",
    highSchoolUnweighted: "3.9",
    classRank: "36 / 629",
    collegeGpa: "3.7"
  },
  languages: [
    { language: "English", level: "Native / Bilingual" },
    { language: "Spanish", level: "Fluent (Spoken & Written)" },
    { language: "Russian", level: "Fluent (Spoken & Written)" }
  ],
  stats: [
    { label: "Clinical & Volunteer Hours", value: "350+ hrs" },
    { label: "Competitive Swimming", value: "8+ years" },
    { label: "Fluent Languages", value: "3 Languages" },
    { label: "Target Graduation", value: "2028" }
  ]
};

export const SPECIALTIES: SpecialtyInterest[] = [
  {
    id: "obgyn",
    name: "Obstetrics & Gynecology (OB/GYN)",
    accentColor: "pink",
    tagline: "Empowering women's health through lifelong advocacy, surgical skill, and compassionate care.",
    overview: "OB/GYN combines longitudinal patient relationships with surgical precision, guiding women through childbirth, reproductive health, preventive screenings, and hormonal transitions.",
    whyItDrawsMe: "I am deeply inspired by the unique bond an OB/GYN builds with their patients across critical chapters of life. From reproductive education to high-stakes labor delivery, it merges surgical intervention with empathetic advocacy for women and families.",
    relevantBackground: "My clinical exposure in community clinics and interest in maternal healthcare equity during global outreach trips sparked my admiration for women's reproductive health.",
    clinicalFocus: ["Maternal-Fetal Health", "Preventive Screenings", "Gynecologic Surgery", "Patient Advocacy"]
  },
  {
    id: "primary-care",
    name: "Primary Care & Family Medicine",
    accentColor: "blue",
    tagline: "The foundation of proactive medicine: treating the whole person across generations.",
    overview: "Primary care serves as the frontline guardian of health, managing chronic conditions, diagnosing early signs, and fostering trusted relationships with families.",
    whyItDrawsMe: "Shadowing Dr. Juan Masi MD in family practice and treating patients in rural Panama opened my eyes to the power of continuous, trusting doctor-patient dialogue. Being the first line of defense is rewarding and foundational.",
    relevantBackground: "Hands-on experience shadowing Dr. Juan Masi, MD in family practice; 1-week USF Global Medical Brigades clinic in Panama providing primary triage and consultations; Sarasota Memorial Hospital clinical observations.",
    clinicalFocus: ["Chronic Disease Management", "Preventative Medicine", "Holistic Wellness", "Community Health Outreach"]
  },
  {
    id: "sports-medicine",
    name: "Sports Medicine & Orthopedics",
    accentColor: "yellow",
    tagline: "Bridging biomechanics, injury rehabilitation, and human performance optimization.",
    overview: "Sports medicine addresses athletic injuries, musculoskeletal health, functional rehabilitation, and physical conditioning for active individuals of all ages.",
    whyItDrawsMe: "As a competitive swimmer since age 10 and USF Swim Club Risk Manager, I live and breathe athletic conditioning. I understand firsthand the mental and physical toll of injury and the joy of a safe, triumphant return to competition.",
    relevantBackground: "8+ years of competitive swimming at state/regional championships; 4-year varsity swimmer & 2-year high school captain; Risk Manager for USF Swim Club on campus; Lifeguard and swim instructor at YMCA.",
    clinicalFocus: ["Musculoskeletal Rehabilitation", "Athletic Injury Prevention", "Biomechanics & Kinesiology", "Return-to-Play Protocols"]
  }
];

export const TIMELINE_EXPERIENCES: TimelineItem[] = [
  {
    id: "high-school-medical-academy",
    period: "2020 – 2024",
    startDate: "Aug 2020",
    endDate: "May 2024",
    yearDisplay: "2020 - 2024",
    title: "Medical Academy CTE Pathway & Hospital Shadowing",
    organization: "Venice High School & Sarasota Memorial Hospital",
    location: "Venice & Sarasota, FL",
    category: "clinical",
    summary: "Completed a comprehensive 4-year rigorous Career and Technical Education (CTE) Medical Academy program, earned EKG certification, mastered medical terminology, and completed clinical rotations.",
    image: "/src/assets/images/hospital_clinical_experience_1794356941003.jpg",
    imageAlt: "Modern sunlit medical center entrance representing clinical learning at Sarasota Memorial Hospital",
    details: [
      "Rigorous coursework in Medical Terminology, Anatomy & Physiology, Emergency Medical Skills, and Electrocardiography (EKG).",
      "Earned National EKG Certification, BLS/CPR Certification, and Stop the Bleed Certification.",
      "Completed clinical shadowing rotations at Sarasota Memorial Hospital, observing acute and inpatient care workflows.",
      "Shadowed Dr. Juan M. Masi, MD in Family Medicine and Dr. Tariq J. Khan in Gastroenterology.",
      "Graduated with 4.8 Weighted GPA (3.9 Unweighted, top 6% of graduating class, rank 36/629)."
    ],
    skillsGained: ["EKG Interpretation", "Medical Terminology", "Patient Triage Basics", "Clinical Shadowing Protocol", "Vital Signs Measurement"],
    reflection: "The four-year Medical Academy laid the solid bedrock for my pre-med journey. From reading our first EKG rhythm strips to observing physician bedside manner at Sarasota Memorial Hospital, I knew medicine was my calling."
  },
  {
    id: "panama-medical-bridge",
    period: "Summer 2025",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    yearDisplay: "Summer 2025",
    title: "USF Global Medical Brigades in Panama & Primary Care Shadowing",
    organization: "University of South Florida Global Medical Brigades & Local Clinic",
    location: "Panama & Tampa, FL",
    category: "global",
    summary: "Traveled on a week-long medical mission brigade to rural Panama providing clinical care, health education, and triage, followed by intensive summer shadowing in a primary care physician's office.",
    image: "/src/assets/images/clinical_panama_brigade_1794356941225.jpg",
    imageAlt: "Community medical mission clinic in Panama with medical staff conducting triage",
    details: [
      "Delivered healthcare support and preventative education to underserved rural communities in Panama.",
      "Assisted physicians with patient intake, taking blood pressure, recording vitals, and dispensing prescribed medications under licensed supervision.",
      "Utilized Spanish fluency to bridge linguistic gaps between patients and non-bilingual medical volunteers.",
      "Conducted shadow rotations for the rest of summer 2025 in a primary care practice, learning longitudinal chronic disease management."
    ],
    skillsGained: ["Bilingual Medical Translation", "Cross-Cultural Competence", "Vitals Assessment", "Field Pharmacy Protocol", "Preventative Care Education"],
    reflection: "Panama was transformative. Serving in communities where a doctor visits once a year taught me that medicine is not just about clinical diagnostics; it is about dignity, listening, and building trust across cultural and language barriers."
  },
  {
    id: "moffitt-cancer-center",
    period: "2025 – 2026",
    startDate: "Aug 2025",
    endDate: "May 2026",
    yearDisplay: "Sophomore Year (2025 - 2026)",
    title: "Clinical Oncology Volunteer",
    organization: "Moffitt Cancer Center",
    location: "Tampa, FL",
    category: "volunteer",
    summary: "Dedicated weekly volunteer service in a clinical oncology setting at Moffitt Cancer Center, supporting oncology patients and coordinating with clinical care teams.",
    image: "/src/assets/images/hospital_clinical_experience_1794356941003.jpg",
    imageAlt: "Moffitt Cancer Center clinical pavilion and patient care suites",
    details: [
      "Volunteered weekly in clinical outpatient and infusion pavilions at one of the nation's premier NCI-designated Comprehensive Cancer Centers.",
      "Provided empathetic patient navigation, comfort care, and companionship during rigorous chemotherapy treatments.",
      "Collaborated with oncology nurses, oncologists, and patient care technicians to ensure smooth clinic flow.",
      "Deepened understanding of multidisciplinary oncology care and the psycho-emotional dimensions of cancer therapy."
    ],
    skillsGained: ["Oncology Patient Navigation", "Empathetic Communication", "Clinical Hygiene & Safety", "Multidisciplinary Care Coordination"],
    reflection: "At Moffitt, I learned how much a warm smile and steady presence matter when patients face their hardest days. It underscored the importance of empathy in clinical medicine."
  },
  {
    id: "barcelona-study-abroad",
    period: "Summer 2026",
    startDate: "Jun 2026",
    endDate: "Jul 2026",
    yearDisplay: "Summer 2026",
    title: "International Study Abroad & Comparative Healthcare",
    organization: "Study Abroad Program",
    location: "Barcelona, Spain",
    category: "academic",
    summary: "Completed a two-month intensive academic and cultural study abroad program in Barcelona, Spain, studying European healthcare frameworks and immersing in Spanish culture.",
    image: "/src/assets/images/barcelona_study_abroad_1794356941625.jpg",
    imageAlt: "Historic sunlit architecture and Mediterranean rooftops of Barcelona, Spain",
    details: [
      "Immersed in two months of academic coursework in Barcelona, studying comparative European health systems.",
      "Honed advanced Spanish language fluency in daily academic, social, and healthcare dialogue.",
      "Analyzed the structure of universal access primary care versus specialized tertiary systems.",
      "Broadened global perspectives on wellness, work-life balance, and preventative lifestyle habits."
    ],
    skillsGained: ["Comparative Health Systems", "Advanced Spanish Fluency", "Global Adaptability", "Cross-Cultural Communication"],
    reflection: "Living and studying in Barcelona for two months taught me how societal lifestyle, community design, and public healthcare systems intersect. It reinforced my commitment to holistic, preventive medical care."
  }
];

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    id: "competitive-swimming",
    title: "Competitive Swimmer & USF Swim Club Risk Manager",
    role: "Risk Manager & Athlete (Former Varsity Team Captain)",
    organization: "USF Swim Club & Venice YMCA Southwest Hurricanes",
    period: "2016 – Present (10+ Years)",
    themeColor: "blue",
    image: "/src/assets/images/athletics_competitive_swim_1794356943152.jpg",
    description: "Swimming competitively since age 10 at state and regional championships, continuing as student leader and safety risk manager at the USF Swim Club.",
    achievements: [
      "Risk Manager for the USF Swim Club on campus, overseeing safety protocols, travel safety, and emergency response planning.",
      "4-year member of Venice High School Varsity Swim Team, serving as Swim Team Captain junior and senior years.",
      "Recipient of Coach's Award - Best Attitude Female (2022).",
      "Competitive swimmer for 8+ years with Venice YMCA Southwest Hurricanes, competing in Florida state and regional swim championships.",
      "Certified YMCA Lifeguard and youth Swim Instructor."
    ]
  },
  {
    id: "latinos-in-action",
    title: "Latinos in Action (LIA)",
    role: "Board Member & Required Co-Chair",
    organization: "Latinos in Action Student Chapter",
    period: "2024 – Present",
    themeColor: "yellow",
    description: "Serving as executive board member and co-chair, empowering Latino and Hispanic students through educational advocacy, bilingual leadership, and campus community service.",
    achievements: [
      "Organized leadership workshops, academic tutoring, and cultural celebration events for USF students.",
      "Coordinated community service initiatives providing bilingual mentorship to local high school students.",
      "College Board Hispanic Recognition Award recipient."
    ]
  },
  {
    id: "community-service",
    title: "Community Service & Disaster Relief",
    role: "Active Volunteer & Advocate",
    organization: "Multiple Organizations (Venice & Tampa)",
    period: "2020 – Present",
    themeColor: "pink",
    description: "Committed to community resilience through disaster recovery, geriatric companionship, and civic cleanups.",
    achievements: [
      "Hurricane Ian Disaster Relief: Loaded and distributed drinking water, non-perishables, and essential survival supplies with the Southwest Hurricane Swim Team.",
      "Village on the Isle Assisted Living: Regular socialization and memory support for elderly residents.",
      "Key Club & Think Pink: Organized coastal environmental cleanups at Venice Beach and breast cancer awareness drives.",
      "Drug Free Youth (DFY): Active member in youth wellness rewards program."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "EKG Certified",
    issuer: "National Healthcareer Association / Medical Academy",
    status: "Certified",
    description: "Certified in 12-lead electrocardiogram placement, rhythm strip interpretation, identifying sinus arrhythmias, and cardiac telemetry basics.",
    badgeType: "pink"
  },
  {
    name: "BLS & CPR Certified",
    issuer: "American Heart Association (AHA)",
    status: "Certified",
    description: "Basic Life Support for Healthcare Providers, adult/child/infant CPR, and Automated External Defibrillator (AED) operation.",
    badgeType: "blue"
  },
  {
    name: "Stop the Bleed Certified",
    issuer: "American College of Surgeons Committee on Trauma",
    status: "Certified",
    description: "Emergency hemorrhage control, tourniquet application, wound packing, and critical trauma first-response stabilization.",
    badgeType: "yellow"
  },
  {
    name: "Certified Lifeguard & Swim Instructor",
    issuer: "YMCA / Red Cross",
    status: "Certified",
    description: "Water rescue techniques, spinal injury management, emergency resuscitation, and youth swimming instruction.",
    badgeType: "blue"
  }
];

export const REFERENCES = [
  {
    name: "Dr. Juan M. Masi, MD",
    title: "Family Medicine Physician",
    organization: "Dr. Masi MD Family Practice",
    phone: "(941) 423-5056",
    context: "Primary Care Shadowing Physician & Clinical Mentor"
  },
  {
    name: "Pamela Hudson",
    title: "Medical Academy Teacher & Department Chair",
    organization: "Venice High School",
    phone: "561-644-1464",
    email: "pamela.hudson@sarasotacountyschools.net",
    context: "CTE Medical Academy Program Director"
  },
  {
    name: "Coach David Back",
    title: "Head Swim Coach",
    organization: "Venice YMCA Southwest Hurricanes",
    phone: "937-271-0657",
    email: "swimdavidc1@gmail.com",
    context: "Competitive Swim Coach (8+ Years)"
  },
  {
    name: "Peter Leman",
    title: "Aquatics Director",
    organization: "YMCA of Southwest Florida",
    phone: "805-630-5123",
    email: "Pleman@ymcaswfl.org",
    context: "Lifeguarding & Swim Instruction Supervisor"
  }
];
