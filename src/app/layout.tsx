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
        url: "/logo.jpg",
        width: 100,
        height: 100,
        alt: "Haugesund Karateklubb",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
};

const navItems = [
  { href: "/treningstilbud", label: "Treningstilbud" },
  { href: "/medlem", label: "Bli medlem" },
  { href: "/sponsor", label: "Sponsor" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body className={inter.className}>
        <div className="bg-image"></div>
        <HeaderWrapper navItems={navItems} />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
