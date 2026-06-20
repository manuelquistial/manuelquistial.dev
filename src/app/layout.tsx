import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-full flex flex-col antialiased`}
      >
        <PersonJsonLd />
        <SiteAnalytics />
        {children}
      </body>
    </html>
  );
}
