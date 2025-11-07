import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import TextRevealClient from "@/components/ui/TextRevealClient";
import CardInViewStagger from "@/components/ui/CardInViewStagger";

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function ServicesBenefits({ service }: BenefitsSectionProps) {
  return (
    <section className="p-6 md-tablet:px-8 table-lg:px-12 bg-blue-50">
      <div className="w-auto px-auto">
        <TextRevealClient
          direction="x"
          offset={-20}
          transition={{duration: 0.3, delay: 0.4}}
        >
          <h2 className="text-3xl font-extrabold mb-5 text-center md-tablet:text-left text-colorPrimario2">
            Beneficios del{" "}
            <strong className="text-colorPrimario5">
            {service.name}
            </strong>
          </h2>
        </TextRevealClient>
      </div>

      <div 
        className="grid grid-cols-1 md-tablet:grid-cols-2 gap-6 table-lg:gap-8"
      >
        {service.benefits.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <CardInViewStagger
              key={index}
              index={index + 1}
              direction="y"
              offset={60}
              className="flex flex-col md-tablet:flex-row items-start md-tablet:items-center bg-white p-6 rounded-2xl shadow-md border border-fuchsia-300 hover:shadow-lg transition"
            >
              {/* Icono */}
              <div className="flex-shrink-0 mb-4 md-tablet:mb-0 md-tablet:mr-4">
                <Icon className="w-10 h-10 text-colorSecundario3" />
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </CardInViewStagger>
          );
        })}
      </div>
    </section>
  );
}
