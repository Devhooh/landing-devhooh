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
    <section className="bg-white py-10 mx-5 md-tablet:mx-10">
      <div className="max-w-7xl text-left mb-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpTitle}
          className="text-3xl md-tablet:text-4xl font-extrabold text-indigo-950"
        >
          {title}
        </motion.h2>
      </div>

      <div>
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
            <SwiperSlide key={project.id} className="flex my-6">
              <ServicesProjects project={project} showService={showService} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
