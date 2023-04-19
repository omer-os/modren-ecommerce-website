import Image from "next/image";
import React from "react";

interface UiProductImageGalleryProps {}

const images = [
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
  "https://i.ibb.co/7bQQYkX/jean.jpg",
];

export default function UiProductImageGallery(
  props: UiProductImageGalleryProps
) {
  return (
    <div
      className="grid 
      max-width-[20em]
      w-full 
  sm:h-[30em]
  h-[15em]

  sm:grid-cols-[minmax(18em,_1fr)_minmax(9em,_10em)] 
  grid-cols-[1fr_minmax(4em,_5em)] 

  grid-rows-3
  sm:gap-4
  gap-3
  transition-all
  "
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative 
        ${index === 0 && "row-span-3"} overflow-hidden rounded-xl`}
        >
          <Image
            alt=""
            src={image}
            fill
            className={`w-full hover:scale-110 transition-all rounded-xl h-full object-cover`}
          />
        </div>
      ))}
    </div>
  );
}
