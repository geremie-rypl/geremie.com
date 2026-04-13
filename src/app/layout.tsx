import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Geremie Camara | Software Engineer & Creative Technologist",
    template: "%s | Geremie Camara",
  },
  description:
    "Personal portfolio and blog of Geremie Camara — software engineer, creative technologist, and builder of digital products.",
  metadataBase: new URL("https://geremie.com"),
  openGraph: {
    title: "Geremie Camara",
    description: "Software Engineer & Creative Technologist",
    url: "https://geremie.com",
    siteName: "Geremie Camara",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geremie Camara",
    description: "Software Engineer & Creative Technologist",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
