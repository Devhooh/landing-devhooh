import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import { CheckCircle, Target } from "lucide-react";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";


interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface TechProcessProps {
  steps: ProcessStep[];
}

export default function ProcessPortfolio({ steps }: TechProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md-tablet:px-12">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Título con animación letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.2, delay: 0.3}}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl text-colorPrimario5 font-extrabold mb-6">
              Proceso de desarrollo de tu proyecto
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4}}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Así realizamos tu proyecto paso a paso como ves en nuestro portafolio
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Timeline mejorado */}
        <div className="relative">
          
          {/* Línea principal del timeline */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-colorPrimario5 via-colorSecundario1 to-colorPrimario5 rounded-full shadow-lg"></div>

          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const Icon =
              (Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
              Icons.HelpCircle;

              const isLast = index === steps.length - 1;
              
              return (
                <ProjectStaggerWrapper
                  key={index} 
                  index={index}
                  className="relative flex items-start gap-3 md-tablet:gap-8"
                >
                  
                  {/* Número del timeline mejorado */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className="
                        w-16 h-16 rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                        flex items-center justify-center shadow-lg group hover:shadow-xl
                        hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
                    >
                      <span className="text-white font-bold text-xl animate-pulse">{index + 1}</span>
                    </div>
                  </div>

                  {/* Card del paso mejorada */}
                  <div className="flex-grow group">
                    <div 
                      className="
                        relative p-4 rounded-3xl bg-white backdrop-blur-sm border-2 border-white/20 hover:border-colorPrimario5/30 
                        shadow-[0_0_20px_rgba(103,61,230,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                        hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-300"
                    >
                      
                      {/* Efectos decorativos */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Header del step */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 flex items-center justify-center border border-colorPrimario5/30">
                          <Icon className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
                        </div>
                        <div>
                          <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="text-sm text-colorPrimario5 font-semibold">Paso {index + 1}</div>
                            <div className="w-1 h-1 rounded-full bg-colorPrimario5/50"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-colorPrimario1/80 text-base md-tablet:text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

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

                  </div>
                </ProjectStaggerWrapper>
              );
            })}
          </div>
        </div>

        {/* Resumen final */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.4, delay: 0.3}}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Proceso que garantizar el éxito de tu proyecto
            </span>
            <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}