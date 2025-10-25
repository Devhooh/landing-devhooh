import Link from "next/link";
import { LucideIcon, ShieldCheck, Zap, BarChart3, ArrowRight, Cog, Sparkles } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface Feature {
  Icon: LucideIcon;
  text: string;
}

const keyFeatures: Feature[] = [
  { Icon: ShieldCheck, text: "Fiabilidad Garantizada" },
  { Icon: Zap, text: "Desarrollo Ágil" },
  { Icon: BarChart3, text: "Soluciones Escalables" },
];

export default function CTAServices() {
  return (
    <section className="relative w-full h-auto my-10 py-16 flex justify-center items-center overflow-hidden px-4">
      <div
        className="
          relative z-10 mx-auto px-6 tablet-md:px-10 py-10 w-full h-auto max-w-[950px]
          flex flex-col tablet-md:flex-row tablet-md:items-center tablet-md:justify-between
          gap-10
          border border-colorDarkFondo5 rounded-3xl overflow-hidden 
          bg-colorDarkFondo4 backdrop-blur-xl
          shadow-2xl shadow-colorPrimario22/50
        "
      >
        {/* Columna izquierda - Contenido de texto */}
        <div className="flex flex-col items-center tablet-md:items-start text-center tablet-md:text-left">

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            delay={0.3}
          >
            <h2 className="text-3xl tablet-md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Transforma tu visión en <span className="text-transparent bg-gradient-to-r from-colorPrimario7 to-colorSecundario2 bg-clip-text">Realidad Digital</span>
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            delay={0.4}
          >
            <p className="text-md tablet-md:text-lg text-colorHover5 mb-8 max-w-lg">
              Permítenos ser tu socio tecnológico y construir la solución a medida que tu proyecto necesita para destacar y crecer.
            </p>
          </InViewAnimationWrapper>
          
          {/* CAMBIO: Contenido enriquecido con puntos clave */}
          <StaggerListContainer 
            className="flex flex-col md-tablet:flex-row gap-6 mb-8 w-full justify-center tablet-md:justify-start"
            staggerDelay={0.1}
          >
          {keyFeatures.map((feature, index) => (
            <StaggerListItemClient
              key={index}
              direction="y"
              offset={10} 
              className="flex items-center gap-2 text-sm text-colorHover5"
            >
              <feature.Icon className="w-5 h-5 text-colorPrimario7 flex-shrink-0" /> 
              <p>{feature.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

          {/* CAMBIO: Botón con efecto "shine" de CTAHome */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
          >
            <Link href="/contact">
              <button
                className="
                  group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-base md-tablet:text-lg 
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white 
                  shadow-[0_0_30px_rgba(103,61,230,0.4)] hover:shadow-[0_0_40px_rgba(103,61,230,0.6)] transition-all duration-300
                  hover:scale-[1.05] active:scale-[0.98] transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Agenda una Consulta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </InViewAnimationWrapper>
        </div>
        
        {/* Columna derecha - Visual animado */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          delay={0.4}
          className="relative hidden tablet-md:flex w-48 h-48 lg:w-56 lg:h-56 flex-shrink-0"
        >
          <FloatingWrapper>
            <Cog className="w-full h-full text-cyan-500" />
          </FloatingWrapper>
          <div className="absolute top-4 right-4 text-colorPrimarioLogo2 animate-pulse">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-4 left-4 text-colorHover animate-pulse">
            <Sparkles className="w-5 h-5" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}