"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesHeroSection() {
  const slides = [
    {
      title: "¿Buscas desarrollo de calidad y escalable? Aquí lo tienes.",
      subtitle:
        "Descubre nuestros servicios de desarrollo y conoce las tecnologías web y herramientas que utilizamos para llevar tus proyectos digitales al siguiente nivel.",
      cta: "Empieza tu proyecto",
      layout: "left",
      images: ["/assets/images/slide1.png"],
      features: [
        "Diseño web responsivo y adaptable para todos los dispositivos",
        "Optimización SEO para mejorar el posicionamiento en Google",
        "Entrega puntual de proyectos con alta calidad garantizada",
        "Arquitectura de software escalable y mantenible",
      ],
    },
    {
      title: "Soluciones digitales a tu medida",
      subtitle:
        "Creamos plataformas robustas y personalizadas con tecnologías de última generación. Desde la idea hasta el despliegue final.",
      cta: "Empieza tu proyecto",
      layout: "center",
      images: ["/assets/images/slide2.png", "/assets/images/slide3.png"],
      features: [
        "Plataformas web y aplicaciones móviles completamente responsivas",
        "Optimización SEO avanzada y velocidad de carga mejorada",
        "Cumplimiento de plazos con calidad profesional garantizada",
        "Arquitectura tecnológica escalable y segura",
      ],
    },
    {
      title: "Servicios completos con tecnologías actuales",
      subtitle:
        "IA, apps móviles, blockchain, sitios web y más. Nuestro stack moderno está listo para llevar tu idea al siguiente nivel.",
      cta: "Empieza tu proyecto",
      layout: "right",
      images: ["/assets/images/slide4.png"],
      features: [
        "Desarrollo de aplicaciones móviles multiplataforma modernas",
        "Implementación de soluciones con IA y blockchain",
        "Diseño de sitios web rápidos, atractivos y optimizados",
        "Soluciones digitales personalizadas según tus necesidades",
      ],
    },
  ];

  return (
    <section className="w-full pb-12 bg-gray-50">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        breakpoints={{
          0: { pagination: false },
          950: { pagination: { clickable: true } },
        }}
        className="max-w-[1550px] mx-auto"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {/* Layout PC */}
            <div className="hidden table-lg:flex items-center min-h-[400px] gap-4 justify-center">
              {slide.layout === "center" ? (
                <>
                  {/* Imagen izquierda */}
                  <Image
                    width={200}
                    height={200}
                    src={slide.images[0]}
                    alt={slide.title}
                    className="flex-1 max-h-64 object-contain rounded-lg"
                  />
                  {/* Texto */}
                  <div className="flex-1 text-center">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-950 leading-tight mb-8">
                      {slide.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>

                    {/* Lista SEO */}
                    {slide.features && (
                      <ul className="space-y-3 mb-6 max-w-lg mx-auto text-left inline-block">
                        {slide.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-gray-800"
                          >
                            <Star className="w-6 h-6 text-fuchsia-500 flex-shrink-0" />
                            <span className="text-base sm:text-lg">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link href="/contact">
                      <button className="px-8 py-4 text-lg md:text-xl font-semibold bg-fuchsia-500 text-white  rounded-xl shadow-md hover:bg-fuhsia-600 hover:scale-105 transform transition-all duration-300 flex items-center gap-2 mx-auto">
                        {slide.cta}
                      </button>
                    </Link>
                  </div>
                  {/* Imagen derecha */}
                  <Image
                    width={200}
                    height={200}
                    src={slide.images[1]}
                    alt={slide.title}
                    className="flex-1 max-h-64 object-contain rounded-lg"
                  />
                </>
              ) : (
                <div
                  className={`flex items-center min-h-[400px] gap-8 px-10 w-full
                  ${
                    slide.layout === "right"
                      ? "flex-row-reverse text-right"
                      : "justify-center"
                  }
                `}
                >
                  {/* Texto */}
                  <div className="flex-1">
                    <h2
                      className={`text-4xl sm:text-5xl font-extrabold text-indigo-950 leading-tight mb-8 ${
                        slide.layout === "right" ? "text-right" : ""
                      }`}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className={`text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl font-medium ${
                        slide.layout === "right" ? "text-right ml-auto" : ""
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    {/* Lista SEO */}
                    {slide.features && (
                      <ul
                        className={`space-y-3 mb-6 max-w-lg ${
                          slide.layout === "right"
                            ? "ml-auto text-right"
                            : "mr-auto text-left"
                        }`}
                      >
                        {slide.features.map((feature, i) => (
                          <li
                            key={i}
                            className={`flex items-center gap-3 text-gray-800 ${
                              slide.layout === "right"
                                ? "flex-row-reverse"
                                : ""
                            }`}
                          >
                            <Star className="w-6 h-6 text-fuchsia-500" />
                            <span className="text-base sm:text-lg">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Link href="/contact">
                      <button
                        className={`mt-4 px-8 py-4 text-lg table-lg:text-xl font-semibold bg-fuchsia-500 text-white  rounded-xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300 flex gap-2
                        ${slide.layout === "right" ? "ml-auto" : "mr-auto"}`}
                      >
                        {slide.cta}
                      </button>
                    </Link>
                  </div>
                  {/* Imagen */}
                  <div className="flex-1 flex justify-center">
                    {slide.images.map((src, i) => (
                      <Image
                        width={500}
                        height={500}
                        key={i}
                        src={src}
                        alt={slide.title}
                        className="w-72 h-auto object-contain rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Layout Mobile */}
            <div className="flex flex-col table-lg:hidden items-center min-h-[400px] gap-8 p-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-950 leading-tight mb-4 text-center order-1">
                {slide.title}
              </h2>
              {slide.images && slide.images.length > 0 && (
                <Image
                  width={500}
                  height={500}
                  src={slide.images[0]}
                  alt={slide.title}
                  className="w-64 h-auto object-contain rounded-lg order-2"
                />
              )}
              <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl mx-auto text-center order-3">
                {slide.subtitle}
              </p>

              {/* Lista SEO en mobile */}
              {slide.features && (
                <ul className="space-y-3 mb-6 text-left sm:text-center order-4">
                  {slide.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-800"
                    >
                      <Star className="w-6 h-6 text-fuchsia-500" />
                      <span className="text-base sm:text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link href="/contact" className="order-5">
                <button className="px-8 py-4 text-lg md:text-xl font-semibold bg-fuchsia-500 text-white  rounded-xl shadow-md hover:bg-fuchsia-600 hover:scale-105 transform transition-all duration-300 flex items-center gap-2 mx-auto">
                  {slide.cta}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
