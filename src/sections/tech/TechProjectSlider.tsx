"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import TechProjectCard from "./TechProjectCard";

interface Project {
  id: number;
  company: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
  link: string;
}

interface ProjectsSliderProps {
  projectsData: Project[];
}

export function TechProjectSlider({ projectsData }: ProjectsSliderProps) {
  return (
    <Swiper
  modules={[Navigation]}
  slidesPerView={1.05}
  spaceBetween={25}
  navigation
  loop
  pagination={{ clickable: true }}
  breakpoints={{
    550:  { slidesPerView: 1.2, spaceBetween: 25 },   // md-tablet
    950:  { slidesPerView: 2.1, spaceBetween: 40 },   // table-lg
    1150: { slidesPerView: 3,   spaceBetween: 48 },   // lg-table
  }}
  className="!px-2 md-tablet:!px-4 table-lg:!px-6"  // gutters en los bordes
>
  {projectsData.map((project) => (
    <SwiperSlide key={project.id} className="flex my-6">
      <TechProjectCard projects={project} />
    </SwiperSlide>
  ))}
</Swiper>
  );
}
