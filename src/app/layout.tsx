import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteContent } from "@/content";
import { site } from "@/config/site";
import { buildPageMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  ...buildPageMetadata({
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    path: "",
    fullTitle: true,
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} min-h-full flex flex-col antialiased`}
      >
        <SkipLink label={siteContent.a11y.skipToContent} />
        <Header content={siteContent} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer content={siteContent} />
      </body>
    </html>
  );
}
