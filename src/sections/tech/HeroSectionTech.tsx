"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSectionTech() {

  return (
    <section className="relative w-full bg-gradient-to-b from-indigo-950 via-blue-950/90 to-blue-900/60 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="order-1 text-center table-lg:text-left text-4xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-50"
          >
            La tecnología detrás de nuestras soluciones de vanguardia
          </motion.h1>

          {/* --- 2) IMAGEN --- */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative z-10 bg-white rounded-3xl p-4">
              <Image
                src="/assets/images/hero1.png"
                alt="Equipo desarrollando software a medida"
                width={500}
                height={500}
                className="w-72 h-auto object-contain rounded-2xl"
                priority
              />
            </div>
            {/* Glows */}
          </motion.div>

          {/* --- 3) SUBTÍTULO --- */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-3 text-lg md-tablet:text-xl 
              text-center table-lg:text-left my-5 table-lg:pr-32
            text-gray-200 leading-relaxed max-w-xl mx-auto table-lg:mx-0"
          >
            Donde los frameworks y la innovación de productos se unen con la experiencia técnica.
          </motion.p>

          {/* --- 5) BOTÓN --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="order-5 flex justify-center table-lg:justify-start"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  px-8 py-4 text-lg md-tablet:text-xl font-semibold
                  bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white
                  rounded-2xl shadow-lg
                  hover:shadow-xl transition-all duration-300
                "
              >
                Construyamos tu proyecto!
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
