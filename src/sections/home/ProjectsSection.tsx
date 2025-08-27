"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ProjectSlider } from "./ProjectSlider";
import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ProjectCard } from "@/sections/home/ProjectCard";

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
    <section className="w-full pb-20 pt-32 bg-white">

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
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 via-purple-600 to-fuchsia-500"
        >
          Proyectos que <span className="text-blue-600">impulsan</span> resultados
        </motion.h2>
      </motion.div>

      {/* Texto + lista */}
      <div className="max-w-5xl mx-auto px-6 md-tablet:px-12 mb-12 flex flex-col table-lg:flex-row items-start gap-4">
        
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
            className="text-gray-700 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed mb-6"
          >
            De startups a empresas consolidadas, creamos soluciones digitales modernas que{" "}
            <span className="font-semibold text-indigo-600">mejoran procesos</span>, escalan negocios y sorprenden a los usuarios.
          </motion.p>
        </motion.div>

        {/* Lista */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center table-lg:items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className="flex flex-col gap-3 text-gray-800">
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
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* Nuestros clientes */}
      <div className="flex justify-center mt-12">
        <h3 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-600">
          Nuestros clientes:
        </h3>
      </div>

      {/* Sliders */}
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

    </section>
  );
}

