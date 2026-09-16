"use client";

import { useEffect, useState } from "react";
import { StampButton } from "@/components/StampButton";

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
    <header className="hidden md:flex mx-6 md:mx-12 4k:max-w-6xl 4k:!mx-auto py-4 justify-between items-center text-xs tracking-wider text-ink-muted">
      <StampButton />
      <div className="text-[0.8rem] font-mono tracking-tight tabular-nums">
        {time ? (
          <>
            {"TORONTO · " + time + " "}
            <span className="hidden sm:inline">{"· UTC-05:00"}</span>
          </>
        ) : (
          " "
        )}
      </div>
    </header>
  );
};
