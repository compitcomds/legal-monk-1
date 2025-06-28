import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import FooterSection from "../components/FooterSection";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Monk",
  description: "A Blogs Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${poppins.className} ${geistMono.variable} pt-3 antialiased md:pt-5`}
      >
        <main className="px-5 2xl:px-32">
          <Navbar />
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}
