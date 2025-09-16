"use client";

import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export default function HeroSectionHome() {
  // Variants para stagger en la lista
  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay entre cada li
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section className="relative w-full bg-colorFondo overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6 mb-10">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="order-1 text-center table-lg:text-left text-4xl md-tablet:text-5xl font-extrabold text-colorPrimario2 leading-tight tracking-tight"
          >
            Desarrollo de{" "}
            <span className="text-colorSecundario">software inteligente</span> a tu medida
          </motion.h1>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative w-[420px] h-[420px] rounded-2xl">
              <Image
                src="/assets/images/hero1.png"
                alt="Equipo desarrollando software a medida"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* --- 3) SUBTÍTULO --- */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-3 text-lg md-tablet:text-xl 
              text-center table-lg:text-left
            text-colorPrimario1 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
          >
            Creamos soluciones web, móviles y empresariales integrando{" "}
            <span className="font-semibold text-colorSecundario1">inteligencia artificial</span>
            {" "}para impulsar la innovación y mejorar la eficiencia de tu negocio.
          </motion.p>

          {/* --- 4) LISTA SEO --- */}
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="
              order-4 space-y-2 text-base md-tablet:text-lg text-gray-800
              text-left table-lg:text-left
              max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0
            "
          >
            {[
              "Aplicaciones web rápidas y escalables",
              "Apps móviles modernas y fluidas",
              "Integración de inteligencia artificial en tus procesos",
              "Sistemas empresariales personalizados",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <CircleCheck className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* --- 5 BOTÓN --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-5 flex justify-center items-center flex-col md-tablet:flex-row table-lg:justify-start pt-4 gap-4"
          >
            <Link href="/services">
              <motion.button
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
                  bg-colorSecundario2/90 hover:bg-colorSecundario3  text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver nuestros servicios
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                // whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 text-lg md-tablet:text-lg font-semibold border border-colorPrimarioLogo1
                  bg-white hover:bg-colorSecundario3 text-black rounded-2xl shadow-lg hover:shadow-xl hover:text-white transition-all duration-300"
              >
                Ver nuestro portafolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}