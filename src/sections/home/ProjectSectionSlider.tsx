import { ProjectSlider } from "./ProjectSlider";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/sections/home/ProjectCard";
import { motion} from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ProjectSecitonSlider() {
  return (
    <div className="relative my-20 bg-colorFondo">

      {/* Título y subtítulo mejorados */}
      <div className="relative z-10 text-center mb-16 px-4">

        {/* Título principal con animación letra por letra */}
        <motion.h2
          className="text-3xl tablet-md:text-5xl font-extrabold mb-6 text-colorPrimario2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Empresas que confían en nosotros
        </motion.h2>

        {/* Subtítulo descriptivo */}
        <motion.p
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Hemos colaborado con startups innovadoras y grandes corporaciones para ofrecer soluciones digitales a medida que aceleran la transformación digital y garantizan el crecimiento empresarial sostenible.
        </motion.p>

        {/* Estadísticas de impacto */}
        <motion.ul
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">20+</div>
            <p className="text-sm text-colorPrimario1/70">Empresas atendidas</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">98%</div>
            <p className="text-sm text-colorPrimario1/70">Tasa de éxito</p>
          </li>
          <li className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">24m</div>
            <p className="text-sm text-colorPrimario1/70">Tiempo promedio</p>
          </li>
        </motion.ul>
      </div>

      {/* Sliders de logos con animación mejorada */}
      <motion.div 
        className="relative z-10 flex flex-col mb-16 px-6 md-tablet:px-12 gap-4 bg-gradient-to-r from-colorPrimarioLogo2/20 via-colorPrimarioLogo2/30 to-colorPrimarioLogo2/20 py-8 rounded-3xl mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </motion.div>

      {/* Encabezado para proyectos destacados */}
      <motion.div
        className="relative z-10 text-center px-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario5 mb-8">
          Proyectos destacados
        </h3>
        <p className="text-colorPrimario1/70 text-xl md-tablet:text-2xl max-w-2xl mx-auto">
          Explora nuestro portafolio de Aplicaciones Web y Móviles funcionales y proyectos de Integración de Inteligencia Artificial que generaron un impacto real.
        </p>
      </motion.div>

      {/* Slider de proyectos */}
      <motion.div 
        className="relative z-10 max-w-[1550px] mx-auto md-tablet:px-0 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
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
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}

          {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-5 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-colorPrimario1/60 hover:bg-colorPrimario1/40 p-5 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </div>

        </Swiper>
      </motion.div>
    </div>
  )
}