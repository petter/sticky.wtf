import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sticky",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "text-indigo-900")}>
        <main className="h-screen w-screen flex justify-center p-4">
          {children}
        </main>
        <div className="flex">
          <div className="bg-[#ffb3ba] pt-4 w-4"></div>
          <div className="bg-[#ffdfba] pt-4 w-4"></div>
          <div className="bg-[#bffcc6] pt-4 w-4"></div>
          <div className="bg-[#b3e5fc] pt-4 w-4"></div>
          <div className="bg-[#d4baff] pt-4 w-4"></div>
        </div>
      </body>
    </html>
  );
}
