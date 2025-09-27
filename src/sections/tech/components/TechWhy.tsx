"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

interface TechWhyProps {
  title: string;
  color: string;
  description: string;
  image: string;
  techs?: string[];
}

const floatingVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function TechWhy({
  title,
  description,
  image,
}: TechWhyProps) {
  return (
    <section className="flex justify-center px-4 py-16">
      <motion.div
        className="
          relative flex flex-col gap-16
          bg-gradient-to-bl from-colorDarkFondo1 to-colorHover 
          text-white rounded-3xl p-8 md-tablet:p-12
          shadow-[0_0_50px_rgba(103,61,230,0.3)] border border-colorPrimario5/20 
          backdrop-blur-md max-w-6xl w-full
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Decorativos */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
        <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-gradient-to-r from-colorSecundario3 to-colorSecundario4 opacity-40"></div>

        <motion.div
          className="absolute top-10 left-2 md-tablet:left-10 text-white"
          variants={floatingVariants}
          animate="animate"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        {/* Grid principal: imagen + texto */}
        <div className="grid grid-cols-1 tablet-md:grid-cols-2 gap-12 items-center">
          {/* Imagen izquierda */}
          <motion.div
            className="flex justify-center order-2 tablet-md:order-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt={`Imagen de ${title}`}
              width={500}
              height={300}
              loading="lazy"
              className="rounded-2xl object-cover w-80 h-auto shadow-lg"
            />
          </motion.div>

          {/* Texto derecha */}
          <div className="order-1 tablet-md:order-2 text-center tablet-md:text-right flex flex-col items-center tablet-md:items-end">
            <motion.h2
              className="text-2xl tablet-md:text-3xl font-extrabold mb-4 leading-tight"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              ¿Por qué desarrollar con {title}
            </motion.h2>

            <motion.p
              className="text-colorHover5 leading-relaxed mb-6 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Botón premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="
                  relative inline-flex items-center justify-center px-7 py-3 
                  rounded-2xl font-semibold tracking-wide
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario1
                  text-white shadow-lg hover:shadow-2xl 
                  transition-transform duration-300 hover:scale-[1.03]
                  overflow-hidden group
                "
              >
                <span className="relative z-10">Solicita presupuesto</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 
                  translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Estadísticas del stack */}
        <motion.ul
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <li className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario5 mb-2">
              100%
            </div>
            <p className="text-sm text-colorPrimario1/90">
              Experiencia de uso
            </p>
          </li>

          <li className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario5 mb-2">
              100%
            </div>
            <p className="text-sm text-colorPrimario1/90">
              Buenas practicas
            </p>
          </li>

          <li className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-colorPrimario5 mb-2">✓</div>
            <p className="text-sm text-colorPrimario1/90">
              Rendimiento garantizado
            </p>
          </li>
        </motion.ul>

        {/* Call to action final */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full 
            bg-gradient-to-r from-colorPrimario5/50 to-colorSecundario1/50 border border-colorPrimario5/20">
            <Code2 className="w-5 h-5 text-colorDarkFondo1 flex-shrink-0" />
            <span className="text-white font-semibold">
              Stack optimizado para máximo rendimiento
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
