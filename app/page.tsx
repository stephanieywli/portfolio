"use client";
import { useEffect, useState } from "react";
import { Home } from "@/components/Home";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";

type View = "home" | "projects" | "more" | "experience";

const FADE_MS = 200;

export default function HomePage() {
  const [selected, setSelected] = useState<View>("home");
  const [rendered, setRendered] = useState<View>("home");

  useEffect(() => {
    if (selected === rendered) return;
    const timeout = setTimeout(() => setRendered(selected), FADE_MS);
    return () => clearTimeout(timeout);
  }, [selected, rendered]);

  const visible = selected === rendered;

  const displayMap: Record<View, React.JSX.Element> = {
    home: <Home />,
    projects: <Projects />,
    experience: <Experience />,
    more: <Contacts />,
  };

  return (
    <>
      <div className="w-screen h-auto min-h-screen min-w-screen max-w-full overflow-hidden relative flex flex-col md:flex-row items-center justify-start md:justify-center p-6 md:p-12">
        <div className="flex flex-col w-fit gap-1 items-center border p-4 relative bg-white mb-12">
          ⤵
          {["home", "experience", "projects", "more"].map((page) => (
            <button
              key={page}
              onClick={() => {
                setSelected(page as View);
              }}
              className="text-base hover:opacity-80 hover:underline hover:text-[#0081cc] cursor-pointer min-w-26"
            >
              {page}
            </button>
          ))}
          ⤴
          <div className="border absolute w-full h-full left-2 top-2 -z-10 border-black bg-white opacity-40" />
        </div>{" "}
        <div
          className={`flex flex-col items-start md:ml-6 md:mb-10 md:w-135 transition-opacity duration-200 ease-in-out ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {" "}
          {displayMap[rendered]}
        </div>
      </div>
    </>
  );
}
