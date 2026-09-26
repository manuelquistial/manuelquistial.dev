import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { site } from "@/config/site";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
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
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} flex min-h-full flex-col antialiased`}
      >
        <PersonJsonLd />
        <SiteAnalytics />
        {children}
      </body>
    </html>
  );
}
