import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { InViewAnimationWrapper } from "@/components/ui/InViewAnimationWrapper";
import ProjectStaggerWrapper from "@/components/ui/ProjectStaggerWrapper";

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function ServicesIncluded({ service }: BenefitsSectionProps) {
  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">
      {/* Título secundario */}
      <InViewAnimationWrapper
        direction="y"
        offset={40}
        transition={{duration: 0.3, delay: 0.3}}
      >
        <h3 className="text-3xl md-tablet:text-4xl font-extrabold text-center text-colorPrimario2">
          Lo que incluye nuestro servicio de{" "}
          <strong className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">{service.name}</strong>
        </h3>
      </InViewAnimationWrapper>

      <InViewAnimationWrapper
        direction="y"
        offset={20}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <p className="max-w-2xl mx-auto text-center text-lg md-tablet:text-xl text-gray-600 my-10">
          Descubre cada una de las características y beneficios que forman parte de este servicio. 
          Nos aseguramos de brindarte soluciones completas y adaptadas a tus necesidades.
        </p>
      </InViewAnimationWrapper>

      {/* Cards de beneficios */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {service.services.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <ProjectStaggerWrapper
              key={index}
              index={index}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-t from-white to-purple-200 border shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              {/* Icono + título */}
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Icon className="w-7 h-7 text-colorSecundario4" />
                </div>
                <h4 className="ml-3 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h4>
              </div>

              {/* Subtítulo */}
              {benefit.subtitle && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {benefit.subtitle}
                </p>
              )}

              {/* Lista */}
              <ul className="mt-2 space-y-2">
                {benefit.list?.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-sm leading-relaxed"
                  >
                    <Icons.CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ProjectStaggerWrapper>
          );
        })}
      </div>
    </section>
  );
}
