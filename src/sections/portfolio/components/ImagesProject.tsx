import { Project } from "@/data/portfolioDetails";
import Image from "next/image";
import { Camera, Grid, ZoomIn } from "lucide-react";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";

interface ChallengeSectionProps {
  project: Project;
}

export default function ImageProject({project}: ChallengeSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Contenedor principal mejorado */}
        <div className="relative p-4 md-tablet:p-12 rounded-3xl bg-colorFondo/70 backdrop-blur-sm border border-colorPrimario5/20 shadow-[0_0_40px_rgba(103,61,230,0.1)]">
          
          {/* Encabezado mejorado */}
          <div className="text-center mb-16">
            
            {/* Badge superior */}
            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
            >
              <Camera className="w-5 h-5 text-colorPrimario5" />
              <span className="text-colorPrimario5 font-semibold">Galería del proyecto</span>
            </InViewAnimationWrapper>

            {/* Título con animación letra por letra */}
            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.4}}
            >
              <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
                {project.company}
              </h2>
            </InViewAnimationWrapper>
              
            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.5}}
            >
              <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto leading-relaxed">
                {project.pictures.descripcion}
              </p>
            </InViewAnimationWrapper>

            {/* Contador de imágenes */}
            <InViewAnimationWrapper
              direction="y"
              offset={30}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-colorSecundario1/10 border border-colorSecundario1/20"
            >
              <Grid className="w-4 h-4 text-colorSecundario1" />
              <span className="text-colorSecundario1 font-semibold text-sm">
                {project.pictures.images.length} imágenes del proyecto
              </span>
            </InViewAnimationWrapper>
          </div>

          {/* Grid de imágenes mejorado */}
          <div className="grid grid-cols-1 md-tablet:grid-cols-2 gap-8">
            {project.pictures.images.map((src, index) => (
              <ProjectStaggerWrapper
                key={index} 
                index={index}
                className="group relative overflow-hidden rounded-3xl bg-colorHover6 backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/40 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)] transition-all duration-500"
              >
                
                {/* Badge numerado */}
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Imagen */}
                <div className="relative p-4">
                  <Image
                    src={src}
                    alt={`Imagen del proyecto ${project.projectName} - ${index + 1}`}
                    loading="lazy"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 shadow-lg"
                  />
                </div>

                {/* Información adicional */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-colorPrimario2 font-bold text-sm mb-1">
                      Vista {index + 1}
                    </h3>
                    <p className="text-colorPrimario1/70 text-xs">
                      {project.projectName} - Captura del proyecto
                    </p>
                  </div>
                </div>

                {/* Efectos decorativos */}
                <div
                  className="animate-pulse absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40"
                ></div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </ProjectStaggerWrapper>
            ))}
          </div>

          {/* Call to action final */}
          <InViewAnimationWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3}}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
              <Camera className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
              <span className="text-colorPrimario5 font-semibold text-lg">
                Cada detalle cuenta en el resultado final
              </span>
              <ZoomIn className="w-6 h-6 text-colorSecundario1 flex-shrink-0" />
            </div>
          </InViewAnimationWrapper>
        </div>
      </div>
    </section>
  );
}