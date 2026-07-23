import LandingTracker from "@/components/marketing/landing-tracker";
import MetaPixel from "@/components/marketing/meta-pixel";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LudoWin Free Play | Classic Ludo Online",
  description:
    "Play a fast, colourful and familiar classic Ludo game with friends and family on any device.",
  applicationName: "LudoWin Free Play",
  keywords: ["Ludo", "classic board game", "free play", "mobile game"],
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0917",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        <LandingTracker />
        {children}
      </body>
    </html>
  );
}
