"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { motion } from "framer-motion"; // <-- import framer-motion
import ReviewSectionCard from "./ReviewSectionCard";
import { reviewData } from "@/data/reviewData"; // tus datos

export default function ReviewSection() {
  return (
    <section className="py-20 bg-colorHover6/50">
      <div className="container mx-auto max-w-6xl px-4 text-center">

        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-colorPrimarioLogo1/10 rounded-full border border-colorPrimarioLogo1/20 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 bg-colorPrimarioLogo1 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-colorPrimario1">Testimonios</span>
        </motion.div>

        {/* Título animado */}
        <motion.h2
          className="text-3xl md-tablet:text-5xl font-extrabold text-primary mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
        >
          Lo que opinan nuestros clientes
        </motion.h2>

        <motion.p
          className="text-base md-tablet:text-xl text-colorPrimario1/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
          viewport={{ once: true }}
        >
          Descubre por qué miles de clientes confían en nosotros
        </motion.p>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="pb-12"
        >
          {reviewData.slice(-3).map((review) => (
            <SwiperSlide key={review.id} className="py-5">
              <ReviewSectionCard
                reviewBody={review.reviewBody}
                reviewerName={review.reviewerName}
                position={review.position}
                reviewerProfileUrl={review.reviewerProfileUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Stats adicionales */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md-tablet:gap-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2}}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Clientes satisfechos" },
            { number: "4.9", label: "Calificación promedio" },
            { number: "98%", label: "Recomendarían" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group bg-sky-100 p-2 md-tablet:p-4 rounded-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.3,}}
              viewport={{ once: true }}
            >
              <div className="text-2xl md-tablet:text-3xl font-bold bg-gradient-to-r from-colorPrimarioLogo1 to-colorSecundario bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-colorPrimario2 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
