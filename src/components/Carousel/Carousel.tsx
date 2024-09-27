"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface ImageType {
  src: string;
  alt: string;
}

interface ShadcnCarouselProps {
  images: ImageType[];
  initialIndex?: number;
}

const ShadcnCarousel: React.FC<ShadcnCarouselProps> = ({
  images,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [open, setOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Åpne Galleri</Button>
        </DialogTrigger>
        <DialogContent className="p-0 px-2 bg-black rounded-lg">
          <DialogTitle>Image Gallery</DialogTitle>

          <div className="flex justify-between items-center p-2 bg-black rounded-lg">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              <X className="w-6 h-6 text-white" />
            </Button>
          </div>
          <div className="relative w-full flex items-center justify-center bg-black">
            {images.length > 0 && (
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={630}
                className="w-full h-auto rounded-lg"
              />
            )}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-white py-2">
            {currentIndex + 1} / {images.length}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShadcnCarousel;
