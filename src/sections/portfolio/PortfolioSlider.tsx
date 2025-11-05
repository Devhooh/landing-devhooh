import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { ProjectSlider } from "../../components/sliders/ProjectSlider";
import { logos } from "@/data/projects";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

export function PortfolioSlider() {
  return (
    <div className="relative my-20 bg-colorFondo">
  
      {/* Título y subtítulo mejorados */}
      <div className="relative z-10 text-center mb-16 px-4">
        {/* Título principal con animación letra por letra */}
        <InViewAnimationWrapper
          direction="y"
          offset={40}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <h2 className="text-3xl tablet-md:text-5xl font-extrabold mb-6">
            Empresas que confían en {""}
            <span className="text-colorPrimario5">
              nosotros
            </span>
          </h2>
        </InViewAnimationWrapper>

        {/* Subtítulo descriptivo */}
        <InViewAnimationWrapper
          direction="y"
          offset={40}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Desde startups hasta grandes corporaciones, hemos transformado ideas en soluciones digitales exitosas que impulsan el crecimiento empresarial
          </p>
        </InViewAnimationWrapper>

        {/* Estadísticas de impacto */}
        <StaggerListContainer
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            {data: "20+", text: "Empresas atendidas"},
            {data: "98%", text: "Tasa de éxito"},
            {data: "24m", text: "Tiempo promedio"},
          ].map((value, index) => (

            <StaggerListItemClient 
              key={index} 
              direction="y"
              offset={40}
              className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20"
            >
              <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">{value.data}</div>
              <p className="text-sm text-colorPrimario1/70">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>
      </div>

      {/* Sliders de logos con animación mejorada */}
      <InViewAnimationWrapper
        direction="y"
        offset={40}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 flex flex-col mb-16 px-6 md-tablet:px-12 gap-4 bg-gradient-to-r from-colorPrimarioLogo2/20 via-colorPrimarioLogo2/30 to-colorPrimarioLogo2/20 py-8 rounded-3xl mx-4"
      >
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </InViewAnimationWrapper>

    </div>
  )
}