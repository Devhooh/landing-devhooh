"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Swiper component and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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

// Card componente
const Card: React.FC<{ card: CardData }> = ({ card }) => {
  const getGradientClass = (color: string) => {
    switch (color) {
      case 'indigo':
        return 'bg-gradient-to-br from-indigo-500 to-indigo-700';
      case 'teal':
        return 'bg-gradient-to-br from-teal-500 to-teal-700';
      case 'orange':
        return 'bg-gradient-to-br from-orange-400 to-orange-600';
      default:
        return 'bg-white'; // Fallback a blanco si no hay color
    }
  };

  const gradientClass = getGradientClass(card.color);

  return (
    <div
      className={`${gradientClass} p-4 rounded-[1.5rem] text-white
      shadow-2xl transform transition-all duration-300 hover:scale-[1.02]
      flex flex-col h-full`}
    >
      <h3 className="text-3xl font-bold mb-4 text-center">{card.title}</h3>
      
      <div className={`p-4 rounded-2xl flex items-center justify-center mb-6 bg-gray-300/30`}>
        <Image
          src={card.icon}
          alt={card.title}
          width={100}
          height={100}
        />
      </div>
      <ul className="list-disc pl-5 text-gray-200 text-sm mb-8 flex-grow">
        {card.details.map((detail, i) => (
          <li key={i} className='pb-2'>{detail}</li>
        ))}
      </ul>
      {/* mt-auto empuja los botones al fondo */}
      <div className="flex flex-col gap-4 mt-auto">
        <Link href="#">
          <button className="w-full px-6 py-3 bg-white/30 hover:bg-white/40 text-white font-semibold rounded-full transition-colors">
            Cotiza tu proyecto
          </button>
        </Link>
        <Link href="#">
          <button className="w-full px-6 py-3 border border-white/20 text-white font-semibold rounded-full transition-colors hover:bg-white/10">
            + Ver más detalles
          </button>
        </Link>
      </div>
    </div>
  )
};
  






interface CardCaroulselSectionProps {
  title: string;
  cardData: CardData[];
}

export default function CardCaroulselSection ({title, cardData}: CardCaroulselSectionProps) {
  return (
    <section className="bg-white  w-full py-4 overflow-hidden rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-6 text-indigo-950">
          {title}
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          loop
          className="w-full h-full flex items-stretch"
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
            <SwiperSlide key={index} className="px-4 py-2 flex items-stretch">
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  
    
  );
};

