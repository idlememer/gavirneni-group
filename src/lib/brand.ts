export const brand = {
  legalName: 'Gavirneni Private Limited',
  shortName: 'Gavirneni Group',
  tagline: 'Connecting Opportunities. Enhancing Lives.',
  taglineActive: 'We Connect Opportunities. We Enhance Lives.',
  cin: 'U46909AP2026PTC124714',
  pan: 'AAMCG8922G',
  incorporated: '15 March 2026',
  website: 'gavirnenigroup.com',
  email: 'gavirneni7@gmail.com',
  phones: ['+91 86398 11075', '+91 86398 31075', '+91 83282 06468'],
  whatsapp: '918639811075',
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
      label: 'Branch Office · Vijayawada',
      city: 'Vijayawada',
      lines: [
        'Plot No. 135, 2nd Left Lane',
        'Sri Lakshmi Venkateswara Gardens',
        'Tadigadapa, Vijayawada, Andhra Pradesh',
      ],
      mapQuery: 'Tadigadapa, Penamaluru, Vijayawada, Andhra Pradesh',
    },
  ],
  socials: {
    // Display names: "Gavirneni Group". URL slugs assumed to match Instagram (@gavirnenigroup) — verify after live launch.
    facebook: 'https://www.facebook.com/gavirnenigroup',
    facebookHandle: 'Gavirneni Group',
    instagram: 'https://www.instagram.com/gavirnenigroup',
    instagramHandle: '@gavirnenigroup',
    youtube: 'https://www.youtube.com/@gavirnenigroup',
    youtubeHandle: 'Gavirneni Group',
  },
  founders: [
    {
      name: 'Karthikeya Chowdary Gavirneni',
      role: 'Founder & Director',
      credential: 'MBA, United Kingdom',
    },
    {
      name: 'Rishitha Karuturi',
      role: 'Co-Founder',
      credential: 'PhD Scholar · Applied Psychology',
    },
  ],
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'CSC Services', href: '/services' },
  { label: 'Overseas Careers', href: '/overseas' },
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
