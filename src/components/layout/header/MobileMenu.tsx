"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/services" },
  { name: "Tecnologías", path: "/tecnologia" },
  { name: "Portafolio", path: "/portfolio" },
  { name: "Nosotros", path: "/about" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  return (
    <React.Fragment>
      <button
        className="table-lg:hidden p-3 rounded-full bg-colorPrimario2 border-2 border-black text-white focus:outline-none transition-transform duration-300"
        onClick={toggleMenu}
      >
        <span className="sr-only">Abrir menú</span>
        <Menu size={28} />
      </button>

      <div
        className={`
          table-lg:hidden fixed top-0 left-0 w-full h-svh bg-white shadow-md font-semibold z-40
          transform transition-all duration-500 ease-in-out flex flex-col
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        {/* Barra superior del menu mobile */}
        <div className="flex-none flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <Image
              className="rounded-xl"
              src="/assets/images/logoMovil.png"
              alt="Devhoo-logo"
              width={60}
              height={60}
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-3 rounded-full bg-colorPrimario2 border-2 border-black text-white transition-colors duration-300"
          >
            <span className="sr-only">Cerrar menú</span>
            <X size={28} />
          </button>
        </div>

        {/* Contenedor de las secciones */}
        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
          <nav className="flex flex-col space-y-6">
            {links.map((values) => {
              const isActive = pathname === values.path;
              return (
                <Link
                  key={values.path}
                  href={values.path}
                  onClick={toggleMenu}
                  className={`
                    flex justify-between items-center w-full py-2 transition-all duration-300
                    text-xl border-b border-colorHover rounded-lg
                    hover:bg-colorHover/35 hover:text-colorSecundario1 p-4
                    ${isActive ? "font-bold text-colorSecundario1 bg-colorHover/30" : ""}
                  `}
                >
                  <span>{values.name}</span>
                  <ChevronRight size={24} className="text-colorPrimario" />
                </Link>
              );
            })}
            {/* Botón "Contáctanos"*/}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="
                relative w-full text-center mt-6 py-4 rounded-lg text-white text-2xl font-bold shadow-md
                bg-gradient-to-r from-gray-900 via-gray-700 to-black
                animate-gradient
                transition-all duration-700 ease-in-out
                hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]
              "
            >
              Contáctanos
            </Link>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
