import React from "react";
import TextRevealClient from "@/components/ui/TextRevealClient";
import ReviewPortfolioSlider from "@/components/sliders/ReviewPortfolioSlider";

export default function ReviewsSection() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md-tablet:px-8">
        {/* Título */}
        <div className="text-center mb-12">

          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{duration: 0.2, delay: 0.3}}
          >
            <h2 className="mt-10 text-4xl font-extrabold text-gray-900 md-tablet:text-5xl">
              Reseñas de Clientes
            </h2>
          </TextRevealClient>

          <TextRevealClient
            direction="x"
            offset={-20}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="mt-4 text-xl text-gray-600">
              Mira lo que nuestros clientes tienen que decir sobre nuestro trabajo.
            </p>
          </TextRevealClient>
        </div>

        {/* Swiper slider de las cards para pc y movil */}
        <ReviewPortfolioSlider/>
      </div>
    </div>
  );
}
