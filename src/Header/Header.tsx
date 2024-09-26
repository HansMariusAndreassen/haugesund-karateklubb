import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <Image src="/logo.jpg" alt="Logo" width={70} height={70} />
          <h1 className="text-2xl font-bold text-gray-800">
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
              <Menu className="h-6 w-6" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
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
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
