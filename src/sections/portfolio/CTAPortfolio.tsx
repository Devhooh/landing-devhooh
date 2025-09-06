"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAServices() {
  return (
    <div className="relative w-full h-auto my-32 flex justify-center overflow-hidden">
      {/* Contenedor principal */}
      <div
        className="
          z-10 px-5 tablet-md:px-10 py-8 w-full h-auto
          flex flex-col items-center
          gap-6 table-lg:gap-12
          overflow-hidden bg-gradient-to-tl from-colorDarkFondo2 to-colorPrimarioLogo1
          text-center
        "
      >
        {/* Texto + botón */}
        <div className="flex flex-col items-center max-w-full">
          <h2 className="text-3xl tablet-md:text-5xl font-extrabold text-white mb-2 break-words pb-3">
            Cuando estes listo:
          </h2>
          <h2 className="text-3xl tablet-md:text-5xl font-bold text-white mb-2 break-words pb-3">
            Hablemos sobre tu proyecto
          </h2>

            {/* Botón */}
          <div className="flex justify-center w-full pb-5">
            <Link href="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  font-bold text-lg rounded-xl shadow-lg 
                  bg-colorPrimario5
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

          <p className="text-base tablet-md:text-xl italic font-extrabold text-slate-200 mb-4 pb-3">
            Desde startups hasta grandes empresas, tú puedes ser el siguiente
          </p>
        </div>
      </div>
    </div>
  );
}
