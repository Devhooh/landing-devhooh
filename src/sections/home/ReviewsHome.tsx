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
    <div className="py-4 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 md-tablet:px-16 table-lg:px-40">
        <div className="text-center mb-12">
          <p className="mt-4 text-3xl text-gray-600">
            Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
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
    </div>
  );
}
