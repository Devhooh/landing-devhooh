"use client";

import { motion } from "framer-motion";
import { Code, Database, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";

export default function TechSection() {
  const technologies = [
    {
      icon: <Code className="w-7 h-7 text-white" />,
      title: "Frontend",
      description: "React, TypeScript y TailwindCSS para interfaces rápidas y modernas.",
      gradient: "from-colorPrimario5/10 to-colorPrimario6/10",
      iconBg: "from-colorSecundario1 to-colorSecundario2"
    },
    {
      icon: <Database className="w-7 h-7 text-white" />,
      title: "Backend",
      description: "Node.js y APIs modulares con buenas prácticas.",
      gradient: "from-colorSecundario1/10 to-colorSecundario2/10",
      iconBg: "from-colorSecundario1 to-colorSecundario2"
    },
    {
      icon: <Smartphone className="w-7 h-7 text-white" />,
      title: "Mobile",
      description: "Apps multiplataforma con React Native / Flutter.",
      gradient: "from-colorPrimario7/10 to-colorPrimario8/10",
      iconBg: "from-colorSecundario1 to-colorSecundario2"
    },
    {
      icon: <Cloud className="w-7 h-7 text-white" />,
      title: "Cloud",
      description: "Despliegue y escalado en Vercel / AWS.",
      gradient: "from-colorSecundario3/10 to-colorSecundario4/10",
      iconBg: "from-colorSecundario1 to-colorSecundario2"
    },
  ];

  // Variants para fade + slide-up de bloques
  const blockVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-colorHover5 to-colorHover6">
      <div className="mx-auto text-center">
        {/* Contenido principal */}
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Título animado letra por letra */}
          <motion.h2
            className="text-4xl md-tablet:text-5xl table-lg:text-6xl font-extrabold mb-6 text-colorPrimario2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            Nuestro stack tecnológico
          </motion.h2>
          
          <motion.p
            className="text-colorPrimario1/80 mb-16 max-w-3xl mx-auto text-lg md-tablet:text-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={blockVariants}
            transition={{ duration: 0.4}}
          >
            Utilizamos las tecnologías más modernas y confiables para crear soluciones robustas y escalables
          </motion.p>

          {/* Grid de tecnologías */}
          <motion.div
            className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-8 mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          >
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                className={`relative group p-6 rounded-3xl bg-gradient-to-br ${tech.gradient} backdrop-blur-sm border border-white/20 hover:border-colorPrimario5/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(103,61,230,0.15)]`}
                variants={blockVariants}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icono flotante */}
                <div
                  className={`relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.iconBg} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <div className="text-white">
                    {tech.icon}
                  </div>
                  
                  {/* Efecto de brillo */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-colorPrimario2 mb-3">
                  {tech.title}
                </h3>
                
                <p className="text-colorPrimario1/70 text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Indicador decorativo */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-colorPrimario5/30 group-hover:bg-colorPrimario5 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Botón */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3}}
          >
            <Link href="/tecnologia" className="group">
              <motion.button 
                className="relative overflow-hidden text-lg md-tablet:text-xl bg-gradient-to-r from-colorPrimario5 to-colorSecundario2 text-white py-4 px-10 rounded-2xl font-semibold shadow-[0_0_25px_rgba(103,61,230,0.3)] hover:shadow-[0_0_35px_rgba(103,61,230,0.5)] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <span className="relative z-10">
                  Explora todas nuestras tecnologías
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
