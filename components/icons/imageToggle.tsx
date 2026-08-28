import Image from "next/image";

export default function ImageToggle({ src }: any) {
  return (
    <Image
      src={src}
      alt=""
      width={0}
      height={0}
      sizes="100%"
      style={{ width: "auto", height: "100%", objectFit: "contain" }}
      quality={100}
      priority={true}
      className="border"
    />
  );
}
