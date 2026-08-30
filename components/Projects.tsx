"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    year: 2026,
    feeling: "challenging",
    title: "Entity Resolution Database",
    description:
      "a database of standardized company data and entities; aggregates lobbying, procurement, and ATIP records",
    toast: "coming soon",
    toastBg: "bg-orange-500",
  },
  {
    year: 2026,
    feeling: "creative",
    title: "Odyssey",
    description: "a space-themed progress tracker for your job-hunt adventures",
    toast: "under construction",
    toastBg: "bg-yellow-300",
  },
  {
    year: 2025,
    feeling: "painstaking",
    title: "Canadian Appointments Database",
    description: "Canada's largest public database of government appointments",
    link: "https://theijf.org/appointments",
  },
  {
    year: 2025,
    feeling: "solo-flying",
    title: "'Open By Default' Processor Frontend",
    description: "solo-built internal CRUD processor for Canadian ATIP records",
    toast: "private property",
    toastBg: "bg-red-500",
  },
  {
    year: 2024,
    feeling: "nostalgic",
    title: "stephaniey.li",
    description: "take a trip down memory lane...",
    link: "https://portfolio-24-git-main-stephanieywli.vercel.app/",
  },
];

type TooltipState = { text: string; bg: string; x: number; y: number };

export const Projects = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {tooltip && (
        <div
          className={`fixed z-50 pointer-events-none ${tooltip.bg} text-black text-xs font-semibold px-2 py-1 whitespace-nowrap`}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, calc(-100% - 10px))",
          }}
        >
          {tooltip.text}
        </div>
      )}
      {projects.map(
        ({ title, description, year, feeling, toast, toastBg, link }) => (
          <div key={title}>
            <p className="text-xs bg-black w-fit text-off-white px-1 font-semibold my-1">
              ({feeling})
            </p>
            {link ? (
              <Link
                href={link}
                target="_blank"
                className="font-semibold text-sm text-black"
              >
                {title}
              </Link>
            ) : (
              <p
                className="font-semibold text-sm w-fit cursor-help"
                onMouseEnter={(e) =>
                  toast &&
                  setTooltip({
                    text: toast,
                    bg: toastBg ?? "bg-yellow-300",
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
                onMouseMove={(e) =>
                  toast &&
                  setTooltip({
                    text: toast,
                    bg: toastBg ?? "bg-yellow-300",
                    x: e.clientX,
                    y: e.clientY,
                  })
                }
                onMouseLeave={() => setTooltip(null)}
              >
                {title}
              </p>
            )}
            <p className="text-sm">{description}</p>
          </div>
        ),
      )}
    </div>
  );
};
