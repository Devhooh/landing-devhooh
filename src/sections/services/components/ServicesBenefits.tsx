"use client";

import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import { ServicesData } from "@/data/ServicesDetails";
import { motion, Variants } from "framer-motion";

interface BenefitsSectionProps {
  service: ServicesData;
}

// Variantes para títulos
const titleVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Variantes para las cards
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.80 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.1, // escalonado
    },
  }),
};

export default function ServicesBenefits({ service }: BenefitsSectionProps) {
  return (
    <section className="p-6 md-tablet:px-8 table-lg:px-12 bg-blue-50">
      <div className="w-auto px-auto">
        <motion.h2
          variants={titleVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl font-extrabold mb-5 text-center md-tablet:text-left text-colorPrimario2"
        >
          Beneficios de nuestro servicio de
          <br/>
          <strong className="text-colorPrimario5">
          {service.name}
          </strong>
        </motion.h2>
      </div>

      <ul className="grid grid-cols-1 md-tablet:grid-cols-2 gap-6 table-lg:gap-8">
        {service.benefits.map((benefit, index) => {
          const Icon =
            (Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<
              LucideProps
            >) || Icons.HelpCircle;

          return (
            <motion.li
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
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
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
