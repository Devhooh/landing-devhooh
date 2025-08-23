"use client";

import { Code, Database, Smartphone, Cloud } from "lucide-react";
import Link from "next/link";

export default function TechSection() {
  const technologies = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Frontend",
      description: "React, TypeScript y TailwindCSS para interfaces rápidas y modernas.",
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Backend",
      description: "Node.js y APIs modulares con buenas prácticas.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-purple-500" />,
      title: "Mobile",
      description: "Apps multiplataforma con React Native / Flutter.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      title: "Cloud",
      description: "Despliegue y escalado en Vercel / AWS.",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md-tablet:text-4xl table-lg:text-5xl font-extrabold mb-6 p-4 bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 bg-clip-text text-transparent">
          Nuestro stack tecnológico
        </h2>

        {/* Texto descriptivo */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg md-tablet:text-2xl">
          Estas son algunas de las herramientas que forman parte de nuestro stack.
        </p>

        <div className="relative">
          {/* Línea horizontal (visible en md-tablet y arriba) */}
          <div className="hidden md-tablet:block absolute inset-x-0 top-7 h-px bg-gray-300" />

          {/* Línea vertical (visible en móvil) */}
          <div className="block md-tablet:hidden absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />

          {/* Items */}
          <div className="relative z-10 flex flex-col md-tablet:flex-row md-tablet:items-start md-tablet:justify-between gap-12">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center md-tablet:flex-1 px-4"
              >
                {/* Icono centrado en la línea */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow z-20">
                  {tech.icon}
                </div>

                <h3 className="mt-4 text-lg font-semibold">{tech.title}</h3>
                <p className="mt-2 text-sm text-gray-600 max-w-xs">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Botón */}
        <div className="mt-12">
          <Link
            href="/tecnologia"
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Ver más tecnologías
          </Link>
        </div>
      </div>
    </section>
  );
}


