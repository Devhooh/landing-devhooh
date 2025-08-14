"use client";

import React from 'react';
import ReviewCard from './ReviewCard';
import { reviewData } from '@/data/reviewData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Definición de la interfaz para las reseñas
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

// Helper para agrupar las reseñas en arrays de dos elementos
// Esto crea los "grupos" de 2 reseñas para cada diapositiva
const groupReviewsInPairs = (data: Review[]): Review[][] => {
  const grouped: Review[][] = [];
  for (let i = 0; i < data.length; i += 2) {
    grouped.push(data.slice(i, i + 2));
  }
  return grouped;
};

export default function ReviewsSection() {
  // Agrupamos las reseñas en pares para que cada diapositiva contenga 2 reseñas
  const groupedReviews = groupReviewsInPairs(reviewData);

  return (
    <div className="py-4 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 md-tablet:px-16 table-lg:px-40">
        {/* Título y subtítulo de la sección */}
        <div className="text-center mb-12">
          <h2 className="mt-10 text-4xl font-extrabold text-gray-900 md-tablet:text-5xl">
            Reseñas de Clientes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
          </p>
        </div>

        {/* Contenedor del carrusel con Swiper */}
        <Swiper
          // Módulos que vamos a usar (paginación)
          modules={[Pagination]}
          // Espacio entre las diapositivas
          spaceBetween={32}
          // Siempre muestra una diapositiva a la vez
          slidesPerView={1}
          // Paginación (puntos de navegación)
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {groupedReviews.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              {/* Contenedor grid responsivo para las reseñas dentro de la diapositiva */}
              {/* grid-cols-1 para tablet y móvil, lg:grid-cols-2 para escritorio */}
              <div className="grid grid-cols-1 gap-8 mb-20">
                {group.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
