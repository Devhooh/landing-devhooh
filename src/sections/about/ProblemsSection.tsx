"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

// Configuración de animaciones
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProblemsSection() {
  const splitText = (text: string) => text.split("");

  const problems = [
    {
      icon: "/assets/icons/web-slow.png",
      title1: "Tu web es lenta o anticuada",
      title2: "Pérdida de clientes y mala imagen",
      description: "Nosotros la optimizamos con tecnología moderna y diseño atractivo.",
      gradient: "from-colorPrimario5/10 to-colorPrimario6/10",
      accentColor: "colorPrimario5"
    },
    {
      icon: "/assets/icons/app-bug.png",
      title1: "Tu app no funciona bien",
      title2: "Malas reseñas y usuarios frustrados",
      description: "Creamos apps rápidas, seguras y 100% compatibles con iOS y Android.",
      gradient: "from-colorSecundario1/10 to-colorSecundario2/10",
      accentColor: "colorSecundario1"
    },
    {
      icon: "/assets/icons/seo.png",
      title1: "Nadie encuentra tu negocio online",
      title2: "Tu web no aparece en Google",
      description: "Diseñamos sitios con SEO y rendimiento optimizado desde el día uno.",
      gradient: "from-colorPrimario7/10 to-colorPrimario8/10",
      accentColor: "colorPrimario7"
    },
    {
      icon: "/assets/icons/process.png",
      title1: "Procesos manuales y lentos",
      title2: "Pierdes tiempo en tareas repetitivas",
      description: "Creamos software y automatizaciones que ahorran tiempo y dinero.",
      gradient: "from-colorSecundario3/10 to-colorSecundario4/10",
      accentColor: "colorSecundario3"
    },
    {
      icon: "/assets/icons/security.png",
      title1: "Riesgo de seguridad",
      title2: "Sistemas desactualizados y vulnerables",
      description: "Implementamos seguridad y buenas prácticas para proteger tu negocio.",
      gradient: "from-colorPrimario5/10 to-colorSecundario1/10",
      accentColor: "colorPrimario5"
    },
    {
      icon: "/assets/icons/team.png",
      title1: "Ideas sin equipo técnico",
      title2: "No sabes por dónde empezar tu proyecto",
      description: "Te acompañamos desde el diseño hasta el despliegue completo del producto.",
      gradient: "from-colorSecundario1/10 to-colorPrimario7/10",
      accentColor: "colorSecundario1"
    },
  ];

  return (
    <section id="soluciones" className="relative mt-32 mx-4 md-tablet:mx-8 table-lg:mx-16 overflow-hidden">
      
      {/* Contenedor principal con gradiente mejorado */}
      <div className="relative bg-gradient-to-br from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4 rounded-3xl py-16 px-6 md-tablet:px-12 border border-colorPrimario5/20 shadow-[0_0_50px_rgba(103,61,230,0.3)]">
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Título mejorado con animación letra por letra */}
          <motion.h2
            className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          >
            {splitText("¿Qué problemas ").map((letter, idx) => (
              <motion.span
                key={idx}
                className="text-white"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText("solucionamos").map((letter, idx) => (
              <motion.span
                key={idx + 100}
                className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            {splitText("?").map((letter, idx) => (
              <motion.span key={idx + 200} className="text-white" variants={letterVariants}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtítulo mejorado */}
          <motion.p 
            className="text-lg md-tablet:text-xl text-colorHover5 mb-8"
            variants={itemVariants}
          >
            Si alguno de estos problemas te resulta familiar, tenemos la solución perfecta para ti
          </motion.p>

          {/* Badge informativo */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm"
            variants={itemVariants}
          >
            <AlertTriangle className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorHover5 font-semibold">Problemas comunes que enfrentan las empresas</span>
          </motion.div>
        </motion.div>

        {/* Grid de cards mejorado */}
        <motion.div 
          className="relative z-10 grid grid-cols-1 table-lg:grid-cols-2 gap-6 md-tablet:gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className={`
                group relative bg-colorFondo backdrop-blur-sm
                border-2 border-white/20 hover:border-colorPrimario5/40
                rounded-2xl p-6 md-tablet:p-8 
                shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(103,61,230,0.2)]
                transition-all duration-500
                flex flex-col md-tablet:flex-row items-start md-tablet:items-center gap-6
              `}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                } 
              }}
            >
              
              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Contenedor de icono mejorado */}
              <div className="flex-shrink-0 relative">
                <div className="relative w-16 h-16 md-tablet:w-20 md-tablet:h-20 p-3 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    width={80}
                    height={80}
                    src={problem.icon}
                    alt={problem.title1}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay con efecto */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Indicador de problema */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center shadow-md">
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
              </div>

              {/* Contenido de texto mejorado */}
              <div className="flex-grow text-center md-tablet:text-left">
                
                {/* Problema principal */}
                <h3 className="text-lg md-tablet:text-xl font-bold text-colorPrimario2 mb-2 group-hover:text-colorPrimario5 transition-colors duration-300">
                  {problem.title1}
                </h3>
                
                {/* Consecuencia */}
                <div className="flex items-center gap-2 mb-3 justify-center md-tablet:justify-start">
                  <ArrowRight className="w-4 h-4 text-red-500" />
                  <h4 className="text-sm md-tablet:text-base font-semibold text-red-600">
                    {problem.title2}
                  </h4>
                </div>
                
                {/* Solución */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-green-50/80 border border-green-200/50">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md-tablet:text-base text-gray-700 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="relative z-10 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-colorPrimario5/20 border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
            <span className="text-colorHover5 font-semibold text-lg">
              Todos estos problemas tienen solución
            </span>
            <CheckCircle className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}