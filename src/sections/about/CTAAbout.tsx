"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap, Star } from "lucide-react";

export default function CTAAbout() {
  const splitText = (text: string) => text.split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Confianza",
      description: "Socio estratégico de largo plazo",
      color: "colorPrimario5"
    },
    {
      icon: Zap,
      title: "Resultados",
      description: "Mejoramos conversiones reales",
      color: "colorPrimario5"
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos junto a tu equipo",
      color: "colorPrimario5"
    }
  ];

  return (
    <section className="relative w-full py-20 mt-10 overflow-hidden">
      
      {/* Fondo con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-colorHover5 via-colorHover6 to-colorHover5"></div>
      
      {/* Efectos decorativos de fondo */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Contenido principal */}
        <div className="space-y-12">
          
          {/* Título principal mejorado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold leading-tight mb-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {splitText("Devhooh es el socio ").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="text-colorPrimario2"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {splitText("en quien puedes ").map((letter, idx) => (
                <motion.span
                  key={idx + 100}
                  className="text-colorPrimario2"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {splitText("confiar").map((letter, idx) => (
                <motion.span
                  key={idx + 200}
                  className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="text-lg md-tablet:text-xl text-colorPrimario1/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transformamos tu visión en soluciones digitales exitosas. Mejoramos la experiencia de usuario, 
              aumentamos conversiones y creamos plataformas escalables que impulsan el crecimiento de tu negocio.
            </motion.p>
          </motion.div>

          {/* Características destacadas */}
          <motion.div
            className="grid grid-cols-1 md-tablet:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative p-6 rounded-2xl bg-white backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r from-${feature.color} to-colorSecundario2 flex items-center justify-center mb-4 mx-auto shadow-lg`}
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: `${idx * 0.3}s` }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <h3 className="text-lg font-bold text-colorPrimario2 mb-2">
                  {feature.title}
                </h3>
                <p className="text-colorPrimario1/70 text-sm">
                  {feature.description}
                </p>

                {/* Efecto decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Badge de calidad */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-colorPrimario5/10 to-colorSecundario1/10 border border-colorPrimario5/20 backdrop-blur-sm">
              <Star className="w-5 h-5 text-colorPrimario5 fill-current" />
              <span className="text-colorPrimario5 font-semibold">
                Calidad garantizada
              </span>
              <Star className="w-5 h-5 text-colorSecundario1 fill-current" />
            </div>
          </motion.div>

          {/* Botón principal mejorado */}
          <motion.div
            className="flex flex-col md-tablet:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative overflow-hidden px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  Hablemos de tu proyecto
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>

            <Link href="/portfolio">
              <motion.button
                className="px-8 py-4 text-lg font-semibold rounded-2xl border-2 border-colorPrimario5 text-colorPrimario5 hover:bg-colorPrimario5 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver nuestros casos de éxito
              </motion.button>
            </Link>
          </motion.div>

          {/* Estadísticas de confianza */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-colorPrimario5">5+</div>
              <div className="text-sm text-colorPrimario1/70">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-colorPrimario5">20+</div>
              <div className="text-sm text-colorPrimario1/70">Proyectos entregados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-colorPrimario5">98%</div>
              <div className="text-sm text-colorPrimario1/70">Satisfacción del cliente</div>
            </div>
          </motion.div>

          {/* Mensaje final */}
          <motion.p
            className="text-colorPrimario1/60 text-sm italic max-w-2xl mx-auto pt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Transformando ideas en soluciones digitales exitosas desde 2021
          </motion.p>
        </div>
      </div>
    </section>
  );
}