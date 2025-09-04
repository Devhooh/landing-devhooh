"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CaroulselCard from "./CaroulselCard";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function CaroulselSection({ title, cardData }: CardCaroulselSectionProps) {
  return (
    <section
      className="
        bg-purple-700
        w-full h-full pt-10 overflow-hidden rounded-3xl shadow-inner
      "
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="
            px-4 text-3xl md-tablet:text-4xl text-center font-extrabold text-white drop-shadow-sm"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
        >
          {splitText(title).map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
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
        </Swiper>
      </div>
    </section>
  );
}
