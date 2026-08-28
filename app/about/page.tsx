"use client";
import Cursor from "@/components/layout/cursor";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Menu from "@/components/layout/menuLand";
import Triangle from "@/components/icons/triangle";
import ImageToggle from "@/components/icons/imageToggle";
import { Typewriter } from "react-simple-typewriter";
import Loader from "@/components/transitions/loader";
import { useState } from "react";

const awards = [
  { title: "Awards" },
  { title: "UWaterloo HackRx" },
  { title: "ElleHacks RBC Challenge" },
  { title: "McMaster UX/UI Designathon" },
];
const roles = [
  { title: "Web Development" },
  { title: "Databases" },
  { title: "UX/UI" },
  { title: "Algorithms" },
  { title: "Debugging" },
  { title: "Machine Learning" },
];
const skillsDes = [
  { tool: "Figma" },
  { tool: "Illustrator" },
  { tool: "Photoshop" },
  { tool: "AfterEffects" },
  { tool: "PremierePro" },
];
const skillsDev = [
  { tool: "HTML" },
  { tool: "CSS" },
  { tool: "React" },
  { tool: "Javascript" },
  { tool: "Next.js" },
  { tool: "Tailwind" },
  { tool: "Bootstrap" },
  { tool: "Node.js" },
  { tool: "NetsJS" },
  { tool: "Django" },
  { tool: "Git" },
  { tool: "MySQL" },
  { tool: "Python" },
];
const hobbies = [
  { title: "cat mother (default)", src: "/about/default.png" },
  { title: "weightlifter", src: "/about/gym.png" },
  { title: "sunset lover", src: "/about/sunset.jpeg" },
  { title: "mountain hiker", src: "/about/hike.png" },
  { title: "globe trotter", src: "/about/2.png" },
  { title: "clothing thrifter", src: "/about/thrift.jpeg" },
  { title: "neuroscience grad", src: "/about/grad2.jpeg" },
  { title: "art admirer", src: "/about/lacma.jpeg" },
  { title: "grass-toucher", src: "/about/mountain.jpeg" },
  { title: "lifelong swimmer", src: "/about/swim.png" },
];

export default function Page() {
  const [src, setSrc] = useState("/about/default.png");
  return (
    <>
      <Loader />
      <div
        id="content"
        className="w-screen h-auto min-h-screen min-w-screen max-w-[100%] overflow-hidden"
      >
        <Cursor />
        <section
          id="about-section"
          className="flex flex-col lg:flex-row w-screen lg:h-screen 
           px-4 4k:px-10 gap-10 justify-center relative"
        >
          <div className="mt-10 flex flex-row gap-8 h-[50vh] sm:max-md:h-[45vh] md:max-lg:h-[50vh] lg:h-[55vh] self-center">
            <div className="flex flex-col items-end self-center tracking-wide lowercase h-fit p-2">
              <div className="w-full capitalize italic underline text-left leading-tight pb-4">
                <p className="">Hover to swap</p>
                <div className="flex flex-row gap-2 justify-end">
                  character!
                  <Image
                    src="/icons/cursor.svg"
                    alt=""
                    width={0}
                    height={0}
                    sizes="auto"
                    style={{
                      width: "auto",
                      height: "1rem",
                    }}
                    className="mt-1"
                  ></Image>
                </div>
              </div>
              {hobbies.map((hobby) => (
                <p
                  key={hobby.title}
                  className="text-grey first-of-type:text-red hover:text-white hover:underline cursor-crosshair"
                  onMouseEnter={() => {
                    setSrc(hobby.src);
                  }}
                  onMouseLeave={() => {
                    setSrc("/about/default.png");
                  }}
                >
                  {hobby.title}
                </p>
              ))}
            </div>
            <ImageToggle src={src} />
          </div>
          <Menu />
          <div className="mt-10 flex flex-col justify-between w-fit lg:w-[40vw] self-center mr-[235px] h-[50vh] sm:max-md:h-[45vh] md:h-fit">
            <div
              className="font-garamond font-light 
              text-[4.5rem] lg:max-2xl:text-[4rem] 2xl:max-3xl:text-[5.5rem] 3xl:text-[6.5rem]
              italic text-off-white leading-none -mt-4 lg:whitespace-nowrap"
            >
              <h1 className="max-w-fit hover:text-red">
                Designer by Instinct,
              </h1>
              <h1 className="max-w-fit hover:text-red">Developer by Design.</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 pt-20 text-grey justify-between w-full h-max tracking-wide leading-snug">
              <div className="flex flex-col justify-between italic">
                <p className="hover:text-white">
                  <Typewriter
                    words={["Hons. Neuroscience (B.Sc.)"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </p>
                <div className="flex flex-col">
                  {awards.map((award) => (
                    <p key={award.title} className="hover:text-white">
                      {award.title}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-[50%] lg:w-[40%] h-full text-left hover:text-white">
                A course about computational neuroscience and ML algorithms is
                what initially sparked my interest in software development in
                university. Since then I&#39;ve sought out any opportunity that
                allows me to dive deeper into the world of software design and
                development. Since then I&#39;ve sought out any opportunity that
                allows me to dive deeper into the world of software design and
                development.
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills-section"
          className="flex min-w-screen min-h-screen lg:h-screen items-center px-4 4k:px-10 relative"
        >
          <div
            id="background text"
            className="flex flex-col font-medium absolute opacity-60 right-0 text-green-900
           text-[10rem] sm:max-2xl:text-[20rem] 2xl:text-[30rem] -z-50 leading-none
           -space-y-[1.5rem] sm:max-2xl:-space-y-[3.5rem] 2xl:-space-y-[5rem]"
          >
            <p className="">084</p>
            <p className="">c30</p>
          </div>
          <div className="flex flex-col gap-6 4k:gap-20 lg:flex-row w-[100%] items-start justify-between h-fit lg:px-20 ">
            <div className="flex flex-col w-[40vw] leading-none -mt-4 ">
              <div className="flex flex-row gap-2">
                <Triangle />
                <p className="uppercase text-grey">What I do</p>
              </div>
              {roles.map((role) => (
                <p
                  key={role.title}
                  className="font-garamond font-light 
                text-[4.5rem] lg:max-2xl:text-[4rem] 2xl:max-3xl:text-[5.5rem] 3xl:text-[6.5rem]
                italic hover:text-red hover:underline decoration-2 hover:underline-offset-4"
                >
                  {role.title}
                </p>
              ))}
            </div>
            <div className="flex flex-row lg:w-[45vw] self-end justify-end items-end gap-x-40 text-grey ">
              <div className="flex flex-col">
                {skillsDes.map((skill) => (
                  <p key={skill.tool} className="hover:text-red">
                    {skill.tool}
                  </p>
                ))}
              </div>
              <div className="flex flex-col">
                {skillsDev.map((skill) => (
                  <p key={skill.tool} className="hover:text-red">
                    {skill.tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
