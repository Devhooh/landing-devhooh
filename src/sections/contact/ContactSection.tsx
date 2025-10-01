"use client"

import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="w-full px-3 pt-5 pb-12 bg-white">
      {/* Título */}

      <motion.h1
        className="
        text-3xl md-tablet:text-5xl font-extrabold text-center mb-8 text-colorPrimario2 leading-tight drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ¡Comienza a Trabajar con {""}
        <span className="text-colorPrimario5">Nosotros!</span>
      </motion.h1>

      <div className="mx-auto max-w-6xl grid gap-10 tablet-md:grid-cols-2">
        
        {/* Columna izquierda */}
        <div className="flex flex-col justify-start">
          <ContactInfo />
        </div>

        {/* Columna derecha */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
