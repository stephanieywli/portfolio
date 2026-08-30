import Link from "next/link";

export const Home = () => (
  <>
    {" "}
    <p className="text-sm uppercase bg-black w-fit text-off-white px-1 font-semibold mb-2">
      stephanie li
    </p>
    <p className="text-sm">
      <b className="font-semibold">in summary:</b> a software developer & cat
      mom
    </p>
    <p className="text-sm">
      <b className="font-semibold">main proficiencies:</b> typescript, python,
      react, sql
    </p>{" "}
    {/* <p className="text-sm">
      <b className="font-semibold">recent interests:</b> ???
    </p> */}
    <p className="text-sm">
      <b className="font-semibold">born and based in:</b> toronto, CA
    </p>{" "}
    <p className="text-sm font-semibold">
      previously @{" "}
      <Link
        href="https://theijf.org"
        className="font-normal text-sm"
        target="_blank"
      >
        The Investigative Journalism Foundation
      </Link>
    </p>
  </>
);
