import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { ProjectSlider } from "./ProjectSlider";
import { ProjectSwiper } from "./ProjectSwiper";
import React from 'react';
import { AnimatedHeading } from "../../components/ui/AnimatedHeading";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import StaggerListContainer from "@/components/ui/StaggerListContainer";

export default function ProjectSectionSlider() {
  return (
    <section className="relative my-20 bg-colorFondo">

      {/* TÍTULO Y SUBTÍTULO (Contenido Server) */}
      <div className="relative z-10 text-center mb-16 px-4">
        <AnimatedHeading className="mb-6" delay={0.2}>
          <h2 className="text-3xl tablet-md:text-5xl font-extrabold mb-6 text-colorPrimario2">
            Empresas que <strong className="text-colorPrimario5"> confían en nosotros</strong>
          </h2>
        </AnimatedHeading>

        <AnimatedHeading className="mb-20" delay={0.3}>
          <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Hemos colaborado con startups innovadoras y grandes corporaciones para ofrecer soluciones digitales a medida que aceleran la transformación digital y garantizan el crecimiento empresarial sostenible.
          </p>
        </AnimatedHeading>

        {/* Estadísticas de impacto */}
        <StaggerListContainer
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: "20+", label: "Empresas atendidas"},
            { value: "98%", label: "Tasa de éxito" },
            { value: "24m", label: "Tiempo promedio"},
          ].map((val, index) => (
            <StaggerListItemClient
              key={index}
              className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20"
              direction="y" 
              offset={40} 
            >
              <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">{val.value}</div>
              <p className="text-sm text-colorPrimario1/70">{val.label}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>
      </div>

      {/* SLIDERS DE LOGOS */}
      <div 
        className="relative z-10 flex flex-col mb-16 px-6 md-tablet:px-12 gap-4 bg-gradient-to-r from-colorPrimarioLogo2/20 via-colorPrimarioLogo2/30 to-colorPrimarioLogo2/20 py-8 rounded-3xl mx-4"
      >
        <ProjectSlider logos={logos} direction="left" />
        <ProjectSlider logos={logos} direction="right" />
      </div>

      {/* ENCABEZADO */}
      <div className="relative z-10 text-center px-4 mb-4">
        <AnimatedHeading delay={0.2}>
          <h3 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario5 mb-8">
            Proyectos destacados
          </h3>
        </AnimatedHeading>
        <AnimatedHeading delay={0.3}>
          <p className="text-colorPrimario1/70 text-xl md-tablet:text-2xl max-w-2xl mx-auto">
            Explora nuestro portafolio de Aplicaciones Web y Móviles funcionales y proyectos de Integración de Inteligencia Artificial que generaron un impacto real.
          </p>
        </AnimatedHeading>
      </div>
      
      <ProjectSwiper projectsData={projectsData} />

    </section>
  );
}