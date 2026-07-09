import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlantis Homes III",
  description:
    "Atlantis Homes 3 brings crafted architecture, calm interiors and generous outdoor spaces to a refined seaside address just three minutes from the beach.",
  metadataBase: new URL("https://www.atlantishomes3.com"),
  openGraph: {
    title: "Atlantis Homes III",
    description:
      "Three minutes from the beach, with open sea views. Refined coastal architecture, generous light, and a daily rhythm that balances privacy with resort-style ease.",
    type: "website",
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
      className={`${inter.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
