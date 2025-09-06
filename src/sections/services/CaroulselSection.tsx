"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import CaroulselCard from "./CaroulselCard";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";


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
  subtitle?: string;
  features?: {icon: string; text: string}[];
  cardData: CardData[];
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function CaroulselSection({ title, cardData, subtitle, features }: CardCaroulselSectionProps) {
  return (
    <section
      className="
        bg-colorHover6 w-full h-full pt-10 overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto px-3 tablet-md:px-10">
        <motion.h2
          className="
            px-4 text-3xl md-tablet:text-4xl text-center font-extrabold text-colorPrimario2 drop-shadow-sm"
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

        {subtitle && (
          <motion.p
            className="text-center text-gray-700 mb-5 mt-2 text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        )}

        {features && (
          <ul className="flex flex-col items-center tablet-md:flex-row tablet-md:justify-center gap-6 mb-2">
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
