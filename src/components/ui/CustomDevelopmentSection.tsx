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
  bgGradient: string;
  shadow: string;
  icon: string;
  iconBg: string;
}

// Datos de la Card
const cardData: CardData[] = [
  {
    title: "Desarrollo web",
    details: [
      "Diseño único, ideal para negocios, tiendas online, portafolios y sistemas a medida.",
      "Nos encargamos de todo: estructura, diseño, y programación, para que esté lista para destacar desde el primer día.",
      "Desde el boceto hasta la publicación, tú solo te encargas de ver cómo convertimos tu idea en una web profesional."
    ],
    bgGradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    shadow: "shadow-lg shadow-indigo-500/50",
    icon: "/assets/images/cardImg.png",
    iconBg: "bg-indigo-300/30"
  },
  {
    title: "Desarrollo Mobile",
    details: [
      "Aplicaciones móviles intuitivas, modernas y eficientes.",
      "Tú te enfocas en tu negocio, nosotros en el desarrollo de la app a la palma de la mano de tus usuarios.",
      "Creamos tu app con enfoque en experiencia, rendimiento y escalabilidad."
    ],
    bgGradient: "bg-gradient-to-br from-teal-500 to-teal-700",
    shadow: "shadow-lg shadow-teal-500/50",
    icon: "/assets/images/cardImg.png",
    iconBg: "bg-teal-300/30"
  },
  {
    title: "Desarrollo Software",
    details: [
      "Creamos soluciones a medida para automatizar, gestionar o escalar tu negocio.",
      "Diseñamos y desarrollamos aplicaciones robustas, confiables y a prueba de manipulaciones.",
      "Tu operación más eficiente, con un desarrollo adaptado 100% a tus necesidades."
    ],
    bgGradient: "bg-gradient-to-br from-orange-400 to-orange-600",
    shadow: "shadow-lg shadow-orange-400/50",
    icon: "/assets/images/cardImg.png",
    iconBg: "bg-orange-300/30"
  },
];

// Card componente
const Card: React.FC<{ card: CardData }> = ({ card }) => (
  <div
    className={`${card.bgGradient} p-4 rounded-[1.5rem] text-white
    shadow-2xl ${card.shadow} transform transition-all duration-300 hover:scale-[1.02] h-full flex flex-col`}
  >
    <h3 className="text-3xl font-bold mb-4 text-center justify-center">{card.title}</h3>
    <div className={`p-4 rounded-2xl flex items-center justify-center mb-6 ${card.iconBg}`}>
      <Image
        src={card.icon}
        alt={card.title}
        width={100}
        height={100}
      />
    </div>
    <ul className="list-disc pl-5 text-gray-300 text-sm mb-8 flex-grow">
      {card.details.map((detail, i) => (
        <li key={i}>{detail}</li>
      ))}
    </ul>
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
);

export default function CustomDevelopmentSection () {
  return (
    <section className="w-full py-4 bg-white text-gray-900 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-2">
        {/* Section title */}
        <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-6 text-indigo-950">
          Desarrollo personalizado
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          loop
          pagination={{ clickable: true }}
          className="w-full"
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
            <SwiperSlide key={index} className="px-4 py-4">
              <Card card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

