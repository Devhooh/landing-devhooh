"use client";
import { Mail, Phone, ArrowRight, Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Variante para los párrafos (desde la izquierda)
const paragraphVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Variante para los datos de contacto (desde abajo)
const contactCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, delay: i * 0.15, ease: "easeOut" }
  })
};

export function ContactInfo() {

  return (
    <div className="relative space-y-8">
      
      {/* Encabezado principal */}
      <div className="relative z-10 space-y-6 px-3">
        
        {/* Título animado */}
        <motion.h2
          className="text-2xl md-tablet:text-4xl text-center tablet-md:text-left font-extrabold italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3}}
          viewport={{ once: true }}
        >
          ¡Hablemos de tu proyecto!
        </motion.h2>

        {/* Párrafos introductorios mejorados */}
        <div className="space-y-4">
          <motion.p
            className="text-colorPrimario1/80 font-medium text-lg leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Gracias por tu interés en{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text">
              Devhooh
            </span>
            . Queremos conocer mejor tus necesidades para crear la solución digital perfecta para tu negocio.
          </motion.p>

          <motion.p
            className="text-colorPrimario1/80 font-medium text-lg leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Completa el formulario y empecemos a transformar tu idea en realidad.
          </motion.p>
        </div>

        {/* Badge de disponibilidad */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4}}
          viewport={{ once: true }}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-colorPrimario5">
            Disponibles ahora
          </span>
        </motion.div>
      </div>

      {/* Información de contacto mejorada */}
      <div className="relative z-10 space-y-4">
        {[
          {
            icon: <Mail className="w-6 h-6" />,
            label: "Correo electrónico",
            value: "contact@devhooh.com",
            href: "mailto:contact@devhooh.com",
          },
          {
            icon: <Phone className="w-6 h-6" />,
            label: "WhatsApp",
            value: "+591 77776666",
            href: "https://wa.me/77776666",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            label: "Horarios de atención",
            value: "Lunes a Sábados de 08:00 - 20:00",
            href: null,
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            label: "Ubicación",
            value: "Santa Cruz, Bolivia",
            href: null,
          }
        ].map((item, i) => {
          const Wrapper = item.href ? "a" : "div";

          return (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(103,61,230,0.15)]"
              variants={contactCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Wrapper
                href={item.href || undefined}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4"
              >
                {/* Icono animado */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 flex items-center justify-center shadow-lg text-white"
                >
                  {item.icon}
                </div>

                <div className="flex-grow">
                  <h3 className="font-bold text-colorPrimario2 text-lg mb-1">
                    {item.label}
                  </h3>

                  {item.href ? (
                    <div className="text-colorPrimario1/80 font-medium hover:text-colorPrimario5 transition-all duration-300 group-hover:text-colorPrimario5">
                      {item.value}
                    </div>
                  ) : (
                    <p className="text-colorPrimario1/80 font-medium">
                      {item.value}
                    </p>
                  )}
                </div>

                {/* Indicador de enlace */}
                {item.href && (
                  <ArrowRight className="w-5 h-5 text-colorPrimario5/60 group-hover:text-colorPrimario5 group-hover:translate-x-1 transition-all duration-300" />
                )}
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      {/* Call to action adicional */}
      <motion.div
        className="relative z-10 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3}}
        viewport={{ once: true }}
      >
        <Link href="/about">
          <motion.div
            className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-colorDarkFondo2 to-colorDarkFondo4 text-white hover:from-colorDarkFondo3 hover:to-colorDarkFondo5 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Conoce más sobre Devhooh</h3>
                <p className="text-colorHover5 text-sm">Descubre nuestra historia y experiencia</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}