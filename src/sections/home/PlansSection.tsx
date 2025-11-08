import TextRevealClient from "@/components/ui/TextRevealClient";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import PlanCard from "@/components/cards/home/PlanCard";
import { planesData } from "@/data/sections/home/PlanesData";
import Link from "next/link";

export function PlansSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        {/* Título animado */}
        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.2, ease: "easeInOut"}}
        >
          <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2">
            Planes estimados
          </h2>
        </TextRevealClient>

        <TextRevealClient
          direction="y"
          offset={30}
          transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto mb-16"
        >
          <p>
            Elige el plan que mejor se adapte a las necesidades iniciales de tu proyecto y comienza tu camino hacia el desarrollo de software a la medida con transparencia y precios claros.
          </p>
        </TextRevealClient>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8">
          {planesData.map((plan, index) => {
            return (
              <CardInViewStagger
                key={index}
                index={index}
                direction="y"
                offset={40}
                className={`
                  relative rounded-3xl p-8 flex flex-col h-full
                  bg-gradient-to-br ${plan.gradient}
                  border-2 ${plan.borderColor}
                  backdrop-blur-sm
                  ${plan.popular ? 'shadow-[0_0_40px_rgba(103,61,230,0.3)] ring-2 ring-colorSecundario1/20' : 'shadow-[0_0_25px_rgba(0,0,0,0.1)]'}
                  hover:shadow-[0_0_50px_rgba(103,61,230,0.2)]
                  transition-all duration-300 
                `}
              >
                <PlanCard
                  title={plan.title}
                  subtitle={plan.subtitle}
                  icon={plan.icon}
                  gradient={plan.gradient}
                  iconGradient={plan.iconGradient}
                  borderColor={plan.borderColor}
                  popular={plan.popular}
                  beneficio={plan.beneficio}
                />
              </CardInViewStagger>
            );
          })}
        </div>

        {/* Call to action adicional */}
        <div
          className="mt-16 text-center"
        >
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          >
            <p className="text-colorPrimario1/70 mb-4 font-medium text-xl">
              ¿No encuentras el plan perfecto para ti?
            </p>
          </TextRevealClient>

          <SimpleInViewWrapper>
            <Link
              href="/contact"
              className="text-colorSecundario1 hover:text-colorSecundario3 text-xl
                font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-300
                hover:scale-[1.05] active:scale-[0.98] transform"
            >
              Hablemos de tu proyecto personalizado
            </Link>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
}