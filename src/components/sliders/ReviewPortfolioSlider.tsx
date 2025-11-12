"use client";

import React from "react";
import ReviewCard from "../../components/cards/portfolio/ReviewCard";
import { reviewData } from "@/data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import CardInViewStagger from "@/components/ui/CardInViewStagger";

export default function ReviewPortfolioSlider () {
   // Agrupar reviews en pares (para tablet/pc)
  const pairedReviews = [];
  for (let i = 0; i < reviewData.length; i += 2) {
    pairedReviews.push([reviewData[i], reviewData[i + 1]]);
  }

  return (
    <>
      {/* Swiper para móviles */}
      <div className="block md-tablet:hidden">
        <div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={20}
          >
            {reviewData.map((review, idx) => (
              <SwiperSlide key={`review-mobile-${idx}`} className="p-2">
                <CardInViewStagger
                  index={idx}
                  direction="y"
                  offset={30}
                >
                  <ReviewCard review={review} />
                </CardInViewStagger>
              </SwiperSlide>
            ))}

            {/* Botones custom */}
            <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
              <ChevronLeft className="w-6 h-6 text-white" />
            </div>
            <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
              <ChevronRight className="w-6 h-6 text-white" />
            </div>
          </Swiper>
        </div>
      </div>

      {/* Swiper para tablet/pc (pares de reseñas) */}
      <div className="hidden md-tablet:block">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mySwiper h-full flex items-center px-8 md:px-16"
        >
          {pairedReviews.map((pair, index) => (
            <SwiperSlide key={`review-slide-${index}`}>
              <div className="grid grid-cols-1 gap-8 mb-20">
                <CardInViewStagger
                  index={index}
                  direction="y"
                  offset={30}
                >
                  <ReviewCard review={pair[0]} />
                </CardInViewStagger>
                {pair[1] && (
                  <CardInViewStagger
                    index={index + 1}
                    direction="y"
                    offset={30}
                  >
                    <ReviewCard review={pair[1]} />
                  </CardInViewStagger>
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-3 rounded-full">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>

        </Swiper>
      </div>
    </>
  )
}
