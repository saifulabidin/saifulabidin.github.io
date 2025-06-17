import type { Metadata } from "next";
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
  title: "Saiful Abidin - Full Stack Developer | Professional Portfolio",
  description: "Full Stack Developer from Indonesia specializing in React, Next.js, Node.js, and modern web technologies. Over 5 years of experience building scalable web applications, e-commerce platforms, and innovative digital solutions.",
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
