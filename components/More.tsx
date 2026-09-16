"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LIGHT_THEME, DARK_THEME, applyTheme } from "@/utils/theme";
import { RESUME_LINK, SOCIAL_LINKS } from "@/lib/links";
import { ColourTile } from "@/components/Tiles/ColourTile";
import { MetaTile } from "@/components/Tiles/MetaTile";
import { Label } from "@/components/Label";

export const More = () => {
  const [canvas, setCanvas] = useState(LIGHT_THEME.canvas);
  const [ink, setInk] = useState(LIGHT_THEME.ink);

  const isDarkMode = canvas.toLowerCase() === DARK_THEME.canvas;

  const toggleDarkMode = () => {
    const next = isDarkMode ? LIGHT_THEME : DARK_THEME;
    setCanvas(next.canvas);
    setInk(next.ink);
  };

  // update page theme immediately when canvas/ink change
  useEffect(() => {
    applyTheme(canvas, ink);
  }, [canvas, ink]);

  return (
    <div className="flex flex-col gap-6">
      <div className="fade-up-item flex flex-col items-start gap-1">
        <Label>(colophon)</Label>
        <p className="font-semibold text-sm">About this site</p>
        <p className="text-sm">
          Set in Atkinson Hyperlegible Mono, built with Next.js and Tailwind,
          and kept deliberately simple.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-sm pt-1">
          <ColourTile label="canvas" value={canvas} onChange={setCanvas} />
          <ColourTile label="ink" value={ink} onChange={setInk} />
          <MetaTile label="type" value="Atkinson Mono" />
          <MetaTile
            label="theme"
            value={isDarkMode ? "☀ light" : "☾ dark"}
            onClick={toggleDarkMode}
          />
        </div>
      </div>
      <div className="fade-up-item delay-1 flex flex-col items-start gap-1">
        <Label>(correspondence)</Label>
        <p className="font-semibold text-sm">Get in touch</p>
        <p className="text-sm">Let's talk shop! Or anything, really:</p>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 pt-1">
          <Link
            href={RESUME_LINK.href}
            download={RESUME_LINK.download}
            className="text-sm"
          >
            {RESUME_LINK.label} ↓
          </Link>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <span key={label} className="flex items-center gap-1.5">
              <span className="text-ink/30">/</span>
              <Link href={href} target="_blank" className="text-sm">
                {label} ↗
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
