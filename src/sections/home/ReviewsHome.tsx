"use client";

import React from "react";
import { motion } from "framer-motion";
import { reviewData } from "@/data/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { ReviewsHomeCard } from "./ReviewsHomeCard";

export default function ReviewsHome() {
  return (
    <div className="max-w-8xl bg-colorHover5 py-10 mx-2 px-4">
      {/* Título y descripción */}
      <div className="text-center mb-12">
        <motion.h2
            className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Lo que dicen nuestros clientes
          </motion.h2>

        <motion.p
          className="mt-5 text-colorPrimario1 text-base md-tablet:text-lg table-lg:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
        >
          Opiniones reales de clientes satisfechos que confían en nuestro trabajo y nuestras soluciones digitales.
        </motion.p>
      </div>

      {/* Desktop: 3 cards fijas */}
      <div className="hidden table-lg:flex justify-center gap-8">
        {reviewData.slice(0, 3).map((review) => (
          <ReviewsHomeCard key={review.id} testimonial={review} variant="desktop" />
        ))}
      </div>

      {/* Tablet: slider con cards más anchas */}
      <div className="hidden md-tablet:block table-lg:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {reviewData.slice(0, 3).map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center">
              <ReviewsHomeCard testimonial={review} variant="tablet" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile: slider con cards estrechas */}
      <div className="block md-tablet:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {reviewData.slice(0, 3).map((review) => (
            <SwiperSlide key={review.id} className="flex justify-center">
              <ReviewsHomeCard testimonial={review} variant="mobile" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
