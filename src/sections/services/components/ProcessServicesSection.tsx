import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { ServicesData } from "@/data/ServicesDetails";
import { CheckCircle, ArrowRight, Clock, Target } from "lucide-react";

interface DevelopmentProcessProps {
  service: ServicesData;
}

export default function ProcessServicesSection({ service }: DevelopmentProcessProps) {
  const steps = service.process;

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 md-tablet:px-12">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Target className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Metodología probada</span>
          </InViewAnimationWrapper>

          {/* Título con animación letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.4, delay: 0.4}}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
              <span className="text-colorPrimario2">
                Proceso de
              </span>
              <span className="text-colorPrimario5">
                Desarrollo
              </span>
            </h2>
          </InViewAnimationWrapper>


          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Así trabajamos el servicio de <span className="font-bold text-colorPrimario5">{service.name}</span>, paso a paso con metodología ágil
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Timeline mejorado */}
        <div className="relative">
          
          {/* Línea principal del timeline */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-colorPrimario5 via-colorSecundario1 to-colorPrimario5 rounded-full shadow-lg"></div>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              
              return (
                <ProjectStaggerWrapper 
                  key={index} 
                  index={index}
                  className="relative flex items-start gap-2 md-tablet:gap-8"
                >
                  
                  {/* Número del timeline mejorado */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="
                        w-16 h-16 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                        flex items-center justify-center shadow-lg group hover:shadow-xl transition-all duration-300
                        hover:scale-[1.05] active:scale-[0.98] transform"
                    >
                      <span className="text-white font-bold text-xl animate-pulse">{index + 1}</span>
                    </div>
                    
                  </div>

                  {/* Card del paso mejorada */}
                  <div className="flex-grow group">
                    <div 
                      className="
                        relative p-6 md-tablet:p-8 rounded-3xl bg-white backdrop-blur-sm border-2 border-white/20
                        hover:border-colorPrimario5/30 shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)] 
                        hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-300"
                    >
                      
                      {/* Efectos decorativos */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Header del step */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 flex items-center justify-center border border-colorPrimario5/30">
                          <Clock className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
                        </div>
                        <div>
                          <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-4 mt-1">
                            <div className="text-sm text-colorPrimario5 font-semibold">Paso {index + 1}</div>
                            <div className="w-1 h-1 rounded-full bg-colorPrimario5/50"></div>
                            <div className="text-xs text-colorPrimario1/60">Fase esencial</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Lista de puntos mejorada */}
                      {step.points && (
                        <div className="space-y-3">
                          <h4 className="text-colorPrimario2 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-colorPrimario5 flex-shrink-0" />
                            Incluye:
                          </h4>
                          <StaggerListContainer className="space-y-2">
                            {step.points.map((item, i) => (
                              <StaggerListItemClient
                                key={i}
                                direction="y"
                                offset={-20}
                                className="flex items-start gap-3 p-3 rounded-xl bg-colorHover4/50 border border-white/10 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-white flex-shrink-0" />
                                </div>
                                <span className="text-colorPrimario1/80 text-sm leading-relaxed">{item}</span>
                              </StaggerListItemClient>
                            ))}
                          </StaggerListContainer>
                        </div>
                      )}

                      {/* Badge de estado */}
                      <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorPrimario5/10 border border-colorPrimario5/20">
                        <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
                        <span className="text-colorPrimario5 font-semibold text-sm">
                          {isLast ? "Entrega final" : "En progreso"}
                        </span>
                      </div>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Conector al siguiente paso */}
                    {!isLast && (
                      <InViewAnimationWrapper
                        direction="x"
                        offset={-20}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex items-center gap-2 mt-4 ml-4 text-colorPrimario1/60"
                      >
                        <ArrowRight className="w-4 h-4 flex-shrink-0"/>
                        <span className="text-sm font-medium">Siguiente paso</span>
                      </InViewAnimationWrapper>
                    )}
                  </div>
                </ProjectStaggerWrapper>
              );
            })}
          </div>
        </div>

        {/* Resumen final */}
        <InViewAnimationWrapper
          direction="y"
          offset={40}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Proceso optimizado para garantizar el éxito
            </span>
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}