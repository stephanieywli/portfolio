"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Toronto",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

export const Header = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mx-6 py-4 flex justify-start md:justify-end items-center text-xs tracking-wider text-ink-muted border-b border-ink/10 md:border-b-0">
      <div className="text-[11px] font-mono tracking-tight tabular-nums">
        {time ? `TORONTO · ${time} · UTC-05:00` : " "}
      </div>
    </header>
  );
};
