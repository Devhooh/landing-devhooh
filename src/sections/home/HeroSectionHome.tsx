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
    <section className="relative w-full bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6 mb-10">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="order-1 text-center table-lg:text-left text-4xl md-tablet:text-5xl font-extrabold text-blue-950 leading-tight tracking-tight"
          >
            Desarrollo de{" "}
            <span className="text-fuchsia-600">software inteligente</span> a tu medida
          </motion.h1>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative z-10 bg-white shadow-2xl rounded-3xl px-4 my-10">
              <Image
                src="/assets/images/hero1.png"
                alt="Equipo desarrollando software a medida"
                width={500}
                height={500}
                className="w-[420px] h-auto object-contain rounded-2xl"
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
            text-gray-700 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
          >
            Creamos soluciones web, móviles y empresariales integrando{" "}
            <span className="font-semibold text-blue-800">inteligencia artificial</span>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-lg md-tablet:text-xl font-semibold border border-purple-600
                  bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver servicios
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-lg md-tablet:text-xl font-semibold border border-purple-600
                  bg-gradient-to-r from-gray-50 to-gray-100 text-black rounded-2xl shadow-lg hover:from-fuchsia-500 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                Ver portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}