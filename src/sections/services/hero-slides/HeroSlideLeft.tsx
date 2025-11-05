import Image from "next/image";
import { BadgeCheck   } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import ButtonCta from "@/components/ui/ButtonCta";

export default function HeroSlideLeft() {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <InViewAnimationWrapper
            className="order-1 mt-6 table-lg:mt-2"
            direction="x"
            offset={-20}
            delay={0.3}
            transition={{duration: 0.5}}
          >
            <h1 className="
              text-4xl font-extrabold leading-tight text-center table-lg:text-left 
              text-white drop-shadow-lg"
            >
              ¿Buscas desarrollo de calidad y escalable? 
              <span className="text-colorPrimario2"> Aquí lo tienes.</span>
            </h1>
          </InViewAnimationWrapper>

          {/* Imagen mejorada */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            transition={{ duration: 0.4}}
            className="
              order-2 mt-5 mb-5 table-lg:mb-16 table-lg:order-2 table-lg:row-span-4 flex justify-center"
          >
            <div className="relative group">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/assets/images/image5.png"
                  alt="Imagen-desarrollo-de-calidad-servicios-de-desarrollo"
                  // Se usan las dimensiones originales para que Next.js las optimice correctamente
                  width={520}
                  height={523}
                  className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="animate-pulse absolute -top-4 -left-4 w-8 h-8 rounded-full bg-white opacity-20"
              ></div>
            </div>
          </InViewAnimationWrapper>


          {/* --- 3) SUBTÍTULO --- */}
          <InViewAnimationWrapper
            className="order-3 mb-5 table-lg:mb-0"
            direction="x"
            offset={-20}
            delay={0.3}
            transition={{ duration: 0.5}}
          >
            <p className="text-lg md-tablet:text-xl text-white text-center table-lg:text-left leading-relaxed max-w-xl mx-auto table-lg:mx-0">
              Descubre nuestros servicios de desarrollo y conoce las tecnologías web y herramientas que utilizamos para llevar tus proyectos digitales al siguiente nivel.
            </p>
          </InViewAnimationWrapper>

          {/* --- 4) LISTA --- */}
          <StaggerListContainer
            className="order-4 flex justify-center table-lg:justify-start flex-col space-y-4 text-white text-left table-lg:text-left max-w-md mx-0 md-tablet:mx-auto table-lg:mx-0"
          >
            {[
              "Diseño web responsivo y adaptable para todos los dispositivos",
              "Entrega puntual de proyectos con alta calidad garantizada",
              "Arquitectura de software escalable y mantenible"
            ].map((feature, index) => (
              <StaggerListItemClient
                key={index}
                direction="x"
                offset={-20}
                className="flex items-start gap-3"
              >
                <BadgeCheck   className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-base md-tablet:text-lg">{feature}</span>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

          {/* --- 5) BOTÓN --- */}
          <InViewAnimationWrapper
            className="order-5 flex justify-center table-lg:justify-start mt-10 mb-5 table-lg:mt-5"
            direction="x"
            offset={-20}
            delay={0.3}
            transition={{ duration: 0.4}}
          >
            <ButtonCta
              href="/contact"
              className="
                px-10 py-3 text-lg md-tablet:text-xl font-semibold bg-white text-black rounded-lg shadow-md 
                transition-all duration-300 border border-colorSecundario2 hover:scale-[1.05] active:scale-[0.98] transform"
            >
              Empieza tu proyecto
            </ButtonCta>
          </InViewAnimationWrapper>

        </div>
      </div>
    </section>
  );
}
