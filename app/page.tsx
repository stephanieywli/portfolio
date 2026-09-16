"use client";
import { useEffect, useState } from "react";
import { Home } from "@/components/Home";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { More } from "@/components/More";
import { Menu, type View } from "@/components/Menu";
import { MobileMenu } from "@/components/MobileMenu";

const FADE_MS = 200;
const KEY_TO_PAGE: Record<string, View> = {
  "1": "home",
  "2": "experience",
  "3": "projects",
  "4": "more",
};

const displayMap: Record<View, React.JSX.Element> = {
  home: <Home />,
  projects: <Projects />,
  experience: <Experience />,
  more: <More />,
};

export default function HomePage() {
  const [selected, setSelected] = useState<View>("home");
  const [rendered, setRendered] = useState<View>("home");

  useEffect(() => {
    if (selected === rendered) return;
    const timeout = setTimeout(() => setRendered(selected), FADE_MS); // update display with fade effect
    return () => clearTimeout(timeout);
  }, [selected, rendered]);

  // hook up keyboard to menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        // return if key is clicked in an input/text field
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      const page = KEY_TO_PAGE[e.key];
      if (page) setSelected(page);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const visible = selected === rendered; // for fade effect

  return (
    <>
      <div className="w-full h-auto flex-1 min-w-full max-w-full overflow-hidden relative flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center p-6 pt-4 md:p-12 md:py-0">
        <MobileMenu selected={selected} onSelect={setSelected} />
        <Menu selected={selected} onSelect={setSelected} />{" "}
        <div
          id="page-component"
          className="flex flex-col items-start md:ml-6 md:mb-10 md:w-135 max-sm:[--text-sm:0.75rem]"
        >
          <div
            className={`flex flex-col items-start transition-opacity duration-200 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {" "}
            {displayMap[rendered]}
          </div>
          <div
            id="keyboard-guide"
            className="hidden sm:flex mt-8 pt-4 border-t border-ink/10 sm:flex-row sm:items-center gap-1 sm:justify-between text-[0.7rem] text-ink-muted w-full"
          >
            <span>
              press{" "}
              <kbd className="px-1.5 py-0.5 bg-ink/5 border border-ink/20 rounded text-[0.6rem] font-semibold">
                1
              </kbd>
              –
              <kbd className="px-1.5 py-0.5 bg-ink/5 border border-ink/20 rounded text-[0.6rem] font-semibold">
                4
              </kbd>{" "}
              to jump views
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
