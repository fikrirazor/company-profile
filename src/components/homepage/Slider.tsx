import image1 from "@/assets/images/camera-6609535_1920.jpg";
import image2 from "@/assets/images/bread-8420931_1920.jpg";
import image3 from "@/assets/images/2dc6c641864a6d1fb671bab2e53d24a0.jpg";
import AnimatedContent from "@/components/AnimatedContent";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

const slides = [
  {
    title: "LEAVE YOUR VISUAL MARK",
    subtitle: "Every brand has a story. We capture it visually.",
    image: image1,
  },
  {
    title: "DETAILS THAT SPEAK",
    subtitle: "We meticulously craft every element, from concept to final result.",
    image: image2,
  },
  {
    title: "VISUALS THAT TRANSFORM STORIES",
    subtitle: "Increase engagement and sales with content that touches the audience's heart.",
    image: image3,
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
    <div className="w-full overflow-hidden ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "center"
        }}
        className="w-full"
      >
        <CarouselContent className="w-full m-0">
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="relative w-full min-h-screen flex items-center justify-center p-0"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-surface-dark/50" />
              <div className="relative z-10 text-center text-text-light px-4 max-w-4xl mx-auto">
                <AnimatedContent
                  distance={160}
                  direction="vertical"
                  reverse={false}
                  duration={1.5}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1}
                  threshold={0.3}
                  delay={0.3}
                  disappearEase="power3.in"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-body opacity-90">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8">
                    <a href="#services">
                      <Button
                        variant="link"
                        className="bg-transparent text-text-light  border border-text-light/50 hover:bg-surface-dark/50 hover:text-text-light font-bold px-8 py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        See Our Product{" "}
                        <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                          &gt;
                        </span>
                      </Button>
                    </a>
                  </div>
                </AnimatedContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Slider;