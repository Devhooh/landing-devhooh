import Link from "next/link";
import { Sparkles, Rocket, ShieldCheck, Zap } from "lucide-react";
import { FloatingWrapper } from "@/components/ui/FloatingWrapper";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export default function CTATech() {
  return (
    <section className="relative w-full py-32 mt-20 overflow-hidden">
      {/* Fondo dinámico */}
      <div className="absolute inset-0 bg-colorHover5 opacity-95"></div>
      {/* Iconos flotantes */}
      <FloatingWrapper
        className="absolute top-12 left-10 text-colorDarkFondo2"
      >
        <Sparkles size={40} />
      </FloatingWrapper>
      <FloatingWrapper
        className="absolute bottom-16 right-12 text-colorDarkFondo2"
      >
        <Rocket size={50} />
      </FloatingWrapper>

      {/* Contenedor */}
      <div className="
        relative z-10 mx-5 tablet-md:mx-10 px-4 tablet-md:px-10 py-10 rounded-2xl shadow-xl 
        bg-colorHover3 backdrop-blur-lg text-center">
        
        {/* Texto principal */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2 leading-tight mb-4">
            ¿Necesitas una 
            <strong className="text-colorPrimario5"> solución similar?</strong>
          </h2>
        </InViewAnimationWrapper>

        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <p className="text-lg md-tablet:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Creamos software personalizado que conecta con tus clientes, mejora la experiencia y asegura resultados reales.
          </p>
        </InViewAnimationWrapper>

        {/* Stats / Beneficios */}
        <StaggerListContainer className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mb-12">
          {[
            {icon: Zap, data: "+200%", text: "Rendimiento optimizado"},
            {icon: ShieldCheck, data: "99.9%", text: "Seguridad garantizada"},
            {icon: Rocket, data: "Escalabilidad", text: "Preparado para crecer"},
          ].map((value, index) => (
            <StaggerListItemClient 
              key={index} 
              direction="y"
              offset={30}
              className="bg-white/70 rounded-xl p-6 flex flex-col items-center"
            >
              <value.icon className="w-8 h-8 text-colorPrimario5 mb-2" />
              <h3 className="text-xl font-bold text-colorPrimario1">{value.data}</h3>
              <p className="text-sm text-gray-700">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* CTA */}
        <div className="flex flex-col md-tablet:flex-row items-center justify-center gap-4">
          {/* Botón principal con efecto shine */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3}}
          >
            <Link href="/contact">
              <button
                className="
                  relative inline-flex items-center gap-2 px-8 py-4 font-bold text-lg rounded-xl shadow-lg 
                  text-white bg-colorSecundario4 transition-all duration-500 overflow-hidden
                  hover:scale-[1.05] active:scale-[0.98] transform"
              >
                <span className="relative z-10">Solicita una consulta</span>
              </button>
            </Link>
          </InViewAnimationWrapper>

          {/* Botón secundario */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4}}
          >
            <Link href="/portfolio">
              <button
                className="
                  px-8 py-4 font-bold text-lg rounded-xl border border-white/30 text-colorPrimario5 
                  shadow-md hover:bg-white/10 hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
              >
                Ver portafolio
              </button>
            </Link>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
}

