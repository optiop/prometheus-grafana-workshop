import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "./lib/utils";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creating Custom Visualisation Apps",
  description: "Create custom visualisation apps with Grafana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.className}`}>
      <head>
        <link rel="icon" href="optiop.svg" type="image/svg+xml" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DotPattern
          width={24}
          height={24}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "h-full [mask-image:linear-gradient(to_left,transparent,white,transparent)]"
          )}
        />
        {children}
      </body>
    </html>
  );
}
