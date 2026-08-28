"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroFooter() {
  const lenis = useLenis(({ scroll }) => {});

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 95vh"], //"target container"
  });
  const fade = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, 1]);

  return (
    <motion.div
      ref={ref} //target
      style={{ opacity: fade }}
      className="flex flex-row w-fit h-[4.5rem] 4k:h-[4rem] absolute bottom-0 my-4 px-5 self-center ml-[33vw] text-grey uppercase"
    >
      <Link
        href="/"
        className="flex flex-row gap-2 4k:gap-4 hover:opacity-70 h-[4.5rem] 4k:h-[4rem]"
        onClick={() => lenis.scrollTo("#projects-section", { lerp: 0.07 })}
      >
        <div className="flex flex-col items-end leading-5 4k:leading-8">
          <p>Dive</p> <p>Deeper</p>
        </div>

        <Image
          src="/icons/diver.svg"
          alt="footer img"
          width={0}
          height={0}
          sizes="auto"
          style={{ width: "auto", height: "100%" }}
          className="border -ml-5 -mr-8"
        ></Image>
        <Image
          src="/icons/arrow.svg"
          alt="footer img"
          width={0}
          height={0}
          style={{ width: "auto", height: "2.5rem" }}
        ></Image>
      </Link>
    </motion.div>
  );
}

export default HeroFooter;
