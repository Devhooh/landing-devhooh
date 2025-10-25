"use client";

import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewData } from "@/data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";

const containerVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
};

export default function ReviewsSection() {
  // Agrupar reviews en pares (para tablet/pc)
  const pairedReviews = [];
  for (let i = 0; i < reviewData.length; i += 2) {
    pairedReviews.push([reviewData[i], reviewData[i + 1]]);
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md-tablet:px-8">
        {/* Título */}
        <div className="text-center mb-12">

          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            transition={{duration: 0.2, delay: 0.3}}
          >
            <h2 className="mt-10 text-4xl font-extrabold text-gray-900 md-tablet:text-5xl">
              Reseñas de Clientes
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <p className="mt-4 text-xl text-gray-600">
              Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
            </p>
          </InViewAnimationWrapper>
        </div>

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
                  <ProjectStaggerWrapper
                    index={idx}
                  >
                    <ReviewCard review={review} />
                  </ProjectStaggerWrapper>
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
                <motion.div
                  className="grid grid-cols-1 gap-8 mb-20"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ProjectStaggerWrapper
                    index={index}
                  >
                    <ReviewCard review={pair[0]} />
                  </ProjectStaggerWrapper>

                  {pair[1] && (
                    <ProjectStaggerWrapper
                      index={index + 1}
                    >
                      <ReviewCard review={pair[1]} />
                    </ProjectStaggerWrapper>
                  )}
                </motion.div>
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
    </div>
  );
}
