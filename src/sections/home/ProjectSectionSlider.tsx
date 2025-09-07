import { ProjectSlider } from "./ProjectSlider";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/sections/home/ProjectCard";
import { motion} from "framer-motion";

export function ProjectSecitonSlider() {
  return (
    <div className="relative my-20 bg-colorFondo">
  
      {/* Efectos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-colorPrimario5/5 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-colorSecundario1/5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-colorPrimario7/8 blur-xl"></div>
      </div>

      {/* Título y subtítulo mejorados */}
      <motion.div 
        className="relative z-10 text-center mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Título principal con animación letra por letra */}
        <motion.h3
          className="text-3xl tablet-md:text-5xl font-extrabold mb-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ 
            hidden: {}, 
            show: { transition: { staggerChildren: 0.03 } } 
          }}
        >
          {["Empresas", " ", "que", " ", "confían", " ", "en", " ", "nosotros"].map((word, wordIdx) => (
            <span key={wordIdx}>
              {word === " " ? " " : 
                word.split("").map((letter, letterIdx) => (
                  <motion.span
                    key={letterIdx}
                    className={wordIdx < 2 ? "text-colorPrimario2" : "text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario3 bg-clip-text"}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))
              }
            </span>
          ))}
        </motion.h3>

        {/* Subtítulo descriptivo */}
        <motion.p
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Desde startups hasta grandes corporaciones, hemos transformado ideas en soluciones digitales exitosas que impulsan el crecimiento empresarial
        </motion.p>

        {/* Estadísticas de impacto */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">20+</div>
            <div className="text-sm text-colorPrimario1/70">Empresas atendidas</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">98%</div>
            <div className="text-sm text-colorPrimario1/70">Tasa de éxito</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">24m</div>
            <div className="text-sm text-colorPrimario1/70">Tiempo promedio</div>
          </div>
        </motion.div>
      </motion.div>

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
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h4 className="text-3xl md-tablet:text-5xl font-bold text-colorPrimario2 mb-4">
          Proyectos destacados
        </h4>
        <p className="text-colorPrimario1/70 text-xl md-tablet:text-2xl max-w-2xl mx-auto">
          Descubre algunos de nuestros trabajos más impactantes y las soluciones que desarrollamos
        </p>
      </motion.div>

      {/* Slider de proyectos */}
      <motion.div 
        className="relative z-10 max-w-[1550px] mx-auto md-tablet:px-0 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
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
              className="h-auto flex py-10 justify-center transition-transform duration-300 hover:scale-105"
              style={{ width: '70%' }}
            >
              <div className="bg-white rounded-3xl w-full shadow-[0_0_30px_rgba(0,0,0,0.08)] hover:shadow-[0_0_40px_rgba(103,61,230,0.15)] transition-all duration-300">
                <ProjectCard {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}