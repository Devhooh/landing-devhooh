"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle, BadgeCheck } from "lucide-react";
import { ProjectSlider } from "./ProjectSlider";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/sections/home/ProjectCard";
import { ProjectsBenefits } from "./ProjectsBenefits";
import ReviewsHome from "@/sections/home/ReviewsHome";

// Variantes para textos y párrafos
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
  }),
};

// Variantes para lista
const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 60 },
  }),
};

export function ProjectsSection() {
  return (
    <section className="w-full pb-10 pt-10 tablet-md:pt-32 mb-10 bg-white">

      {/* Título */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-6 mb-6 md-tablet:mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          custom={0}
          variants={textVariants}
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-colorPrimario2 to-colorPrimario1"
        >
          Proyectos que <span className="text-colorSecundario3">impulsan resultados</span>
        </motion.h2>
      </motion.div>

      {/* Métricas de impacto */}
      <motion.div
        className="flex justify-center gap-8 flex-wrap mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          { text: "20+ proyectos entregados" },
          { text: "10+ industrias distintas" },
          { text: "95% satisfacción de clientes" },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={listItemVariants}
            className="flex items-center gap-2 bg-colorHover5 rounded-xl px-4 py-2 shadow-md"
          >
            <BadgeCheck className="w-6 h-6 tablet-md:w-10 tablet-md:h-10 text-colorPrimario5" />
            <span className="text-colorPrimario2 font-semibold">{metric.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Texto + lista */}
      <div className="max-w-5xl mx-auto px-6 md-tablet:px-12 mb-20 flex flex-col table-lg:flex-row items-start gap-4">
        
        {/* Bloque de texto */}
        <motion.div
          className="flex-1 text-center table-lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            custom={0}
            variants={textVariants}
            className="text-colorPrimario4 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed mb-6"
          >
            De startups a empresas consolidadas, creamos soluciones digitales modernas que{" "}
            <span className="font-semibold text-colorSecundario">mejoran procesos</span>, escalan negocios y sorprenden a los usuarios.
          </motion.p>
        </motion.div>

        {/* Lista */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center table-lg:items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className="flex flex-col gap-3 text-gray-800 text-base md-tablet:text-lg table-lg:text-xl">
            {[
              "Soluciones personalizadas y escalables",
              "Integración de inteligencia artificial",
              "Diseño moderno y experiencia premium",
              "Soporte y acompañamiento dedicado",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={listItemVariants}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-colorPrimario5 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Beneficios de proyectos */}
      <ProjectsBenefits/>

      {/* Nuestros clientes */}
      <div>
        <div className="flex justify-center mt-12">
          <h3 className="
            text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold my-12 
            bg-clip-text text-transparent bg-gradient-to-r from-colorPrimario2 to-colorPrimario2">
            Nuestros clientes:
          </h3>
        </div>

        {/* Sliders de logos de empresas*/}
        <div className="flex flex-col mb-12 px-6 md-tablet:px-12 gap-2 bg-colorPrimarioLogo2">
          <ProjectSlider logos={logos} direction="left" />
          <ProjectSlider logos={logos} direction="right" />
        </div>

        {/* Slider de proyectos */}
        <div className="max-w-[1550px] mx-auto md-tablet:px-0 mb-10">
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
                className="h-auto flex py-10 justify-center transition-transform duration-300 hover:scale-[1]"
                style={{ width: '70%' }}
              >
                <div className="bg-white rounded-3xl w-full">
                  <ProjectCard {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ReviewsHome/>

    </section>
  );
}

