import type { Metadata } from "next";
import type { ReactNode } from "react";


import { Toaster } from "@/components/ui/toaster";


import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Fender",
  title: "Fender",
  description: "Token Vesting on Algorand",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
