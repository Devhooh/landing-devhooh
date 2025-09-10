"use client"

import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { motion } from "framer-motion";

  // El texto saldra uno por uno
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const splitText = (text: string) => text.split("");

export function ContactSection() {
  return (
    <section className="w-full px-3 pt-5 pb-12 bg-white">
      {/* Título */}

      <motion.h2
        className="
        text-3xl md-tablet:text-5xl font-extrabold text-center mb-8 text-colorPrimario2 leading-tight drop-shadow-lg"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
      >
        {splitText("¡Comienza a Trabajar Con Nosotros!").map((letter, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      <div
        className="
          mx-auto max-w-6xl 
          grid gap-10
          tablet-md:grid-cols-2
        "
      >
        
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
