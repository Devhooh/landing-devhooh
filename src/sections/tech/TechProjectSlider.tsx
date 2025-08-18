"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface Project {
  id: number;
  company?: string;
  imageSrc: string;
  imageAlt?: string;
  ProjectName: string;
  location: string;
  service: string;
  technologies: string[];
  description: string;
}

interface ProjectsSliderProps {
  projects: Project[];
}

export function TechProjectSlider({ projects }: ProjectsSliderProps) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1.2} // visible parcialmente
      navigation
      loop
      pagination={{ clickable: true }}
      breakpoints={{
        550: { slidesPerView: 1.5 }, // md-tablet
        950: { slidesPerView: 2.2 }, // table-lg
        1150: { slidesPerView: 3 }, // lg-table
      }}
    >
      {projects.map((project, idx) => (
        <SwiperSlide key={idx}>
          <div className="bg-white rounded-2xl shadow-lg p-4">
            {/* Título superior izquierdo */}
            <h4 className="text-lg font-bold text-indigo-950 mb-2">
              {project.company}
            </h4>

            {/* Imagen centrada */}
            <div className="flex justify-center mb-4">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt || ""}
                width={300}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>

            {/* Subtítulo */}
            <p className="text-sm font-semibold text-gray-700 text-left mb-2">
              {project.ProjectName} - {project.location}
            </p>

            {/* Descripción */}
            <p className="text-sm text-gray-600 text-left">
              {project.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
