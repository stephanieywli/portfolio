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
    title: "Entity Resolution Database",
    description:
      "a database of standardized company data and entities; aggregates lobbying, procurement, and ATIP records",
    toast: "coming soon",
    toastBg: "bg-orange-500",
    stack: "SQL · Supabase · Next.js",
  },
  {
    year: 2026,
    feeling: "creative",
    title: "Odyssey",
    description: "a space-themed progress tracker for your job-hunt adventures",
    toast: "under construction",
    toastBg: "bg-yellow-300",
    stack: "Next.js · Tailwind · Shadcn",
  },
  {
    year: 2025,
    feeling: "painstaking",
    title: "Canadian Appointments Database",
    description: "Canada's largest public database of government appointments",
    link: "https://theijf.org/appointments",
    stack: "Python · AWS · Azure OpenAI · Docker",
  },
  {
    year: 2025,
    feeling: "solo-flying",
    title: "'Open By Default' Processor Frontend",
    description:
      "internal CRUD processor for Canadian ATIP records; first solo-built frontend",
    toast: "private property",
    toastBg: "bg-red-500",
    stack: "Next.js · FastAPI · Docker",
  },
  {
    year: 2024,
    feeling: "nostalgic",
    title: "stephaniey.li",
    description: "take a trip down memory lane...",
    link: "https://portfolio-24-git-main-stephanieywli.vercel.app/",
    stack: "Next.js · Tailwind · Figma",
  },
];
