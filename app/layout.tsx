import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Stephanie Li",
  description: "a portfolio by Stephanie Li",
  creator: "Stephanie Li",
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
    <html
      lang="en"
      className="text-[0.9rem] sm:max-4k:text-[1.1rem] 4k:text-[1.7rem]"
      suppressHydrationWarning
    >
      <body
        className={`${mono.variable} bg-off-white font-mono text-ink overscroll-none overflow-x-hidden relative`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
