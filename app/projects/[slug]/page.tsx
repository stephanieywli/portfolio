import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { projects } from "@/components/projects";
import Image from "next/image";
import Nav from "@/components/layout/navProjects";

const getProjContent = (slug: string) => {
  const folder = "projects/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  return projects.map((proj) => ({ slug: proj.slug }));
};

export default function Page(props: any) {
  const slug = props.params.slug;
  const proj = getProjContent(slug);
  return (
    <>
      <Nav />
      <div className="flex flex-col lg:flex-row lg:justify-between w-screen text-black tracking-wider">
        <div
          id="content-left"
          className="flex flex-col gap-4 4k:gap-10 w-full lg:w-[35vw] lg:h-full lg:fixed py-40 px-10 items-start bg-grey-100"
        >
          <h1 className="font-garamond font-light text-[5rem] leading-none -mt-4 -ml-[2px]">
            {proj.data.title}
          </h1>
          <p className="leading-tight pt-2">{proj.data.subtitle}</p>
          <div className="flex flex-row gap-6 font-medium uppercase w-full">
            {proj.data.links.map((link: any) => (
              <a
                key={link}
                href={Object.values<string>(link).toString()}
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-row items-center hover:opacity-70 hover:italic"
              >
                {Object.keys(link)} ⤴
              </a>
            ))}
          </div>
          <div className="flex flex-col w-full py-6 ">
            {proj.data.details.map((x: any) => (
              <div
                key={x}
                className="flex flex-row py-2 justify-between border-b border-b-off-white-400 capitalize last:border-b-0"
              >
                <p className="font-semibold opacity-40">{Object.keys(x)}</p>
                <p className="text-right">{Object.values(x)}</p>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-row w-[25vw] gap-3 justify-end self-end absolute bottom-0 mb-8 mt-20">
            {proj.data.screens.map((img: any) => (
              <Image
                key={img}
                src={img}
                alt=""
                width={0}
                height={0}
                sizes="24%"
                fill={false}
                style={{ width: "24%", height: "auto" }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="content-right"
        className="flex flex-col gap-4 4k:gap-10 w-full lg:w-[65vw] items-start justify-start pb-44 lg:py-44 px-10 lg:px-20 lg:absolute lg:right-0 lg:top-0 bg-grey-100"
      >
        <div className="flex w-full h-fit overflow-hidden items-center justify-start">
          <Image
            src={proj.data.hero}
            alt=""
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          ></Image>
        </div>
        <article className="prose sm:max-4k:prose-lg 4k:prose-2xl prose-a:text-[#237BFF] text-black max-w-none lg:max-w-[80%] tracking-wider">
          <Markdown>{proj.content}</Markdown>
        </article>
        <p className="absolute bottom-0 my-8 py-3 w-[80vw] lg:w-[90%] border-b text-black leading-none italic opacity-20">
          You&apos;ve reached the end
        </p>
      </div>
    </>
  );
}
