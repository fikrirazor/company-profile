
import image1 from "@/assets/images/camera-6609535_1920.jpg"
import image2 from "@/assets/images/bread-8420931_1920.jpg"
import image3 from "@/assets/images/2dc6c641864a6d1fb671bab2e53d24a0.jpg"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "INGGALKAN JEJAK VISUALMU",
    subtitle: "Setiap brand punya cerita. Kami yang mengabadikannya dalam visual.",
    image: image1,
  },
  {
    title: "DETAIL YANG BERBICARA",
    subtitle: "Kami merangkai setiap elemen dengan ketelitian, dari konsep hingga hasil akhir.",
    image: image2,
  },
  {
    title: "VISUAL YANG MENGUBAH CERITA",
    subtitle: "Tingkatkan engagement dan penjualan dengan konten yang menyentuh hati audiens.",
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
