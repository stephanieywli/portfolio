"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Label } from "@/components/Label";
import { PROJECTS } from "@/lib/projects";

type TooltipState = { text: string; bg: string; x: number; y: number };

export const Projects = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <div className="flex flex-col gap-5">
      {tooltip && (
        <div
          className={`fixed z-50 pointer-events-none ${tooltip.bg} text-ink text-xs font-semibold px-2 py-1 whitespace-nowrap`}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, -50%)",
          }} // center tooltip to cursor
        >
          {tooltip.text}
        </div>
      )}
      {PROJECTS.map(
        (
          { title, description, year, feeling, toast, toastBg, link, stack },
          i,
        ) => (
          <div
            key={title}
            className={`fade-up-item delay-${i + 1} ${toast ? "cursor-none" : ""}`}
            onMouseEnter={(e) =>
              toast &&
              setTooltip({
                text: toast,
                bg: toastBg ?? "bg-ink",
                x: e.clientX,
                y: e.clientY,
              })
            }
            onMouseMove={(e) =>
              toast &&
              setTooltip({
                text: toast,
                bg: toastBg ?? "bg-ink",
                x: e.clientX,
                y: e.clientY,
              })
            }
            onMouseLeave={() => setTooltip(null)}
          >
            <div className="flex items-center gap-2 my-1">
              <Label>({feeling})</Label>
              <span className="text-[10px] text-ink/50 uppercase tracking-wider border border-ink/20 px-1.5 py-0.5 rounded-sm">
                {stack}
              </span>
            </div>
            {link ? (
              <Link
                href={link}
                target="_blank"
                className="font-semibold text-sm"
              >
                {title}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="ml-1 mb-px"
                />
              </Link>
            ) : (
              <p className="font-semibold text-sm w-fit">{title}</p>
            )}
            <p className="text-sm">{description}</p>
          </div>
        ),
      )}
    </div>
  );
};
