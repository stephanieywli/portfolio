export type Project = {
  year: number;
  feeling: string;
  title: string;
  description: string;
  toast?: string;
  toastBg?: string;
  link?: string;
  stack: string;
};

export const PROJECTS: Project[] = [
  {
    year: 2026,
    feeling: "challenging",
    title: "Paper Trail",
    description:
      "a database that uses AI & human review to standardize company names; trace an org's lobbying and contract activity here",
    link: "https://theijf.org/paper-trail",
    stack: "Next.js · Python · SentenceBERT · SQL",
  },
  {
    year: 2026,
    feeling: "creative",
    title: "Odyssey",
    description: "a space-themed progress tracker for your job-hunt adventures",
    toast: "under construction",
    toastBg: "bg-yellow-300",
    stack: "Next.js · Typescript · Tailwind · Shadcn",
  },
  {
    year: 2025,
    feeling: "painstaking",
    title: "Canadian Appointments Database",
    description: "Canada's largest public database of government appointments",
    link: "https://theijf.org/appointments",
    stack: "Python · Playwright · Azure GPT-4o · Supabase",
  },
  {
    year: 2025,
    feeling: "solo-flying",
    title: "'Open By Default' Processor Frontend",
    description:
      "internal CRUD processor for Canadian ATIP records; first solo-built frontend",
    toast: "private property",
    toastBg: "bg-red-500",
    stack: "Next.js · Typescript · FastAPI · S3",
  },
  {
    year: 2024,
    feeling: "nostalgic",
    title: "stephaniey.li",
    description: "take a trip down memory lane...",
    link: "https://portfolio-24-git-main-stephanieywli.vercel.app/",
    stack: "Next.js · Typescript · Tailwind · Figma",
  },
];
