// All site content lives here — edit this file to make the portfolio yours.

export const site = {
  name: "Khushboo Yadav",
  first: "Khushboo",
  last: "Yadav",
  role: "Full Stack Software Developer",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  email: "yadavkhushboo7653@gmail.com",
  intro:
    "Full Stack Software Developer with 3+ years of experience building scalable web applications, PWAs, fintech platforms and real-time systems.",
  // Hero headline in three parts — the middle one is highlighted (italic serif).
  headline: [
    "I’m a full-stack developer who turns ideas into",
    "polished, high-performance digital products",
    "— from thoughtful interfaces to APIs, databases, and production systems.",
  ],
  about:
  "I’m a developer with 3+ years of experience building websites and digital products across different industries and teams. I work mainly with React and Next.js, turning designs and ideas into polished, responsive, high-performance experiences while also working across APIs, databases, CMS platforms, cloud infrastructure, and production systems. I enjoy solving real-world problems, exploring new technologies, and constantly finding better ways to build for the web.",  stats: [
    ["3+", "years building"],
    ["10+", "sites & apps shipped"],
    ["4", "developers mentored"],
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/yadav-khush" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yadav-khush" },
  ],
};

  export const skills = [
    "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Redux",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Supabase",
  "AWS",
  "WebSocket",
  "REST APIs",
  "Git & GitHub",
  "CI/CD",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  role: string;
  stack: string[];
  // Two-colour gradient used for the generated cover art.
  palette: [string, string];
  shape: "orbit" | "grid" | "wave" | "stack";
  // Screenshots under /public/projects: `pre` is the resting cover, desktop + mobile show on hover.
  images?: { pre: string; desktop: string; mobile: string };
  // Live site.
  url?: string;
  body: string[];
  results: { value: string; label: string }[];
};

// Placeholder details — fill in category, year, summary, role, stack, body and results per project.
const todo = {
  category: "Case study",
  year: "",
  summary: "Case study coming soon.",
  role: "",
  stack: [] as string[],
  body: [] as string[],
  results: [] as { value: string; label: string }[],
};

const shots = (pre: string, desktop: string, mobile: string) => ({
  pre: `/projects/pre/${pre}.png`,
  desktop: `/projects/desktop/${desktop}.png`,
  mobile: `/projects/mobile/${mobile}.png`,
});

export const projects: Project[] = [
  { ...todo, slug: "totality-solutions", title: "Totality Solutions", palette: ["#3A0CA3", "#4CC9F0"], shape: "orbit", images: shots("totality", "totality-black", "totality-mobile"), url: "https://www.totality.solutions/" },
  { ...todo, slug: "pov", title: "POV", palette: ["#3B2A4A", "#D7A6C8"], shape: "stack", images: shots("designpovindia", "designpovindia", "designpovindia-mobile"), url: "https://www.designpovindia.com/" },
  { ...todo, slug: "prinova", title: "Prinova", palette: ["#2F5D50", "#C9D8B6"], shape: "wave", images: shots("prinova", "prinova", "prinova-mobile"), url: "https://www.getprinova.com/" },
  { ...todo, slug: "ledlum", title: "Ledlum", palette: ["#F2A541", "#FFE8A3"], shape: "orbit", images: shots("ledlum", "ledlum", "ledlum-mobile"), url: "https://www.ledlumlighting.com/" },
  { ...todo, slug: "rational-equity", title: "Rational Equity", palette: ["#1F3A5F", "#7FA7D9"], shape: "grid", images: shots("rational", "rationalamc", "rational-mobile"), url: "https://www.rationalamc.com/" },
  { ...todo, slug: "rolta", title: "Rolta", palette: ["#9B2226", "#EE9B00"], shape: "grid", images: shots("rolta", "rolta", "rolta-mobile"), url: "https://www.roltaelectricals.com/" },
  { ...todo, slug: "parqon", title: "Parqon", palette: ["#264653", "#2A9D8F"], shape: "wave", images: shots("parqon", "parqon", "parqon-mobile"), url: "https://www.parqon.co.in/" },
  { ...todo, slug: "jentra", title: "Jentra", palette: ["#E4572E", "#F2B880"], shape: "orbit", images: shots("jentra", "jentra", "jentra-mobile"), url: "https://www.jentra.in/" },
  { ...todo, slug: "ledlum-product-dashboard", title: "Ledlum Product Dashboard", palette: ["#5B3A29", "#E0B084"], shape: "stack", images: shots("ledlum", "ledlum-dashboard", "ledlum-dashboard-mobile"), url: "https://dashboard.ledlumlighting.com/" },
  { ...todo, slug: "deceunink", title: "Deceunink", palette: ["#0F4C5C", "#8ECAE6"], shape: "grid", images: shots("deceuninck", "deceuninck", "deceuninck-mobile"), url: "https://www.deceuninck.co.in/" },
];

export const services = [
  {
    title: "Modern Web Development",
    text: "React and Next.js websites and web apps focused on performance, responsiveness, scalability, and polished user experiences.",
  },
  {
    title: "UI & Interactive Experiences",
    text: "Turning designs into refined interfaces with smooth animations, micro-interactions, responsive layouts, and strong attention to visual detail.",
  },
  {
    title: "Full-Stack Development",
    text: "Frontend, APIs, databases, authentication, forms, CMS integrations, and backend functionality for complete web solutions.",
  },
  {
    title: "Cloud & Production",
    text: "Deploying and optimizing production websites with Vercel, AWS, S3, CloudFront, CDNs, and performance-focused infrastructure.",
  },
];

