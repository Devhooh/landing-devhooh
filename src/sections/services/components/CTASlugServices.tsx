"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket } from "lucide-react";

export default function CTASlugServices() {
  return (
    <div className="relative w-full h-auto my-14 tablet-md:my-28 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          z-10 mx-5 px-5 tablet-md:px-10 py-8 w-full h-auto max-w-[900px]
          flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-between
          gap-8 overflow-hidden
          text-center tablet-md:text-left
        "
      >
        {/* Texto + botón */}
        <div className="flex flex-col items-center tablet-md:items-start max-w-full flex-1">
          {/* Párrafo */}
          <p className="text-xl tablet-md:text-2xl font-semibold text-slate-700 mb-4 pb-3">
            ¿Listo para empezar?
          </p>

          {/* Ícono solo en mobile (debajo del párrafo) */}
          <div className="mb-4 tablet-md:hidden">
            <Rocket className="w-20 h-20 text-gray-800 mx-auto" />
          </div>

          {/* Título */}
          <h2 className="text-3xl tablet-md:text-4xl font-extrabold text-gray-900 mb-4 break-words">
            Reunamos a nuestro equipo para empezar con tu proyecto ahora!
          </h2>

          {/* Botón */}
          <div className="flex justify-center tablet-md:justify-start w-full">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  font-bold text-lg rounded-xl shadow-lg 
                  bg-gradient-to-r from-fuchsia-600 to-violet-600
                  text-white transition-all duration-500
                "
              >
                ¡Ponte en contacto!
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                >
                  <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                </motion.svg>
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Ícono solo en desktop (a la derecha) */}
        <div className="hidden tablet-md:flex justify-center tablet-md:justify-end items-center flex-shrink-0">
          <Rocket className="w-28 h-28 text-gray-800" />
        </div>
      </div>
    </div>
  );
}
