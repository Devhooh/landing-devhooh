"use client";
import { Mail, Phone, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Variante para los párrafos (desde la izquierda)
const paragraphVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Variante para los datos (desde abajo)
const dataVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" }
  })
};

export function ContactInfo() {
  return (
    <div className="space-y-6 text-colorPrimario2">
      <div className="space-y-4">
        {/* Introducción */}
        <motion.p
          className="text-gray-600 font-medium text-lg"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          Gracias por su interés en{" "}
          <span className="font-semibold text-fuchsia-700"> 
            Devhooh
          </span>.
          Nos gustaría hacerle algunas preguntas para comprender mejor sus
          necesidades de desarrollo de software.
        </motion.p>

        <motion.p
          className="text-gray-600 font-medium text-lg"
          variants={paragraphVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          Complete el formulario e iniciemos su proyecto ahora.
        </motion.p>
      </div>

      {/* Datos de devhooh */}
      <div className="space-y-8">
        {[
          {
            icon: <Mail className="text-colorPrimario5 w-8 h-8 shrink-0" />,
            label: "Correo:",
            value: (
              <Link
                href="mailto:contact@devhooh.com"
                className="text-gray-600 font-medium text-lg hover:text-colorSecundario4 transition-all"
              >
                contact@devhoo.com
              </Link>
            )
          },
          {
            icon: <Phone className="text-colorPrimario5 w-8 h-8 shrink-0" />,
            label: "Celular:",
            value: (
              <Link
                href="https://wa.me/77776666"
                className="text-gray-600 font-medium text-lg hover:text-colorSecundario4 transition-all"
              >
                +591 77776666
              </Link>
            )
          },
          {
            icon: <Clock className="text-colorPrimario5 w-8 h-8 shrink-0" />,
            label: "Horarios:",
            value: (
              <p className="text-gray-600 font-medium text-lg">
                Lunes a Sábados de 08:00 - 20:00
              </p>
            )
          },
          {
            icon: <ArrowRight className="w-8 h-8 shrink-0 text-colorPrimario5" />,
            label: "",
            value: (
              <Link href="/about">
                <p className="font-semibold text-xl hover:text-colorSecundario4 transition-all">
                  Más sobre Devhooh
                </p>
              </Link>
            )
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3"
            variants={dataVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
          >
            {item.icon}
            <div>
              {item.label && (
                <p className="font-semibold text-xl">{item.label}</p>
              )}
              {item.value}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
