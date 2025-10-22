"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReviewsHomeCard } from "@/sections/home/ReviewsHomeCard"; 

// 💡 Usamos el tipo COMPLETO. Si lo tienes en otro archivo, impórtalo.
interface Review {
  id: number;
  logoUrl: string;
  projectTitle: string;
  reviewBody: string;
  reviewerName: string;
  position: string;
  reviewerProfileUrl: string;
  rating: number;
  quality: number;
  schedule: number;
  cost: number;
  willingnessToRecommend: number;
}


interface ReviewsSliderProps {
  // 💡 Cambiamos ReviewItem por Review
  reviews: Review[]; 
  variant: "mobile" | "tablet"; // Define la variante de la tarjeta a renderizar
}

export function ReviewsSlider({ reviews, variant }: ReviewsSliderProps) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={1} 
      centeredSlides={true}
      pagination={{ clickable: true }}
      className="w-full h-full" 
    >
      {reviews.slice(0, 3).map((review) => (
        <SwiperSlide key={review.id} className="flex justify-center">
          {/* TypeScript ahora sabe que 'review' tiene todas las props necesarias */}
          <ReviewsHomeCard testimonial={review} variant={variant} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}