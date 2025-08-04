"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    {name: "Inicio", path: "/"},
    {name: "Servicios", path: "/services"},
    {name: "Portafolio", path: "/portfolio"},
    {name: "Nosotros", path: "/about"},
    {name: "Contáctanos", path: "/contact"},
  ];

  return (
    <header className="w-full bg-purple-300 border-b border-gray-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
          />
        </Link>

        {/* Menu para escritorio */}
        <nav className="hidden md:flex gap-6 text-gray-950 font-medium">
          {links.map((values) => (
            <Link 
              key={values.path}
              href={values.path}
              className="hover:text-gray-100 transition"
            >
              {values.name}
            </Link>
          ))}
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
            
            {links.map((values) => (
              <Link
                key={values.path}
                href={values.path}
                onClick={toggleMenu}
                className="hover:text-gray-100 transition"
              >
                {values.name}
              </Link>
            ))}

          </div>
        </nav>
      )}

    </header>
  )
}



