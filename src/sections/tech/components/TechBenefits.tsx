"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface TechBenefitsProps {
  name: string;
  benefits: Benefit[];
}

export default function TechBenefits({benefits, name}: TechBenefitsProps) {
  return (
    <section className="py-12 px-4 items-center justify-center">
      <h2 className="text-center text-2xl md-tablet:text-4xl font-bold mb-6 mx-20">
        Beneficios al usar {name}
      </h2>

      <div className="text-center grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md bg-white border-2 border-gray-200 hover:shadow-lg transition"
            >
              <Icon className="w-10 h-10 mb-4 text-blue-500" />
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
