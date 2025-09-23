// "use client";

// import { Brain, Smartphone, Database, Layers } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// export default function FeaturedSection() {
//   const items = [
//     {
//       title: "Aplicaciones Full Stack",
//       icon: <Layers className="w-8 h-8 text-colorSecundario4" />,
//       description:
//         "Creamos aplicaciones web escalables con frontend y backend modernos. Gestionamos clústeres en Kubernetes, microservicios y pruebas de seguridad para garantizar rendimiento, agilidad y crecimiento.",
//     },
//     {
//       title: "Inteligencia Artificial",
//       icon: <Brain className="w-8 h-8 text-colorSecundario4" />,
//       description:
//         "Desarrollamos soluciones de inteligencia artificial aplicando algoritmos avanzados y aprendizaje automático. Desde el análisis de datos hasta el entrenamiento de modelos predictivos, creamos sistemas inteligentes adaptados a cada necesidad.",
//     },
//     {
//       title: "Aplicaciones con datos intensivos",
//       icon: <Database className="w-8 h-8 text-colorSecundario4" />,
//       description:
//         "Administramos bases de datos a gran escala e integramos análisis avanzados y aprendizaje automático. Garantizamos aplicaciones confiables, seguras y escalables que se adaptan a sus necesidades más exigentes.",
//     },
//     {
//       title: "Aplicaciones móviles (Android & iOS)",
//       icon: <Smartphone className="w-8 h-8 text-colorSecundario4" />,
//       description:
//         "Desarrollamos aplicaciones móviles nativas y multiplataforma, asegurando interfaces intuitivas, alto rendimiento y compatibilidad con Android e iOS. Creamos experiencias móviles atractivas, responsivas y adaptadas a las necesidades de los usuarios.",
//     },
//   ];

//   // Variantes para el título
//   const titleVariants: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   // Contenedor de cards (staggerChildren)
//   const containerVariants: Variants = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   // Cada card
//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 50, scale: 0.98 },
//     show: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="my-24 mx-4 md-tablet:mx-12 py-16 rounded-2xl bg-colorPrimario4">
//       {/* Título animado */}
      // <motion.h2
      //   variants={titleVariants}
      //   initial="hidden"
      //   whileInView="show"
      //   viewport={{ once: true }}
      //   className="text-3xl table-lg:text-4xl font-extrabold text-center mb-4 text-white"
      // >
      //   En qué nos 
      //   <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> destacamos</span>
      // </motion.h2>

//       {/* Subtítulo */}
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         viewport={{ once: true }}
//         className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-base md-tablet:text-lg"
//       >
//         Soluciones tecnológicas que marcan la diferencia en cada proyecto.
//       </motion.p>

//       {/* Grid con stagger */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="grid grid-cols-1 tablet-md:grid-cols-2 gap-8 px-5 tablet-md:px-10"
//       >
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             whileHover={{ scale: 1.02 }}
//             className="bg-colorPrimario3 border border-colorPrimario2 rounded-2xl shadow-md p-6 relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
//           >
//             {/* Icono con círculo */}
//             <div className="absolute top-4 left-4 bg-white/10 p-3 rounded-full">
//               {item.icon}
//             </div>

//             {/* Título debajo del icono */}
//             <h3 className="text-xl text-white font-semibold text-left mt-12">
//               <span className="text-colorSecundario4">▹ </span>
//               {item.title}
//             </h3>

