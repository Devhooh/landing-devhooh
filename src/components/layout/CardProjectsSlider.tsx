"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Project } from "@/data/portfolioData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ServicesProjects from "@/sections/services/ServicesProjects";
import ProjectStaggerWrapper from "../ui/ProjectStaggerWrapper";

interface ServicesSliderProjectsProps {
  projects: Project[];
  showService: boolean;
}

export default function CardProjectsSlider({projects, showService = true,}: ServicesSliderProjectsProps) {
  const limit = 6;
  const displayedProjects = projects.slice(0, limit);

  return (
    <div className="relative rounded-3xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_40px_rgba(103,61,230,0.1)]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={displayedProjects.length > 3}
        breakpoints={{
          550: { slidesPerView: 1, spaceBetween: 10 },
          750: { slidesPerView: 2, spaceBetween: 20 },
          950: { slidesPerView: 3, spaceBetween: 30 },
        }}
        // className="px-4 py-8"
      >
        {displayedProjects.map((project, index) => (
          <SwiperSlide key={project.id} className="h-auto p-4">

            <ProjectStaggerWrapper
              index={index}
            >
              <ServicesProjects 
                project={project} 
                showService={showService} 
                index={index} 
              />
            </ProjectStaggerWrapper>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones de navegación mejorados */}
      <div className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <ChevronLeft className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
          <ChevronRight className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )
}