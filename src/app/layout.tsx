import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { site } from "@/config/site";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
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
    <html
      lang="en"
      className="h-full"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <body
        className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} flex min-h-full flex-col antialiased`}
      >
        <PersonJsonLd />
        <SiteAnalytics />
        {children}
      </body>
    </html>
  );
}
