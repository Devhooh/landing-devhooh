"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function ServicesSection() {
  const slides = [
    {
      title: "¿Buscas desarrollo de calidad y escalable? Aquí lo tienes.",
      subtitle: "Explora nuestros servicios y conoce las tecnologías que usamos.",
      cta: "Empieza tu proyecto",
      layout: "left", 
      images: ["/assets/images/slide1.png"],
    },
    {
      title: "Soluciones digitales a tu medida",
      subtitle: "Creamos plataformas robustas y personalizadas con tecnologías de última generación. Desde la idea hasta el despliegue final.",
      cta: "Empieza tu proyecto",
      layout: "center",
      images: ["/assets/images/slide2.png", "/assets/images/slide3.png"],
    },
    {
      title: "Servicios completos con tecnologías actuales",
      subtitle: "IA, apps móviles, blockchain, sitios web y más. Nuestro stack moderno está listo para llevar tu idea al siguiente nivel.",
      cta: "Empieza tu proyecto",
      layout: "right",
      images: ["/assets/images/slide4.png"],
    },
  ]

  return(
    <section className="w-full p-4 bg-gray-200">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{clickable: true}}
        autoplay={{delay: 4000}}
        loop
        className="max-w-6xl mx-auto"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {slide.layout === "center" ? (
              <div className="flex items-center min-h-[400px] gap-8 px-8 justify-between">
                {/* Imagen izquierda */}
                <Image
                  width={200}
                  height={200}
                  src={slide.images[0]}
                  alt={slide.title}
                  className="flex-1 max-h-64 object-contain rounded-lg"
                />

                {/* Texto */}
                <div className="flex-1 space-y-4 text-center">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="text-gray-600 max-w-md mx-auto">{slide.subtitle}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mx-auto block">
                    {slide.cta}
                  </button>
                </div>

                {/* Imagen derecha */}
                <Image
                  width={200}
                  height={200}
                  src={slide.images[1]}
                  alt={slide.title}
                  className="flex-1 max-h-64 object-contain rounded-lg"
                />
              </div>
            ) : (
              // Slides izquierda y derecha
              <div
                className={`flex items-center min-h-[400px] gap-8 px-8
                  ${slide.layout === "right" ? "flex-row-reverse text-right" : "justify-between"}
                `}
              >
                <div className="flex-1 space-y-4">
                  <h2 className={`text-4xl font-bold ${slide.layout === "right" ? "text-right" : ""}`}>
                    {slide.title}
                  </h2>
                  <p className={`text-gray-600 max-w-md ${slide.layout === "right" ? "ml-auto text-right" : ""}`}>
                    {slide.subtitle}
                  </p>
                  <button
                    className={`mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition
                      ${slide.layout === "right" ? "ml-auto block" : ""}
                    `}
                  >
                    {slide.cta}
                  </button>
                </div>

                <div className="flex-1 flex justify-center">
                  {slide.images.map((src, i) => (
                    <Image
                      width={400}
                      height={400}
                      key={i}
                      src={src}
                      alt={slide.title}
                      className="max-h-64 object-contain rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}




