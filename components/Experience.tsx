import Link from "next/link";
import { Label } from "@/components/Label";

const experiences = [
  {
    company: "The Investigative Journalism Foundation",
    role: "SWD",
    link: "https://theijf.org/",
    description: "frontend, data pipeline, prompt engineering, data vis",
    industry: "journalism",
  },
  {
    company: "TedxToronto",
    role: "Web Developer",
    link: "https://www.tedxtoronto.com/",
    description: "frontend, accessibility, qa",
    industry: "events",
  },
  {
    company: "Horizn Inc.",
    role: "UI Designer",
    description: "ux/ui, figma prototyping",
    link: "https://ca.linkedin.com/company/horizn-global",
    industry: "fintech",
  },
];

export const Experience = () => (
  <div className="flex flex-col gap-5">
    {experiences.map(({ company, role, link, description, industry }, i) => (
      <div key={company} className={`fade-up-item delay-${i + 1}`}>
        {" "}
        <Label className="my-1">({industry})</Label>
        <div className="flex flex-row gap-1 items-center mb-0.5">
          <p className="font-semibold text-sm">
            {role} @{" "}
            <Link
              href={link}
              className="underline underline-offset-2 text-sm"
              target="_blank"
            >
              {company}
            </Link>
          </p>{" "}
        </div>
        <p className="text-sm">{description}</p>{" "}
      </div>
    ))}
  </div>
);
