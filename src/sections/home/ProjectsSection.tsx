"use client";

import { ProjectCard } from "@/sections/home/ProjectCard";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectSlider } from "./ProjectSlider";
import { CheckCircle } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-white">

      <div className="text-center max-w-4xl mx-auto px-6 mb-6 md-tablet:mb-12">
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-600 to-fuchsia-500">
          Proyectos que <span className="text-blue-600">impulsan</span> resultados
        </h2>
      </div>
      {/* Título + subtítulo + lista */}
      <div className="max-w-5xl mx-auto px-6 md-tablet:px-12 mb-12 flex flex-col table-lg:flex-row items-start table-lg:items-start gap-4">
        {/* Bloque de texto */}
        <div className="flex-1 text-center">
          <p className="text-gray-700 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed mb-6">
            De startups a empresas consolidadas, creamos soluciones digitales modernas que <span className="font-semibold text-indigo-600">mejoran procesos</span>, escalan negocios y sorprenden a los usuarios.
          </p>
        </div>

        {/* Lista a la derecha */}
        <div className="justify-center items-center">

          <ul className="flex-1 flex flex-col gap-3 text-gray-800">
            {[
              "Soluciones personalizadas y escalables",
              "Integración de inteligencia artificial",
              "Diseño moderno y experiencia premium",
              "Soporte y acompañamiento dedicado"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="flex justify-center mt-12">
        <h3 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
          Nuestros clientes:
        </h3>
      </div>

      {/* Sliders de logos */}
      <div className="flex flex-col mb-12 px-6 md-tablet:px-12 gap-2 bg-fuchsia-950">
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </div>

      {/* Slider de proyectos */}
      <div className="max-w-[1550px] mx-auto md-tablet:px-0">
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
              <div className="bg-fuchsia-200 rounded-2xl shadow-lg w-full">
                <ProjectCard {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botón CTA centrado */}
      
    </section>
  );
} 

