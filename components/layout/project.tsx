import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const openImg = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { opacity: 0 },
};

export default function Project({ project }: any) {
  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src, details, slug } = project;
  const lenis = useLenis();

  return (
    <>
      <div
        id="project"
        className="flex flex-col w-[100%] items-center justify-between cursor-pointer border-b"
      >
        <Link
          href={`/projects/${slug}`}
          onClick={() => lenis.scrollTo("top", { lerp: 0.08, lock: true })}
          className="flex flex-row items-center justify-start text-[1rem] sm:max-lg:text-[1rem] lg:max-4k:text-[1.3rem] 4k:text-[2rem]
         hover:text-grey hover:font-light hover:italic hover:font-garamond hover:tracking-wide 
         hover:text-[1.1rem] sm:max-lg:hover:text-[1.1rem] lg:max-4k:hover:text-[1.5rem] 4k:hover:text-[2.3rem]
         "
          onMouseEnter={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        >
          <p className="">{title1}</p>
          <motion.div
            variants={openImg}
            animate={isActive ? "open" : "closed"}
            className="mx-[0.05rem] sm:max-lg:mx-[0.1rem] lg:mx-[0.2rem]"
          >
            <Image
              src={`${src}`}
              alt=""
              width={0}
              height={0}
              sizes="10vw"
              style={{ width: "auto", height: "4vh" }}
              className="py-2"
            />
          </motion.div>
          <p className="">{title2}</p>
        </Link>
        <motion.div
          id="preview"
          className="absolute left-0 -ml-[45vw] -z-10 "
          variants={fadeIn}
          animate={isActive ? "open" : "closed"}
        >
          <Image
            src={`${src}`}
            alt=""
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "35vw", height: "auto" }}
            className="border-white my-2"
          />
        </motion.div>
        <motion.div
          className="absolute justify-center left-0 ml-[16vw] flex flex-row text-[0.9rem] py-[0.58rem] text-nowrap px-2" //appear beside project-name
          variants={fadeIn}
          animate={isActive ? "open" : "closed"}
        >
          {details}
        </motion.div>
      </div>
    </>
  );
}
