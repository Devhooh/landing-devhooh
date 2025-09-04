"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAServices() {
  return (
    <div className="relative w-full h-auto my-12 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          z-10 mx-5 px-5 tablet-md:px-10 py-8 w-full h-auto max-w-[900px]
          flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-start
          gap-6 table-lg:gap-12
          border-2 border-black rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black
          text-center tablet-md:text-left
        "
      >
        {/* Texto + botón */}
        <div className="flex flex-col items-center tablet-md:items-start max-w-full">
          <h2 className="text-3xl tablet-md:text-4xl font-extrabold text-white mb-2 break-words pb-3">
            ¿Buscas <span className="text-fuchsia-300">servicios</span> de desarrollo <span className="text-fuchsia-300">confiable</span>?
          </h2>
          <p className="text-2xl tablet-md:text-3xl font-extrabold text-slate-200 mb-4 pb-3">
            En <span className="text-fuchsia-700">devhooh</span> podemos ayudarlo
          </p>

          {/* Botón */}
        <div className="flex justify-center  tablet-md:justify-start w-full">
          <Link href="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="
                inline-flex items-center gap-2 px-8 py-4
                font-bold text-lg rounded-xl shadow-lg 
                bg-gradient-to-r from-fuchsia-600 to-violet-600
                text-white transition-all duration-500"
            >
              ¡Programa una cita!
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
              >
                <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
              </motion.svg>
            </motion.button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
