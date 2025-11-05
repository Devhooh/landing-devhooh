import { Project } from "@/data/portfolioDetails";
import { X, Check, TrendingUp, Award } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface ResultSectionProps {
  project: Project;
}

export default function ResultSection({ project }: ResultSectionProps) {
  const result = project.result;

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 md-tablet:px-8">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm mb-8"
          >
            <Award className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-semibold">Proyecto completado con éxito</span>
          </InViewAnimationWrapper>

          {/* Título con animación letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
              Resultados {""}
              <span
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
              >
                obtenidos
              </span>
            </h2>
          </InViewAnimationWrapper>

          {/* Descripción mejorada */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.5}}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed">
              {result.descripcion}
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Comparativa Before/After mejorada */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-8 mb-16">
          
          {/* Bloque "Antes" */}
          <InViewAnimationWrapper
            direction="x"
            offset={-20}
            transition={{duration: 0.3, delay: 0.4}}
            className="relative group"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-50/60 to-red-100/40 backdrop-blur-sm border-2 border-red-200/30 shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-300">
              
              {/* Header con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  <X className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-red-700">Antes</h3>
                  <p className="text-sm text-red-600 font-medium">Situación inicial</p>
                </div>
              </div>

              {/* Lista de problemas */}
              <StaggerListContainer className="space-y-4">
                {result.antes.map((item, index) => (
                  <StaggerListItemClient
                    key={index} 
                    direction="y"
                    offset={-20}
                    className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50 border border-red-200/30 hover:bg-red-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-colorPrimario1/80 leading-relaxed">{item}</p>
                  </StaggerListItemClient>
                ))}
              </StaggerListContainer>

              {/* Badge de estado */}
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-red-500/10 border border-red-400/20">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span className="text-red-600 font-semibold text-sm">Problemática inicial</span>
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500/20"></div>
            </div>
          </InViewAnimationWrapper>

          {/* Bloque "Después" */}
          <InViewAnimationWrapper
            direction="x"
            offset={20}
            transition={{duration: 0.3, delay: 0.4}}
            className="relative group"
          >
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-50/60 to-green-100/40 backdrop-blur-sm border-2 border-green-200/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300">
              
              {/* Header con icono */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md-tablet:text-3xl font-bold text-green-700">Después</h3>
                  <p className="text-sm text-green-600 font-medium">Resultado alcanzado</p>
                </div>
              </div>

              {/* Lista de mejoras */}
              <StaggerListContainer className="space-y-4">
                {result.despues.map((item, index) => (
                  <StaggerListItemClient
                    key={index} 
                    direction="y"
                    offset={-20}
                    className="flex items-start gap-3 p-3 rounded-xl bg-green-50/50 border border-green-200/30 hover:bg-green-50/80 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-colorPrimario1/80 leading-relaxed">{item}</p>
                  </StaggerListItemClient>
                ))}
              </StaggerListContainer>

              {/* Badge de éxito */}
              <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-600 font-semibold text-sm">Objetivos cumplidos</span>
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500/20"></div>
            </div>
          </InViewAnimationWrapper>
        </div>


        {/* Métricas de impacto */}
        <div
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {data: "100%", text: "Objetivos alcanzados"},
            {data: "✓", text: "Clientes satisfechos"},
            {data: "24/7", text: "Funcionamiento óptimo"},
          ].map((value, index) => (
            <ProjectStaggerWrapper
              key={index} 
              index={index}
              className="text-center p-6 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{value.data}</div>
              <p className="text-sm text-colorPrimario1/70">{value.text}</p>
            </ProjectStaggerWrapper>
          ))}
        </div>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <Award className="w-6 h-6 text-green-500 flex-shrink-0" />
            <strong className="text-colorPrimario5 font-semibold text-lg">
              Transformación exitosa completada
            </strong>
            <TrendingUp className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}