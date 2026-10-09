import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

// One refined grotesque in mixed case, light display weights (Square One's architectural calm, without the shouting caps).
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Blk Box Maintenance · Home, concept B (visual design, step 06)",
  description: "24/7 commercial door repair in Calgary for property and building managers.",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#f4f2ed" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
