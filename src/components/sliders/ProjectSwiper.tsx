"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/components/cards/home/ProjectCard";
import { motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from 'react';
import { AnimatedProjectSlide } from "@/components/layout/AnimatedProjectSlide";

interface ProjectData {
  id: number;
  slug: string;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
  subtitle?: string;
}

interface ProjectSwiperProps {
  projectsData: ProjectData[]; 
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3, 
      staggerChildren: 0.2,
      delayChildren: 0.2, 
    },
  },
};

export function ProjectSwiper({ projectsData }: ProjectSwiperProps) {
  return (
    <motion.div 
      className="relative z-10 max-w-[1550px] mx-auto md-tablet:px-0 mb-10"
      variants={containerVariants} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 4500 }}
        loop
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        breakpoints={{
          0: { spaceBetween: 18 },
          550: { spaceBetween: 24 },
          950: { spaceBetween: 32 },
        }}
        className="max-w-full mx-auto"
      >
        {projectsData.slice(0, 4).map((project, index) => (
          <SwiperSlide 
            key={index} 
            className="h-auto px-5 md-tablet:px-10 max-w-3xl flex py-10 justify-center"
          >
            <AnimatedProjectSlide> 
              <ProjectCard {...project} />
            </AnimatedProjectSlide>
          </SwiperSlide>
        ))}

        {/* Botones custom */}
        <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-5 rounded-full">
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>
        <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-5 rounded-full">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </Swiper>
    </motion.div>
  );
}