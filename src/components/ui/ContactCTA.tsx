"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full pt-10 flex justify-center">
      <motion.div
        // Contenedor principal: base blanca con borde y sombra
        className="border border-gray-700 relative w-full max-w-[700px] h-[340px] rounded-t-[500px] bg-white
        shadow-xl flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-2000 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 50 }} // Entrada desde abajo
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Fondo animado solo al hover */}
        <motion.div
          className="absolute bottom-0 w-[1000px] h-[1000px] rounded-full pointer-events-none"
          animate={isHovered
            ? { y: "33%", scale: 1.1, opacity: 1 }
            : { y: "100%", scale: 0.9, opacity: 0 }}
          style={{
            background: "linear-gradient(to right, #5b21b6, #a855f7, #f472b6)",
          }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        />

        {/* Contenido */}
        <div className="relative z-10 px-8 pt-20 text-center flex flex-col justify-center items-center">
          <motion.h2
            className="text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold mb-4"
            animate={isHovered
              ? { color: "#ffffff", letterSpacing: "2px", scale: 1.02 }
              : { color: "#0f172a", letterSpacing: "0px", scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Queremos que su empresa sea nuestro próximo caso de éxito
          </motion.h2>

          {/* Botón */}
          <motion.div whileTap={{ scale: 0.97 }} className="mt-3">
            <Link href="/contact">
              <motion.button
                className="relative inline-flex items-center justify-center gap-2 px-10 py-3 text-sm md-tablet:text-lg font-bold rounded-2xl shadow-lg"
                animate={isHovered
                  ? { backgroundColor: "#fde8f7", color: "#0f172a" }
                  : { backgroundColor: "#7f1d6f", color: "#ffffff" }}
                transition={{ duration: 0.35 }}
              >
                ¡Empieza ahora!
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  animate={isHovered ? { x: 6 } : { x: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 12 }}
                >
                  <path d="M12.293 5.293a1 1 0 011.414 0L18 9.586l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 10H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" />
                </motion.svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
