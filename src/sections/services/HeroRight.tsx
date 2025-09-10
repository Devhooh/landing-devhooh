"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroRight() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.div
            className="order-1 table-lg:order-2 mt-10 table-lg:mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold leading-tight drop-shadow-lg text-center table-lg:text-right text-white">
              Servicios completos con
              <span className="text-colorPrimario2"> tecnologías actuales</span>
            </h2>
          </motion.div>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            className="
              my-10 table-lg:mb-16 order-2 table-lg:order-1 table-lg:row-span-4 
              flex justify-center table-lg:justify-start"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            <div className="relative group">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/slide4.png"
                  alt="soluciones-a-medida-desarrollo-de-software"
                  width={500}
                  height={350}
                  className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <motion.div
                className={`absolute -top-4 -right-4  w-8 h-8 rounded-full bg-white opacity-20`}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg md-tablet:text-xl text-gray-200 text-center table-lg:text-right max-w-2xl mx-auto table-lg:mx-0">
              IA, apps móviles, blockchain, sitios web y más. Nuestro stack moderno está listo para tu idea.
            </p>
          </motion.div>

          {/* --- 4) LISTA --- */}
          <motion.div
            className="order-4 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <ul className="space-y-3 text-white text-left max-w-md mx-auto table-lg:mx-0">
              {[
                "Desarrollo de aplicaciones móviles multiplataforma modernas",
                "Diseño de sitios web rápidos, atractivos y optimizados",
                "Soluciones digitales personalizadas según tus necesidades"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BadgeCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-base md-tablet:text-xl">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* --- 5) BOTÓN --- */}
          <motion.div
            className="order-5 flex justify-center table-lg:justify-end mt-10 table-lg:mt-1 mb-5 table-lg:my-8 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/contact">
              <button className="
                px-10 py-3 text-lg md-tablet:text-xl font-semibold bg-white text-black rounded-lg shadow-md hover:scale-105
                transform transition-all duration-300 border border-colorSecundario2">
                Empieza tu proyecto
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

