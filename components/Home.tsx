"use client";

import Link from "next/link";
import useTypewriter from "@/utils/useTypewriter";

const TRAITS = ["cat mom", "design nerd", "gym rat"];

export const Home = () => {
  const trait = useTypewriter(TRAITS);

  return (
    <>
      {" "}
      <p className="text-sm uppercas bg-black uppercase w-fit text-off-white px-1 font-semibold mb-2">
        stephanie li
      </p>
      <p className="text-sm">
        <b className="font-semibold">in summary:</b> a software developer &{" "}
        {trait}
        <span className="animate-pulse">|</span>
      </p>
      <p className="text-sm">
        <b className="font-semibold">main proficiencies:</b> typescript, react,
        python, sql
      </p>{" "}
      <p className="text-sm">
        <b className="font-semibold">loves:</b> nature, product design, gym
      </p>
      <p className="text-sm mt-3">
        <b className="font-semibold">born and based in:</b> toronto, CA
      </p>{" "}
      <p className="text-sm font-semibold">
        previously @{" "}
        <Link
          href="https://theijf.org"
          className="font-normal text-sm"
          target="_blank"
        >
          The Investigative Journalism Foundation
        </Link>
      </p>
    </>
  );
};
