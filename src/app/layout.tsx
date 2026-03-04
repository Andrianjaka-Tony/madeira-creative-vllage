import type { Metadata } from "next";
import { Playfair_Display, Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ variable: "--font-playfair", display: "swap" });
const inter = Inter({ variable: "--font-inter", display: "swap" });
const bebas = Bebas_Neue({ variable: "--font-bebas", weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Madeira Creative Village",
  description: "Website for Madeira Creative Village",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${bebas.variable} antialiased`}>{children}</body>
    </html>
  );
}
