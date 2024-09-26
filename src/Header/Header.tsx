import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type headerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: { href: string; label: string }[];
};

export const Header = (props: headerProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Haugesund Karateklubb
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {props.navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Sheet open={props.isOpen} onOpenChange={props.setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Åpne meny</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-6">
              {props.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800"
                  onClick={() => props.setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
