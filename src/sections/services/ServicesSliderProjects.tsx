import { Project } from "@/data/portfolioData";
import { Trophy, Sparkles } from "lucide-react";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import CardProjectsSlider from "@/components/sliders/CardProjectsSlider";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";

interface ServicesSliderProjectsProps {
  projects: Project[];
  subtitle?: string;
  showService: boolean;
}

export function ServicesSliderProjects({
  projects,
  subtitle,
  showService = true,
}: ServicesSliderProjectsProps) {

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-4">
        <div className="text-center mb-16">
          <SimpleInViewWrapper
            direction="y"
            offset={20}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-3xl bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Trophy className="w-5 h-5 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold">Nuestra experiencia</span>
          </SimpleInViewWrapper>

          {/* Título */}
          <TextRevealClient
            direction="y"
            offset={20}
            transition={{ duration: 0.4, delay: 0.4}}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight">
              Proyectos que usaron <strong className="text-colorPrimario5"> nuestros servicios:</strong> 
            </h2>
          </TextRevealClient>

          {/* Subtítulo mejorado */}
          <TextRevealClient
            direction="y"
            offset={20}
            transition={{ duration: 0.4, delay: 0.5}}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed mb-8">
              {subtitle}
            </p>
          </TextRevealClient>

          {/* Estadísticas */}
          <StaggerListContainer
            staggerChildren={0.2}
            delayChildren={0.3}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              {data: "100%", text: "Proyectos de calidad"},
              {data: "100%", text: "Casos de éxito"},
              {data: "5+", text: "Años de trayectoria"},
            ].map((value, index) => (
              <StaggerListItemClient
                key={index}
                direction="y"
                offset={20}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className="text-center px-4 py-2 rounded-2xl bg-colorHover4 backdrop-blur-sm border border-white/30"
              >
                <div className="text-2xl font-bold text-colorPrimario5">{value.data}</div>
                <p className="text-sm text-colorPrimario1/70">{value.text}</p>
              </StaggerListItemClient>
          ))}
          </StaggerListContainer>
        </div>

        {/* Contenedor del slider con glassmorphism */}
        <CardProjectsSlider projects={projects} showService={showService}/>

        {/* Call to action final */}
        <SimpleInViewWrapper
          direction="y"
          offset={20}
          delay={0.2}
          className="text-center mt-16"
          transition={{ duration: 0.3}}
        >
          <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-base">
              Cada proyecto es una nueva oportunidad de innovar
            </span>
            <Trophy className="w-6 h-6 text-colorSecundario1 flex-shrink-0" />
          </div>
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}