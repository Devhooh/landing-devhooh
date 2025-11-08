import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

export default function CTASlugServices() {
  return (
    <section className="relative w-full pb-20 pt-12  overflow-hidden">
      {/* Fondo gradiente premium */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4">
        <div
          className="flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-between gap-10 bg-white px-8 py-10"
        >
          {/* Columna izquierda: texto */}
          <div className="flex-1 flex flex-col items-center tablet-md:items-start text-center tablet-md:text-left">

            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-xl tablet-md:text-2xl font-semibold text-colorPrimario1 mb-6">
                ¿Listo para llevar tu proyecto al siguiente nivel?
              </p>
            </TextRevealClient>

            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <h2 className="text-3xl tablet-md:text-4xl font-extrabold mb-4 leading-tight text-colorPrimario2">
                Nuestro equipo está listo ¡Empecemos {" "}
                <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
                  tu proyecto ahora!
                </span>{" "}
              </h2>
            </TextRevealClient>

            {/* Estadísticas rápidas */}
            <StaggerListContainer
              delayChildren={0.2}
              className="flex gap-8 mb-8 justify-center tablet-md:justify-start"
            > 
              {[
                {data: "+15", text: "Clientes Agradecidos"},
                {data: "99%", text: "Satisfacción"},
                {data: "24/7", text: "Soporte"},
              ].map((value, index) => (
                <StaggerListItemClient
                  key={index} 
                  direction="y"
                  offset={30}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-colorPrimario7">{value.data}</div>
                  <p className="text-sm text-colorPrimario4">{value.text}</p>
                </StaggerListItemClient>
              ))}
            </StaggerListContainer>

            {/* Botón premium */}
            <SimpleInViewWrapper
              direction="y"
              offset={30}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center tablet-md:justify-start"
            >
              <Link href="/contact">
                <button
                  className="
                    group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base md-tablet:text-lg 
                    bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white 
                    shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] 
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    ¡Ponte en contacto!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </SimpleInViewWrapper>
          </div>

          {/* Columna derecha: visual premium */}
          <SimpleInViewWrapper
            direction="x"
            offset={20}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="flex justify-center items-center"
          >
            <FloatingWrapper
              className="relative w-40 h-40 md-tablet:w-48 md-tablet:h-48 flex-shrink-0 flex items-center justify-center"
            >
              {/* Círculo con 'glow' animado */}
              <div className="absolute inset-0 rounded-full bg-colorPrimario5/90 border border-white/10"></div>
              
              {/* Icono del cohete flotando */}
              <FloatingWrapper>
                <Rocket className="w-16 h-16 md-tablet:w-20 md-tablet:h-20 text-white" />
              </FloatingWrapper>
            </FloatingWrapper>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}

