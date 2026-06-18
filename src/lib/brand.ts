export const brand = {
  legalName: 'Gavirneni Private Limited',
  shortName: 'Gavirneni Group',
  tagline: 'Connecting Opportunities. Enhancing Lives.',
  taglineActive: 'We Connect Opportunities. We Enhance Lives.',
  // Primary marketing promise — used as the headline pill on Hero + Footer.
  taglinePromise: 'From Application to Approval — Our Services Reach Your Doorstep.',
  // Long-form footer/contact promise.
  partnershipQuote:
    'Your Trusted Partner for Digital, Business, Overseas & Online Services — Delivered Right to Your Doorstep.',
  // Marketing band (used between sections).
  onlineBand: {
    eyebrow: 'All Services Available Online',
    title: 'No need to visit us. Save time, travel and fuel.',
    sub: 'Most services are completed online — get professional assistance from the comfort of your home, anywhere in India.',
  },
  cin: 'Available on Request',
  pan: 'Available on Request',
  gstin: 'Available on Request',
  udyam: 'Available on Request',
  incorporated: '15 March 2026',
  website: 'gavirnenigroup.com',
  email: 'gavirneni7@gmail.com',
  phones: ['+91 86398 11075', '+91 86398 31075'],
  whatsapp: '918639811075',
  whatsappLabel: 'Chat with Gavirneni Group',
  // Primary registered address (HQ) and operational branch — both verified from visiting cards.
  address: {
    line1: '#7-134, OBC Colony',
    line2: 'Near NTR Statue, Chodavaram',
    line3: 'Krishna District, Andhra Pradesh – 521139',
    state: 'Andhra Pradesh',
    country: 'India',
  },
  offices: [
    {
      label: 'Registered Office · HQ',
      city: 'Chodavaram',
      lines: [
        '#7-134, OBC Colony',
        'Near NTR Statue, Chodavaram',
        'Krishna District, Andhra Pradesh – 521139',
      ],
      mapQuery: 'Chodavaram, Krishna District, Andhra Pradesh 521139',
    },
    {
      label: 'Branch Office',
      city: 'Vijayawada',
      lines: ['Tadigadapa', 'Vijayawada, Andhra Pradesh'],
      mapQuery: 'Tadigadapa, Penamaluru, Vijayawada, Andhra Pradesh',
    },
  ],
  serviceReach: 'Services Available Across India',
  socials: {
    // Display names confirmed from visiting card. URL slugs assumed to match Instagram.
    facebook: 'https://www.facebook.com/gavirnenigroup',
    facebookHandle: 'Gavirneni Group',
    instagram: 'https://www.instagram.com/gavirnenigroup',
    instagramHandle: '@gavirnenigroup',
    youtube: 'https://www.youtube.com/@gavirnenigroup',
    youtubeHandle: 'Gavirneni Group',
    x: 'https://x.com/GavirneniGroup',
    xHandle: '@GavirneniGroup',
  },
  founders: [
    {
      name: 'Gavirneni Karthikeya Chowdary',
      role: 'Founder & Director',
      credential: 'MBA – Global Business, London, UK',
    },
    {
      name: 'Rishitha Karuturi',
      role: 'Co-Founder',
      credential: 'PhD Scholar · Applied Psychology',
    },
  ],
  // Core values — flagged by founders as the most important brand pillar.
  coreValues: [
    {
      title: 'Trust',
      desc: 'We safeguard every customer document and conversation with bank-grade confidentiality.',
    },
    {
      title: 'Transparency',
      desc: 'Clear pricing, honest timelines, no hidden steps — published before you commit.',
    },
    {
      title: 'Commitment',
      desc: 'We finish what we start — every application followed to approval, never abandoned.',
    },
    {
      title: 'Dedication',
      desc: 'Trained advisors, year-round availability and a relentless focus on customer success.',
    },
    {
      title: 'Customer-First',
      desc: 'Your problem becomes ours from the first call to the final delivery.',
    },
    {
      title: 'Excellence',
      desc: 'Premium-quality service across every counter, division and channel we operate.',
    },
  ],
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'CSC Services', href: '/services' },
  { label: 'Foods', href: '/foods' },
  { label: 'FlyBridge', href: '/overseas' },
  { label: 'Digital Solutions', href: '/digital' },
  { label: 'Business Services', href: '/business' },
  { label: 'Contact', href: '/contact' },
];

export const megaMenu = [
  {
    heading: 'Government Services',
    href: '/services',
    items: [
      { title: 'Aadhaar Services', desc: 'Updates, downloads, biometrics' },
      { title: 'PAN Card', desc: 'New PAN, corrections, reprint' },
      { title: 'Passport', desc: 'Application, renewal, tatkal' },
      { title: 'Driving License', desc: 'LL, DL, renewal' },
      { title: 'Certificate Services', desc: 'Income, caste, residence' },
    ],
  },
  {
    heading: 'Overseas (FlyBridge)',
    href: '/overseas',
    items: [
      { title: 'Dubai & UAE', desc: 'Skilled & semi-skilled jobs' },
      { title: 'Bahrain', desc: 'Direct employer hiring' },
      { title: 'Kuwait', desc: 'Hospitality & industrial' },
      { title: 'Germany', desc: 'Ausbildung & work visa' },
      { title: 'Serbia & EU', desc: 'Schengen pathway jobs' },
      { title: 'Study Abroad', desc: 'Counselling & admissions' },
    ],
  },
  {
    heading: 'Digital & Business',
    href: '/digital',
    items: [
      { title: 'Website Development', desc: 'Custom, e-commerce, CMS' },
      { title: 'Branding & Design', desc: 'Logo, identity, print' },
      { title: 'Social Media', desc: 'SMM, ads, SEO' },
      { title: 'Company Registration', desc: 'Pvt Ltd, LLP, MSME' },
      { title: 'GST & Trademark', desc: 'Filing, FCRA, DSC' },
    ],
  },
];
