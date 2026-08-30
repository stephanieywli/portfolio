"use client";
import { useState } from "react";
import { Home } from "@/components/Home";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";

type View = "home" | "projects" | "more" | "experience";

export default function HomePage() {
  const [selected, setSelected] = useState<View>("home");

  const displayMap: Record<View, React.JSX.Element> = {
    home: <Home />,
    projects: <Projects />,
    experience: <Experience />,
    more: <Contacts />,
  };

  return (
    <>
      <div className="w-screen h-auto min-h-screen min-w-screen max-w-full overflow-hidden relative flex flex-row items-center justify-center">
        <div className="flex flex-col w-fit gap-1 items-center border p-4 relative bg-white mb-12">
          ⤵
          {["home", "experience", "projects", "more"].map((page) => (
            <button
              onClick={() => {
                setSelected(page as View);
              }}
              className="text-base hover:opacity-80 hover:underline text-[#0081cc] cursor-pointer min-w-26"
            >
              {page}
            </button>
          ))}
          ⤴
          <div className="border absolute w-full h-full left-2 top-2 -z-10 border-black bg-white opacity-40" />
        </div>{" "}
        <div className="flex flex-col items-start ml-6 mb-10 w-135">
          {" "}
          {displayMap[selected]}
        </div>
      </div>
    </>
  );
}
