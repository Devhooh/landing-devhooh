"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAAbout() {
  return (
    <div className="relative w-full h-auto my-32 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          z-10 mx-5 px-5 tablet-md:px-10 py-8 w-full h-auto max-w-[1000px]
          flex flex-col items-center
          gap-6 table-lg:gap-12 overflow-hidden text-center"
      >
        {/* Texto + botón */}
        <div className="flex flex-col items-center max-w-full">
          <h2 className="text-3xl tablet-md:text-5xl font-bold text-gray-950 mb-2 break-words pb-3">
            Devhooh es un socio en quien realmente se puede confiar.
          </h2>
          <p className="text-base tablet-md:text-xl font-extrabold text-slate-500 mb-4 pb-3">
            Mejoramos la experiencia de su plataforma y aumentamos las conversiones junto a su equipo.
            Donde creamos una solución escalable y una interfaz optimizada para su negocio.
          </p>

            {/* Botón */}
          <div className="flex justify-center w-full pb-5">
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
                Ponte en contacto
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
