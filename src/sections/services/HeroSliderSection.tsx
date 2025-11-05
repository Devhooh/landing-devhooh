"use client";
import HeroSlideLeft from "./hero-slides/HeroSlideLeft";
import HeroSlideCenter from "./hero-slides/HeroSlideCenter";
import HeroSlideRight from "./hero-slides/HeroSlideRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="w-full mx-auto bg-colorPrimario6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 7000 }}
        loop
        // className="w-full mx-auto bg-colorSecundario"
      >
        {/* Slide 1: HeroSlideLeft */}
        <SwiperSlide>
          <HeroSlideLeft/>
        </SwiperSlide>

        {/* Slide 2: HeroSlideCenter */}
        <SwiperSlide>
          <HeroSlideCenter/>
        </SwiperSlide>

        {/* Slide 3: HeroSlideRight */}
        <SwiperSlide>
          <HeroSlideRight/>
        </SwiperSlide>

        {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/35 hover:bg-white/20 p-5 rounded-full">
            <ChevronLeft className="w-8 h-8 text-colorPrimario1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/35 hover:bg-white/20 p-5 rounded-full">
            <ChevronRight className="w-8 h-8 text-colorPrimario1" />
          </div>

      </Swiper>
    </section>
  );
}