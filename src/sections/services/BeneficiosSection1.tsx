import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function BeneficiosSection1 () {
  return (
    <motion.div
      className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {/* Imagen */}
      <motion.div
        className="order-2 table-lg:order-1"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/beneficio1.png"
          alt="Confianza y seguridad"
          width={1939}
          height={1940}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className="flex flex-col gap-4 order-1 table-lg:order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h2
          className="text-2xl md-tablet:text-3xl font-bold text-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Confianza y seguridad
        </motion.h2>
        <motion.p
          className="text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nos aseguramos de que cada proyecto sea transparente, seguro y confiable.
        </motion.p>
        <motion.ul
          className="flex flex-col gap-3 text-colorFondo"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            "Procesos claros desde el inicio.",
            "Revisiones periódicas durante el desarrollo.",
            "Seguridad en cada entrega.",
            "Compromiso con tu satisfacción."
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