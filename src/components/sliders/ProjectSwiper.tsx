"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/components/cards/home/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from 'react';
import CardInViewStagger from "../ui/CardInViewStagger";

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

export function ProjectSwiper({ projectsData }: ProjectSwiperProps) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      }}
      className="max-w-full mx-auto"
      autoplay={{ delay: 4500 }}
      loop
      centeredSlides
      slidesPerView="auto"
      spaceBetween={6}
      breakpoints={{
        0: { spaceBetween: 18 },
        550: { spaceBetween: 6 },
        950: { spaceBetween: 8 },
      }}
    >
      {projectsData.slice(0, 4).map((project, index) => (
        <SwiperSlide 
          key={index} 
          className="h-auto px-5 md-tablet:px-8 max-w-3xl flex py-10 justify-center"
        >
          <CardInViewStagger
            index={index}
            direction="y"
            offset={30}
          > 
            <ProjectCard {...project} />
          </CardInViewStagger>
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
  );
}