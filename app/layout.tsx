import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";

import "./globals.css";

import AsciiFlower from "@/components/layout/asciiFlower";

const metadata: Metadata = {
  title: "Stephanie Li",
  description:
    "Personal portfolio created by Stephanie Li. Powered by Next.js, Typescript, and Tailwind CSS.",
  creator: "Stephane Li",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

const mono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${mono.variable} bg-off-white font-mono text-black text-[0.9rem] sm:max-4k:text-[1.1rem] 4k:text-[1.65rem] antialiased select-none overscroll-none overflow-x-hidden relative`}
      >
        <AsciiFlower />
        {children}
      </body>
    </html>
  );
}
