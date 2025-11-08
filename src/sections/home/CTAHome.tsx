import { Mail, Sparkles, ArrowRight } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import ButtonCta from "@/components/ui/ButtonCta";

export default function CTAHome() {

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md-tablet:px-10">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido */}
          <div className="text-center table-lg:text-left">
            {/* Título principal animado */}
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.3, ease: "easeOut"}}
            >
              <h2 className="text-3xl md-tablet:text-5xl font-extrabold mb-6 leading-tight text-white">
                Queremos que tu empresa sea nuestro próximo{" "}
                <span className="text-green-500">
                  caso de éxito
                </span>
              </h2>
            </TextRevealClient>

            {/* Subtítulo */}
            <TextRevealClient
              direction="y"
              offset={20}
              transition={{duration: 0.3, delay: 0.4, ease: "easeOut"}}
            >
              <p className="text-lg md-tablet:text-xl text-colorHover5 mb-8 max-w-2xl mx-auto">
                Impulsa tu proyecto con soluciones digitales innovadoras, hechas a tu medida y respaldadas por años de experiencia
              </p>
            </TextRevealClient>

            {/* Estadísticas rápidas */}
            <StaggerListContainer
              className="flex flex-wrap justify-center table-lg:justify-start gap-8 mb-10"
            >{[
              {data: "20+", text: "Proyectos"},
              {data: "99%", text: "Satisfacción"},
              {data: "24/7", text: "Soporte"},

            ].map((value, index) => (

              <StaggerListItemClient 
                key={index} 
                direction="x"
                offset={-20}
                transition={{duration: 0.3, delay: 0.4, ease: "easeOut"}}
                className="text-center"
              >
                <div className="text-2xl font-bold text-colorPrimario7">{value.data}</div>
                <p className="text-sm text-colorHover5">{value.text}</p>
              </StaggerListItemClient>
            ))}
            </StaggerListContainer>

            {/* Botón principal */}
            <SimpleInViewWrapper
              className="flex flex-col md-tablet:flex-row gap-4 justify-center table-lg:justify-start"
              direction="y"
              offset={20}
              delay={0.4}
            >
              <ButtonCta
                href="/contact"
                className="group relative overflow-hidden mx-auto md-tablet:mx-0 px-5 md-tablet:px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                  text-white shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700">
                </div>
                  <span className="relative z-10 flex items-center gap-3">
                    ¡Empezamos tu proyecto hoy!
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                  </span>
              </ButtonCta>

            </SimpleInViewWrapper>
          </div>

          {/* Columna derecha - Visual */}
          <SimpleInViewWrapper
            className="flex justify-center table-lg:justify-end"
            direction="x"
            offset={20}
            delay={0.4}
          >
            <div className="relative">
              {/* Contenedor principal del visual */}
              <div className="relative w-80 h-80 md-tablet:w-96 md-tablet:h-96">
                
                {/* Círculo principal */}
                <FloatingWrapper
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-colorPrimario5/20 to-colorSecundario1/20 backdrop-blur-sm border border-white/10"
                />

                {/* Mail icon central */}
                <FloatingWrapper
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 flex items-center justify-center"
                >
                  <Mail className="w-20 h-20 tablet-md:w-32 tablet-md:h-32 text-white" />
                </FloatingWrapper>

                {/* Sparkles decorativos */}
                <div className="absolute top-16 right-16 text-colorPrimario5 animate-pulse">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="absolute bottom-20 left-12 text-colorSecundario1 animate-pulse">
                  <Sparkles className="w-6 h-6" />
                </div>

                <div className="absolute top-24 left-20 text-colorPrimario7 animate-pulse">
                  <Sparkles className="w-5 h-5" />
                </div>

                {/* Círculos orbitales */}
                <div
                  className="animate-pulse absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-colorPrimario5"
                ></div>

                <div
                  className="animate-pulse absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-colorSecundario1"
                ></div>
              </div>
            </div>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}