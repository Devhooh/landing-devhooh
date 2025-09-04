"use client";
import { motion } from "framer-motion";
import ReviewsHome from "./ReviewsHome";

// Animación para letras del título
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function BenefitsSection() {
  const upperCircles = [
    {
      title: "Entrega rápida",
      text: "Proyectos listos en tiempo récord, manteniendo calidad premium.",
      gradient: "from-fuchsia-500 to-purple-700",
      shadow: "shadow-[0_0_20px_rgba(255,0,255,0.4)]",
      reverse: false,
    },
    {
      title: "Seguro y confiable",
      text: "Tecnología moderna y buenas prácticas para tranquilidad total.",
      gradient: "from-blue-500 to-indigo-700",
      shadow: "shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      reverse: true,
    },
  ];

  const lowerCircles = [
    {
      title: "100% personalizado",
      text: "Soluciones únicas hechas a tu medida, sin plantillas.",
      gradient: "from-pink-500 to-pink-400",
      shadow: "shadow-[0_0_20px_rgba(255,0,0,0.4)]",
      reverse: false,
    },
    {
      title: "Soporte constante",
      text: "A tu lado siempre, incluso después de la entrega.",
      gradient: "from-green-400 to-teal-600",
      shadow: "shadow-[0_0_20px_rgba(0,255,0,0.3)]",
      reverse: true,
    },
  ];

  const splitText = (text: string) => text.split("");

  return (
    <section className="bg-colorDarkFondo2 px-2 py-20 md-tablet:px-8 table-lg:px-32 relative">
      <div className="max-w-[1550px] pb-16 mx-auto flex flex-col items-center gap-8">

        {/* FILA SUPERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between table-lg:justify-around gap-4 md-tablet:gap-6">
          {upperCircles.map((c, i) => (
            <motion.div
              key={i}
              className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${c.gradient} ${c.shadow}`}
              animate={{
                y: [0, -5, 0, 5, 0],
                x: c.reverse ? [0, -10, 0, 10, 0] : [0, 10, 0, -10, 0],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
                x: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
              }}
            >
              <motion.h3
                className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
              >
                {splitText(c.title).map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h3>
              <motion.p
                className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {c.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* TEXTO EN EL CENTRO */}
        <motion.h2
          className="text-4xl md-tablet:text-6xl table-lg:text-7xl font-extrabold text-center leading-tight mt-12 mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
        >
          {splitText("Beneficios").map((letter, idx) => (
            <motion.span
              key={idx}
              className="text-colorFondo"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
          <br />
          {splitText("inmediatos").map((letter, idx) => (
            <motion.span
              key={idx}
              className="text-colorFondo"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>

        {/* FILA INFERIOR DE CÍRCULOS */}
        <div className="w-full flex justify-between table-lg:justify-around gap-4 md-tablet:gap-6">
          {lowerCircles.map((c, i) => (
            <motion.div
              key={i}
              className={`w-40 h-40 md-tablet:w-64 md-tablet:h-64 rounded-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${c.gradient} ${c.shadow}`}
              animate={{
                y: [0, -5, 0, 5, 0],
                x: c.reverse ? [0, -10, 0, 10, 0] : [0, 10, 0, -10, 0],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
                x: { repeat: Infinity, repeatType: "loop", duration: 6, ease: "easeInOut" },
              }}
            >
              <motion.h3
                className="font-bold text-sm md-tablet:text-2xl text-white text-center tracking-wide"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
              >
                {splitText(c.title).map((letter, idx) => (
                  <motion.span key={idx} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
              </motion.h3>
              <motion.p
                className="text-xs md-tablet:text-lg text-gray-200 text-center mt-1 leading-snug"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {c.text}
              </motion.p>
            </motion.div>
          ))}
        </div>

      </div>

      <ReviewsHome/>
    </section>
  );
}
