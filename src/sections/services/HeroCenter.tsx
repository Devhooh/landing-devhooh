"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroCenter() {
  return (
    <section className="h-auto">
      <div className="max-w-[1550px] mx-auto px-6 pt-10 md-tablet:pt-4 table-lg:pt-0 md-tablet:px-12">
        
        {/* Grid que cambia completamente entre móvil y desktop */}
        <div className="flex flex-col table-lg:grid table-lg:grid-cols-3 table-lg:items-center gap-6">

          {/* 1. TÍTULO - Móvil: primero | Desktop: dentro del centro */}
          <motion.div
            className="order-1 table-lg:hidden text-center"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mt-5 text-4xl md-tablet:text-5xl font-extrabold leading-tight drop-shadow-lg text-white">
              Soluciones digitales
              <span className="text-colorPrimario2"> a tu medida</span>
            </h2>
          </motion.div>

          {/* 2. IMAGEN IZQUIERDA - Móvil: segunda (reutilizada) | Desktop: primera columna */}
          <motion.div
            className="order-2 table-lg:order-none flex justify-center table-lg:justify-end mb-8 table-lg:mb-14 table-lg:mt-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-full max-w-md">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" 
                   style={{ aspectRatio: '600 / 565' }}>
                <Image
                  src="/assets/images/herocenter1.png"
                  alt="soluciones-a-medida-desarrollo-de-software"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 549px) 85vw, (max-width: 749px) 70vw, (max-width: 949px) 60vw, (min-width: 950px) 400px"
                  loading="lazy"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <motion.div
                className="animate-pulse absolute -top-4 -right-4 table-lg:-right-4 w-8 h-8 rounded-full bg-white opacity-20"
              ></motion.div>
            </div>
          </motion.div>

          {/* 3. CONTENEDOR CENTRAL - Móvil: dividido en partes | Desktop: columna central completa */}
          <div className="order-3 table-lg:order-none flex flex-col items-center text-center gap-8 col-span-1">
            
            {/* Título para Desktop */}
            <motion.div
              className="hidden table-lg:block md-tablet:mt-2"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mt-5 text-4xl font-extrabold leading-tight drop-shadow-lg text-white">
                Soluciones digitales
                <span className="text-colorPrimario2"> a tu medida</span>
              </h2>
            </motion.div>

            {/* Subtítulo */}
            <motion.div
              className="order-3 table-lg:order-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg md-tablet:text-xl text-white max-w-2xl">
                Creamos plataformas robustas y personalizadas. Desde la idea hasta el despliegue final.
              </p>
            </motion.div>

            {/* Lista */}
            <motion.ul
              className="order-4 table-lg:order-none mt-6 table-lg:mt-0 space-y-4 text-white text-left max-w-md"
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              viewport={{ once: true }}
            >
              {[
                "Plataformas web y aplicaciones móviles",
                "Optimización SEO avanzada",
                "Cumplimiento de plazos con calidad profesional",
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <BadgeCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-base md-tablet:text-lg">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Botón CTA */}
            <motion.div
              className="order-5 table-lg:order-none mt-8 table-lg:mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-10 py-3 text-lg md:text-xl font-semibold bg-white text-black rounded-lg shadow-md 
                    transform transition-all duration-300 border border-colorSecundario2 flex items-center gap-2"
                >
                  Empieza tu proyecto
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* 4. IMAGEN DERECHA - Móvil: oculta | Desktop: tercera columna */}
          <motion.div
            className="hidden table-lg:flex justify-start mb-14 table-lg:mt-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-full max-w-md">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" 
                   style={{ aspectRatio: '662 / 574' }}>
                <Image
                  src="/assets/images/herocenter2.png"
                  alt="soluciones-a-medida-desarrollo-de-software"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 950px) 400px, 0px"
                  priority={false}
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <motion.div
                className="animate-pulse absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white opacity-20"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}