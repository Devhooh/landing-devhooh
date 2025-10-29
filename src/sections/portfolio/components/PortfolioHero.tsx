import Image from "next/image";
import { Project } from "@/data/portfolioDetails";
import { Calendar, MapPin, Briefcase, User, Sparkles } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface PortfolioHeroProps {
  project: Project;
}

export default function PortfolioHero({ project }: PortfolioHeroProps) {
  const projectDetails = [
    { icon: Briefcase, label: "Proyecto", value: project.projectName },
    { icon: User, label: "Cliente", value: project.company },
    { icon: Calendar, label: "Servicio", value: project.service },
    { icon: MapPin, label: "Ubicación", value: project.location }
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          
          {/* Badge superior */}
          <InViewAnimationWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorHover5 font-semibold">Proyecto Destacado</span>
          </InViewAnimationWrapper>

          {/* Título principal con animación letra por letra */}
          <InViewAnimationWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h1 className="text-3xl md-tablet:text-5xl text-white font-extrabold mb-6 leading-tight">
              {project.title}
            </h1>
          </InViewAnimationWrapper>
          
          <InViewAnimationWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorHover5 max-w-3xl mx-auto">
              Explora los detalles de esta solución digital y cómo transformamos la visión del cliente en realidad
            </p>
          </InViewAnimationWrapper>
        </div>

        {/* Grid de detalles mejorado */}
        <StaggerListContainer
          className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
        >
          {projectDetails.map((detail, index) => (
            <StaggerListItemClient
              key={index}
              index={index}
              direction="y"
              offset={30}
              className="
                group relative p-6 rounded-2xl bg-gradient-to-br from-colorHover5/10 
                to-colorHover6/10 backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40 
                text-center hover:shadow-[0_0_25px_rgba(103,61,230,0.15)]
                hover:scale-[1.05] active:scale-[0.98] transform transition-all duration-300"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-bold text-colorHover5 uppercase tracking-wider mb-2">
                {detail.label}
              </p>
              <p className="text-lg md-tablet:text-xl font-semibold text-white transition-colors duration-300">
                {detail.value}
              </p>
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </StaggerListItemClient>
          ))}
        </StaggerListContainer>

        {/* Imagen principal mejorada */}
        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{duration: 0.3, delay: 0.5 }}
          className="relative flex justify-center"
        >
          <div className="relative group max-w-4xl">
            
            {/* Contenedor de imagen con efectos */}
            <div className="relative overflow-hidden rounded-3xl shadow-[0_0_50px_rgba(103,61,230,0.3)] group-hover:shadow-[0_0_60px_rgba(103,61,230,0.4)] transition-all duration-500">
              <Image
                src={project.imageHero}
                alt={project.projectName}
                width={900}
                height={500}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Efectos decorativos alrededor de la imagen */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full opacity-20 animate-pulse
                bg-gradient-to-r from-colorPrimario5 to-colorPrimario6"
            ></div>

            <div className="absolute -bottom-6 -right-6 w-8 h-8 rounded-full animate-pulse
                bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 opacity-30"
            ></div>

            {/* Badge de estado */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-green-500/90 backdrop-blur-sm text-white font-semibold text-sm shadow-lg">
              Proyecto Completado
            </div>
          </div>
        </InViewAnimationWrapper>

        {/* Call to action adicional */}
        <InViewAnimationWrapper
          direction="y"
          offset={20}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20">
            <span className="text-colorHover5 font-medium">
              Desplázate para ver más detalles del proyecto
            </span>
          </div>
        </InViewAnimationWrapper>
      </div>
    </section>
  );
}