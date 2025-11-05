import React from "react";
import { reviewData } from "@/data/reviewData";

import { ReviewsHomeCard } from "../../components/cards/home/ReviewsHomeCard";
import { ReviewsSlider } from "@/components/sliders/ReviewsSlider";
import TextRevealClient from "@/components/ui/TextRevealClient";

export default function ReviewsHome() {
  return (
    <div className="max-w-8xl bg-colorHover5 py-10 mx-2 px-4">
      {/* Título y descripción */}
      <div className="text-center mb-12">
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2"
        >
          <h2>
            <strong className="text-colorPrimario5">Testimonios y Reseñas: </strong>
            <br/>
            Lo que dicen nuestros clientes
          </h2>
        </TextRevealClient>

        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.4, ease: "easeInOut"}}
          className="my-8 text-colorPrimario1 text-base md-tablet:text-lg table-lg:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          <p>
            Conoce las historias de éxito de empresas que han transformado sus operaciones con nuestras soluciones web, móviles y de IA a la medida.
          </p>
        </TextRevealClient>

      </div>

      {/* Desktop: 3 cards fijas */}
      <div className="hidden table-lg:flex justify-center gap-8">
        {reviewData.slice(0, 3).map((review) => (
          <ReviewsHomeCard key={review.id} testimonial={review} variant="desktop" />
        ))}
      </div>

      {/* Tablet: slider con cards más anchas */}
      <div className="hidden md-tablet:block table-lg:hidden">
        <ReviewsSlider reviews={reviewData} variant="tablet"/>
      </div>

      {/* Mobile: slider con cards estrechas */}
      <div className="block md-tablet:hidden">
        <ReviewsSlider reviews={reviewData} variant="mobile"/>
      </div>
    </div>
  );
}
