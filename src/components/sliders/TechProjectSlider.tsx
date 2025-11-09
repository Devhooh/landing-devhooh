"use client"

import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TechProjectCard from "@/components/cards/tech/TechProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import CardInViewStagger from "../ui/CardInViewStagger";

export default function TechProjectSlider() {

  const limit: number = 5;
    const displayedProjects = projectsData.slice(0, limit);
  return( 
    <div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          550: { slidesPerView: 1, spaceBetween: 30 },
          950: { slidesPerView: 2, spaceBetween: 40 },
          1150: { slidesPerView: 3, spaceBetween: 48 },
        }}
        className="px-6 md:px-12 overflow-hidden"
      >
        {displayedProjects.map((project, index) => (
          <SwiperSlide
            key={project.id}
            className="flex my-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <CardInViewStagger
              key={project.id}
              index={index}
              direction="y"
              offset={30}
            >
              <TechProjectCard projects={project} />
            </CardInViewStagger>
          </SwiperSlide>
        ))}

        {/* Botones custom */}
        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/60 p-3 rounded-full">
          <ChevronLeft className="w-6 h-6 text-colorPrimario1" />
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/60 p-3 rounded-full">
          <ChevronRight className="w-6 h-6 text-colorPrimario1" />
        </div>
      </Swiper>
    </div>
  )
}