//             {/* Descripción alineada a la izquierda */}
//             <p className="text-gray-200 text-left mt-3">{item.description}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { Brain, Smartphone, Database, Layers, Star, TrendingUp } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function FeaturedSection() {
  const items = [
    {
      title: "Aplicaciones Full Stack",
      icon: <Layers className="w-8 h-8 text-white" />,
      description:
        "Creamos aplicaciones web escalables con frontend y backend modernos. Gestionamos clústeres en Kubernetes, microservicios y pruebas de seguridad para garantizar rendimiento, agilidad y crecimiento.",
    },
    {
      title: "Inteligencia Artificial",
      icon: <Brain className="w-8 h-8 text-white" />,
      description:
        "Desarrollamos soluciones de inteligencia artificial aplicando algoritmos avanzados y aprendizaje automático. Desde el análisis de datos hasta el entrenamiento de modelos predictivos, creamos sistemas inteligentes adaptados a cada necesidad.",
    },
    {
      title: "Aplicaciones con datos intensivos",
      icon: <Database className="w-8 h-8 text-white" />,
      description:
        "Administramos bases de datos a gran escala e integramos análisis avanzados y aprendizaje automático. Garantizamos aplicaciones confiables, seguras y escalables que se adaptan a sus necesidades más exigentes.",
    },
    {
      title: "Aplicaciones móviles (Android & iOS)",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      description:
        "Desarrollamos aplicaciones móviles nativas y multiplataforma, asegurando interfaces intuitivas, alto rendimiento y compatibilidad con Android e iOS. Creamos experiencias móviles atractivas, responsivas y adaptadas a las necesidades de los usuarios.",
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

    const titleVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative my-24 mx-4 md-tablet:mx-8 py-20 rounded-3xl bg-colorPrimario4 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md-tablet:px-8">
        
        {/* Badge superior */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-colorPrimario5/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Star className="w-5 h-5 text-colorPrimario5" />
            <span className="text-colorPrimario5 font-semibold">Nuestras especialidades</span>
          </div>
        </motion.div>

        {/* Título con animación letra por letra */}
        <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl table-lg:text-5xl font-extrabold text-center mb-4 text-white"
      >
        En qué nos 
        <span className="text-transparent bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 bg-clip-text"> destacamos</span>
      </motion.h2>

        {/* Subtítulo mejorado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-colorHover5 mb-8 max-w-3xl mx-auto text-lg md-tablet:text-xl leading-relaxed"
        >
          Soluciones tecnológicas de vanguardia que marcan la diferencia en cada proyecto que desarrollamos.
        </motion.p>

        {/* Estadísticas rápidas */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-colorPrimario7">4</div>
            <p className="text-sm text-colorHover5">Especialidades</p>
          </li>
          
          <li className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-colorPrimario7">5+</div>
            <p className="text-sm text-colorHover5">Años perfeccionando</p>
          </li>
          
          <li className="text-center px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-2xl font-bold text-colorPrimario7">100%</div>
            <p className="text-sm text-colorHover5">Tecnología moderna</p>
          </li>
        </motion.ul>

        {/* Grid mejorado con cards premium */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 table-lg:grid-cols-2 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                group relative p-8 rounded-3xl 
                bg-gradient-to-br from-colorPrimario5/10 to-colorPrimario6/10 backdrop-blur-sm
                border-2 border-white/20 hover:border-colorPrimario5/40
                shadow-[0_0_25px_rgba(103,61,230,0.1)] hover:shadow-[0_0_35px_rgba(103,61,230,0.2)]
                transition-all duration-500
              `}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              
              {/* Efectos decorativos */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Badge numerado */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icono principal */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-colorSecundario1 to-colorSecundario2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                
                <div>
                  <h3 className="text-xl md-tablet:text-2xl font-bold text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <TrendingUp className="w-4 h-4 text-colorPrimario5" />
                    <span className="text-sm text-colorPrimario5 font-semibold">Especialidad destacada</span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-colorHover5 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Badge de tecnología */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-colorPrimario5 animate-pulse"></div>
                <span className="text-white font-semibold text-sm">
                  Tecnología de vanguardia
                </span>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action final */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-colorPrimario5/20 to-colorSecundario1/20 border border-colorPrimario5/30 backdrop-blur-sm">
            <Star className="flex-shrink-0 w-6 h-6 text-colorPrimario5" />
            <span className="text-white font-semibold text-lg">
              ¿Cuál de estas especialidades necesita tu proyecto?
            </span>
            <TrendingUp className="flex-shrink-0 w-6 h-6 text-colorSecundario1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}