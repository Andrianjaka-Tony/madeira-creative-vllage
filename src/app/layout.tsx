import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", display: "swap" });
const inter = Inter({ variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ variable: "--font-bebas", weight: "400", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://madeiracreativevillage.com"),
  title: "Madeira Creative Village — Pole Dance Retreat in Madeira Island",
  description:
    "A 7-day lyrical pole dance retreat in Madeira Island, Portugal. Small groups, breathtaking nature, professional coaching. From 1850€ per person.",
  openGraph: {
    title: "Madeira Creative Village — Pole Dance Retreat",
    description:
      "A 7-day lyrical pole dance retreat in Madeira Island, Portugal. Small groups, breathtaking nature, professional coaching.",
    images: [{ url: "/images/coverImg.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/coverImg.jpg"],
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
        {/* Preload vidéo hero pour réduire le temps de chargement initial */}
        <link rel="preload" href="/trimmed.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}
