"use client"
import { Project } from "@/data/portfolioDetails";
import { iconsData } from "@/data/techData";
import { motion } from "framer-motion";

interface StackSectionProps {
  project: Project;
}

export default function StackTech({ project }: StackSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // empieza abajo y transparente
      whileInView={{ opacity: 1, y: 0 }} // sube y aparece
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gradient-to-b from-purple-300 to-white py-12 px-5 md-tablet:px-8"
    >
      <h2 className="text-3xl md-tablet:text-4xl font-bold text-blue-950 text-center mb-8">
        Stack de tecnologías del proyecto
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {project.stackTech.map((tech) => {
          const Icon = iconsData[tech.icon];
          return (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-gray-50 rounded-lg shadow p-3 min-w-[220px]"
            >
              <Icon className={`text-3xl ${tech.color} w-10 h-10`} />
              <span className="text-xl md-tablet:text-2xl font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
