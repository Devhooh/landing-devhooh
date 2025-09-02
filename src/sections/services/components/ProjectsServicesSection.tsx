"use client";

import Link from "next/link";
import ProjectsServicesCard from "./ProjectsServicesCard"; // tu card existente
import { projectsData } from "@/data/portfolioData";
import { motion } from "framer-motion";

// Texto con efecto "letra por letra"
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const splitText = (text: string) => text.split("");

export default function ProjectsServicesSection() {
  const limit: number = 6; // cantidad de proyectos a mostrar
  const displayedProjects = projectsData.slice(0, limit);

  return (
    <section className="mx-5 py-8 px-4 table-lg:px-10 bg-white">
      <div className="mx-auto mb-8">
        <motion.h2
          className="text-left text-3xl md-tablet:text-4xl font-bold text-blue-900"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.02 } } }}
        >
          {splitText("Los proyectos que hemos hecho realidad").map((letter, idx) => (
            <motion.span key={idx} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md-tablet:grid-cols-2 table-lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProjectsServicesCard projects={project} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6}}
        >
        <Link
        href="/portfolio"
        className="inline-block px-8 py-3 text-base md-tablet:text-xl rounded-xl bg-fuchsia-600 text-white font-bold hover:bg-fuchsia-700 transition"
        >
        Ver todos los proyectos
        </Link>
      </motion.div>
    </section>
  );
}
