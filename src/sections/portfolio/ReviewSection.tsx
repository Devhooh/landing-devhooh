"use client";

import React from "react";
import ReviewCard from "./ReviewCard";
import { reviewData } from "@/data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";

const containerVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.4 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const splitText = (text: string) => text.split("");

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
          <motion.h2
            className="mt-10 text-4xl font-extrabold text-gray-900 md-tablet:text-5xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {splitText("Reseñas de Clientes").map((letter, idx) => (
              <motion.span key={idx} variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600"
          >
            Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
          </motion.p>
        </div>

        {/* Swiper para móviles */}
        <div className="block md-tablet:hidden">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
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
                  <motion.div variants={cardVariant}>
                    <ReviewCard review={review} />
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
          </motion.div>
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
                  <motion.div variants={cardVariant}>
                    <ReviewCard review={pair[0]} />
                  </motion.div>

                  {pair[1] && (
                    <motion.div variants={cardVariant}>
                      <ReviewCard review={pair[1]} />
                    </motion.div>
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
