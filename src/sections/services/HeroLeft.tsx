"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck   } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroLeft() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.div
            className="order-1 mt-6 table-lg:mt-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="
              text-4xl font-extrabold leading-tight text-center table-lg:text-left 
              text-white drop-shadow-lg"
            >
              ¿Buscas desarrollo de calidad y escalable? 
              <span className="text-colorPrimario2"> Aquí lo tienes.</span>
            </h2>
          </motion.div>

          {/* Imagen mejorada */}
          <motion.div
            className="
              order-2 mt-5 table-lg:mb-16 table-lg:order-2 table-lg:row-span-4 flex justify-center"
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/webSoftware.png"
                  alt="Imagen-desarrollo-de-calidad-servicios-de-desarrollo"
                  width={500}
                  height={350}
                  className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <motion.div
                className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white opacity-20`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1 * 0.5
                }}
              ></motion.div>
            </div>
          </motion.div>


          {/* --- 3) SUBTÍTULO --- */}
          <motion.div
            className="order-3 mb-5 table-lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg md-tablet:text-xl text-gray-200 text-center table-lg:text-left leading-relaxed max-w-xl mx-auto table-lg:mx-0">
              Descubre nuestros servicios de desarrollo y conoce las tecnologías web y herramientas que utilizamos para llevar tus proyectos digitales al siguiente nivel.
            </p>
          </motion.div>

          {/* --- 4) LISTA --- */}
          <motion.ul
            className="order-4 flex justify-center table-lg:justify-start flex-col space-y-4 text-white text-left table-lg:text-left max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0"
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            viewport={{ once: true }}
          >
            {[
              "Diseño web responsivo y adaptable para todos los dispositivos",
              "Entrega puntual de proyectos con alta calidad garantizada",
              "Arquitectura de software escalable y mantenible"
            ].map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  show: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <BadgeCheck   className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-base md-tablet:text-lg">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* --- 5) BOTÓN --- */}
          <motion.div
            className="order-5 flex justify-center table-lg:justify-start mt-10 mb-5 table-lg:mt-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-10 py-3 text-lg md-tablet:text-xl font-semibold bg-white text-black rounded-lg shadow-md 
                  transform transition-all duration-300 border border-colorSecundario2"
              >
                Empieza tu proyecto
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
