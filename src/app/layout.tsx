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
  title: "TechVibe Global - Innovative Engineering Solutions",
  description:
    "TechVibe Global provides innovative engineering solutions in Fire & Life Safety, Electrical Safety, and IT & Surveillance in Bangladesh. Founded in 2017, we connect technology and sustainability with expert services in Dhaka and Chittagong.",
  keywords: [
    "TechVibe Global",
    "fire safety",
    "engineering solutions Bangladesh",
    "fire safety engineering",
    "electrical safety",
    "electrical products",
    "fire alarm system",
    "IT surveillance",
    "NFPA compliance",
    "OSHA standards",
    "fire protection systems",
    "electrical hazard analysis",
    "CCTV systems",
    "access control",
    "Dhaka engineering",
    "Chittagong engineering",
    "sustainable infrastructure",
    "security system",
    "safety audits",
    "risk assessment",
  ],
  authors: [{ name: "TechVibe Global" }],
  creator: "TechVibe Global",
  publisher: "TechVibe Global",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
