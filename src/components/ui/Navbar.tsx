"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-purple-300 border-b border-gray-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
          />
        </div>

        {/* Menu para escritorio */}
        <nav className="hidden md:flex gap-6 text-gray-950 font-medium">
          <a className="hover:text-gray-100 transition">Inicio</a>
          <a className="hover:text-gray-100 transition">Servicios</a>
          <a className="hover:text-gray-100 transition">Portafolio</a>
          <a className="hover:text-gray-100 transition">Nosotros</a>
          <a className="hover:text-gray-100 transition">Contactanos</a>
        </nav>

        {/* Boton hamburguesa para mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ?< X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden bg-purple-300 border-t border-gray-300 shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a onClick={toggleMenu} className="hover:text-blue-600 transition">Servicios</a>
            <a onClick={toggleMenu} className="hover:text-blue-600 transition">Portafolio</a>
            <a onClick={toggleMenu} className="hover:text-blue-600 transition">Nosotros</a>
            <a onClick={toggleMenu} className="hover:text-blue-600 transition">Contacto</a>
          </div>
        </nav>
      )}

    </header>
  )
}



