"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion"; // <-- import framer-motion
import ReviewSectionCard from "./ReviewSectionCard";
import { reviewData } from "@/data/reviewData"; // tus datos

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function ReviewSection() {
  return (
    <section className="py-20 bg-colorHover6/50">
      <div className="container mx-auto max-w-6xl px-4 text-center">

        {/* Título animado */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-primary mb-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
        >
          {splitText("Lo que opinan nuestros clientes").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

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
                logoUrl={review.logoUrl}
                projectTitle={review.projectTitle}
                reviewBody={review.reviewBody}
                reviewerName={review.reviewerName}
                position={review.position}
                reviewerProfileUrl={review.reviewerProfileUrl}
                rating={review.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
