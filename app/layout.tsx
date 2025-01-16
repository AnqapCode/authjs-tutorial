import type { Metadata } from "next";
import { Atomic_Age } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const geistMono = Atomic_Age({
  weight: "400",
  style: "normal",
  variable: "--Atomic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