// Each role expands to show `points` and `stack`.
export const experience = [
  {
    company: "Totality Solutions",
    role: "Full Stack Developer",
    period: "2025 — Now",
    points: [
      "Delivered 5+ client-facing websites and web apps within 8 months, on deadline.",
      "Lead and mentor a team of 4 developers — code reviews, sprint planning and best practices.",
      "Built a custom CMS so non-technical teams can manage content themselves.",
      "Manage AWS infrastructure: EC2, Lambda and S3 / Supabase storage.",
    ],
    stack: ["Next.js", "AWS", "Supabase", "github", "Sanity", "Figma", "Vercel", "Resend", "Wordpress"  ],
  },
  {
    company: "Networth Tracker Solutions",
    role: "Full Stack Software Developer",
    period: "2024 — 2025",
    points: [
      "Architected a personal-finance PWA with transaction tracking, goal planning, a financial calendar and KPI dashboards.",
      "Integrated Account Aggregator, banking and Demat APIs for real-time portfolio insights.",
      "Added WebSocket live updates, improving responsiveness by 40%.",
    ],
    stack: ["React.js", "Node.js", "Firebase", "WebSocket"],
  },
  {
    company: "GOFINTECH",
    role: "Frontend Developer",
    period: "2024",
    points: [
      "Built Loan Management (LMS) and Loan Origination (LOS) interfaces.",
      "Created collection dashboards with advanced filtering, sorting and data visualisation.",
      "Integrated APIs for loan processing, customer onboarding and collection workflows.",
    ],
    stack: ["React.js", "Redux", "PrimeReact", "TailwindCSS"],
  },
  {
    company: "Agarwal Packers and Movers",
    role: "Software Developer",
    period: "2023 — 2024",
    points: [
      "Built logistics dashboards with geospatial visualisation and real-time shipment tracking.",
      "Maintained multiple shipment tracking systems using Google Maps APIs and MongoDB.",
      "Deployed MERN apps on AWS EC2 with 99.9% uptime, serving thousands of daily shipments.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS EC2"],
  }
];

// Who the site is speaking to: recruiters and clients.
export const openTo = [
  {
    title: "Full-time roles",
    text: "Full Stack or Frontend positions with React and Next.js, where I can own features end to end and help lead a team.",
  },
  {
    title: "Freelance projects",
    text: "Business websites, web apps, dashboards and custom CMS builds — from design hand-off to live deployment.",
  },
];


export const stackGroups = [
  { label: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Redux", "TailwindCSS", "PrimeReact", "Material UI", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "WebSocket", "Socket.io"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { label: "Cloud & tools", items: ["AWS EC2", "AWS Lambda", "AWS S3", "Git", "JIRA"] },
  { label: "Domain", items: ["Fintech (LMS / LOS)", "Account Aggregator", "Banking APIs", "Logistics", "Custom CMS"] },
];

// Product work that isn't a public website, so it isn't in the gallery.
export const products = [
  {
    title: "Networth Tracking App (PWA)",
    period: "2024 — 2025",
    text: "Unified personal-finance platform with KPI dashboards, a financial calendar and goal tracking, pulling bank and Demat data through the Account Aggregator framework.",
    stack: ["React.js", "Node.js", "Firebase"],
  },
  {
    title: "Vision — Non-Banking Exchange Platform",
    period: "2024",
    text: "Digital NBFC exchange with real-time data sync and in-app chat. Optimised queries and caching made transaction processing 30% more efficient.",
    stack: ["MERN", "MongoDB Realm", "Socket.io"],
  },
  {
    title: "APML Real-time Logistics Dashboard",
    period: "2023",
    text: "High-performance tracking dashboard with Kepler.gl geospatial visualisation, handling thousands of concurrent tracking updates.",
    stack: ["React.js", "Kepler.gl"],
  },
];

export const education = [
  { degree: "Master of Computer Science", school: "University of Mumbai, Kalina Campus", period: "2021 — 2023", note: "GPA 8.89 / 10" },
  { degree: "Bachelor of Computer Science", school: "Ramniranjan Jhunjhunwala College", period: "2018 — 2021", note: "GPA 8.06 / 10" },
];

// Right-hand gallery: project cards mixed with standalone art tiles.
// `ratio` is width / height and drives the masonry rhythm.
export type Tile =
  | { kind: "project"; slug: string; ratio: number }
  | { kind: "art"; id: string; ratio: number; palette: [string, string]; shape: Project["shape"] };

export const gallery: { left: Tile[]; right: Tile[] } = {
  left: [
    { kind: "project", slug: "prinova", ratio: 4 / 5 },
    { kind: "project", slug: "pov", ratio: 4 / 5 },
    { kind: "project", slug: "rational-equity", ratio: 4 / 5 },
    { kind: "project", slug: "jentra", ratio: 4 / 3 },
    { kind: "project", slug: "deceunink", ratio: 1 },
  ],
  right: [
    { kind: "project", slug: "totality-solutions", ratio: 4 / 4 },
    { kind: "project", slug: "ledlum", ratio: 6 / 5 },
    { kind: "project", slug: "parqon", ratio: 4 / 3 },
    { kind: "project", slug: "rolta", ratio: 4 / 5 },
    { kind: "project", slug: "ledlum-product-dashboard", ratio: 4 / 4 },
  ],
};