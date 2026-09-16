"use client";

import Link from "next/link";
import useTypewriter from "@/utils/useTypewriter";

const TRAITS = ["cat mom", "design nerd", "gym rat"];
const SKILLS = ["typescript", "react", "python", "sql"];

export const Home = () => {
  const trait = useTypewriter(TRAITS);

  return (
    <>
      {" "}
      <div className="fade-up-item flex items-center gap-2 mb-2">
        <p className="text-sm bg-ink uppercase w-fit text-off-white px-1 font-semibold">
          stephanie li
        </p>
        <p className="text-sm text-accent font-mono border px-0.75">李</p>
      </div>
      <p className="fade-up-item delay-1 text-sm">
        <b className="font-semibold">in summary:</b> a software developer &{" "}
        {trait}
        <span className="animate-pulse">|</span>
      </p>
      <p className="fade-up-item delay-2 text-sm">
        <b className="font-semibold">main proficiencies:</b>{" "}
        {SKILLS.map((skill, i) => (
          <span key={skill}>
            <span className="skill-pill">{skill}</span>
            {i < SKILLS.length - 1 && ", "}
          </span>
        ))}
      </p>{" "}
      <p className="fade-up-item delay-3 text-sm">
        <b className="font-semibold">loves:</b> nature, product design, gym
      </p>
      <p className="fade-up-item delay-4 text-sm mt-3">
        <b className="font-semibold">born and based in:</b> toronto, CA
      </p>{" "}
      <p className="fade-up-item delay-5 text-sm font-semibold">
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
