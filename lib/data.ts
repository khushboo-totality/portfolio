// All site content lives here — edit this file to make the portfolio yours.

export const site = {
  name: "Tejas Thakare",
  first: "Tejas",
  last: "Thakare",
  role: "Backend & Full-Stack Engineer",
  location: "Mumbai, India",
  timezone: "Asia/Kolkata",
  email: "hello@tejas.dev",
  intro:
    "I design and build fast, reliable systems for the web — from data-heavy backends to the interfaces people actually touch.",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
  ],
};

export const skills = [
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "GraphQL",
  "React",
  "Next.js",
  "AWS",
  "System Design",
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

export const projects: Project[] = [
  { ...todo, slug: "totality-solutions", title: "Totality Solutions", palette: ["#3A0CA3", "#4CC9F0"], shape: "orbit" },
  { ...todo, slug: "pov", title: "POV", palette: ["#3B2A4A", "#D7A6C8"], shape: "stack" },
  { ...todo, slug: "prinova", title: "Prinova", palette: ["#2F5D50", "#C9D8B6"], shape: "wave" },
  { ...todo, slug: "ledlum", title: "Ledlum", palette: ["#F2A541", "#FFE8A3"], shape: "orbit" },
  { ...todo, slug: "rational-equity", title: "Rational Equity", palette: ["#1F3A5F", "#7FA7D9"], shape: "grid" },
  { ...todo, slug: "rolta", title: "Rolta", palette: ["#9B2226", "#EE9B00"], shape: "grid" },
  { ...todo, slug: "parqon", title: "Parqon", palette: ["#264653", "#2A9D8F"], shape: "wave" },
  { ...todo, slug: "jentra", title: "Jentra", palette: ["#E4572E", "#F2B880"], shape: "orbit" },
  { ...todo, slug: "ledlum-product-dashboard", title: "Ledlum Product Dashboard", palette: ["#5B3A29", "#E0B084"], shape: "stack" },
  { ...todo, slug: "deceunink", title: "Deceunink", palette: ["#0F4C5C", "#8ECAE6"], shape: "grid" },
];

export const services = [
  {
    title: "Backend Architecture",
    text: "APIs, data models and services designed to stay simple as traffic and teams grow.",
  },
  {
    title: "Database Engineering",
    text: "PostgreSQL schema design, query tuning, migrations and safe rewrites of critical logic.",
  },
  {
    title: "Full-Stack Products",
    text: "End-to-end features with Next.js and React, from database to pixel.",
  },
  {
    title: "Cloud & Performance",
    text: "AWS infrastructure, caching and CDN strategy that keeps sites fast and bills low.",
  },
];

export const experience = [
  { company: "Brandlock", role: "Senior Software Engineer", period: "2023 — Now" },
  { company: "Brandlock", role: "Software Engineer", period: "2022 — 2023" },
  { company: "Freelance", role: "Web Developer", period: "2021 — Now" },
  { company: "Earlier role", role: "Junior Developer", period: "2021 — 2022" },
];

// Right-hand gallery: project cards mixed with standalone art tiles.
// `ratio` is width / height and drives the masonry rhythm.
export type Tile =
  | { kind: "project"; slug: string; ratio: number }
  | { kind: "art"; id: string; ratio: number; palette: [string, string]; shape: Project["shape"] };

export const gallery: { left: Tile[]; right: Tile[] } = {
  left: [
    { kind: "project", slug: "rational-equity", ratio: 3 / 4 },
    { kind: "project", slug: "jentra", ratio: 4 / 3 },
    { kind: "project", slug: "prinova", ratio: 4 / 5 },
    { kind: "project", slug: "pov", ratio: 4 / 3 },
    { kind: "project", slug: "deceunink", ratio: 1 },
  ],
  right: [
    { kind: "project", slug: "ledlum", ratio: 6 / 5 },
    { kind: "project", slug: "ledlum-product-dashboard", ratio: 2 / 3 },
    { kind: "project", slug: "parqon", ratio: 4 / 3 },
    { kind: "project", slug: "rolta", ratio: 4 / 5 },
    { kind: "project", slug: "totality-solutions", ratio: 4 / 3 },
  ],
};