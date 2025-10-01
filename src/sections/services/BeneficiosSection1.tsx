import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BeneficiosSection1 () {
  return (
    <motion.div
      className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <motion.div
        className="order-2 table-lg:order-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/beneficio1.png"
          alt="Proceso de desarrollo de software transparente basado en metodología ágil, con foco en seguridad, pruebas y comunicación continua con el cliente."
          width={1939}
          height={1940}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className="flex flex-col gap-8 order-1 table-lg:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h3
          className="text-2xl md-tablet:text-4xl font-bold text-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Confianza y seguridad
        </motion.h3>
        <motion.p
          className="text-white text-base md-tablet:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Garantizamos la transparencia total de la inversión. Aplicamos una metodología ágil y DevOps para un desarrollo seguro, fiable y con entregas incrementales que puedes ver en tiempo real.
        </motion.p>
        <motion.ul
          className="flex flex-col gap-3 text-colorFondo text-base md-tablet:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            "Metodología Ágil con procesos y flujos de trabajo claros.",
            "Revisiones de código y sprints periódicos durante el desarrollo.",
            "Pruebas de seguridad y calidad en cada entrega final.",
            "Compromiso con la satisfacción del cliente y orientación a resultados."
          ].map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-5 h-5 text-cyan-500" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  )
}