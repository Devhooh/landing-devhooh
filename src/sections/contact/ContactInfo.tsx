"use client";
import { Mail, Phone, ArrowRight, Clock, MapPin, Star } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Variante para los títulos letra por letra
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Variante para los párrafos (desde la izquierda)
const paragraphVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Variante para los datos de contacto (desde abajo)
const contactCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" }
  })
};

// Variante para iconos flotantes
const iconFloatVariants: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function ContactInfo() {
  const splitText = (text: string) => text.split("");

  return (
    <div className="relative space-y-8">
      
      {/* Efectos decorativos de fondo */}
      {/* <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-colorPrimario5/5 blur-2xl"></div>
      <div className="absolute -bottom-20 -right-10 w-40 h-40 rounded-full bg-colorSecundario1/5 blur-2xl"></div> */}

      {/* Encabezado principal */}
      <div className="relative z-10 space-y-6 px-3">
        
        {/* Título animado */}
        <motion.h2
          className="text-3xl md-tablet:text-4xl font-extrabold"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("¡Hablemos de tu ").map((letter, idx) => (
            <motion.span
              key={idx}
              className="text-colorPrimario2"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
          {splitText("proyecto!").map((letter, idx) => (
            <motion.span
              key={idx + 100}
              className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* Párrafos introductorios mejorados */}
        <div className="space-y-4">
          <motion.p
            className="text-colorPrimario1/80 font-medium text-lg leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
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
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.2 }}
          >
            Completa el formulario y empecemos a transformar tu idea en realidad.
          </motion.p>
        </div>

        {/* Badge de disponibilidad */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            gradient: "from-colorPrimario5 to-colorPrimario6",
            bgGradient: "from-colorPrimario5/10 to-colorPrimario6/10"
          },
          {
            icon: <Phone className="w-6 h-6" />,
            label: "WhatsApp",
            value: "+591 77776666",
            href: "https://wa.me/77776666",
            gradient: "from-colorSecundario1 to-colorSecundario2",
            bgGradient: "from-colorSecundario1/10 to-colorSecundario2/10"
          },
          {
            icon: <Clock className="w-6 h-6" />,
            label: "Horarios de atención",
            value: "Lunes a Sábados de 08:00 - 20:00",
            href: null,
            gradient: "from-colorPrimario7 to-colorPrimario8",
            bgGradient: "from-colorPrimario7/10 to-colorPrimario8/10"
          },
          {
            icon: <MapPin className="w-6 h-6" />,
            label: "Ubicación",
            value: "Santa Cruz, Bolivia",
            href: null,
            gradient: "from-colorSecundario3 to-colorSecundario4",
            bgGradient: "from-colorSecundario3/10 to-colorSecundario4/10"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`group relative p-6 rounded-2xl bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(103,61,230,0.15)]`}
            variants={contactCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              {/* Icono animado */}
              <motion.div
                className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg text-white`}
                variants={iconFloatVariants}
                animate="animate"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {item.icon}
              </motion.div>

              <div className="flex-grow">
                <h4 className="font-bold text-colorPrimario2 text-lg mb-1">
                  {item.label}
                </h4>
                
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-colorPrimario1/80 font-medium hover:text-colorPrimario5 transition-all duration-300 group-hover:text-colorPrimario5"
                  >
                    {item.value}
                  </Link>
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
            </div>

            {/* Efecto decorativo */}
            {/* <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div> */}
          </motion.div>
        ))}
      </div>

      {/* Call to action adicional */}
      <motion.div
        className="relative z-10 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
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
                <h4 className="font-bold text-lg">Conoce más sobre Devhooh</h4>
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