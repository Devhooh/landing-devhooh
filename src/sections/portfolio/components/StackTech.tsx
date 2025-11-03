import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { Project } from "@/data/portfolioDetails";
import { iconsData } from "@/data/portfolioDetails";
import { Code2, Layers, Sparkles } from "lucide-react";

interface StackSectionProps {
  project: Project;
}

export default function StackTech({ project }: StackSectionProps) {

  return (
    <section className="relative w-full bg-gradient-to-br from-colorHover5 via-colorHover6 to-colorHover5 py-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md-tablet:px-8">
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Code2 className="w-5 h-5 text-colorPrimario5" />
            <strong className="text-colorPrimario5 font-semibold">Tecnologías utilizadas</strong>
          </InViewAnimationWrapper>

          {/* Título con animación letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
              Stack de {""}
              <strong className="text-colorPrimario5">
                tecnologías
              </strong>
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Las herramientas y frameworks que hicieron posible este proyecto
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Grid de tecnologías mejorado */}
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
          {project.stackTech.map((tech, index) => {
            const Icon = iconsData[tech.icon];
            
            return (
              <ProjectStaggerWrapper
                key={tech.name}
                index={index}
                className={`
                  group relative p-6 rounded-2xl bg-gradient-to-br from-colorSecundario3/10 to-colorSecundario4/10 
                  backdrop-blur-sm border-2 border-colorPrimario5/20
                  hover:border-colorPrimario5/40 
                  shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                  transition-all duration-300 hover:scale-[1.02]
                `}
              >
                
                {/* Efectos decorativos */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Badge numerado */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-center gap-4">
                  
                  {/* Contenedor del icono */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                      <Icon className={`w-10 h-10 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                    </div>
                    
                    {/* Sparkle flotante */}
                    <div className="animate-pulse absolute -top-1 -right-1 text-colorPrimario5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Información de la tecnología */}
                  <div className="flex-grow">
                    <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300 mb-1">
                      {tech.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-colorPrimario1/60" />
                      <strong className="text-sm text-colorPrimario1/60 font-medium">
                        Tecnología principal
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Indicador de estado */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-colorPrimario1/60 font-semibold">Activa</span>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </ProjectStaggerWrapper>
            );
          })}
        </div>

        {/* Estadísticas del stack */}
        <StaggerListContainer className="mt-16 grid grid-cols-1 md-tablet:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {data: project.stackTech.length, text: "Tecnologías utilizadas"},
            {data: "100%", text: "Modernas y actuales"},
            {data: "✓", text: "Optimizadas para rendimiento"},
          ].map((value, index) => (
            <StaggerListItemClient
              key={index} 
              direction="y"
              offset={30}
              className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-colorPrimario5 mb-2">
                {value.data}
              </div>
              <p className="text-sm text-colorPrimario1/70">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-3 rounded-3xl bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20">
            <Code2 className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold">Stack optimizado para máximo rendimiento</span>
            <Code2 className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}