"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ServicesProjects from "./ServicesProjects";
import { Project } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";


interface ServicesSliderProjectsProps {
  projects: Project[];
  title?: string; // h2 opcional
  showService:boolean;
}

const fadeUpTitle: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export function ServicesSliderProjects({
  projects,
  title,
  showService = true,
}: ServicesSliderProjectsProps) {
  const limit = 5;
  const displayedProjects = projects.slice(0, limit);

  return (
    <section className="py-10 mx-auto w-full">
      <div className="text-left mb-8 mx-8 tablet-md:mx-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpTitle}
          className="text-3xl md-tablet:text-4xl font-extrabold text-colorPrimario2"
        >
          {title}
        </motion.h2>
      </div>

      <div className="mx-5 tablet-md:mx-10">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1.05}
          spaceBetween={25}
          navigation
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            550: { slidesPerView: 1.2, spaceBetween: 25 },
            950: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="px-2 md-tablet:px-6"
        >
          {displayedProjects.map((project, index) => (
            <SwiperSlide key={project.id} className="flex mb-12 px-1 md-tablet:px-2">
              <ServicesProjects project={project} showService={showService} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
