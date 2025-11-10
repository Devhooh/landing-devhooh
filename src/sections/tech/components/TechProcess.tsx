import TechProcessCard from "@/components/cards/tech/TechProcessCard";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { CheckCircle, Target } from "lucide-react";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface TechProcessProps {
  name: string;
  steps: ProcessStep[];
}

export default function TechProcess({ name, steps }: TechProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="relative py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md-tablet:px-12">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          {/* Título */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6">
              Cómo trabajamos con <strong className="text-colorPrimario5"> {name}</strong>
            </h2>
          </TextRevealClient>

          <TextRevealClient
            direction="y"
            offset={30}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto">
              Así trabajamos el servicio de <strong className="font-bold text-colorPrimario5">{name}</strong>, paso a paso con metodología ágil
            </p>
          </TextRevealClient>
        </div>

        {/* Timeline mejorado */}
        <div className="relative">
          {/* Línea principal del timeline */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-colorPrimario5 via-colorSecundario1 to-colorPrimario5 rounded-full shadow-lg"></div>
          <div className="flex flex-col gap-8">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              
              return (
                <CardInViewStagger
                  key={index}
                  index={index}
                  direction="y"
                  offset={30}
                  className="relative flex items-start gap-2 md-tablet:gap-8"
                >
                  <TechProcessCard
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    index={index}
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
          transition={{ duration: 0.4, delay: 0.3}}
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