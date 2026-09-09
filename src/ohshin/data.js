export const socials = [
  {
    label: 'X',
    url: 'https://x.com/Adinath302',
    href: 'https://x.com/Adinath302',
    aria: 'X',
    size: 'h-5 w-5 sm:h-5.5 sm:w-5.5',
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/adinath.codes',
    href: 'https://instagram.com/adinath.codes',
    aria: 'Instagram',
    size: 'h-6 w-6 sm:h-7 sm:w-7',
  },
  {
    label: 'Mail',
    url: 'https://mail.google.com/mail/?view=cm&fs=1&to=adinathgaware23072003@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=adinathgaware23072003@gmail.com',
    aria: 'Mail',
    size: 'h-5 w-5 sm:h-6 sm:w-6',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
    href: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
    aria: 'LinkedIn',
    size: 'h-5 w-5 sm:h-6 sm:w-6',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/adinath302',
    href: 'https://github.com/adinath302',
    aria: 'GitHub',
    size: 'h-5 w-5 sm:h-6 sm:w-6',
  },
]

const heroTitle = 'hi, im adinath.'
const heroSubtitle = 'engineer. designer. shipper.'
const TITLE_CHAR_DELAY = 55
const TITLE_START_DELAY = 350
const SUBTITLE_CHAR_DELAY = 38
const SUBTITLE_START_DELAY = heroTitle.length * TITLE_CHAR_DELAY + 500
const CHAR_TRANSITION = 700 // .char-reveal transition duration in index.css

// GlitchText applies startDelay twice — once to flip `started`, once as each
// character's transition-delay — so the real settle time doubles it.
const settleAt = (text, charDelay, startDelay) =>
  startDelay * 2 + (text.length - 1) * charDelay + CHAR_TRANSITION

export const hero = {
  title: heroTitle,
  subtitle: heroSubtitle,
  titleCharDelay: TITLE_CHAR_DELAY,
  titleStartDelay: TITLE_START_DELAY,
  subtitleCharDelay: SUBTITLE_CHAR_DELAY,
  subtitleStartDelay: SUBTITLE_START_DELAY,
  // ms until the last character has finished resolving — HeroBackdrop waits
  // for this before starting its scan-in.
  settledAt: Math.max(
    settleAt(heroTitle, TITLE_CHAR_DELAY, TITLE_START_DELAY),
    settleAt(heroSubtitle, SUBTITLE_CHAR_DELAY, SUBTITLE_START_DELAY),
  ),
}

export const about = {
  profile: 'profile / adinath',
  location: 'mumbai / pune, india',
  tags: ['frontend', 'zero-to-one', 'design systems', 'react', 'react.next', 'side-quests'],
  paragraphs: [
    'Front-End Engineer who thrives in the zero-to-one phase — partnering with founders to define products, ship MVPs in weeks, and iterate on real user feedback.',
    'Based in India, I build fast, polished web experiences with React, Next.js and TypeScript. I love turning ambiguous ideas into shipped, usable products.',
    "I've built everything from a curated directory of Claude Code sub-agent prompts and MCP servers to a 17,000+ company-wise DSA learning platform, Codejeet.",
    'When I am not shipping, I am exploring design systems, web performance, and the occasional open-source rabbit hole.',
  ],
}

export const books = [
  {
    id: 'clean-code',
    title: 'Clean Code',
    authors: ['Robert C. Martin'],
    publishedDate: '2008',
    thumbnail: 'https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg',
  },
  {
    id: 'pragmatic-programmer',
    title: 'The Pragmatic Programmer',
    authors: ['Andrew Hunt', 'David Thomas'],
    publishedDate: '1999',
    thumbnail: 'https://covers.openlibrary.org/b/isbn/9780201616224-M.jpg',
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    authors: ['Peter Thiel'],
    publishedDate: '2014',
    thumbnail: 'https://covers.openlibrary.org/b/isbn/9780804139298-M.jpg',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    authors: ['James Clear'],
    publishedDate: '2018',
    thumbnail: 'https://covers.openlibrary.org/b/isbn/9780735211292-M.jpg',
  },
  {
    id: 'ddia',
    title: 'Designing Data-Intensive Applications',
    authors: ['Martin Kleppmann'],
    publishedDate: '2017',
    thumbnail: 'https://covers.openlibrary.org/b/isbn/9781449373320-M.jpg',
  },
  {
    id: 'ydkjs',
    title: 'You Don\'t Know JS',
    authors: ['Kyle Simpson'],
    publishedDate: '2015',
    thumbnail: 'https://covers.openlibrary.org/b/id/7158376-M.jpg',
  },
]

