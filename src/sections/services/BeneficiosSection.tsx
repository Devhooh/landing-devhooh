"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function BeneficiosSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-colorDarkFondo2 via-colorDarkFondo3 to-colorDarkFondo4">
      <div className="container mx-auto px-6 tablet-md:px-12 max-w-7xl flex flex-col gap-24">

        {/* Encabezado */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl tablet-md:text-5xl font-extrabold text-white py-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Beneficios inmediatos para tu negocio
          </motion.h2>
          <motion.p
            className="mt-4 text-lg md-tablet:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lo que ganas al trabajar con nosotros va más allá de un simple servicio: son resultados tangibles y duraderos.
          </motion.p>
        </motion.div>

        {/* Bloque 1 */}
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
              src="/assets/images/webSoftware.png"
              alt="Confianza y seguridad"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg bg-colorHover2/10"
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
            <motion.h3
              className="text-2xl md-tablet:text-3xl font-bold text-colorFondo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Confianza y seguridad
            </motion.h3>
            <motion.p
              className="text-gray-200"
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
                  <CheckCircle className="w-5 h-5 text-colorPrimario5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bloque 2 */}
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
                <h3 className="text-2xl md-tablet:text-3xl font-bold text-colorFondo">{item.title}</h3>
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
              src="/assets/images/webSoftware.png"
              alt="Ahorro de tiempo"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg bg-colorHover2/10"
            />
          </motion.div>
        </motion.div>

        {/* Bloque 3 */}
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
              src="/assets/images/webSoftware.png"
              alt="Soporte continuo"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg bg-colorHover2/10"
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
            <motion.h3
              className="text-2xl md-tablet:text-3xl font-bold text-colorFondo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Soporte continuo para tu éxito
            </motion.h3>
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
                  <CheckCircle className="w-5 h-5 text-colorPrimario5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bloque 4 - Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorPrimario5">+50</div>
            <div className="text-sm text-colorPrimario1/70">proyectos entregados con éxito.</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario1">Hasta 3x</div>
            <div className="text-sm text-colorPrimario1/70">más rápido en implementación que la media.</div>
          </div>
          <div className="text-center px-6 py-4 rounded-2xl bg-colorHover6 backdrop-blur-sm border border-white/20">
            <div className="text-2xl md-tablet:text-3xl font-bold text-colorSecundario3">99%</div>
            <div className="text-sm text-colorPrimario1/70">uptime en soluciones en la nube.</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
