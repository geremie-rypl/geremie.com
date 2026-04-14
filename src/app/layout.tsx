import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Geremie Camara — Entrepreneur, TV Producer & Gaming Founder",
    template: "%s | Geremie Camara",
  },
  description:
    "Los Angeles-based entrepreneur, TV producer, and gaming industry founder. CoFounder of Live Play Mobile with 30+ years of product experience.",
  metadataBase: new URL("https://geremie.com"),
  openGraph: {
    title: "Geremie Camara",
    description:
      "Entrepreneur, TV Producer & Gaming Founder — Building things that move people.",
    url: "https://geremie.com",
    siteName: "Geremie Camara",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geremie Camara",
    description: "Entrepreneur, TV Producer & Gaming Founder",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
