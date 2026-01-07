import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KGF Fitness | Dighi's Premier Gym",
  description: "Dighi's most spacious fitness destination. 5,000 Sq Ft of Kinetic Luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-void-navy text-slate-grey`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
