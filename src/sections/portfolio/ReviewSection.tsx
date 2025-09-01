"use client";

import React from 'react';
import ReviewCard from './ReviewCard';
import { reviewData } from '@/data/reviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion, Variants } from "framer-motion";

import 'swiper/css';
import 'swiper/css/pagination';

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.4 }, // delay entre cada card
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ReviewsSection() {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 md-tablet:px-8">
        {/* Título y subtítulo */}
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
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600"
          >
            Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
          </motion.p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation
          spaceBetween={32}
          slidesPerView={1} // siempre 1 slide visible
          pagination={{ clickable: true }}
          className="mySwiper h-full flex items-center px-8 md:px-16"
        >
          {/* Aquí en cada SwiperSlide colocamos 2 reviews directamente */}
          {reviewData.map((_, index) =>
            index % 2 === 0 ? (
              <SwiperSlide key={index}>
                <motion.div
                  className="grid grid-cols-1 gap-8 mb-20"
                  variants={containerVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.div variants={cardVariant}>
                    <ReviewCard review={reviewData[index]} />
                  </motion.div>

                  {reviewData[index + 1] && (
                    <motion.div variants={cardVariant}>
                      <ReviewCard review={reviewData[index + 1]} />
                    </motion.div>
                  )}
                </motion.div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </div>
  );
}
