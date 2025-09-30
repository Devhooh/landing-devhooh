import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function BeneficiosSection3() {
  return (
    <motion.div
          className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
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
              src="/assets/images/beneficio3.png"
              alt="Soporte continuo"
              width={748}
              height={563}
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
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Soporte continuo para tu éxito
            </motion.h2>
            <motion.p
              className="text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              No solo entregamos un producto, nos aseguramos de que tengas el apoyo necesario después de la implementación.
            </motion.p>
            <motion.ul
              className="flex flex-col gap-3 text-colorFondo"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {[
                "Atención al cliente 24/7.",
                "Soporte gratuito inicial.",
                "Actualizaciones y mejoras constantes."
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