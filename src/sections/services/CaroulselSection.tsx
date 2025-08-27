"use client";

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CaroulselCard from './CaroulselCard';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Card data interface
interface CardData {
  slug: string;
  title: string;
  details: string;
  color: string;
  icon: string;
}
  
interface CardCaroulselSectionProps {
  title: string;
  cardData: CardData[];
}

export default function CaroulselSection ({title, cardData}: CardCaroulselSectionProps) {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-fuchsia-50 to-blue-100 w-full h-full pt-10 overflow-hidden rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="px-4 text-3xl md-tablet:text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gray-800">
          {title}
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          className="w-full flex justify-center"
          centerInsufficientSlides={true} 
          autoHeight={true}
          slidesPerView={1}
          spaceBetween={12} 
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="px-4 py-8 md-tablet:pb-10 flex justify-center items-center">
              <CaroulselCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  
    
  );
};

