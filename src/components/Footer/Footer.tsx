import { Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="sm:text-xl font-bold mb-2">Haugesund Karateklubb</h3>
            <p>Røldalvegen 6, 5521 Haugesund</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/HaugesundKK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/haugesundkarateklubb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a href="mailto:hanserikhornell@gmail.com" aria-label="E-post">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-sm pt-6 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Haugesund Karateklubb. Alle
            rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
};
