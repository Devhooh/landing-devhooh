"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Shield, Clock, Headphones, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function GarantiasSection() {
  return (
    <section className="relative w-full py-20 bg-colorFondo">
      <div className="container mx-auto px-6 tablet-md:px-12 max-w-7xl">
        
        {/* Bloque 1 */}
        <div className="grid grid-cols-1 table-lg:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="
              text-3xl tablet-md:text-5xl font-extrabold 
              text-colorPrimario1">
              Confianza y seguridad en cada entrega
            </h2>
            
            <ul className="flex flex-col gap-4 text-colorPrimario1 text-lg">
              {[ "Transparencia total en cada proyecto.",
                 "Revisión y mejoras incluidas.",
                 "Política clara de tiempos y entregas.",
                 "Soporte técnico garantizado.",
                 "Resultados preparados para escalar."
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-colorPrimario5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/garantia.png"
              alt="Garantía de servicios"
              width={1500}
              height={1500}
              className="rounded-2xl shadow-lg"
              loading="lazy"
            />
          </motion.div>

        </div>

        {/* Bloque 2 */}
        <motion.div
          className="mt-20 bg-colorPrimario22 rounded-3xl shadow-xl p-7 flex flex-col items-center gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-4 gap-8 w-full">
            
            {/* Tarjetas */}
            {[
              { icon: <Shield className="w-8 h-8 text-white" />, title: "Garantía de satisfacción", text: "Si no cumple lo prometido, lo ajustamos hasta que estés conforme." },
              { icon: <Clock className="w-8 h-8 text-white" />, title: "Entrega puntual", text: "Compromiso firme en los tiempos pactados." },
              { icon: <Headphones className="w-8 h-8 text-white" />, title: "Soporte continuo", text: "Incluye soporte gratuito post-entrega (30-60 días)." },
              { icon: <TrendingUp className="w-8 h-8 text-white" />, title: "Escalabilidad asegurada", text: "Diseño y código listos para crecer junto a tu negocio." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-colorDarkFondo2 to-colorDarkFondo4 shadow-lg"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorPrimario7 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-colorPrimario5 hover:bg-colorPrimario6 transition-all"
              >
                Descubre cómo nuestras garantías hacen la diferencia
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
