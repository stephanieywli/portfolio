"use client";
import React, { useEffect, useState } from "react";
import Preloader from "@/components/transitions/preloader";
import Cursor from "@/components/layout/cursor";
import MenuA from "@/components/layout/menuLand";
import MenuB from "@/components/layout/menuProj";
import CTA from "@/components/layout/diveCTA";
import Marquee from "@/components/stylistic/marquee";
import BgLogo from "@/components/stylistic/bgLogo";
import Project from "@/components/layout/project";
import Footer from "@/components/layout/footer";
import { AnimatePresence, color } from "framer-motion";
import { projects } from "@/components/projects";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        id="content"
        className="w-screen h-auto min-h-screen min-w-screen max-w-[100%] overflow-hidden relative"
      >
        <Cursor />
        <section
          id="hero-section"
          className="flex flex-col justify-center w-screen h-screen max-w-[100%] overflow-hidden relative"
        >
          <div className="flex flex-row pl-40 self-center justify-center">
            <MenuA />
            <div className="max-w-[30vw] flex flex-col items-left">
              <h1 className="pb-1 font-garamond text-[2.5rem] sm:max-lg:text-[3rem] lg:max-xl:text-[3.5rem] xl:max-4k:text-[3.4rem] 4k:text-[6rem] font-light italic">
                Hi, I&apos;m Stephanie!
              </h1>
              <div className="sm:flex-row sm:gap-0 w-[30vw] items-left tracking-wider leading-snug font-medium">
                <p className="pb-3">
                  An aspiring software developer based in Toronto where I study
                  various topics, various topics, and topics on my own time.
                </p>
                <p className="pb-6 border-b border-dotted">
                  Reach out to me at{" "}
                  <a
                    href="mailto:stephanieyw.li@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    stephanieyw.li@gmail.com
                  </a>
                  , or shoot me a message on{" "}
                  <a
                    href="https://www.linkedin.com/in/stephanieywli/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                  !&nbsp;I love to chat with friends and strangers alike.
                </p>
                <p className="pt-6">
                  I’m currently seeking new grad positions! Don’t be shy,{" "}
                  <a
                    href="mailto:stephanieyw.li@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="underline"
                  >
                    drop a line 📧
                  </a>
                  &nbsp;!
                </p>
              </div>
            </div>
          </div>
          <BgLogo />
          <CTA />
        </section>
        <Marquee />
        <section
          id="projects-section"
          className="flex flex-col items-center justify-center min-h-screen mb-[15vh] relative text-grey-100"
        >
          <div className="flex flex-row pl-40 self-center justify-center">
            <MenuB />
            <div className="max-w-[30vw] flex flex-col items-left">
              <div className="sm:flex-row sm:gap-0 w-fit items-left tracking-wider leading-snug">
                <div className="flex flex-col w-[16vw] relative">
                  <p className="flex justify-center w-[100%] pb-4 tracking-wider border-b"></p>
                  {projects.map((project) => {
                    return <Project key={project.slug} project={project} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
