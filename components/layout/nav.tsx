"use client";
import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";

const Nav = () => {
  const [time, setTime] = useState("0:00:00 NA");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(() =>
        DateTime.now()
          .setZone("America/New_York")
          .setLocale("en")
          .toLocaleString(DateTime.TIME_WITH_SHORT_OFFSET)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row w-screen px-4 4k:px-10 py-2 backdrop-blur-[0.75px] justify-between bg-green bg-opacity-10 tracking-wider sm:max-4k:text-[1rem] 4k:text-[1.5rem] border-b fixed z-50">
      <div className="hidden sm:flex w-fit">
        <div className="border self-center mr-2">
          <Image
            src="/icons/clock-hands.svg"
            alt="cat"
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "1rem", height: "1rem" }}
            className=""
          />
        </div>
        {time}
      </div>
      <Link href="/" className="w-fit">
        <p className="hidden md:block">PORTFOLIO 24&apos; ©</p>
        <p className="md:hidden">SYL 24&apos; ©</p>
      </Link>
      <Link
        href="/"
        className="flex flex-row w-fit gap-1 italic underline cursor-not-allowed"
      >
        <p>Coming Soon! Steph&apos;s Quests↪</p>
        <div className="border self-center">
          <Image
            src="/icons/fencer.gif"
            alt="cat"
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "1.2rem", height: "1.2rem" }}
            className=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Nav;
