"use client";

import Image from "next/image";

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
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 flex flex-col md-tablet:flex-row space-y-6 md-tablet:space-y-0 md-tablet:space-x-6 h-full">
      {/* Sección izquierda (Logo, título, cuerpo, perfil del revisor) */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Logo de la empresa */}
        <div className="flex items-center">
          <Image
            src={review.logoUrl}
            alt="Logo de la empresa"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Título y cuerpo de la reseña */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{review.projectTitle}</h3>
          <p className="text-gray-600 mt-1 text-sm">{review.reviewBody}</p>
        </div>

        {/* Perfil del revisor */}
        <div className="flex items-center space-x-3 mt-auto">
          <Image
            src={review.reviewerProfileUrl}
            alt={review.reviewerName}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{review.reviewerName}</p>
            <p className="text-xs text-gray-500">Cliente de Devhoo</p>
          </div>
        </div>
      </div>

      {/* Sección derecha (Calificaciones) */}
      <div className="w-full md-tablet:w-52 flex-shrink-0 bg-sky-100 p-6 rounded-lg flex flex-col space-y-4 items-center">
        {/* Calificación general */}
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-800">{review.rating.toFixed(1)}</p>
          <div className="flex justify-center text-2xl mt-1">
            {renderStars(review.rating)}
          </div>
        </div>

        {/* Calificaciones detalladas */}
        <div className="w-full text-sm text-gray-600 space-y-2">
          <div className="flex justify-between items-center">
            <span>Calidad</span>
            <span className="font-semibold">{review.quality.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Horario</span>
            <span className="font-semibold">{review.schedule.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Costo</span>
            <span className="font-semibold">{review.cost.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Dispuesto a recomendar</span>
            <span className="font-semibold">{review.willingnessToRecommend.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
