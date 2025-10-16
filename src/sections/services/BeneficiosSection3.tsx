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
              alt="Servicio de soporte y mantenimiento de software post-implementación para garantizar la longevidad y el uptime de la plataforma digital."
              width={748}
              height={563}
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
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mantenimiento, soporte y asesoría técnica
            </motion.h3>
            <motion.p
              className="text-gray-200 text-base md-tablet:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Establecemos un partnership estratégico para garantizar la longevidad de tu inversión. Nuestro soporte asegura un alto uptime y la evolución continuas del software, manteniéndolo siempre actualizado y competitivo.
            </motion.p>
            <motion.ul
              className="flex flex-col gap-3 text-colorFondo text-base md-tablet:text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {[
                "Monitoreo y Soporte especializado 24/7.",
                "Garantía y Soporte gratuito durante la etapa de Go-Live.",
                "Actualizaciones de seguridad y Mantenimiento preventivo."
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
  )
}