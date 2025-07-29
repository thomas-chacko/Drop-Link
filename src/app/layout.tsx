import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drop Link - One Link. Endless Possibilities.",
  description:
    "Drop all your important links in one place and share a single, smart URL with your audience. Create your link collection today.",
  keywords: ["link sharing", "bio link", "social media links", "link tree", "url shortener"],
  authors: [{ name: "Drop Link" }],
  openGraph: {
    title: "Drop Link - One Link. Endless Possibilities.",
    description: "Drop all your important links in one place and share a single, smart URL with your audience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
