"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CaroulselCard from "@/sections/services/CaroulselCard";
import { CardInViewWrapper } from "../ui/CardInViewWrapper";

interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

interface CardCaroulselSectionProps {
  cardData: CardData[];
}

export default function CardServicesSlider({cardData}: CardCaroulselSectionProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      className="w-full flex justify-center"
      centerInsufficientSlides={true}
      autoHeight={true}
      slidesPerView={1}
      spaceBetween={12}
      breakpoints={{
        550: { slidesPerView: 2, spaceBetween: 12 },
        950: { slidesPerView: 3, spaceBetween: 12 },
      }}
    >
      {cardData.map((card, index) => (
        <SwiperSlide
          key={index}
          className="px-4 py-8 md-tablet:pb-10 flex justify-center items-center"
        >
          {/* pasamos index para el stagger */}
          <CardInViewWrapper
            direction="y"
            offset={30}
            transition={{ delay: index * 0.1, duration: 0.2}}
          >
            <CaroulselCard card={card} index={index}/>
          </CardInViewWrapper>
        </SwiperSlide>
      ))}

      {/* Botones custom */}
      <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/40 hover:bg-colorPrimario1/20 p-3 rounded-full">
        <ChevronLeft className="w-6 h-6 text-colorPrimario1" />
      </div>
      <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/40 hover:bg-colorPrimario1/20 p-3 rounded-full">
        <ChevronRight className="w-6 h-6 text-colorPrimario1" />
      </div>

    </Swiper>
  )
}