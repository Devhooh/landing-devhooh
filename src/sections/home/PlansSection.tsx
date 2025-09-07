"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Star, Shield, ArrowRight } from "lucide-react";

export function PlansSection() {
  const planes = [
    {
      title: "Plan Starter",
      subtitle: "Ideal para emprendedores y pequeñas empresas que buscan su primera presencia digital.",
      icon: CheckCircle,
      gradient: "from-colorHover5 to-colorHover6",
      iconGradient: "from-colorPrimario5 to-colorPrimario6",
      borderColor: "border-colorPrimario5/20",
      popular: false,
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
      gradient: "from-colorDarkFondo2 to-colorDarkFondo4",
      iconGradient: "from-colorSecundario1 to-colorSecundario3",
      borderColor: "border-colorSecundario1",
      popular: true,
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
      gradient: "from-colorHover5 to-colorHover6",
      iconGradient: "from-colorSecundario3 to-colorSecundario4",
      borderColor: "border-colorSecundario3/20",
      popular: false,
      beneficio: [
        "Sitio web o app con varias secciones o funcionalidades",
        "Integración con APIs o sistemas internos",
        "Panel administrativo para gestionar tu contenido",
        "Rendimiento optimizado para usuarios y buscadores",
        "Mantenimiento inicial y mejoras según tu feedback"
      ]
    },
  ];

  const splitText = (text: string) => text.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-colorHover6 via-colorHover5 to-colorHover6">
      <div className="max-w-[1400px] mx-auto px-4 text-center">
        
        {/* Título animado */}
        <motion.h2
          className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Planes estimados").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Elige el plan que mejor se adapte a las necesidades de tu proyecto
        </motion.p>

        {/* Grid de planes */}
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-8">
          {planes.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                className={`
                  relative rounded-3xl p-8 flex flex-col h-full
                  bg-gradient-to-br ${plan.gradient}
                  border-2 ${plan.borderColor}
                  backdrop-blur-sm
                  ${plan.popular ? 'shadow-[0_0_40px_rgba(103,61,230,0.3)] ring-2 ring-colorSecundario1/20' : 'shadow-[0_0_25px_rgba(0,0,0,0.1)]'}
                  hover:shadow-[0_0_50px_rgba(103,61,230,0.2)]
                  transition-all duration-300
                `}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                
                {/* Badge de Popular */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}

                {/* Icono */}
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.iconGradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Contenido */}
                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-colorPrimario2'}`}>
                    {plan.title}
                  </h3>
                  
                  <p className={`mb-8 text-sm leading-relaxed ${plan.popular ? 'text-colorHover5' : 'text-colorPrimario1/70'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Lista de beneficios */}
                  <ul className="space-y-4 mb-8 text-left">
                    {plan.beneficio.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        variants={bulletVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.iconGradient} flex items-center justify-center mt-0.5`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className={`text-sm ${plan.popular ? 'text-colorHover5' : 'text-colorPrimario1/80'}`}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Botón */}
                <Link href="/contact" className="w-full">
                  <motion.button
                    className={`
                      group w-full py-4 px-6 rounded-2xl font-semibold text-lg
                      flex items-center justify-center gap-2
                      transition-all duration-300
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)]'
                        : 'bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 text-white shadow-[0_0_20px_rgba(102,60,230,0.3)] hover:shadow-[0_0_30px_rgba(102,60,230,0.5)]'
                      }
                      hover:scale-105
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cotiza tu proyecto
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </Link>

                {/* Efecto decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action adicional */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-colorPrimario1/70 mb-4 font-medium text-xl">
            ¿No encuentras el plan perfecto para ti?
          </p>
          <Link href="/contact">
            <motion.button
              className="text-colorSecundario1 hover:text-colorSecundario3 font-semibold underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Hablemos de tu proyecto personalizado
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}