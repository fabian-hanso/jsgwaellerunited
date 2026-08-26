"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/tailgrids/core/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

const images = [
    "/Ball_Hero.jpg",
    "/Marius_Hero.jpg",
]

export default function CarouselPreview() {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="w-full mx-auto">
      <Carousel className="w-full" plugins={[autoplay]}>
        <CarouselContent>
          {images.map(el => (
            <CarouselItem key={el}>
              <div className="bg-background-50 flex items-center justify-center relative aspect-3/2 lg:aspect-5/2 lg:max-h-[calc(100vh-80px)] overflow-hidden">
                <img src={el} alt="" className="w-full h-full object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 rounded-none cursor-pointer" />
        <CarouselNext className="right-4 rounded-none cursor-pointer"/>
      </Carousel>
    </div>
  );
}
