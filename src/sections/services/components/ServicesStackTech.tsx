"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideProps, ArrowRight } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface TechStackSectionProps {
  service: ServicesData;
}

export default function ServicesStackTech({ service }: TechStackSectionProps) {
  const stack = service.stackTech[0]; // asumimos que siempre hay un stackTech

  // Variantes
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3} },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, delay: i * 0.1},
    }),
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", delay: stack.tech.length * 0.15 } },
  };

  return (
    <section className="py-8 px-6 md-tablet:px-12 bg-violet-50">
      {/* Encabezado */}
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={textVariants}>
        <h2 className="text-left text-3xl md-tablet:text-4xl font-extrabold text-colorPrimario2 mb-4">
          Stack de tecnología que utilizamos
          <br/>
          para <span className="text-colorPrimario5">{service.name}</span>
        </h2>
        <p className="mt-3 text-colorPrimario1 text-lg md-tablet:text-xl leading-relaxed">
          {stack.description}
        </p>
      </motion.div>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6 mt-8 px-4">
        {stack.tech.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) || Icons.HelpCircle;

          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`
                group relative bg-white/70 
                border-2 border-${item.color}-400
                rounded-3xl p-8 flex flex-col text-center
                w-full hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                transition-all duration-300 hover:border-colorPrimario5/40
              `}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Badge numerado */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Icono central */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Icon className={`w-12 h-12 text-${item.color}-600 transition-transform duration-300 group-hover:scale-110`} />
                </div>
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300 mb-3">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {item.listTech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-colorHover3 text-colorSecundario4 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>

      {/* Botón */}
      <motion.div
        className="mt-10 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={buttonVariants}
      >
        <Link
          href="/tecnologia"
          className={`
            inline-flex items-center justify-center gap-2
            px-6 md-tablet:px-8 table-lg:px-10
            py-3 md-tablet:py-4
            rounded-2xl font-semibold text-white text-base md-tablet:text-lg
            bg-gradient-to-r from-colorPrimario5 to-colorSecundario1
            shadow-[0_4px_20px_rgba(103,61,230,0.25)]
            hover:shadow-[0_6px_30px_rgba(103,61,230,0.35)]
            hover:scale-105 hover:from-colorPrimario6 hover:to-colorSecundario2
            transition-all duration-300 ease-out
          `}
        >
          <span>Ver todas las tecnologías</span>
          <ArrowRight className="w-6 h-6 flex-shrink-0"/>
        </Link>
      </motion.div>

    </section>
  );
}
