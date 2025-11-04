import TechSectionCard from "@/components/cards/home/TechCard";
import ButtonCta from "@/components/ui/ButtonCta";
import CardInViewStagger from "@/components/ui/CardInViewStagger";
import { SimpleInViewWrapper } from "@/components/ui/SimpleInViewWrapper";
import TextRevealClient from "@/components/ui/TextRevealClient";
import { technologiesData } from "@/data/sections/home/technologiesData";
import { ArrowRight } from "lucide-react";

export default function TechSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-colorHover5 to-colorHover6">
      <div className="mx-auto text-center">
        {/* Contenido principal */}
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Título animado letra por letra */}
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.3, ease: "easeInOut"}}
          >
            <h2 className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2">
              Nuestro stack tecnológico
            </h2>
          </TextRevealClient>
          
          <TextRevealClient
            direction="y"
            offset={30}
            transition={{duration: 0.3, delay: 0.4, ease: "easeInOut"}}
          >
            <p className="text-colorPrimario1/80 mb-16 max-w-3xl mx-auto text-lg md-tablet:text-xl">
              Nuestro enfoque se basa en el alto rendimiento y la escalabilidad. Utilizamos tecnologías de vanguardia como Next.js, React y Node.js para construir aplicaciones robústas, seguras y a prueba de futuro.
            </p>
          </TextRevealClient>

          {/* Grid de tecnologías */}
          <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-8 mb-16">
            {technologiesData.map((tech, idx) => (
              <CardInViewStagger
                key={idx}
                index={idx + 0.1}
                className="relative group p-6 rounded-3xl bg-gradient-to-br from-colorSecundario3/10 to-colorSecundario4/10 
                  backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]"
              >
                <TechSectionCard
                  icon={tech.icon}
                  title={tech.title}
                  description={tech.description}
                />
              </CardInViewStagger>
            ))}
          </div>

          {/* Botón */}
          <SimpleInViewWrapper
            direction="y" 
            offset={20} 
            transition={{duration: 0.3, delay: 0.2}}
            className="flex justify-center"
          >
            <div className="group">
              <ButtonCta
                href="/services"
                icon={ArrowRight}
                className="relative overflow-hidden text-lg md-tablet:text-xl 
                  bg-gradient-to-r from-colorPrimario5 to-colorSecundario2 
                  text-white py-4 px-10 rounded-2xl font-semibold 
                  shadow-[0_0_25px_rgba(103,61,230,0.3)] hover:shadow-[0_0_35px_rgba(103,61,230,0.5)] transition-all duration-300 flex items-center gap-3
                  hover:scale-[1.05] active:scale-[0.98] transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <p className="relative z-10">
                    Explora todas nuestras tecnologías
                  </p>
              </ButtonCta>
            </div>
          </SimpleInViewWrapper>
        </div>
      </div>
    </section>
  );
} 
