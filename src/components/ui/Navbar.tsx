"use client";

import { useState } from "react";
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
    { name: "Portafolio", path: "/portfolio" },
    { name: "Nosotros", path: "/about" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-fuchsia-300/50 border-b border-fuchsia-300">
      <div className="relative max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo de Devhoo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
            style={{ height: "auto", width: "auto" }}
          />
        </Link>

        {/* Boton hamburguesa*/}
        <button
          onClick={toggleMenu}
          className={`
            md:hidden p-3 rounded-full transition-colors duration-300
            ${!isOpen ? "bg-gray-800 text-white border" : ""}
          `}
        >
          <Menu size={28} />
        </button>

        {/* Menu de servicios*/}
        <nav className="hidden md:flex gap-6 text-slate-900 font-semibold">
          {links.map((values) => {
            const isActive = pathname === values.path;
            return (
              <Link
                key={values.path}
                href={values.path}
                className={`relative px-3 py-2 rounded-3xl transition
                  hover:text-blue-700
                  ${isActive ? "text-blue-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-700" : ""}
                `}
              >
                {values.name}
              </Link>
            );
          })}
          {/* Boton CTA de contactanos */}
          <Link
            href="/contact"
            className="
              relative px-8 py-2 rounded-lg text-white font-semibold shadow-md
              bg-gradient-to-r from-blue-500 to-blue-700
              overflow-hidden transition-all duration-700 ease-in-out
              hover:from-blue-600 hover:to-blue-800
              hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            "
          >
            Contáctanos
          </Link>
        </nav>
      </div>


      {/* Menú mobile*/}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen bg-white shadow-md font-semibold z-40
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Barra superior del menu mobile */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <Link href="/" onClick={toggleMenu}>
            <Image
              className="rounded-xl"
              src="/assets/images/BgColor.png"
              alt="Devhoo-logo"
              width={120}
              height={60}
              style={{ height: "auto", width: "auto" }}
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="p-3 rounded-full bg-gray-800 text-white transition-colors duration-300"
          >
            <X size={28} />
          </button>
        </div>

        {/* Secciones del menu mobile */}
        <nav className="flex flex-col items-center py-8 space-y-6">
          {links.map((values) => {
            const isActive = pathname === values.path;
            return (
              <Link
                key={values.path}
                href={values.path}
                onClick={toggleMenu}
                className={`
                  flex justify-between items-center w-full px-6 py-4 transition-all duration-300
                  text-slate-900 text-2xl border-b border-gray-100
                  hover:bg-gray-100 hover:text-blue-500
                  ${isActive ? "font-bold text-blue-700 bg-gray-100" : ""}
                `}
              >
                <span>{values.name}</span>
                <ChevronRight size={24} className="text-gray-400"/>
              </Link>
            );
          })}
          {/* Boton CTA para mobile */}
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="
              relative px-12 py-4 rounded-lg text-white text-3xl font-bold shadow-md
              bg-gradient-to-r from-blue-500 to-blue-700
              overflow-hidden transition-all duration-700 ease-in-out
              hover:from-blue-600 hover:to-blue-800
              hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            "
          >
            Contáctanos
          </Link>
        </nav>
      </div>
    </header>
  );
}

