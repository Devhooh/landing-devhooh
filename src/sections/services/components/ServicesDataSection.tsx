"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails"; // tu modelo

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function ServicesDataSection({ service }: BenefitsSectionProps) {
  return (
    <section className="py-10 px-6 md-tablet:px-12 bg-gray-50">
      <div className="pb-10 items-center">
        <h3 className="text-3xl md-tablet:text-4xl font-bold text-center text-blue-900">
          Servicios de {service.name}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {service.servicesData.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <div
              key={index}
              className="
                flex flex-col items-center text-center p-8 rounded-2xl 
                bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white border-blue-200 shadow-sm hover:shadow-xl 
              hover:border-fuchsia-300 transition duration-300"
            >
              {/* Icono arriba */}
              <Icon className="w-14 h-14 text-fuchsia-600 mb-4" />

              {/* Título */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
