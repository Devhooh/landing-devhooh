"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface TechProcessProps {
  name: string;
  steps: ProcessStep[];
}

export default function TechProcess({ name, steps }: TechProcessProps) {
  if (!steps || steps.length === 0) return null;
  return (
    <section className="py-12 px-4">
      <h2 className="text-center text-2xl md-tablet:text-4xl text-blue-950 font-bold mb-12">
        Cómo trabajamos con {name}
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea vertical */}
        <div className="absolute top-0 left-4 md-tablet:left-6 w-1 bg-fuchsia-300 h-full"></div>

        <div className="flex flex-col gap-12">
          {steps.map((step, index) => {
            const Icon =
              (Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps>) ||
              Icons.HelpCircle;
            return (
              <div key={index} className="flex flex-row items-start">
                {/* Icono */}
                <div className="flex-shrink-0 w-16 h-16 bg-fuchsia-600 text-white rounded-full flex items-center justify-center z-10 relative">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Contenido */}
                <div className="ml-4">
                  <h3 className="text-lg text-purple-950 font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
