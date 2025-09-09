"use client";
import HeroLeft from "./HeroLeft";
import HeroCenter from "./HeroCenter";
import HeroRight from "./HeroRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="w-full mx-auto bg-colorPrimario6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        autoplay={{ delay: 7000 }}
        loop
        // className="w-full mx-auto bg-colorSecundario"
      >
        {/* Slide 1: HeroLeft */}
        <SwiperSlide>
          <HeroLeft
            title="¿Buscas desarrollo de calidad y escalable? Aquí lo tienes."
            subtitle="Descubre nuestros servicios de desarrollo y conoce las tecnologías web y herramientas que utilizamos para llevar tus proyectos digitales al siguiente nivel."
            cta="Empieza tu proyecto"
            images="/assets/images/webSoftware.png"
            features={[
              "Diseño web responsivo y adaptable para todos los dispositivos",
              "Entrega puntual de proyectos con alta calidad garantizada",
              "Arquitectura de software escalable y mantenible"
            ]}
          />
        </SwiperSlide>

        {/* Slide 2: HeroCenter */}
        <SwiperSlide>
          <HeroCenter
            title="Soluciones digitales a tu medida"
            subtitle="Creamos plataformas robustas y personalizadas. Desde la idea hasta el despliegue final."
            cta="Empieza tu proyecto"
            images={["/assets/images/slide2.png", "/assets/images/slide3.png"]}
            features={[
              "Plataformas web y aplicaciones móviles",
              "Optimización SEO avanzada",
              "Cumplimiento de plazos con calidad profesional",
            ]}
          />
        </SwiperSlide>

        {/* Slide 3: HeroRight */}
        <SwiperSlide>
          <HeroRight
            title="Servicios completos con tecnologías actuales"
            subtitle="IA, apps móviles, blockchain, sitios web y más. Nuestro stack moderno está listo para tu idea."
            cta="Empieza tu proyecto"
            images="/assets/images/slide4.png"
            features={[
              "Desarrollo de aplicaciones móviles multiplataforma modernas",
              "Diseño de sitios web rápidos, atractivos y optimizados",
              "Soluciones digitales personalizadas según tus necesidades"
            ]}
          />
        </SwiperSlide>

        {/* Botones custom */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/40 p-5 rounded-full">
            <ArrowLeft className="w-6 h-6 text-colorPrimario1" />
          </div>
          <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/60 hover:bg-white/40 p-5 rounded-full">
            <ArrowRight className="w-6 h-6 text-colorPrimario1" />
          </div>

      </Swiper>
    </section>
  );
}