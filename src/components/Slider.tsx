"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Build Your Web Experience",
    subtitle: "High performance, modern UI, and clean code.",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80",
  },
  {
    title: "Creative Digital Solutions",
    subtitle: "Crafting interfaces that users love.",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80",
  },
  {
    title: "Full-Stack Development",
    subtitle: "From frontend to backend, I build it all.",
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80",
  },
];

function Slider() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className="w-screen h-screen overflow-hidden"
    >
      <CarouselContent className="h-screen">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="relative w-screen h-screen flex items-center justify-center"
          >
            
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            
            <div className="absolute inset-0 bg-black/50" />

            
            <div className="relative z-10 text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg opacity-90">{slide.subtitle}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default Slider;
