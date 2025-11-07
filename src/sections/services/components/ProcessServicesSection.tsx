import { ServicesProcessCard } from "@/components/cards/services/ServicesProcessCard";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { ServicesData } from "@/data/ServicesDetails";
import { CheckCircle, Target } from "lucide-react";

interface DevelopmentProcessProps {
  service: ServicesData;
}

export default function ProcessServicesSection({ service }: DevelopmentProcessProps) {
  const steps = service.process;

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 md-tablet:px-12">
        <div className="text-center mb-16">
          <SimpleInViewWrapper
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm mb-8"
          >
            <Target className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Metodología probada</span>
          </SimpleInViewWrapper>

          {/* Título con animación letra por letra */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3}}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
              <span className="text-colorPrimario2">
                Proceso de {" "}
              </span>
              <span className="text-colorPrimario5">
                Desarrollo
              </span>
            </h2>
          </TextRevealClient>

          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Así trabajamos el servicio de <span className="font-bold text-colorPrimario5">{service.name}</span>, paso a paso con metodología ágil
            </p>
          </TextRevealClient>
        </div>

        {/* Timeline mejorado */}
        <div className="relative">
          {/* Línea principal del timeline */}
          <div className="absolute left-6 md-tablet:left-8 top-0 w-1 h-full bg-gradient-to-b from-colorPrimario5 via-colorSecundario1 to-colorPrimario5 rounded-full shadow-lg"></div>
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              
              return (
                <CardInViewStagger
                  key={index + 1} 
                  index={index}
                  direction="y"
                  offset={30}
                  className="relative flex items-start gap-2 md-tablet:gap-8"
                >
                  {/* Número del timeline mejorado */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="
                      w-12 h-12 md-tablet:w-16 md-tablet:h-16 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 
                      flex items-center justify-center shadow-lg group hover:shadow-xl transition-all duration-300
                      hover:scale-[1.05] active:scale-[0.98] transform"
                    >
                      <span className="text-white font-bold text-xl animate-pulse">{index + 1}</span>
                    </div>
                  </div>

                  {/* Card del paso mejorada */}
                  <ServicesProcessCard
                    index={index}
                    title={step.title}
                    description={step.description}
                    points={step.points}
                    isLast={isLast}
                  />
                </CardInViewStagger>
              );
            })}
          </div>
        </div>

        {/* Resumen final */}
        <SimpleInViewWrapper
          direction="y"
          offset={30}
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
        </SimpleInViewWrapper>
      </div>
    </section>
  );
}