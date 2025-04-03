import * as React from "react";
import "./global.css";
import type { Metadata } from "next";
import Navbar from "src/components/navbar";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jbm = JetBrains_Mono({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tortoise OS",
  description: "Tortoise OS page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={jbm.className}>
        <div id="root">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
