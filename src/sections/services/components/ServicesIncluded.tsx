"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails"; // ajusta la ruta a tus datos

interface BenefitsSectionProps {
  service: ServicesData;
}

export default function ServicesIncluded({ service }: BenefitsSectionProps) {
  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-blue-900">
          ¿Por qué elegirnos para tu proyecto de {service.name.toLowerCase()}?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
      
      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
        Qué incluye nuestro servicio de{" "}
        <span className="text-fuchsia-600 underline">{service.name}</span>
      </h2>

      {/* Grid de beneficios */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {service.services.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <div
              key={index}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-t from-white to-purple-200 border shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              {/* Icono + título */}
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100">
                  <Icon className="w-7 h-7 text-fuchsia-600" />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
              </div>

              {/* Subtítulo */}
              {benefit.subtitle && (
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {benefit.subtitle}
                </p>
              )}

              {/* Lista de puntos */}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

