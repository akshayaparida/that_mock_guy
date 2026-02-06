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
  title: "That Mock Guy | CUET PG CS Mock 2026",
  description: "Minimalist, distraction-free mock exam platform tailored for CUET PG Computer Science aspirants. Features strict NTA exam simulation and untimed study mode with detailed explanations.",
  keywords: ["CUET PG CS", "Mock Exam", "Computer Science", "NTA Pattern", "Study Mode", "Mock Test", "2026", "Gateway to SCQU"],
  openGraph: {
    title: "That Mock Guy | CUET PG CS Mock 2026",
    description: "Minimalist mock exams for serious aspirants.",
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
