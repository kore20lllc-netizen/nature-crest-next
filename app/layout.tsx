import "./globals.css";
import "@fontsource/inter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://naturecrest.com"),
  title: "Nature Crest | Climate & Nature Solutions",
  description:
    "Nature Crest designs and scales climate and nature-based solutions across Africa.",
  openGraph: {
    title: "Nature Crest",
    description: "Scaling climate and nature-based solutions across Africa.",
    url: "https://naturecrest.com",
    siteName: "Nature Crest",
    images: [
      {
        url: "/assets/forest-hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
