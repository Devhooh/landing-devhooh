"use client";

import { projectsData } from "@/data/portfolioData";
import { SwiperSlide, Swiper } from "swiper/react";
import TechProjectCard from "./TechProjectCard";
import { Navigation } from "swiper/modules";
import { motion} from "framer-motion";

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function TechProjectSection() {
  const limit: number = 5;
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="w-full my-16 py-10 px-4 table-lg:px-10 bg-colorPrimario4">
      <div className="max-w-7xl mx-auto text-left mb-2">
        <motion.h2
          className="px-6 text-3xl md-tablet:text-4xl font-bold text-white"
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


      </div>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          550:  { slidesPerView: 1.2, spaceBetween: 30 },
          950:  { slidesPerView: 2.1, spaceBetween: 40 },
          1150: { slidesPerView: 3,   spaceBetween: 48 },
        }}
        className="px-6 md:px-12 overflow-visible" // 👈 más espacio a los lados
      >
        {displayedProjects.map((project) => (
          <SwiperSlide key={project.id} className="flex my-6">
            <TechProjectCard projects={project} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
