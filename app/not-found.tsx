import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="w-screen h-full bg-green bg-cover absolute -z-50"></div>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center relative">
        <div className="flex flex-col justify-center items-center tracking-wide">
          <p className="font-garamond font-extralight text-[10rem] leading-none tracking-wider">
            404
          </p>
          <p>The page you are looking for cannot be found.</p>
        </div>
        <Link
          href="/"
          className="opacity-70 uppercase hover:opacity-100 hover:italic underline underline-offset-4 justify-self-end py-5 absolute bottom-0"
        >
          Return home
        </Link>
      </div>
    </>
  );
}
