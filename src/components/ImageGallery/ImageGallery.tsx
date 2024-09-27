"use client"; // Mark this file as a client component

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Using shadcn/ui components
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional icons for navigation
import { Button } from "@/components/ui/button";

type ImageType = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: ImageType[];
  title: string;
};

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main Image */}
      <div
        className="mb-6 cursor-pointer"
        onClick={() => {
          setIsOpen(true);
          setCurrentIndex(0);
        }}
      >
        <Image
          src={images[0].src}
          alt={images[0].alt || title}
          width={800}
          height={450}
          className="object-cover w-full h-auto rounded-lg"
          priority={true}
        />
      </div>

      {/* Gallery Thumbnails */}
      <div className="mb-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => {
              setIsOpen(true);
              setCurrentIndex(index + 1);
            }}
          >
            <Image
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Dialog Modal for Enlarged Image */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl bg-white p-6">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {/* Image Display */}
          <div className="relative">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1200}
              height={800}
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between mt-4">
            <Button
              onClick={() =>
                setCurrentIndex(
                  (currentIndex - 1 + images.length) % images.length
                )
              }
              variant="outline"
              className="mr-4"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </Button>

            <Button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % images.length)
              }
              variant="outline"
            >
              Next <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
