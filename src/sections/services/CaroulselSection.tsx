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
  title: string;
  details: string[];
  color: string;
  icon: string;
}
  
interface CardCaroulselSectionProps {
  title: string;
  cardData: CardData[];
}

export default function CaroulselSection ({title, cardData}: CardCaroulselSectionProps) {
  return (
    <section className="bg-white w-full h-full py-10 overflow-hidden rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl md-tablet:text-4xl text-center font-extrabold mb-6 text-indigo-950">
          {title}
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          className="w-full h-full flex items-stretch"
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
            <SwiperSlide key={index} className="px-4 py-2 md-tablet:pb-20 table-lg:pb-15 flex items-stretch">
              <CaroulselCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  
    
  );
};

