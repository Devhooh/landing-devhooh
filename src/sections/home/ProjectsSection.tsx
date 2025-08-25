"use client";

import { ProjectCard } from "@/sections/home/ProjectCard";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectSlider } from "./ProjectSlider";

export function ProjectsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-100 py-14 px-6 md-tablet:px-12">
      
      {/* Título + subtítulo */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-600 to-pink-500">
          Proyectos que <span className="text-blue-600">impulsan</span> resultados
        </h2>
        <p className="text-gray-700 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed">
          De startups a empresas consolidadas, creamos soluciones digitales modernas que <span className="font-semibold text-indigo-600">mejoran procesos</span>, escalan negocios y sorprenden a los usuarios.
        </p>
      </div>

      {/* Sliders de logos */}
      <div className="flex flex-col mb-16 px-2 md-tablet:px-6 table-lg:px-12 gap-6">
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </div>

      {/* Slider de proyectos */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          navigation
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
              className="h-auto flex py-10 justify-center transition-transform duration-300 hover:scale-[1.03]"
              style={{ width: '70%' }}
            >
              <ProjectCard {...project} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
