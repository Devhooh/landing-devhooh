"use client";

import { ServicesData } from "@/data/ServicesDetails";

interface DevelopmentProcessProps {
  service: ServicesData;
}

export default function ProcessServicesSection({ service }: DevelopmentProcessProps) {
  const steps = service.process; // array de pasos

  return (
    <section className="py-12 px-6 md-tablet:px-12 bg-white">
      {/* Encabezado */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-2xl md-tablet:text-4xl font-bold mb-4 text-blue-900">Proceso de Desarrollo</h2>
        <p className="text-gray-600 text-xl">
          Así trabajamos el servicio de {service.name}, paso a paso.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative ">
        <div className="absolute top-0 left-2 w-1 h-full bg-fuchsia-400"></div>
        {steps.map((step, index) => (
          <div key={index} className="mb-10 ml-16">
            {/* Número del timeline */}
            <div className="text-2xl absolute -left-5 flex items-center justify-center w-16 h-16 rounded-full bg-fuchsia-600 text-white font-bold">
              {index + 1}
            </div>

            {/* Card del paso */}
            <div className="bg-purple-50 border border-fuchsia-300 p-6 rounded-2xl shadow-md w-full md-tablet:w-[90%]">
              <h3 className="text-lg text-blue-900 font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              {step.points && (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {step.points.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