export const work = {
  metaLeft: 'work / output',
  metaCenter: 'scroll / inspect',
  kicker: 'teams, roles and projects',
}

export const reach = {
  title: 'reach',
  label: 'live-ish',
  tooltip:
    'Placeholder metrics for now — plug in real numbers from your analytics whenever you are ready.',
  cards: [
    {
      icon: 'twitter',
      index: '01',
      metric: '0+',
      metricLabel: 'Impressions',
      href: 'https://x.com/Adinath302',
    },
    {
      icon: 'github',
      index: '02',
      metric: '0+',
      metricLabel: 'Stars',
      href: 'https://github.com/adinath302',
    },
    {
      icon: 'visits',
      index: '03',
      metric: '0+',
      metricLabel: 'Page visits',
      href: null,
      tooltip: true,
    },
  ],
}

export const techStack = [
  { name: 'React', icon: 'react', accent: true },
  { name: 'Next.js', icon: 'next', accent: true },
  { name: 'TypeScript', icon: 'typescript', accent: true },
  { name: 'JavaScript', icon: 'javascript', accent: true },
  { name: 'Tailwind', icon: 'tailwind', accent: false },
  { name: 'Vite', icon: 'vite', accent: false },
  { name: 'GSAP', icon: 'gsap', accent: false },
  { name: 'TanStack Query', icon: 'query', accent: false },
  { name: 'Zustand', icon: 'zustand', accent: true },
  { name: 'Framer Motion', icon: 'framer', accent: true },
  { name: 'Prisma', icon: 'prisma', accent: false },
  { name: 'shadcn/ui', icon: 'shadcn', accent: true },
  { name: 'HTML5', icon: 'html', accent: false },
  { name: 'CSS3', icon: 'css', accent: false },
]

export const experience = [
  {
    date: 'Ongoing',
    location: 'India',
    role: 'Front-End Engineer',
    org: 'Zero-to-One Startups',
  },
  {
    date: 'Ongoing',
    location: 'India',
    role: 'Open Source Builder',
    org: 'Sub-Agents Directory · Codejeet',
  },
  {
    date: 'Pursuing',
    location: 'India',
    role: 'B.Tech in Computer Engineering',
    org: 'University',
  },
]

export const projects = [
  {
    title: 'Sub-Agents Directory',
    summary:
      'Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, engineered system prompts, and custom development pipelines seamlessly.',
    githubUrl: 'https://github.com/adinath302',
    liveUrl: '#',
  },
  {
    title: 'Codejeet',
    summary:
      'System Design and DSA learning platform featuring 17,000+ company-wise LeetCode questions scraped via automated Selenium drivers and rendered using programmatic SEO.',
    githubUrl: 'https://github.com/adinath302',
    liveUrl: '#',
  },
]

export const reachOut = {
  kicker: 'open channels',
  intro:
    'Whether you\'re looking to collaborate, hire, seek advice, or simply start a conversation, choose the one that best matches your intent.',
  channels: [
    {
      index: '01',
      label: 'team channel',
      title: 'Want me on your team?',
      copy: 'For product engineering, design engineering, and fast-moving teams that need someone who can ship polished products, systems, and interfaces with equal attention to quality and speed.',
      buttons: [
        {
          label: 'email me',
          href: 'https://mail.google.com/mail/?view=cm&fs=1&to=adinathgaware23072003@gmail.com',
          external: true,
        },
        { label: 'get resume', href: '#', external: false },
      ],
    },
    {
      index: '02',
      label: 'growth channel',
      title: 'Want to build something?',
      copy: 'I partner with founders and startups in the zero-to-one phase — defining products, shipping MVPs in weeks, and iterating on real user feedback until it works.',
      buttons: [
        {
          label: 'email me',
          href: 'https://mail.google.com/mail/?view=cm&fs=1&to=adinathgaware23072003@gmail.com',
          external: true,
        },
      ],
    },
    {
      index: '03',
      label: 'fun channel',
      title: 'Want to say hi?',
      copy: 'For collaborations, side quests, product ideas, or anything that feels like it doesn\'t belong in an email.',
      buttons: [
        {
          label: 'dm on X',
          href: 'https://x.com/Adinath302',
          external: true,
        },
      ],
    },
  ],
}
