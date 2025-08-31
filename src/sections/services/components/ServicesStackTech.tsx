"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails"; // tus datos reales

interface TechStackSectionProps {
  service: ServicesData;
}

export default function ServicesStackTech({ service }: TechStackSectionProps) {
  const stack = service.stackTech[0]; // asumimos que siempre hay un stackTech

  return (
    <section className="py-8 px-6 md-tablet:px-12 bg-violet-50">
      {/* Encabezado global */}
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl md-tablet:text-4xl font-bold text-blue-900">
          Stack de tecnología que utilizamos para {service.name}
        </h2>
        <p className="mt-3 text-gray-600 text-base md-tablet:text-lg leading-relaxed">
          {stack.description}
        </p>
      </div>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {stack.tech.map((item, index) => {
          const Icon =
            (Icons[item.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <div
              key={index}
              className="flex flex-col items-start p-6 rounded-2xl bg-white border border-fuchsia-200 shadow-sm hover:shadow-xl hover:border-fuchsia-400 transition duration-300"
            >
              {/* Icono arriba izquierda */}
              <div className="mb-3 p-3 rounded-lg bg-purple-100">
                <Icon className={`w-8 h-8 text-${item.color}-600`} />
              </div>

              {/* Título */}
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {item.title}
              </h3>

              {/* Lista de tecnologías */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.listTech.map((tech, i) => (
                  <span 
                    key={i}
                    className="bg-fuchsia-100 text-fuchsia-800 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón global */}
      <div className="mt-10 text-center">
        <Link
          href="/tecnologia"
          className="inline-block px-6 py-3 rounded-xl bg-fuchsia-600 text-white font-medium hover:bg-fuchsia-700 transition"
        >
          Ver todas las tecnologías
        </Link>
      </div>
    </section>
  );
}
