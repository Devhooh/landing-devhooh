"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { HiArrowRight } from "react-icons/hi";

interface Technology {
  name: string;
  icon: IconType;
  color?: string; // opcional para el icono
}

interface TechCardProps {
  title: string;
  subtitle: string;
  technologies: Technology[];
  bgColor?: string; // opcional, por defecto azul pastel
}

export default function TechCard({
  title,
  subtitle,
  technologies,
  bgColor = "bg-blue-100",
}: TechCardProps) {
  return (
    <div className={`p-4 rounded-2xl shadow-md ${bgColor} max-w-full`}>
      {/* Título y subtítulo */}
      <h3 className="text-xl font-bold text-black mb-1">{title}</h3>
      <p className="text-sm font-light text-black/80 mb-6">{subtitle}</p>

      {/* Grid de tecnologías */}
      <div className="grid grid-cols-1 table-lg:grid-cols-2 lg-table:grid-cols-4 gap-4">
        {technologies.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <Link
              key={idx}
              href="#" // o cualquier ruta válida
              className="flex items-center justify-between p-2 rounded-lg bg-white shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-2">
                <Icon className={`${tech.color || "text-gray-700"} text-2xl`} />
                <span className="text-xl font-medium">{tech.name}</span>
              </div>
              <HiArrowRight className="text-black" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
