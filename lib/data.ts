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
    "Full Stack Software Developer with 4+ years of experience building scalable web applications, PWAs, fintech platforms and real-time systems.",
  // Hero headline, rendered as three lines (the middle one in italic serif).
  headline: [
    "I build scalable web apps and progressive web apps",
    "— fintech platforms, real-time dashboards and custom CMSs —",
    "with a focus on performance and polish.",
  ],
  about:
    "I'm a full stack developer in Mumbai with a strong background in fintech — loan management, loan origination and collection platforms — plus logistics and enterprise apps. I currently lead a team of developers at Totality Solutions, shipping client websites and web apps on React, Node.js and AWS.",
  stats: [
    ["4+", "years building"],
    ["10+", "sites & apps shipped"],
    ["4", "developers mentored"],
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const skills = [
  "React.js",
  "Node.js",
  "Express.js",
  "Redux",
  "Zustand",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Supabase",
  "AWS",
  "WebSocket",
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
    title: "Full-Stack Web Apps",
    text: "MERN-stack websites, web apps and PWAs with clean MVC architecture, REST APIs and JWT auth.",
  },
  {
    title: "Fintech Platforms",
    text: "LMS, LOS and collection dashboards, plus Account Aggregator, banking and Demat API integrations.",
  },
  {
    title: "Real-time Systems",
    text: "WebSocket and Socket.io features, live tracking and geospatial dashboards that handle thousands of updates.",
  },
  {
    title: "Cloud & Custom CMS",
    text: "AWS EC2, Lambda and S3 or Supabase deployments, and CMSs that let non-technical teams manage content.",
  },
];

export const experience = [
  { company: "Totality Solutions", role: "Full Stack Developer", period: "2025 — Now" },
  { company: "Networth Tracker Solutions", role: "Full Stack Software Developer", period: "2024 — 2025" },
  { company: "GOFINTECH", role: "Frontend Developer", period: "2024" },
  { company: "Agarwal Packers and Movers", role: "Software Developer", period: "2023 — 2024" },
  { company: "Autowhat", role: "Frontend Developer", period: "2022" },
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