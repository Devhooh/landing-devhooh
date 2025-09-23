"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CaroulselCard from "./CaroulselCard";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowLeft, ArrowRight, LucideProps } from "lucide-react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardData {
  slug: string;
  title: string;
  details: string;
  icon: string;
}

interface CardCaroulselSectionProps {
  title: string;
  features?: {icon: string; text: string}[];
  cardData: CardData[];
}

export default function CaroulselSection({ title, cardData, features }: CardCaroulselSectionProps) {
  return (
    <section
      className="
        bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 w-full h-full pt-10 overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto px-3 tablet-md:px-10">
        <motion.h2
          className="
            px-4 text-3xl md-tablet:text-4xl text-center font-extrabold text-colorPrimario1 pb-4 drop-shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {features && (
          <ul className="flex flex-col items-center tablet-md:flex-row tablet-md:justify-center gap-6 my-3">
            {features.map((f, idx) => {
              const Icon =
                (Icons[f.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
                Icons.HelpCircle;

              return (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <Icon className="w-6 h-6 tablet-md:w-8 tablet-md:h-8 text-colorSecundario3" />
                  <span>{f.text}</span>
                </li>
              );
            })}
          </ul>
        )}

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="w-full flex justify-center"
          centerInsufficientSlides={true}
          autoHeight={true}
          slidesPerView={1}
          spaceBetween={12}
          breakpoints={{
            550: { slidesPerView: 2, spaceBetween: 12 },
            950: { slidesPerView: 3, spaceBetween: 12 },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="px-4 py-8 md-tablet:pb-10 flex justify-center items-center"
            >
              {/* pasamos index para el stagger */}
              <CaroulselCard card={card} index={index}/>
            </SwiperSlide>
          ))}

          {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/40 hover:bg-colorPrimario1/20 p-3 rounded-full">
            <ArrowLeft className="w-6 h-6 text-colorPrimario1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/40 hover:bg-colorPrimario1/20 p-3 rounded-full">
            <ArrowRight className="w-6 h-6 text-colorPrimario1" />
          </div>

        </Swiper>
      </div>
    </section>
  );
}
