import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Menu = () => {
  const lenis = useLenis();
  const path = usePathname();

  return (
    <div className="w-[8vw] h-fit flex flex-col gap-2 items-end self-center mt-[3.5rem] pr-20">
      <Link
        className=" relative hover:opacity-70 hover:italic group transition"
        href="/"
        onClick={() => lenis.scrollTo("top", { lerp: 0.1, lock: true })}
      >
        Home
        {"/" === path && (
          // line change
          <motion.span className="block w-[95%] border-b-[1px] -mt-1"></motion.span>
        )}
        {"/" !== path && (
          // underline
          <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
        )}
      </Link>
      <Link
        className=" relative hover:opacity-70 hover:italic group transition"
        href="/"
        onClick={() =>
          lenis.scrollTo("#projects-section", { lerp: 0.1, lock: true })
        }
      >
        Projects
        <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
      </Link>
      <Link
        href="/about"
        className="relative hover:opacity-70 hover:italic group transition"
      >
        About
        {"/about" === path && (
          // line change
          <motion.span className="block w-[95%] border-b-[1px] -mt-1"></motion.span>
        )}
        {"/about" !== path && (
          // underline
          <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
        )}
      </Link>
      <Link
        href="https://drive.google.com/file/d/1beD_sMBudifgmaWisTbUJ2jotgSL2wTa/view?usp=drive_link"
        target="_blank"
        className="relative hover:opacity-70 hover:italic group transition"
      >
        Resume
        <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
      </Link>
      <Link
        href=""
        className="relative hover:opacity-70 hover:italic group transition"
        onClick={() => lenis.scrollTo("bottom", { lerp: 0.1, lock: true })}
      >
        & Socials.
        <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
      </Link>
    </div>
  );
};

export default Menu;
