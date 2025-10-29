import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { CircleCheckIcon, Target, Lightbulb, Zap } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface ChallengeSectionProps {
  project: Project;
}

export default function ChallengeSection({ project }: ChallengeSectionProps) {

  const sectionIcons = [Target, Lightbulb, Zap]; // Iconos rotativos para cada sección

  return (
    <section className="relative my-16 mx-4 md-tablet:mx-8 table-lg:mx-16 overflow-hidden">
      {/* Contenedor principal con gradiente mejorado */}
      <div className="relative bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 rounded-3xl py-16 px-6 md-tablet:px-12 border border-colorPrimario5/20 shadow-[0_0_50px_rgba(103,61,230,0.3)]">

        {/* Título de sección principal */}
        <div className="relative z-10 text-center mb-20">
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 text-white">
              Desafíos y {""}
              <strong className="text-colorPrimario5">
                soluciones
              </strong>
            </h2>
          </InViewAnimationWrapper>

          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="text-lg text-colorHover5 max-w-3xl mx-auto">
              Cada proyecto presenta desafíos únicos. Aquí te mostramos cómo los enfrentamos
            </p>
          </InViewAnimationWrapper>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-20">
          {project.challengeData.map((item, index) => {
            const isEven = index % 2 !== 0;
            const IconComponent = sectionIcons[index % sectionIcons.length];
            
            return (
              <div key={item.title} className="flex flex-col gap-12">
                
                {/* Título de la sección */}
                <InViewAnimationWrapper
                  direction="y"
                  offset={30}
                  transition={{duration: 0.4, delay: 0.3}}
                  className="text-center"
                >
                  {/* Badge con icono y número */}
                  <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <IconComponent className="w-5 h-5 text-colorPrimario5" />
                    <span className="text-colorHover5 font-semibold">Desafío {index + 1}</span>
                  </div>

                  <h3 className="text-3xl md-tablet:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                </InViewAnimationWrapper>

                {/* Contenido en zig-zag */}
                <div
                  className={`flex flex-col table-lg:flex-row items-center gap-12 ${
                    isEven ? "table-lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Contenido de texto */}
                  <InViewAnimationWrapper
                    direction="x"
                    offset={isEven ? 20 : -20}
                    transition={{duration: 0.3, delay: 0.2}}
                    className="table-lg:w-1/2"
                  >
                    <div className="relative p-4 md-tablet:p-8 rounded-3xl bg-gradient-to-br from-colorHover5/5 to-colorHover6/5 backdrop-blur-sm border border-white/10 hover:border-colorPrimario5/30 transition-all duration-300 group">
                      
                      {/* Efectos decorativos */}
                      <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Descripción */}
                      <p className="text-colorHover5 text-base md-tablet:text-lg leading-relaxed mb-6 text-center table-lg:text-left">
                        {item.description}
                      </p>

                      {/* Lista mejorada */}
                      {item.listData && (
                        <div>
                          <h4 className="text-white font-bold text-xl mb-4 text-center table-lg:text-left">
                            Soluciones implementadas:
                          </h4>
                          <StaggerListContainer className="space-y-3">
                            {item.listData.map((items, i) => (
                              <StaggerListItemClient
                                key={i}
                                direction="y"
                                offset={20}
                                index={i + 1}
                                className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                              >
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                                  <CircleCheckIcon className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-colorHover5 leading-relaxed">{items}</p>
                              </StaggerListItemClient>
                            ))}
                          </StaggerListContainer>
                        </div>
                      )}

                      {/* Badge de resultado */}
                      <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-300 font-semibold text-sm">Desafío resuelto</span>
                      </div>

                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </InViewAnimationWrapper>

                  {/* Imagen mejorada */}
                  <InViewAnimationWrapper
                    direction="x"
                    offset={isEven ? -20 : 20}
                    transition={{duration: 0.3, delay: 0.3}}
                    className="table-lg:w-1/2 flex justify-center"
                  >
                    <div className="relative group">
                      <div className="relative overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(103,61,230,0.2)] group-hover:shadow-[0_0_50px_rgba(103,61,230,0.3)] transition-all duration-500">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${project.projectName}`}
                          loading="lazy"
                          width={500}
                          height={350}
                          className="w-full max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Círculos decorativos flotantes */}
                      <div
                        className={`animate-pulse absolute ${isEven ? '-bottom-4 -right-4' : '-top-4 -left-4'} w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-20`}
                      ></div>

                      {/* Badge de imagen */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-colorPrimario5/90 backdrop-blur-sm text-white font-semibold text-xs shadow-lg">
                        Evidencia
                      </div>
                    </div>
                  </InViewAnimationWrapper>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action final */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.4}}
          className="relative z-10 text-center mt-20"
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <Target className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-colorHover5 font-semibold text-lg">
              Todos los desafíos superados con éxito
            </span>
            <Zap className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}