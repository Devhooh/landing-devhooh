"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Star, Shield } from "lucide-react";

export function PlansSection() {
  const planes = [
    {
      title: "Plan Starter",
      subtitle: "Ideal para emprendedores y pequeñas empresas que buscan su primera presencia digital.",
      icon: CheckCircle,
      beneficio: [
        "Landing page o web básica profesional y rápida",
        "App prototipo o MVP",
        "Diseño personalizado con identidad de marca",
        "Optimización para velocidad y SEO inicial",
        "Soporte de implementación y guía básica"
      ]
    },
    {
      title: "Plan Enterprise",
      subtitle: "Para empresas que buscan desarrollo avanzado con soporte continuo y escalabilidad.",
      icon: Star,
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración de Inteligencia IA o Machine Learning",
        "Seguridad e infraestructura profesional con monitoreo",
        "Escalabilidad y actualizaciones constantes",
        "Soporte dedicado y consultoría técnica"
      ]
    },
    {
      title: "Plan Business",
      subtitle: "Para negocios en crecimiento que necesitan soluciones más robustas y escalables.",
      icon: Shield,
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración con APIs o sistemas internos",
        "Panel administrativo para gestionar tu contenido",
        "Rendimiento optimizado para usuarios y buscadores",
        "Mantenimiento inicial y mejoras según tu feedback"
      ]
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.25)" },
  };

  const bulletVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="w-full py-16 bg-colorHover/15">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md-tablet:text-6xl font-extrabold mb-16 text-colorPrimario2">
          Planes estimados
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {planes.map((data, index) => {
            const Icon = data.icon;
            return (
              <motion.div
                key={index}
                className={`
                  rounded-3xl px-4 py-8 flex flex-col items-center text-center
                  w-80 md-tablet:w-96 table-lg:w-80
                  ${index === 1 
                    ? "bg-colorPrimario1 text-white shadow-2xl border border-gray-700" 
                    : "bg-white text-gray-800 shadow-xl border border-gray-200"}
                `}
                initial="hidden"
                whileInView="show"
                whileHover="hover"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{data.title}</h3>
                <p className={`mb-6 ${index === 1 ? "text-gray-200" : "text-gray-600"}`}>
                  {data.subtitle}
                </p>

                <div className="m-4 w-full">
                  <Link href="/contact">
                    <button
                      className={`
                        w-full py-3 px-4 rounded-lg font-semibold text-lg
                        ${index === 1
                          ? "bg-purple-700 border border-colorSecundario2 text-white hover:bg-colorPrimarioLogo1"
                          : "border border-colorPrimarioLogo1 bg-white text-colorSecundario3 hover:bg-colorHover/40"}
                        shadow-lg transition-all duration-300
                      `}
                    >
                      Cotiza tu proyecto
                    </button>
                  </Link>
                </div>

                <ul className="text-left space-y-3 mb-6 w-full">
                  {data.beneficio.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 p-2 rounded-lg"
                      variants={bulletVariants}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 text-colorSecundario3" />
                      <span className="text-xs">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
