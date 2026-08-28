import Image from "next/image";

const images = [
  { src: "/marquee/py-logo.svg", alt: "" },
  { src: "/marquee/react-logo.svg", alt: "" },
  { src: "/marquee/nn-logo.svg", alt: "" },
];

const Marquee = () => {
  return (
    <div
      id="marquee"
      className="flex items-center justify-start h-[10vh] lg:max-2xl:h-[15vh] 2xl:h-[18vh] mb-[5vh] relative select-none text-grey whitespace-nowrap 
      font-garamond font-light text-[8rem] lg:max-2xl:text-[10rem] 2xl:max-4k:text-[11.5rem] 4k:text-[15rem]
      italic letter-spacing-[-1vw] leading-[100%] text-nowrap"
    >
      <div
        id="marquee-content"
        className="flex flex-row flex-shrink-0 items-center justify-around h-[100%] min-w-[100%] animate-scroll-x"
      >
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "auto", height: "100%" }}
            className="mx-1"
          />
        ))}
        <div className={`flex items-center`}>it&apos;s nice to meet you</div>
      </div>
      <div
        id="marquee-content"
        className="flex flex-row flex-shrink-0 items-center justify-around h-[100%] min-w-[100%] animate-scroll-x"
      >
        {images.map((img) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "auto", height: "100%" }}
            className="mx-1"
          />
        ))}
        <div className={`flex items-center`}>it&apos;s nice to meet you</div>
      </div>
    </div>
  );
};

export default Marquee;
