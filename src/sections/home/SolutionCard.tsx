"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;  
  reverse?: boolean;
}

export function SolutionCard({
  title,
  description,
  image,
  reverse = false,
}: SolutionCardProps) {

  // Variantes de animación
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 12 } 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`relative max-w-3xl table-lg:w-3/4 p-[2px] rounded-2xl 
        bg-gradient-to-r from-colorSecundario3 via-colorSecundario1 to-black
        ${reverse ? "table-lg:self-end" : "table-lg:self-start"}`}
    >
      <div className={`bg-white rounded-2xl p-6 md-tablet:p-10 shadow-lg hover:shadow-2xl transition
        flex flex-col table-lg:flex-row ${reverse ? "table-lg:flex-row-reverse" : ""}`}>
        
        {/* Imagen */}
        <div className="p-6 md-tablet:w-1/2 table-lg:w-1/3 flex items-center justify-center">
          <Image
            width={220}
            height={220}
            src={image}
            alt={title}
            className="w-full h-auto object-contain max-w-[200px]"
          />
        </div>

        {/* Texto */}
        <div className="table-lg:w-2/3 flex flex-col justify-center text-center md-tablet:text-left">
          <h3 className="text-2xl md-tablet:text-3xl font-extrabold text-colorPrimario2 mb-3">
            {title}
          </h3>
          <p className="text-colorPrimario1 text-base md-tablet:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
