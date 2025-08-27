"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ServicesProjects from "./ServicesProjects";
import { Project } from "@/data/portfolioData";

interface ServicesSliderProjectsProps {
  projects: Project[];
  title?: string; // h2 opcional
  showService:boolean;
}

export function ServicesSliderProjects({
  projects,
  title,
  showService = true,
}: ServicesSliderProjectsProps) {
  const limit = 5;
  const displayedProjects = projects.slice(0, limit);

  return (
    <section className="py-10 mx-5 md-tablet:mx-10">
      <div className="max-w-7xl text-left mb-4">
        <h2 className="text-3xl md-tablet:text-4xl font-bold text-indigo-950">
          {title}
        </h2>
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
            // 1150: { slidesPerView: 3, spaceBetween: 48 },
          }}
          className="px-2 md-tablet:px-6"
        >
          {displayedProjects.map((project) => (
            <SwiperSlide key={project.id} className="flex my-6">
              <ServicesProjects project={project} showService={showService}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
