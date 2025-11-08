import Link from "next/link";
import ProjectsServicesCard from "./ProjectsServicesCard";
import { projectsData } from "@/data/portfolioData";
import { ArrowRight, Folder, Sparkles, Award } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import CardInViewStagger from "@/components/ui/CardInViewStagger";

export default function ProjectsServicesSection() {
  const limit: number = 6;
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="relative py-20 bg-colorFondo overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md-tablet:px-8">
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <SimpleInViewWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Folder className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Portafolio destacado</span>
          </SimpleInViewWrapper>

          {/* Título con animación letra por letra */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight">
              Los proyectos que hemos
              <br />
              <strong className="text-colorPrimario5"> hecho realidad</strong>
            </h2>
          </TextRevealClient>

          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed">
              Estos son algunos de los proyectos donde aplicamos{" "}
              <strong className="font-bold text-colorPrimario5">
                nuestra experiencia y tecnología
              </strong>{" "}
              para crear soluciones digitales que transforman negocios.
            </p>
          </TextRevealClient>
        </div>

        {/* Estadísticas rápidas */}
        <StaggerListContainer
          delayChildren={0.2}
          className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mx-10 mb-16"
        >
          {[
            {data: "20+", text: "Proyectos completados"},
            {data: "100%", text: "Clientes satisfechos"},
            {data: "5+", text: "Años de experiencia"},
          ].map((value, index) => (
            <StaggerListItemClient 
              key={index} 
              direction="y"
              offset={30}
              transition={{duration: 0.3}}
              className="text-center py-4 px-7 rounded-2xl bg-colorHover4 backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-colorPrimario5 mb-2">
                {value.data}
              </div>
              <p className="text-sm text-colorPrimario1/70">{value.text}</p>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* Grid de proyectos mejorado */}
        <div className="grid grid-cols-1 tablet-md:grid-cols-2 table-lg:grid-cols-3 gap-8 mb-16 px-2">
          {displayedProjects.map((project, index) => (
            <CardInViewStagger
              key={project.id}
              index={index}
              direction="y"
              offset={30}
              className="group relative"
            >
              {/* Badge de proyecto destacado para algunos */}
              {index < 3 && (
                <div className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              )}
              
                <ProjectsServicesCard projects={project} />
            </CardInViewStagger>
          ))}
        </div>

        {/* Sección de call to action mejorada */}
        <div className="text-center">
          <div className="mb-8">
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario2 mb-4">
                ¿Listo para ser nuestro próximo caso de éxito?
              </h3>
            </TextRevealClient>

            <TextRevealClient
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-colorPrimario1/70 max-w-2xl mx-auto">
                Cada proyecto es una oportunidad de crear algo extraordinario. Tu idea podría ser la siguiente.
              </p>
            </TextRevealClient>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col md-tablet:flex-row gap-4 justify-center items-center">
            <SimpleInViewWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.4 }}
            >
              <Link href="/portfolio">
                <button
                  className="
                    group relative overflow-hidden px-8 py-4 text-lg font-bold rounded-2xl 
                    bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white 
                    shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] 
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
                >
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative z-10 flex items-center gap-3">
                    Ver todos los proyectos
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </SimpleInViewWrapper>

            <SimpleInViewWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.4, delay: 0.5}}
            >
              <Link href="/contact">
                <button
                  className="
                    px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-colorPrimario5 
                    text-colorPrimario5 hover:bg-colorPrimario5 hover:text-white 
                    transition-all duration-300 hover:scale-[1.05] active:scale-[0.98]"
                >
                  Iniciar mi proyecto
                </button>
              </Link>
            </SimpleInViewWrapper>
          </div>
        </div>

        {/* Decoración final */}
        <SimpleInViewWrapper
          direction="y"
          offset={40}
          transition={{ duration: 0.3, delay: 0.6}}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4">
            <div> <Sparkles className="animate-pulse w-6 h-6 text-colorPrimario5" /> </div>
            <span className="text-colorPrimario1/60 font-medium">
              Transformando ideas en realidad digital
            </span>
            <div> <Sparkles className="animate-pulse w-6 h-6 text-colorSecundario1" /> </div>
          </div>
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}