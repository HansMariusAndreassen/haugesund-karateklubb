import { Footer } from "@/components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderWrapper } from "@/Header/HeaderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haugesund Karateklubb",
  description: "Created with Next.js and shadcn/ui",
  keywords: "karate, haugesund, kampsport, selvforsvar", // Add relevant keywords
  openGraph: {
    title: "Haugesund Karateklubb",
    description: "Join Haugesund Karateklubb for martial arts training.",
    url: "https://haugesundkarate.no", // Example URL
    siteName: "Haugesund Karateklubb",
    images: [
      {
        url: "/karateklubblogo.svg", // Add an appropriate OpenGraph image
        width: 1200,
        height: 630,
        alt: "Haugesund Karateklubb",
      },
    ],
    type: "website",
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
