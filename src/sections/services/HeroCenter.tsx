import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function HeroCenter() {
  return (
    <section className="h-auto">
      <div className="max-w-[1550px] mx-auto px-6 pt-10 md-tablet:pt-4 table-lg:pt-0 md-tablet:px-12">
        {/* Grid que cambia completamente entre móvil y desktop */}
        <div className="flex flex-col table-lg:grid table-lg:grid-cols-3 table-lg:items-center gap-6">
          {/* 1. TÍTULO - Móvil: primero | Desktop: dentro del centro */}
          <InViewAnimationWrapper
            className="order-1 table-lg:hidden text-center"
            direction="y"
            offset={20}
            delay={0.3}
          >
            <h2 className="mt-5 text-4xl md-tablet:text-5xl font-extrabold leading-tight drop-shadow-lg text-white">
              De la estrategia a tu
              <span className="text-colorPrimario2"> producto digital</span>
            </h2>
          </InViewAnimationWrapper>

          {/* 2. IMAGEN IZQUIERDA - Móvil: segunda (reutilizada) | Desktop: primera columna */}
          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            delay={0.3}
            className="order-2 table-lg:order-none flex justify-center table-lg:justify-end mb-8 table-lg:mb-14 table-lg:mt-8"
          >
            <div className="relative group w-full max-w-md">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" 
                  style={{ aspectRatio: '600 / 565' }}>
                <Image
                  src="/assets/images/herocenter1.png"
                  alt="Fase de consultoría estratégica y definición de objetivos para el desarrollo de software a medida y soluciones digitales."
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 549px) 85vw, (max-width: 749px) 70vw, (max-width: 949px) 60vw, (min-width: 950px) 400px"
                  loading="lazy"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Círculos decorativos flotantes */}
              <div
                className="animate-pulse absolute -top-4 -right-4 table-lg:-right-4 w-8 h-8 rounded-full bg-white opacity-20"
              ></div>
            </div>
          </InViewAnimationWrapper>

          {/* 3. CONTENEDOR CENTRAL - Móvil: dividido en partes | Desktop: columna central completa */}
          <div className="order-3 table-lg:order-none flex flex-col items-center text-center gap-8 col-span-1">
            {/* Título para Desktop */}
            <InViewAnimationWrapper
              direction="y"
              offset={20}
              delay={0.3}
              className="hidden table-lg:block md-tablet:mt-2"
            >
              <h2 className="mt-5 text-4xl font-extrabold leading-tight drop-shadow-lg text-white">
                De la estrategia a tu
              <span className="text-colorPrimario2"> producto digital</span>
              </h2>
            </InViewAnimationWrapper>

            {/* Subtítulo */}
            <InViewAnimationWrapper
              direction="y"
              offset={-20}
              delay={0.3}
              className="order-3 table-lg:order-none"
            >
              <p className="text-lg md-tablet:text-xl text-white max-w-2xl">
                Ofrecemos un servicio de consultoría integral. Te guiamos a través de la definición del producto, diseño UX/UI y desarrollo de un MVP
              </p>
            </InViewAnimationWrapper>

            {/* Lista */}
            <StaggerListContainer
              className="order-4 table-lg:order-none mt-6 table-lg:mt-0 space-y-4 text-white text-left max-w-md"
            >
              {[
                "Desarrollo de Plataformas (Web, Móvil, SaaS)",
                "Optimización SEO Avanzada y Estrategia de Contenido",
                "Garantía de Calidad del Código y Cumplimiento de Plazos",
              ].map((feature, index) => (
                <StaggerListItemClient
                  key={index}
                  direction="y"
                  offset={20}
                  className="flex items-start gap-3"
                >
                  <BadgeCheck className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-base md-tablet:text-lg">{feature}</span>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>

            {/* Botón CTA */}
            <InViewAnimationWrapper
              direction="y"
              offset={20}
              delay={0.3}
              className="order-5 table-lg:order-none mt-8 table-lg:mt-4 mb-10"
            >
              <Link href="/contact">
                <button
                  className="
                    px-10 py-3 text-lg md:text-xl font-semibold bg-white text-black rounded-lg shadow-md 
                    transition-all duration-300 border border-colorSecundario2 flex items-center gap-2 hover:scale-[1.05] active:scale-[0.98] transform"
                >
                  Empieza tu proyecto
                </button>
              </Link>
            </InViewAnimationWrapper>
          </div>

          {/* 4. IMAGEN DERECHA - Móvil: oculta | Desktop: tercera columna */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            delay={0.3}
            className="hidden table-lg:flex justify-start mb-14 table-lg:mt-8"
          >
            <div className="relative group w-full max-w-md">
              <div className="bg-white/10 px-1 py-2 relative overflow-hidden w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500" 
                  style={{ aspectRatio: '662 / 574' }}>
                <Image
                  src="/assets/images/herocenter2.png"
                  alt="Despliegue y ejecución del desarrollo de producto digital con código de alta calidad, enfocado en escalabilidad y resultado tecnológico final."
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 950px) 400px, 0px"
                  priority={false}
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
        </div>
      </div>
    </section>
  );
}