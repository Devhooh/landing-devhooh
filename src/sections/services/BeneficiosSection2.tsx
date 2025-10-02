import { motion } from "framer-motion";
import Image from "next/image";

export default function BeneficiosSection2() {
  return (
    <motion.div
      className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {/* Texto */}
      <motion.div
        className="flex flex-col gap-8 order-1 table-lg:order-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }}
      >
        {[
          {
            title: "Optimización y Automatización de Procesos",
            desc: "Aceleramos la eficiencia operacional mediante la automatización de procesos y la reducción del TCO (Costo Total de Propiedad) sin sacrificar la calidad del código."
          },
          {
            title: "Arquitectura Escalable y a Prueba de Futuro",
            desc: "Diseñamos con Arquitectura Cloud y código limpio para garantizar la estabilidad y flexibilidad a largo plazo, permitiendo un crecimiento ilimitado."
          },
          {
            title: "Estrategia SEO/SEM y Posicionamiento de Marca",
            desc: "Tu producto digital será optimizado para SEO desde el frontend y backend, asegurando una mayor visibilidad y captación de clientes cualificados.."
          },
          {
            title: "Diseño UX/UI para Alta Conversión",
            desc: "Aplicamos un Diseño UX/UI centrado en el usuario para crear experiencias intuitivas que maximizan la retención y las tasas de conversión."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md-tablet:text-3xl font-bold text-cyan-500">{item.title}</h3>
            <p className="text-gray-200 mt-1 text-base md-tablet:text-lg">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="order-2 table-lg:order-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/beneficio2.png"
          alt="Beneficios de la optimización de procesos de software: ahorro de costes, escalabilidad, arquitectura a prueba de futuro y crecimiento de negocio a largo plazo."
          width={1200}
          height={1200}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}