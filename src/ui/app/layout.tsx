import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azure Draw.io Assets | Bites In Byte",
  description:
    "Browse and search 600+ Azure service icons for Draw.io diagrams. Continuously updated from official Microsoft Azure icon sets.",
  keywords: [
    "Azure",
    "Draw.io",
    "icons",
    "SVG",
    "diagrams",
    "architecture",
    "cloud",
  ],
  authors: [{ name: "Bites In Byte", url: "https://bitesinbyte.com" }],
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicons/android-chrome-192x192.png",
      },
    ],
  },
  openGraph: {
    title: "Azure Draw.io Assets | Bites In Byte",
    description:
      "Browse and search 600+ Azure service icons for Draw.io diagrams.",
    url: "https://bitesinbyte.com",
    siteName: "Bites In Byte",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
