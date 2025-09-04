"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Review {
  id: number;
  logoUrl: string;
  projectTitle: string;
  reviewBody: string;
  reviewerName: string;
  reviewerProfileUrl: string;
  rating: number;
  quality: number;
  schedule: number;
  cost: number;
  willingnessToRecommend: number;
}

export default function ReviewCard({ review }: { review: Review }) {
  // Función para renderizar estrellas según la calificación
  const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <motion.span
      key={i}
      initial={{ scale: 1, rotate: 0 }}
      animate={{ 
        scale: [1, 1.2, 1], 
        rotate: [0, 10, 0],
        opacity: [1, 0.9, 1]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 5 + i * 1.5, // cada estrella tiene su tiempo
      }}
      className={i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}
    >
      ★
    </motion.span>
  ));
};

  return (

    <div className="bg-colorFondo border border-colorSecundario rounded-2xl p-8 flex flex-col md-tablet:flex-row space-y-6 md-tablet:space-y-0 md-tablet:space-x-6 h-full max-w-3xl mx-auto">
        
        {/* Sección izquierda */}
        <div className="flex-1 flex flex-col space-y-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={review.logoUrl}
              alt="Logo de la empresa"
              width={120}
              height={40}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Título + reseña */}
          <div>
            <h3 className="text-lg font-extrabold bg-clip-text text-transparent bg-colorSecundario2">
              {review.projectTitle}
            </h3>
            <p className="text-colorPrimario1 mt-1 text-sm leading-relaxed">
              {review.reviewBody}
            </p>
          </div>

          {/* Revisor */}
          <div className="flex items-center space-x-3 mt-auto pt-10">
            <div className="p-[2px] rounded-full bg-colorSecundario">
              <Image
                src={review.reviewerProfileUrl}
                alt={review.reviewerName}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-colorPrimario2">{review.reviewerName}</p>
              <p className="text-xs text-colorPrimario1">Cliente de Devhoo</p>
            </div>
          </div>
        </div>

        {/* Sección derecha */}
        <div className="w-full md-tablet:w-52 flex-shrink-0 bg-colorHover/15 backdrop-blur-md border border-gray-100 p-6 rounded-xl flex flex-col space-y-4 items-center">
          {/* Calificación general */}
          <div className="text-center">
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-colorSecundario2">
              {review.rating.toFixed(1)}
            </p>
            <div className="flex justify-center text-2xl mt-1 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]">
              {renderStars(review.rating)}
            </div>
          </div>

          {/* Detalles */}
          <div className="w-full text-sm text-colorPrimario1 space-y-2">
            <div className="flex justify-between">
              <span>Calidad</span>
              <span className="font-semibold">{review.quality.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span>Horario</span>
              <span className="font-semibold">{review.schedule.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span>Costo</span>
              <span className="font-semibold">{review.cost.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span>Recomendaría</span>
              <span className="font-semibold">{review.willingnessToRecommend.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>

  );
}
