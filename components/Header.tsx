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
    <header className="mx-6 md:mx-12 4k:max-w-6xl 4k:!mx-auto py-4 flex justify-between items-center text-xs tracking-wider text-ink-muted border-b border-ink/10 md:border-b-0">
      <button
        onClick={() => window.location.reload()}
        className="text-sm hover:no-underline cursor-pointer text-accent font-mono border px-0.75 hover:text-off-white hover:bg-accent"
      >
        李
      </button>
      <div className="text-[0.8rem] font-mono tracking-tight tabular-nums">
        {time ? `TORONTO · ${time} · UTC-05:00` : " "}
      </div>
    </header>
  );
};
