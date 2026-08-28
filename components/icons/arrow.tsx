import Image from "next/image";

export default function Arrow() {
  return (
    <Image
      src="/icons/arr.svg"
      alt="arrow"
      width={0}
      height={0}
      sizes="auto"
      style={{ width: "auto", height: "0.7rem" }}
      className="ml-1 mb-0.5"
    />
  );
}
