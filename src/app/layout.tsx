import {
  GeistPixelCircle,
  GeistPixelGrid,
  GeistPixelLine,
  GeistPixelSquare,
  GeistPixelTriangle,
} from "geist/font/pixel";
import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "OpenWhisper",
  description: "OpenWhisper — Just Speak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${serif.variable} ${GeistPixelSquare.variable} ${GeistPixelLine.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable}  ${GeistPixelTriangle.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
