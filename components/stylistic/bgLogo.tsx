"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroFooter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0vh", "end 65vh"], //"target container"
  });
  const fade = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, 1]);

  return (
    <motion.div
      ref={ref} //target
      style={{ opacity: fade }}
      className="absolute left-0 self-center mt-10 -z-10"
    >
      <Image
        src="/icons/py-logo-skew.svg"
        alt=""
        width={0}
        height={0}
        sizes="auto"
        style={{ width: "auto", height: "28%" }}
        className="mt-10"
      />
    </motion.div>
  );
}

export default HeroFooter;
