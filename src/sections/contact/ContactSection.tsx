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
    <section className="w-full px-6 pt-6 pb-12 bg-white">
      {/* Título */}

      <motion.h2
        className="
        text-2xl md-tablet:text-4xl font-bold text-center mb-8 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-950 to-blue-600"
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
