export type ServiceTab = 'mobile' | 'saas' | 'erp' | 'consultation';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  summary: string;
  outcome: string;
  description: string;
  tech: string[];
  image: string;
  accent: string;
};

export const profile = {
  name: 'Naveed Ahamed',
  title: 'Flutter app developer',
  location: 'Sri Lanka',
  email: 'hello@yourportfolio.dev',
  website: 'https://yourportfolio.dev',
  fiverr: 'https://www.fiverr.com/',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  photo:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
];

export const heroStats = [
  { value: '120+', label: 'projects delivered' },
  { value: '4.9/5', label: 'average client rating' },
  { value: '8 yrs', label: 'product experience' },
];

export const heroBadges = ['Fiverr Seller', 'iOS + Android', 'SaaS & ERP'];

export const heroLogos = [
  'Flutter',
  'Dart',
  'Firebase',
  'Laravel',
  'Node.js',
  'Supabase',
  'Stripe',
  'Swift',
  'Kotlin',
  'MySQL',
  'MongoDB',
  'Notion',
];

export const aboutBio =
  'I design and build products that feel effortless to use, from mobile-first Flutter apps to web dashboards and ERP workflows for schools, startups and growing businesses. I focus on clarity, speed and retention so the product works beautifully for real users and real operations.';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Naveed turned a rough concept into a polished mobile product that our team and users immediately trusted. The experience felt premium and the app shipped with clarity.',
    name: 'Sajith Perera',
    role: 'Founder',
    location: 'Colombo, Sri Lanka',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'He understood our workflow faster than any developer we had worked with before. The ERP modules he built reduced manual work and made the process much smoother.',
    name: 'Nimasha Fernando',
    role: 'Operations Lead',
    location: 'Kandy, Sri Lanka',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    quote:
      'The app launched on time, looked premium, and kept improving after feedback. Naveed is the kind of partner you want across product and delivery.',
    name: 'Kasun Wijethunga',
    role: 'Product Manager',
    location: 'Galle, Sri Lanka',
    avatar:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
  },
];

