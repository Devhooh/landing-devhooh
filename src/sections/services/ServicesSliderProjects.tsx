"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ServicesProjects from "./ServicesProjects";
import { Project } from "@/data/portfolioData";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Trophy, Sparkles } from "lucide-react";

interface ServicesSliderProjectsProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showService: boolean;
}

const fadeUpTitle: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSliderProjects({
  projects,
  title,
  subtitle,
  showService = true,
}: ServicesSliderProjectsProps) {
  const limit = 6;
  const displayedProjects = projects.slice(0, limit);

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">

      <div className="relative z-10 max-w-[1600px] mx-auto px-4">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Trophy className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold">Nuestra experiencia</span>
          </motion.div>

          {/* Título con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Subtítulo mejorado */}
          {subtitle && (
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpTitle}
              className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Estadísticas */}
          <motion.ul
            className="flex flex-wrap justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3}}
            viewport={{ once: true }}
          >
            <li className="text-center px-4 py-2 rounded-2xl bg-colorHover4 backdrop-blur-sm border border-white/30">
              <div className="text-2xl font-bold text-colorPrimario5">{displayedProjects.length}+</div>
              <p className="text-sm text-colorPrimario1/70">Proyectos destacados</p>
            </li>
            
            <li className="text-center px-4 py-2 rounded-2xl bg-colorHover4 backdrop-blur-sm border border-white/30">
              <div className="text-2xl font-bold text-colorPrimario5">100%</div>
              <p className="text-sm text-colorPrimario1/70">Casos de éxito</p>
            </li>
            
            <li className="text-center px-4 py-2 rounded-2xl bg-colorHover4 backdrop-blur-sm border border-white/30">
              <div className="text-2xl font-bold text-colorPrimario5">5+</div>
              <p className="text-sm text-colorPrimario1/70">Años de trayectoria</p>
            </li>
          </motion.ul>
        </div>

        {/* Slider mejorado */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
        >
          
          {/* Contenedor del slider con glassmorphism */}
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
                delay: 4000,
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
                  <ServicesProjects 
                    project={project} 
                    showService={showService} 
                    index={index} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botones de navegación mejorados */}
            <div className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <ArrowLeft className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3}}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-base">
              Cada proyecto es una nueva oportunidad de innovar
            </span>
            <Trophy className="w-6 h-6 text-colorSecundario1 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}