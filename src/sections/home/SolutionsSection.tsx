import { SolutionCard } from "../../components/cards/home/SolutionCard";
import { ArrowRight } from "lucide-react";
import TextRevealClient from "@/components/ui/TextRevealClient";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import ButtonCta from "@/components/ui/ButtonCta";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import { solutionsData } from "@/data/sections/home/solutionsData";

export function SolutionsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden relative">
      {/* Encabezado mejorado */}
      <div className="relative z-10 px-4 md-tablet:px-8 flex flex-col text-center items-center mb-20">
        <div className="max-w-4xl">
          {/* Título principal */}
          <TextRevealClient
            direction="y" 
            offset={30}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <h2
              className="text-4xl md-tablet:text-5xl font-extrabold mb-8 leading-tight text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario3 bg-clip-text"
            >
              Impulsamos tu empresa con <strong className="text-colorPrimario2">soluciones modernas</strong>
            </h2>
          </TextRevealClient>

          {/* Subtítulo mejorado */}
          <TextRevealClient
            direction="y" 
            offset={30} 
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          >
            <p className="text-colorPrimario1/80 text-lg md-tablet:text-xl leading-relaxed max-w-3xl mx-auto">
              Creamos páginas web profesionales, aplicaciones móviles nativas y multiplataforma y sistemas empresariales con inteligencia artificial. Te acompañamos desde la idea hasta el lanzamiento para mejorar tu presencia digital, automatizar procesos y hacer tu negocio más competitivo.
            </p>
          </TextRevealClient>

          {/* Estadísticas rápidas */}
          <StaggerListContainer
            className="p-0 flex flex-wrap justify-center gap-8 mt-10" 
            staggerChildren={0.15}
            delayChildren={0.4}
          >
            {[
              { label: "Especialidades", value: "3+" },
              { label: "Personalizado", value: "100%" },
              { label: "Soporte", value: "24/7" },
            ].map((stat, index) => (
              <StaggerListItemClient
                key={index} 
                direction="y" 
                offset={30}
                transition={{duration: 0.2, delay: 0.3, ease: 'easeInOut'}}
                className="text-center"
              >
                <div className="text-2xl md-tablet:text-4xl font-bold text-colorSecundario1">{stat.value}</div>
                <p className="text-base md-tablet:text-xl text-colorPrimario1/70">{stat.label}</p>
              </StaggerListItemClient>
            ))}
          </StaggerListContainer>

        </div>
      </div>

      {/* Cards mejoradas */}
      <div className="relative z-10 w-full px-4 md-tablet:px-8">
        <div className="mx-auto flex flex-col gap-16 max-w-[1400px] justify-center">
          {solutionsData.map((solution, i) => (
            <CardInViewStagger
              key={i}
              index={i + 0.1}
              direction={i % 2 === 0 ? 'x' : 'x'}
              offset={i % 2 === 0 ? -50 : 50}
            >
              <SolutionCard
                title={solution.title}
                description={solution.description}
                image={solution.image}
                benefits={solution.benefits}
                reverse={i % 2 === 1}
                index={i}
              />
            </CardInViewStagger>
          ))}
        </div>

        {/* Botón mejorado */}
        <SimpleInViewWrapper
          className="flex justify-center mt-20"
          direction="y" 
          offset={30} 
          transition={{duration: 0.3, delay: 0.2}}
        >
          <div className="group">
            <ButtonCta
              href="/services"
              icon={ArrowRight}
              className="
                  relative overflow-hidden text-lg md-tablet:text-xl 
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario2 text-white 
                  py-4 px-5 md-tablet:px-10 rounded-2xl font-semibold 
                  shadow-[0_0_25px_rgba(103,61,230,0.3)] hover:shadow-[0_0_35px_rgba(103,61,230,0.5)] 
                  transition-all duration-300 flex items-center gap-3
                  hover:scale-[1.05] active:scale-[0.98] transform"
            >
              {/* Efecto de brillo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <p className="relative z-10 text-center">
                Descubre todas nuestras soluciones
              </p>
            </ButtonCta>
          </div>
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}