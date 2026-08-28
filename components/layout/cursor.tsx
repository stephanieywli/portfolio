import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const anim = {
    default: {
      x: x - 20,
      y: y - 20,
    },
  };
  const anim2 = {
    default: {
      x: x - 8,
      y: y - 8,
    },
  };

  return (
    <>
      <motion.div
        variants={anim}
        animate="default"
        transition={{ type: "spring", stiffness: 100 }}
        id="cursor"
        className="hidden md:block w-[60px] h-[60px] bg-[#fff] mix-blend-overlay rounded-full fixed top-0 bottom-0 z-50 pointer-events-none"
      ></motion.div>
      <motion.div
        variants={anim2}
        animate="default"
        transition={{ type: "spring", stiffness: 300 }}
        id="cursor"
        className="hidden md:block w-[16px] h-[16px] bg-red-800 rounded-full fixed top-0 bottom-0 z-[51] pointer-events-none"
      ></motion.div>
    </>
  );
}
