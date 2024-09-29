import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: { href: string; label: string }[];
};

export const Header = ({ isOpen, setIsOpen, navItems }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Image
            src={"/karateklubblogo.svg"}
            alt="Karate Klubb Logo"
            width={100}
            height={141}
            style={{ width: "100%", height: "auto", maxWidth: "40px" }}
          />
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
            Haugesund Karateklubb
          </h1>
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="z-[999]">
            <SheetTitle>Haugesund Karateklubb</SheetTitle>
            <SheetDescription className="sr-only">
              Navigasjonsmeny for Haugesund Karateklubb
            </SheetDescription>
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-center items-center min-h-screen">
              <Image
                src="/karateklubblogo.svg"
                alt="Karate Klubb Logo"
                width={100}
                height={141}
                style={{ width: "100%", height: "auto", maxWidth: "240px" }}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
