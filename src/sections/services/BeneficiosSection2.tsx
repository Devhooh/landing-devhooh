import { motion } from "framer-motion";
import Image from "next/image";

export default function BeneficiosSection2() {
  return (
    <motion.div
      className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {/* Texto */}
      <motion.div
        className="flex flex-col gap-6 order-1 table-lg:order-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } } }}
      >
        {[
          {
            title: "Ahorro de tiempo y recursos",
            desc: "Procesos automatizados y eficientes que reducen costes y aceleran resultados sin sacrificar calidad."
          },
          {
            title: "Escalabilidad y futuro garantizado",
            desc: "Cada solución está diseñada para crecer contigo, asegurando estabilidad y flexibilidad a largo plazo."
          },
          {
            title: "Mayor visibilidad online",
            desc: "Optimizamos tu presencia digital con SEO y estrategias modernas que generan impacto real."
          },
          {
            title: "Experiencias que convierten",
            desc: "Creamos interfaces intuitivas que no solo atraen, sino que fidelizan a tus clientes."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md-tablet:text-3xl font-bold text-colorFondo">{item.title}</h2>
            <p className="text-gray-200 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="order-2 table-lg:order-2"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/beneficio2.png"
          alt="Ahorro de tiempo"
          width={1200}
          height={1200}
          className="rounded-2xl shadow-lg bg-colorHover2/10"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  )
}