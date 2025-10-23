import React from 'react';
import { CheckCircle, BadgeCheck } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import StaggerListContainer from '@/components/ui/StaggerListContainer';

export function ProjectsSection() {
  return (
    <section className="w-full pb-10 pt-10 tablet-md:pt-32 mb-10 bg-white">

      {/* Título */}
      <InViewAnimationWrapper 
        className="text-center max-w-4xl mx-auto px-6 mb-6 md-tablet:mb-12"
        direction="y"
        offset={40}
        delay={0.1}
      >
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-colorPrimario2 to-colorPrimario1">
          Proyectos que generan <strong className="text-colorPrimario5"> resultados reales</strong>
        </h2>
      </InViewAnimationWrapper>

        {/* Métricas de impacto (Lista) */}
      <StaggerListContainer className="flex justify-center gap-8 flex-wrap mb-12">
        {[
          { text: "20+ proyectos entregados" },
          { text: "10+ industrias distintas" },
          { text: "95% satisfacción de clientes" },
        ].map((metric, idx) => (
          <StaggerListItemClient
            key={idx}
            className="flex items-center gap-2 bg-colorHover5 rounded-xl px-4 py-2 shadow-md"
            direction="x" // Animación de entrada horizontal
            offset={-30} 
          >
            <BadgeCheck className="w-6 h-6 tablet-md:w-10 tablet-md:h-10 text-colorPrimario5" />
            <span className="text-colorPrimario2 font-semibold">{metric.text}</span>
          </StaggerListItemClient>
        ))}
        </StaggerListContainer>

      {/* Texto + lista */}
      <div className="max-w-5xl mx-auto px-6 md-tablet:px-12 mb-10 flex flex-col table-lg:flex-row items-start gap-4">
        {/* Bloque de texto (Párrafo) */}
        <InViewAnimationWrapper
          className="flex-1 text-center table-lg:text-left"
          direction="y"
          offset={30}
          delay={0.1} // Ajuste el delay para que aparezca después del título
        >
          <p className="text-colorPrimario4 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed mb-6">
            En Devhooh, cada proyecto es una oportunidad para {""} 
            <strong>impulsar tu negocio</strong>. Nos especializamos en el desarrollo de <strong>software a medida</strong>,
            integrando <strong>soluciones web, móviles e Inteligencia Artificial</strong>. No solo resolvemos problemas; 
            <strong> escalamos tu negocio</strong> y mejoramos la experiencia de tus clientes a través de la tecnología.
          </p>
        </InViewAnimationWrapper>

        {/* Lista */}
        <div className="flex-1 flex flex-col justify-center items-center table-lg:items-start">
          <StaggerListContainer className="flex flex-col gap-3 text-gray-800 text-base md-tablet:text-lg table-lg:text-xl">
            {[
              <><strong>Soluciones de software personalizadas</strong> y escalables (Next.js/React)</>,
              <>Integración de <strong>Inteligencia Artificial</strong> y Machine Learning</>,
              <><strong>Diseño UX/UI</strong> moderno y experiencia de usuario premium</>,
              <>Soporte y <strong>acompañamiento técnico</strong> dedicado post-lanzamiento</>,
            ].map((item, idx) => (
              <StaggerListItemClient
                key={idx}
                className="flex items-start gap-3"
                direction="x" // Animación de entrada horizontal
                offset={-20}
              >
                <CheckCircle className="w-6 h-6 text-colorPrimario5 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>
        </div>
      </div>
    </section>
  );
}