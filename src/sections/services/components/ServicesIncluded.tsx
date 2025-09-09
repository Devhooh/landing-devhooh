"use client";

import * as Icons from "lucide-react";
import { LucideProps, Shield, LifeBuoy, Award  } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface BenefitsSectionProps {
  service: ServicesData;
}

// Variantes para textos (título y descripción)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Variantes container para escalonar las cards
const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // controla la velocidad
  },
};

// Variantes individuales para cada card
const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesIncluded({ service }: BenefitsSectionProps) {
  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">

      {/* Card intro  mejorada */}
      <motion.div
        className="space-y-16 pb-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          variants={fadeUp}
          className={`flex justify-center`}
        >
          <div
            className={`
              group relative max-w-6xl w-full
              bg-colorHover4/30 backdrop-blur-sm 
              border-2 border-white/20 hover:border-colorPrimario5/30
              rounded-3xl p-8 md-tablet:p-12 shadow-[0_0_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_0_40px_rgba(103,61,230,0.15)]
              transition-all duration-500
              flex flex-col table-lg:flex-row items-center
            `}
          >
            {/* Efectos decorativos */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Contenido de texto mejorado */}
            <div className={`text-center`}>
              
              <h3 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2 mb-4 group-hover:text-colorPrimario5 transition-colors duration-300">
                ¿Por qué elegirnos para tu proyecto de  {""}
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">{service.name.toLowerCase()}?</span>
              </h3>
              
              <p className="text-colorPrimario1/80 text-lg md-tablet:text-xl leading-relaxed mb-6 py-5">
                {service.description}
              </p>

              {/* Lista de beneficios */}
              <div className="justify-center flex flex-wrap gap-3">
              {[
                { text: "Calidad", icon: Award },       // premio / medalla
                { text: "Seguridad", icon: Shield },    // escudo
                { text: "Soporte", icon: LifeBuoy },    // flotador / soporte
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-white/30 hover:bg-white transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-4 h-4 md-tablet:w-7 md-tablet:h-7 text-colorPrimario5 flex-shrink-0" />
                    <span className="text-sm md-tablet:text-lg font-medium text-colorPrimario2">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Título secundario */}
      <motion.h2
        className="text-3xl md-tablet:text-4xl font-extrabold text-center text-colorPrimario2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Lo que incluye nuestro servicio de{" "}
        <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">{service.name}</span>
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-center text-lg md-tablet:text-xl text-gray-600 my-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Descubre cada una de las características y beneficios que forman parte de este servicio. 
        Nos aseguramos de brindarte soluciones completas y adaptadas a tus necesidades.
      </motion.p>

      {/* Grid de beneficios */}
      <motion.div
        className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {service.services.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <motion.div
              key={index}
              variants={card}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-t from-white to-purple-200 border shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              {/* Icono + título */}
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Icon className="w-7 h-7 text-colorSecundario4" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>

              {/* Subtítulo */}
              {benefit.subtitle && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {benefit.subtitle}
                </p>
              )}

              {/* Lista */}
              <ul className="mt-2 space-y-2">
                {benefit.list?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm leading-relaxed"
                  >
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
