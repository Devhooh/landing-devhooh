"use client";

import { projectsData } from "@/data/portfolioData";
import { SwiperSlide, Swiper } from "swiper/react";
import TechProjectCard from "./TechProjectCard";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Texto letra por letra
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const splitText = (text: string) => text.split("");

export default function TechProjectSection() {
  const limit: number = 5;
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="w-full my-20 py-16 px-4 table-lg:px-10 bg-gradient-to-b from-colorPrimario4 to-colorPrimario3">
      <div className="max-w-7xl mx-auto text-left mb-8">
        {/* Título animado */}
        <motion.h2
          className="px-6 text-3xl md-tablet:text-4xl font-extrabold text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Proyectos con nuestra tecnología:").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-6 mt-4 text-gray-300 max-w-2xl text-lg md-tablet:text-xl"
        >
          Una selección de proyectos recientes donde aplicamos nuestras mejores
          tecnologías para lograr impacto real.
        </motion.p>
      </div>

      {/* Swiper con animación */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            550: { slidesPerView: 1, spaceBetween: 30 },
            950: { slidesPerView: 2, spaceBetween: 40 },
            1150: { slidesPerView: 3, spaceBetween: 48 },
          }}
          className="px-6 md:px-12 overflow-hidden"
        >
          {displayedProjects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="flex my-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <TechProjectCard projects={project} />
            </SwiperSlide>
          ))}

          {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/60 p-3 rounded-full">
            <ArrowLeft className="w-6 h-6 text-colorPrimario1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/60 p-3 rounded-full">
            <ArrowRight className="w-6 h-6 text-colorPrimario1" />
          </div>
        </Swiper>
      </motion.div>
    </section>
  );
}
