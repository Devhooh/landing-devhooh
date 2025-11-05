import { logos } from "@/data/projects";
import { projectsData } from "@/data/portfolioData";
import { ProjectSlider } from "../../components/sliders/ProjectSlider";
import { ProjectSwiper } from "../../components/sliders/ProjectSwiper";
import React from 'react';
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import TextRevealClient from "@/components/ui/TextRevealClient";

export default function ProjectSectionSlider() {
  return (
    <section className="relative my-20 bg-colorFondo">

      {/* TÍTULO Y SUBTÍTULO (Contenido Server) */}
      <div className="relative z-10 text-center mb-16 px-4">
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.2, ease: "easeOut"}}
          className="mb-6"
        >
          <h2 className="text-3xl tablet-md:text-5xl font-extrabold mb-6 text-colorPrimario2">
            Empresas que <strong className="text-colorPrimario5"> confían en nosotros</strong>
          </h2>
        </TextRevealClient>

        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.3, ease: "easeOut"}}
          className="mb-10" 
        >
          <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Hemos colaborado con startups innovadoras y grandes corporaciones para ofrecer soluciones digitales a medida que aceleran la transformación digital y garantizan el crecimiento empresarial sostenible.
          </p>
        </TextRevealClient>

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
              direction="y" 
              offset={40}
              transition={{duration: 0.3, delay: 0.3}}
              className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20"
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
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.2, ease: "easeOut"}}
        >
          <h3 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario5 mb-8">
            Proyectos destacados
          </h3>
        </TextRevealClient>
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.3, ease: "easeOut"}}
        >
          <p className="text-colorPrimario1/70 text-xl md-tablet:text-2xl max-w-2xl mx-auto">
            Explora nuestro portafolio de Aplicaciones Web y Móviles funcionales y proyectos de Integración de Inteligencia Artificial que generaron un impacto real.
          </p>
        </TextRevealClient>
      </div>
      
      <ProjectSwiper projectsData={projectsData} />

    </section>
  );
}