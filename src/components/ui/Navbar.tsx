"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/services" },
    { name: "Tecnologías", path: "/tecnologia" },
    { name: "Portafolio", path: "/portfolio" },
    { name: "Nosotros", path: "/about" },
  ];

  // Deshabilita el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-white/50">
      <div className="relative max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo de Devhoo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/devhooh.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
            priority
            style={{ height: "auto", width: "auto" }}
            className="rounded-xl"
          />
        </Link>

        {/* Menu de secciones PC*/}
        <nav className="hidden table-lg:flex gap-6 font-semibold">
          {links.map((values) => {
            const isActive = pathname === values.path;
            return (
              <Link
                key={values.path}
                href={values.path}
                className={`relative px-3 py-2 rounded-3xl transition
                  text-gray-950 hover:text-fuchsia-500
                  ${isActive ? "text-fuchsia-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-fuchsia-500" : ""}
              `}
              >
                {values.name}
              </Link>
            );
          })}

          {/* Boton CTA de contactanos */}
          <Link href="/contact">
            <button
              className="
                relative px-8 py-2 rounded-2xl text-white font-semibold shadow-md
                bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500
                animate-gradient
                transition-all duration-700 ease-in-out
                hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]
              "
            >
              Contáctanos
            </button>
          </Link>
        </nav>

        {/* Boton hamburguesa para mobile */}
        <button
          className="table-lg:hidden p-3 rounded-full bg-gray-950 border-2 border-slate-300 text-white focus:outline-none transition-transform duration-300"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menú mobile */}
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
            className="p-3 rounded-full bg-gray-950 border-2 border-slate-300 text-white transition-colors duration-300"
          >
            <X size={28} />
          </button>
        </div>

        {/* Contenedor de las secciones*/}
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
                    text-xl border-b border-purple-100 rounded-lg
                    hover:bg-fuchsia-100 hover:text-fuchsia-500 p-4
                    ${isActive ? "font-bold text-fuchsia-500 bg-fuchsia-100" : ""}
                  `}
                >
                  <span>{values.name}</span>
                  <ChevronRight size={24} className="text-fuchsia-500" />
                </Link>
              );
            })}
            {/* Botón "Contáctanos"*/}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="
                relative w-full text-center mt-6 py-4 rounded-lg text-white text-2xl font-bold shadow-md
                bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-500
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
    </header>
  );
}


















