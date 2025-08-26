import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import localFont from "next/font/local";
import "./globals.css";
import "./maps.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sabidzpro.my.id"),
  title: {
    default: "Saiful Abidin - Full Stack Developer | Professional Portfolio",
    template: "%s | Saiful Abidin",
  },
  description:
    "Full Stack Developer from Indonesia specializing in React, Next.js, Node.js, and modern web technologies. Over 5 years of experience building scalable web applications, e-commerce platforms, and innovative digital solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Saiful Abidin Portfolio",
    title: "Saiful Abidin - Full Stack Developer",
    description:
      "Full Stack Developer from Indonesia specializing in React, Next.js, Node.js, and modern web technologies.",
    images: [
      {
        url: "/images/logo/React.svg",
        width: 1200,
        height: 630,
        alt: "Saiful Abidin Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saiful Abidin - Full Stack Developer",
    description:
      "Full Stack Developer from Indonesia specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/images/logo/React.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19222D",
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
        <Analytics />
      </body>
    </html>
  );
}
