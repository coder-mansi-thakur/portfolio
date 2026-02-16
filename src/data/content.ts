export const profile = {
  name: 'Avery Quinn',
  role: 'Frontend Engineer',
  location: 'Remote (UTC-5)',
  summary:
    'I craft expressive, performant interfaces with React, TypeScript, and a design-forward mindset. I enjoy pairing thoughtful UX with solid engineering practices.',
  availability: 'Available for new opportunities and select freelance collaborations.'
};

export const hero = {
  headline: 'I design and build memorable web experiences.',
  blurb:
    'From SSR-first architectures to playful interactions, I help teams ship products that feel intentional, accessible, and fast.',
  primaryCta: { label: 'See projects', href: '#projects' },
  secondaryCta: { label: 'Get in touch', href: '#contact' },
  highlights: [
    'Design systems and component libraries',
    'SSR with Next.js and edge delivery',
    'Inclusive, measurable user experiences'
  ]
};

export const projects = [
  {
    title: 'Atlas Design System',
    description:
      'Led a cross-platform design system with themed tokens, accessibility primitives, and developer ergonomics for React and native teams.',
    tags: ['Design Systems', 'React', 'TypeScript', 'Theming'],
    link: { href: 'https://example.com/atlas', label: 'Case study' }
  },
  {
    title: 'Waypoint Docs Revamp',
    description:
      'Rebuilt a docs experience with full-text search, MDX-driven content, and SSR for instant loads and great SEO.',
    tags: ['Next.js', 'MDX', 'Search', 'Content'],
    link: { href: 'https://example.com/waypoint', label: 'Read more' }
  },
  {
    title: 'Northwind Commerce',
    description:
      'E-commerce starter with checkout flows, analytics events, and Netlify edge personalization for tailored merchandising.',
    tags: ['Commerce', 'Netlify', 'Edge Functions', 'Analytics'],
    link: { href: 'https://example.com/northwind', label: 'View build' }
  },
  {
    title: 'Microlab Studio',
    description:
      'Playful landing page with generative shapes, motion guidelines, and a content pipeline that keeps marketing agile.',
    tags: ['Motion', 'Generative UI', 'CMS'],
    link: { href: 'https://example.com/microlab', label: 'Launch site' }
  }
];

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Brightloop',
    period: '2022 — Present',
    summary:
      'Shipping product-led growth experiments, leading accessibility, and mentoring teams on design system adoption and performance budgets.'
  },
  {
    role: 'Staff Engineer (Consulting)',
    company: 'Independent',
    period: '2019 — 2022',
    summary:
      'Partnered with startups to build MVPs, refine onboarding funnels, and deliver maintainable component libraries with strong documentation.'
  },
  {
    role: 'Frontend Engineer',
    company: 'Northbeam',
    period: '2016 — 2019',
    summary:
      'Focused on dashboards, real-time data viz, and resilient client-side architecture across browsers and devices.'
  }
];

export const blogPosts = [
  {
    title: 'Design tokens that developers actually like',
    date: 'Jan 2026',
    excerpt: 'A practical checklist for rolling out tokens without breaking teams or velocity.',
    href: 'https://example.com/posts/design-tokens'
  },
  {
    title: 'Shipping playful interfaces without hurting performance',
    date: 'Nov 2025',
    excerpt: 'Balancing motion, intent, and Core Web Vitals in modern React apps.',
    href: 'https://example.com/posts/playful-perf'
  },
  {
    title: 'Docs that convert users into champions',
    date: 'Sep 2025',
    excerpt: 'Structuring knowledge bases for both search engines and real humans.',
    href: 'https://example.com/posts/docs-that-convert'
  }
];

export const playground = [
  {
    title: 'Colorfield',
    blurb: 'Generative gradients driven by scroll velocity and accent palette.',
    href: 'https://example.com/play/colorfield',
    status: 'Live'
  },
  {
    title: 'Tap Orchestra',
    blurb: 'Micro-interaction study using haptics, audio cues, and spring physics.',
    href: 'https://example.com/play/orchestra',
    status: 'Prototype'
  },
  {
    title: 'Studio Grid',
    blurb: 'Responsive grid visualizer to teach designers how their layouts collapse.',
    href: 'https://example.com/play/grid',
    status: 'Live'
  }
];

export const contact = {
  email: 'hello@averyquinn.dev',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' }
  ]
};
