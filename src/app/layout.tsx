import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderWrapper } from "@/Header/HeaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haugesund Karateklubb",
  description: "Klubben for alle.",
  keywords: "karate, haugesund, kampsport, selvforsvar",
  openGraph: {
    title: "Haugesund Karateklubb",
    description: "Klubben for alle.",
    url: "https://haugesundkarate.no",
    siteName: "Haugesund Karateklubb",
    images: [
      {
        url: "/hkkLogo.png",
        width: 600,
        height: 315,
        alt: "Haugesund Karateklubb",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const navItems = [
  { href: "/skolekarate", label: "Skolekarate" },
  { href: "/treningstilbud", label: "Treningstilbud" },
  { href: "/medlem", label: "Bli medlem" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/blogg", label: "Blogg" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <div className="bg-image bg-black blur-sm"></div>
        <HeaderWrapper navItems={navItems} />
        <main className="flex-grow container mx-auto px-4 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
