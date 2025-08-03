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
  title:
    "TechVibe Global - Innovative Engineering Solutions | Fire Safety, Electrical Safety & IT Surveillance",
  description:
    "TechVibe Global provides innovative engineering solutions in Fire & Life Safety, Electrical Safety, and IT & Surveillance in Bangladesh. Founded in 2017, we connect technology and sustainability with expert services in Dhaka and Chittagong.",
  keywords: [
    "TechVibe Global",
    "engineering solutions Bangladesh",
    "fire safety engineering",
    "electrical safety",
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
    "safety audits",
    "risk assessment",
  ],
  authors: [{ name: "TechVibe Global" }],
  creator: "TechVibe Global",
  publisher: "TechVibe Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.techvibeglobal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechVibe Global - Innovative Engineering Solutions",
    description:
      "Expert Fire Safety, Electrical Safety & IT Surveillance solutions in Bangladesh. Founded in 2017, connecting technology and sustainability.",
    url: "https://www.techvibeglobal.com",
    siteName: "TechVibe Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "TechVibe Global - Engineering Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVibe Global - Innovative Engineering Solutions",
    description:
      "Expert Fire Safety, Electrical Safety & IT Surveillance solutions in Bangladesh.",
    images: ["/logo.png"],
    creator: "@techvibeglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TechVibe Global" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        <meta name="application-name" content="TechVibe Global" />
        <meta name="apple-mobile-web-app-title" content="TechVibe Global" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
