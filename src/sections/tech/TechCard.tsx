"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { HiArrowRight } from "react-icons/hi";
import { motion, Variants } from "framer-motion";

interface Technology {
  name: string;
  icon: IconType;
  color?: string;
  slug: string;
}

interface TechCardProps {
  title: string;
  subtitle: string;
  technologies: Technology[];
}

const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut", delay: 0.15 } },
};

// Contenedor del grid → se encarga del stagger
const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12, // delay entre cada tech
      delayChildren: 0.2,    // espera un poco tras el subtítulo
    },
  },
};

// Cada item de tecnología
const techItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// El texto saldra uno por uno
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const splitText = (text: string) => text.split("");

export default function TechCard({ title, subtitle, technologies }: TechCardProps) {
  return (
    <article
      className="p-4 rounded-xl shadow-md max-w-full bg-colorPrimario11"
    >
      {/* Título */}
      <motion.h2
        className="text-xl md-tablet:text-2xl font-bold text-white m-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
      >
        {splitText(title).map((letter, idx) => (
          <motion.span key={idx} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Subtítulo animado */}
      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-base md-tablet:text-lg font-light text-white/80 mx-2 my-4"
      >
        {subtitle}
      </motion.p>

      {/* Grid de tecnologías con stagger */}
      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="my-3 grid grid-cols-1 table-lg:grid-cols-2 lg-table:grid-cols-4 gap-4"
      >
        {technologies.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <motion.div key={idx} variants={techItemVariants}>
              <Link
                href={`/tecnologia/${tech.slug}`}
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-colorPrimarioLogo1
                  transform transition duration-300 hover:scale-95 hover:shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Icon className={`${tech.color || "text-gray-700"} text-2xl`} />
                  <span className="text-lg md-tablet:text-xl font-medium text-gray-600">{tech.name}</span>
                </div>
                <HiArrowRight className="text-black" />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </article>
  );
}
