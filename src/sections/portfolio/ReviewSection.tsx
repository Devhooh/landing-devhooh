"use client";

import React from 'react';
import ReviewCard from './ReviewCard';
import { reviewData } from '@/data/reviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsSection() {
  return (
    <div className="py-4 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 md-tablet:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-12">
          <h2 className="mt-10 text-4xl font-extrabold text-gray-900 md-tablet:text-5xl">
            Reseñas de Clientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
          </p>
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
            index % 2 === 0 ? ( // solo en índices pares
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 gap-8 mb-20">
                  <ReviewCard review={reviewData[index]} />
                  {reviewData[index + 1] && (
                    <ReviewCard review={reviewData[index + 1]} />
                  )}
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </div>
  );
}
