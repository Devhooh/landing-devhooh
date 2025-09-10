"use client";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        {/* Slide 1: HeroLeft */}
        <SwiperSlide>
          <HeroLeft/>
        </SwiperSlide>

        {/* Slide 2: HeroCenter */}
        <SwiperSlide>
          <HeroCenter/>
        </SwiperSlide>

        {/* Slide 3: HeroRight */}
        <SwiperSlide>
          <HeroRight/>
        </SwiperSlide>

        {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/40 p-5 rounded-full">
            <ArrowLeft className="w-6 h-6 text-colorPrimario1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/40 p-5 rounded-full">
            <ArrowRight className="w-6 h-6 text-colorPrimario1" />
          </div>

      </Swiper>
    </section>
  );
}