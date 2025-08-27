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
    <div className="max-w-8xl mx-2">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500/80 to-purple-300"
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
          className="mt-4 text-gray-200 text-base md-tablet:text-lg table-lg:text-xl max-w-2xl mx-auto leading-relaxed"
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
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
