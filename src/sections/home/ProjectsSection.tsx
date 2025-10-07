import { motion, Variants } from "framer-motion";
import { CheckCircle, BadgeCheck } from "lucide-react";

// Variantes para textos y párrafos
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 50 },
  }),
};

// Variantes para lista
const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 60 },
  }),
};

export function ProjectsSection() {
  return (
    <section className="w-full pb-10 pt-10 tablet-md:pt-32 mb-10 bg-white">

      {/* Título */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-6 mb-6 md-tablet:mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2
          custom={0}
          variants={textVariants}
          className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-colorPrimario2 to-colorPrimario1"
        >
          Proyectos que generan <strong className="text-colorPrimario5"> resultados reales</strong>
        </motion.h2>
      </motion.div>

      {/* Métricas de impacto */}
      <motion.ul
        className="flex justify-center gap-8 flex-wrap mb-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {[
          { text: "20+ proyectos entregados" },
          { text: "10+ industrias distintas" },
          { text: "95% satisfacción de clientes" },
        ].map((metric, idx) => (
          <motion.li
            key={idx}
            custom={idx}
            variants={listItemVariants}
            className="flex items-center gap-2 bg-colorHover5 rounded-xl px-4 py-2 shadow-md"
          >
            <BadgeCheck className="w-6 h-6 tablet-md:w-10 tablet-md:h-10 text-colorPrimario5" />
            <span className="text-colorPrimario2 font-semibold">{metric.text}</span>
          </motion.li>
        ))}
      </motion.ul>

      {/* Texto + lista */}
      <div className="max-w-5xl mx-auto px-6 md-tablet:px-12 mb-10 flex flex-col table-lg:flex-row items-start gap-4">
        
        {/* Bloque de texto */}
        <motion.div
          className="flex-1 text-center table-lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.p
            custom={0}
            variants={textVariants}
            className="text-colorPrimario4 text-base md-tablet:text-lg table-lg:text-xl leading-relaxed mb-6"
          >
            En Devhooh, cada proyecto es una oportunidad para {""} 
            <strong>impulsar tu negocio</strong>. Nos especializamos en el desarrollo de <strong>software a medida</strong>,
            integrando <strong>soluciones web, móviles e Inteligencia Artificial</strong>. No solo resolvemos problemas; 
            <strong> escalamos tu negocio</strong> y mejoramos la experiencia de tus clientes a través de la tecnología.
          </motion.p>
        </motion.div>

        {/* Lista */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center table-lg:items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ul className="flex flex-col gap-3 text-gray-800 text-base md-tablet:text-lg table-lg:text-xl">
            {[
              <><strong>Soluciones de software personalizadas</strong> y escalables (Next.js/React)</>,
              <>Integración de <strong>Inteligencia Artificial</strong> y Machine Learning</>,
              <><strong>Diseño UX/UI</strong> moderno y experiencia de usuario premium</>,
              <>Soporte y <strong>acompañamiento técnico</strong> dedicado post-lanzamiento</>,
            ].map((item, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={listItemVariants}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-6 h-6 text-colorPrimario5 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

    </section>
  );
}

