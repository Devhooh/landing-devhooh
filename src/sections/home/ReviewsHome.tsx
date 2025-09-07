"use client"

import React from 'react';
import { motion } from 'framer-motion';
import ReviewCard from '../portfolio/ReviewCard';
import { reviewData } from '@/data/reviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Animación para letras y textos
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ReviewsHome() {
  return (
    <div className="max-w-8xl bg-colorHover5 py-10 mx-2 px-4">
      <div className="text-center mb-12">
        <motion.h2
          className="
            text-3xl md-tablet:text-4xl table-lg:text-4xl font-extrabold 
            text-colorPrimario2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Lo que dicen nuestros clientes").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="mt-5 text-colorPrimario1 text-base md-tablet:text-lg table-lg:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Opiniones reales de clientes satisfechos que confían en nuestro trabajo y nuestras soluciones digitales.
        </motion.p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={32}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {reviewData.map((review) => (
          <SwiperSlide key={review.id} className="mb-10">
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
