import { Shield, LifeBuoy, Award  } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import TextRevealClient from "@/components/ui/TextRevealClient";

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function WhyChooseProject({ service }: BenefitsSectionProps) {
  return (
    <section className="pb-12 px-6 md-tablet:px-12 bg-white">
      <div className="flex justify-center space-y-16">
        <div
          className={`
            group relative max-w-6xl w-full
            bg-colorHover4/30 backdrop-blur-sm 
            border-2 border-white/20 hover:border-colorPrimario5/30
            rounded-3xl p-4 md-tablet:p-12 shadow-[0_0_30px_rgba(0,0,0,0.08)]
            hover:shadow-[0_0_40px_rgba(103,61,230,0.15)]
            transition-all duration-500
            flex flex-col table-lg:flex-row items-center
          `}
        >
          {/* Efectos decorativos */}
          <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
          
          {/* Contenido de texto mejorado */}
          <div className={`text-center`}>
            
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.3}}
            >
              <h2 className="text-3xl md-tablet:text-5xl font-extrabold text-colorPrimario2 mb-4 group-hover:text-colorPrimario5 transition-colors duration-300">
                ¿Por qué elegirnos para tu proyecto de  {""}
                <strong className="text-colorPrimario5 group-hover:text-colorPrimario2">{service.name.toLowerCase()}?</strong>
              </h2>
            </TextRevealClient>
            
            <TextRevealClient
              direction="y"
              offset={30}
              transition={{duration: 0.3, delay: 0.4}}
            >
              <p className="text-colorPrimario1/80 text-lg md-tablet:text-xl leading-relaxed mb-6 py-5">
                {service.description}
              </p>
            </TextRevealClient>

            {/* Lista de beneficios */}
            <StaggerListContainer 
              className="justify-center flex flex-wrap gap-3"
            >
              {[
                { text: "Calidad", icon: Award },
                { text: "Seguridad", icon: Shield },
                { text: "Soporte", icon: LifeBuoy },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <StaggerListItemClient
                    key={idx}
                    direction="y"
                    offset={40}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-white/30 hover:bg-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 md-tablet:w-7 md-tablet:h-7 text-colorPrimario5 flex-shrink-0" />
                    <p className="text-lg md-tablet:text-xl font-medium text-colorPrimario2">
                      {benefit.text}
                    </p>
                  </StaggerListItemClient>
                );
              })}
            </StaggerListContainer>
          </div>
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
