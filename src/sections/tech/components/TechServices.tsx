"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Settings, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

interface TechServicesProps {
  name: string;
  image: string;
  services: Service[];
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const serviceVariants: Variants = {
  hidden: { opacity: 0, x: 50, y: 20 },
  show: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -3 },
  show: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function TechServices({ name, image, services }: TechServicesProps) {
  const splitText = (text: string) => text.split("");

  return (
    <section className="
    relative py-20 
    bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Badge superior */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Settings className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Especialización técnica</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center px-5 md-tablet:px-2">
          
          {/* Columna izquierda - Imagen y título */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            {/* Título con animación letra por letra */}
            <motion.h2
              className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold leading-tight"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
            >
              {splitText("Servicios de ").map((letter, idx) => (
                <motion.span
                  key={idx}
                  className="text-colorPrimario2"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              {splitText(name).map((letter, idx) => (
                <motion.span
                  key={idx + 100}
                  className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {splitText("que brindamos").map((letter, idx) => (
                <motion.span
                  key={idx + 200}
                  className="text-colorPrimario2"
                  variants={letterVariants}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h2>

            {/* Imagen mejorada */}
            <motion.div
              className="relative group"
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-[0_0_30px_rgba(103,61,230,0.1)] group-hover:shadow-[0_0_40px_rgba(103,61,230,0.15)] transition-all duration-500 p-6">
                <Image
                  src={image}
                  alt={`Imagen de ${name}`}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay con efecto */}
                <div className="absolute inset-6 rounded-2xl bg-gradient-to-t from-colorDarkFondo4/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

            </motion.div>
          </motion.div>

          {/* Columna derecha - Servicios */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => {
              return (
                <motion.div
                  key={index}
                  className={`
                    group relative p-6 md-tablet:p-8 rounded-3xl 
                    bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm
                    border-2 border-white/20 hover:border-colorPrimario5/40
                    shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]
                    transition-all duration-300
                  `}
                  variants={serviceVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  
                  {/* Efectos decorativos */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
                  
                  {/* Badge numerado */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col md-tablet:flex-row md-tablet:items-start gap-4">
                    
                    {/* Icono */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl 
                      bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 
                      flex items-center justify-center shadow-lg 
                      group-hover:shadow-xl transition-all duration-300
                      mx-auto md-tablet:mx-0"
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>

                    {/* Contenido */}
                    <div className="flex-grow">
                      <h3 className="text-xl md-tablet:text-2xl font-bold text-colorPrimario2 group-hover:text-colorPrimario5 transition-colors duration-300 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-colorPrimario1/80 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Badge de especialización */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30">
                        <Sparkles className="w-3 h-3 text-colorPrimario5" />
                        <span className="text-colorPrimario5 font-semibold text-xs">
                          Servicio especializado
                        </span>
                      </div>
                    </div>

                    {/* Flecha indicativa */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-colorPrimario5" />
                    </div>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-3xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Settings className="w-6 h-6 text-colorPrimario5 flex-shrink-0" />
            <span className="text-colorPrimario5 font-semibold text-lg">
              Especialistas en {name} con experiencia comprobada
            </span>
            <CheckCircle className="w-6 h-6 text-colorSecundario1 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}