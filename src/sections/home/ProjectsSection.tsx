"use client";

// import { LogoSlider } from "@/components/ui/LogoSlider";
import { ProjectCard } from "@/sections/home/ProjectCard"
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
// import { ProjectSlider } from "./ProjectSlider";
import { SwiperSlide, Swiper } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectSlider } from "./ProjectSlider";

export function ProjectsSection() {
  return (
    <section className="w-full bg-white py-10 px-6 md-tablet:px-12">
      {/* Título + subtítulo */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-blue-400 mb-4">
          Proyectos que impulsan resultados
        </h2>
        <p className="text-gray-700 text-base md-tablet:text-lg table-lg:text-xl">
          De startups a empresas consolidadas, creamos soluciones digitales que mejoran procesos, escalan negocios y sorprenden a los usuarios.
        </p>
      </div>

      {/* Sliders de logos */}
      <div className="flex flex-col mb-8 px-2 md-tablet:px-6 table-lg:px-12">
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </div>

      {/* Slider de proyectos */}
      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay,Pagination, Navigation]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          centeredSlides={true}   // centra la slide activa
          slidesPerView="auto"    // permite que las slides tengan su ancho propio
          spaceBetween={24}       // espacio entre slides
          breakpoints={{
            0:   { spaceBetween: 16 },
            550: { spaceBetween: 20 },
            950: { spaceBetween: 24 },
          }}
          className="max-w-6xl mx-auto"
        >
          {projectsData.slice(0, 4).map((project, index) => (
            <SwiperSlide key={index} className="h-auto flex justify-center" style={{ width: '80%' }}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
