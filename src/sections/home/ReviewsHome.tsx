"use client"

import React from 'react';
import ReviewCard from '../portfolio/ReviewCard';
import { reviewData } from '@/data/reviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsHome() {
  return (
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-200">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-gray-200 text-base md-tablet:text-lg table-lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Opiniones reales de clientes satisfechos que confían en nuestro trabajo y nuestras soluciones digitales.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={32}
          slidesPerView={1} // <-- aquí decides cuántas cards mostrar
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
