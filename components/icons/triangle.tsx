import Image from "next/image";

export default function Triangle() {
  return (
    <Image
      src="/icons/triangle.svg"
      alt=""
      width={10}
      height={10}
      style={{ width: "0.7rem", height: "0.7rem" }}
      className="self-center mb-1"
    ></Image>
  );
}