export const projects: Project[] = [
  {
    slug: 'edu-mobile-platform',
    title: 'EduFlow',
    category: 'Mobile App',
    tags: ['Mobile App', 'SaaS'],
    summary: 'Learning app for schools and tuition centres.',
    outcome: 'Increased daily retention and reduced admin workload.',
    description:
      'A student engagement platform built to streamline attendance, assignments and progress tracking across a school network.',
    tech: ['Flutter', 'Firebase', 'Node.js'],
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accent: '#1d4ed8',
  },
  {
    slug: 'merchant-dashboard',
    title: 'Merit Ops',
    category: 'SaaS',
    tags: ['SaaS', 'Dashboard'],
    summary: 'Operational dashboard for a growing retail brand.',
    outcome: 'Helped teams manage orders, stock and customer insights in one place.',
    description:
      'A modern SaaS dashboard for retail and wholesale operations with analytics, alerts and sales tracking built to grow with the business.',
    tech: ['Flutter Web', 'Supabase', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    accent: '#0f172a',
  },
  {
    slug: 'inventory-erp',
    title: 'Inventory Core',
    category: 'ERP',
    tags: ['ERP', 'Operations'],
    summary: 'Inventory and warehouse management system.',
    outcome: 'Reduced stock errors and improved order turnaround time.',
    description:
      'An ERP system built for inventory, dispatch and warehouse visibility across multiple business locations.',
    tech: ['Flutter', 'Laravel', 'MySQL'],
    image:
      'https://images.unsplash.com/photo-1558494949cc5c5f8a2f7e8e?auto=format&fit=crop&w=1200&q=80',
    accent: '#0f766e',
  },
  {
    slug: 'wellness-app',
    title: 'CalmPulse',
    category: 'Mobile App',
    tags: ['Mobile App', 'Wellness'],
    summary: 'Habit and wellness tracking app for busy professionals.',
    outcome: 'Improved user engagement with a simple, motivating retention loop.',
    description:
      'A reflection and habit management app designed to help users build sustainable wellness routines without friction.',
    tech: ['Flutter', 'Firebase', 'Push Notifications'],
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    accent: '#7c3aed',
  },
  {
    slug: 'procurement-suite',
    title: 'ProcureFlow',
    category: 'ERP',
    tags: ['ERP', 'Procurement'],
    summary: 'Procurement and approvals system for enterprise teams.',
    outcome: 'Streamlined internal purchasing and approval chains.',
    description:
      'A multi-role ERP module to handle suppliers, requisitions, approvals and budgets across functional teams.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
    accent: '#c2410c',
  },
  {
    slug: 'clinic-booking',
    title: 'CareBridge',
    category: 'SaaS',
    tags: ['SaaS', 'Healthcare'],
    summary: 'Patient booking and CRM platform for private clinics.',
    outcome: 'Reduced no-show rates and improved clinic admin efficiency.',
    description:
      'An appointment and care coordination platform built for clinic staff, patients and administrators to manage everything in one place.',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    accent: '#0891b2',
  },
];

export const awards = [
  'Fiverr Level 2 Seller',
  'Top Rated Mobile App',
  'Flutter Certified',
  '5-Star Client Feedback',
  'ERP Delivery Partner',
  'SaaS Product Design',
];

export const pricingServices = {
  mobile: {
    title: 'Flutter app development',
    description: 'Custom iOS and Android apps designed for speed, retention and launch readiness.',
    tiers: [
      {
        name: 'Starter',
        price: '$1.2k',
        accent: 'from-blue-500 to-indigo-600',
        description: 'For early-stage MVPs and lean product validation.',
        cta: 'Book starter project',
        items: ['Landing UX', 'UI design system', '3 screens', 'App publish support'],
      },
      {
        name: 'Pro',
        price: '$3.8k',
        accent: 'from-zinc-900 to-zinc-700',
        description: 'Ideal for polished products and user journeys with real growth goals.',
        cta: 'Start Pro build',
        items: ['Full product design', 'Core flows', 'API integration', 'QA support'],
      },
      {
        name: 'Custom',
        price: 'Custom',
        accent: 'from-amber-400 to-orange-500',
        description: 'For larger apps, multi-platform integrations and product expansion.',
        cta: 'Discuss scope',
        items: ['Product strategy', 'Scalable architecture', 'Team collaboration', 'Ongoing iteration'],
      },
    ],
  },
  saas: {
    title: 'SaaS web app',
    description: 'Web products that combine conversion, dashboard clarity and backend reliability.',
    tiers: [
      {
        name: 'Starter',
        price: '$2.1k',
        accent: 'from-sky-500 to-cyan-600',
        description: 'Fast launch web app with clean user flows and product validation.',
        cta: 'Start SaaS sprint',
        items: ['Web app design', 'Authentication', 'Core screens', 'Responsive UI'],
      },
      {
        name: 'Pro',
        price: '$5.4k',
        accent: 'from-violet-500 to-indigo-600',
        description: 'For scaling product teams that need analytics, workflows and better UX.',
        cta: 'Build product',
        items: ['Dashboard system', 'Admin panels', 'Billing or CRM hooks', 'Launch support'],
      },
      {
        name: 'Custom',
        price: 'Custom',
        accent: 'from-slate-700 to-slate-900',
        description: 'High-complexity web products built for operational efficiency and growth.',
        cta: 'Request proposal',
        items: ['Systems design', 'Complex workflows', 'Multi-role access', 'Performance tuning'],
      },
    ],
  },
  erp: {
    title: 'ERP system',
    description: 'Operational systems for education, logistics and internal workflows that require structure.',
    tiers: [
      {
        name: 'Starter',
        price: '$3.2k',
        accent: 'from-emerald-500 to-teal-600',
        description: 'For workflow automation and focused internal process mapping.',
        cta: 'Map ERP flow',
        items: ['Process mapping', 'Core modules', 'User roles', 'Reporting views'],
      },
      {
        name: 'Pro',
        price: '$7.8k',
        accent: 'from-teal-600 to-cyan-700',
        description: 'Built for teams juggling inventory, data, approvals and reporting.',
        cta: 'Plan ERP build',
        items: ['Multi-module flows', 'Admin controls', 'Reports', 'Deployment support'],
      },
      {
        name: 'Custom',
        price: 'Custom',
        accent: 'from-orange-400 to-red-500',
        description: 'Full-scale operational systems with custom workflows and integrations.',
        cta: 'Book consultation',
        items: ['Custom architecture', 'Data modeling', 'Integrations', 'Ongoing optimization'],
      },
    ],
  },
  consultation: {
    title: 'Consultation',
    description: 'Product guidance for founders and teams who need a clearer technical strategy.',
    tiers: [
      {
        name: '20 min call',
        price: 'Free',
        accent: 'from-slate-100 to-slate-200',
        description: 'A quick call to understand your idea and next practical step.',
        cta: 'Book a free call',
        items: ['Idea review', 'Tech guidance', 'Budget clarity', 'Next-step roadmap'],
      },
      {
        name: 'Product sprint',
        price: '$650',
        accent: 'from-blue-600 to-violet-600',
        description: 'A focused strategy and planning session to align the build.',
        cta: 'Plan sprint',
        items: ['Technical architecture', 'Feature prioritization', 'UX recommendations', 'Delivery roadmap'],
      },
      {
        name: 'Retainer',
        price: 'From $800',
        accent: 'from-zinc-900 to-zinc-700',
        description: 'Ongoing product support for teams that need a technical partner.',
        cta: 'Discuss retainer',
        items: ['Priority support', 'Feature iteration', 'Technical reviews', 'Long-term planning'],
      },
    ],
  },
};

export const faqs = [
  {
    question: 'Why choose me?',
    answer:
      'I combine product thinking, design taste and implementation discipline. I care about whether the app is easy to use, practical for your team and sustainable to grow.',
  },
  {
    question: 'What happens after I book?',
    answer:
      'We start with a short discovery call, define the scope clearly, and then map the product flow, timeline and milestones before any work begins.',
  },
  {
    question: 'Do you work on fixed price or hourly?',
    answer:
      'I can work both ways depending on the project. For clearer builds, I usually recommend fixed-price milestones; for evolving products, a hybrid model works better.',
  },
  {
    question: 'Do you publish to App Store and Play Store?',
    answer:
      'Yes. I can support the app launch process, including release configuration, store setup and final QA before publishing.',
  },
  {
    question: 'Do you offer maintenance?',
    answer:
      'Yes. I offer support for bug fixes, performance improvements, feature upgrades and ongoing refinement after launch.',
  },
  {
    question: 'Do you have experience in my industry?',
    answer:
      'I have worked across education, retail, operations and service-driven businesses, and I am comfortable adapting product flows to different industries and user needs.',
  },
];
