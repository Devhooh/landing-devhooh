"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTATech() {
  return (
    <div className="relative w-full h-auto py-32 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          z-10 mx-5 tablet-md:mx-10 px-4 tablet-md:px-10 py-6 w-full h-auto 
          flex flex-col md-tablet:flex-row md-tablet:items-center rounded-xl
          gap-6 tablet-lg:gap-4 overflow-hidden text-center bg-gradient-to-b from-colorSecundario4 to-colorHover2"
      >
        {/* Texto + botón */}
        <div className="flex flex-col items-center max-w-full">
          <h2 className="text-2xl md-tablet:text-4xl font-bold text-white mb-2 pb-5 break-words">
            Tansformamos ideas en resultados digitales que impactan en tu negocio
          </h2>
          <p className="text-base md-tablet:text-2xl font-bold text-gray-300 mb-4 pb-3">
            Desde startups hasta grandes empresas, tú puedes ser el siguiente
          </p>

          {/* Botón */}
          <div className="flex justify-center w-full">
          <Link href="/contact">
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="
                inline-flex items-center gap-2 px-8 py-4
                font-bold text-lg rounded-xl shadow-lg 
                bg-white
                text-colorPrimario3 transition-all duration-500"
            >
              Solicita una consulta
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
