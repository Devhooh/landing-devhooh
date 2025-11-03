import * as Icons from "lucide-react";
import { LucideProps, Target, Zap } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails"; // tu modelo
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function ServicesDataSection({ service }: BenefitsSectionProps) {
  return (
    <section className="py-10 px-6 md-tablet:px-12 bg-gray-50">
      <div className="pb-10 items-center text-center">
        {/* Título */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <h2
            className="text-3xl md-tablet:text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
          >
            Servicios de {service.name}
          </h2>
        </InViewAnimationWrapper>

        {/* Subtítulo */}
        <InViewAnimationWrapper
          direction="y"
          offset={30}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <p className="mt-4 text-lg md-tablet:text-lg text-colorPrimario4 max-w-2xl mx-auto">
            Estos son los servicios que ofrecemos en{" "}
            <strong className="font-semibold text-colorSecundario2">
              {service.name}
            </strong>
            , diseñados para adaptarse a tus necesidades y potenciar tu negocio.
          </p>
        </InViewAnimationWrapper>
      </div>

      {/* Grid de servicios */}
      <StaggerListContainer className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {service.servicesData.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <StaggerListItemClient
              key={index}
              direction="y"
              offset={40}
              className="
                flex flex-col items-center text-center p-8 rounded-2xl 
                bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border-blue-200 shadow-sm hover:shadow-xl 
                hover:border-fuchsia-300 transition duration-300
              "
            >
              {/* Icono */}
              <Icon className="w-14 h-14 text-colorSecundario4 mb-4 flex-shrink-0" />

              {/* Título */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </StaggerListItemClient>
          );
        })}
      </StaggerListContainer>

      <InViewAnimationWrapper
        direction="y"
        offset={30}
        className="relative z-10 text-center mt-20"
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="inline-flex items-center gap-3 px-4 md-tablet:px-8 py-4 rounded-3xl bg-colorPrimario5/20 border border-colorPrimarioLogo1/30 backdrop-blur-sm">
          <Target className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          <span className="text-colorPrimario2 font-semibold text-lg">
            ¿Listo para empezar tu proyecto?
          </span>
          <Zap className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
        </div>
      </InViewAnimationWrapper>

    </section>
  );
}
