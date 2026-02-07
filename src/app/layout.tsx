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
  metadataBase: new URL('https://thatmockguy.com'),
  title: {
    default: "That Mock Guy | CUET PG CS Mock 2026",
    template: "%s | That Mock Guy"
  },
  description: "Minimalist, distraction-free mock exam platform tailored for CUET PG Computer Science aspirants. Features strict NTA exam simulation and untimed study mode with detailed explanations.",
  keywords: ["CUET PG CS", "Mock Exam", "Computer Science", "NTA Pattern", "Study Mode", "Mock Test", "2026", "Gateway to SCQU", "SCQP09", "MCA Entrance"],
  authors: [{ name: "Akshaya Parida" }],
  creator: "Akshaya Parida",
  publisher: "That Mock Guy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "That Mock Guy | CUET PG CS Mock 2026",
    description: "Minimalist mock exams for serious aspirants. No distractions. Just high-quality questions and a real exam interface.",
    url: 'https://thatmockguy.com',
    siteName: 'That Mock Guy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "That Mock Guy | CUET PG CS Mock 2026",
    description: "Minimalist mock exams for serious aspirants.",
    creator: '@thatmockguy', // Placeholder, update if real handle exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: "zuI8RIRSltBbPN6GylhQSxA4mTxjT05V-BQUnwYzIPQ",
  },
};

export const viewport = {
  themeColor: 'black',
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
