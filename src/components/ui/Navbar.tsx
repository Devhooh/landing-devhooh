"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  const links = [
    {name: "Inicio", path: "/"},
    {name: "Servicios", path: "/services"},
    {name: "Portafolio", path: "/portfolio"},
    {name: "Nosotros", path: "/about"},
  ];

  return (
    <header className="w-full bg-purple-300 border-b border-gray-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo de Devhoo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
            style={{height: "auto", width: "auto"}}
          />
        </Link>

        {/* Menu para escritorio */}
        <nav className="hidden md:flex gap-6 text-gray-950 font-semibold">
          {links.map((values) => {
            const isActive = pathname === values.path;

            return (
              <Link 
              key={values.path}
              href={values.path}
              className={`relative px-3 py-2 rounded-3xl transition
                hover:bg-gray-400 hover:text-white
                ${isActive ? "text-blue-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-700" : ""}
              `
              }
              >
                {values.name}
              </Link>
            )
          })}

          {/* Boton CTA de contactanos */}
          <Link
            href="/contact"
            className="
              relative px-6 py-2 rounded-lg text-white font-semibold shadow-md
              bg-gradient-to-r from-blue-500 to-blue-700
              overflow-hidden transition-all duration-700 ease-in-out
              hover:from-blue-600 hover:to-blue-800 
              hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            "
          >
            Contáctanos
          </Link>
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
        <nav className="md:hidden bg-purple-300 border-t border-gray-300 shadow-md font-semibold">
          <div className="flex flex-col items-center py-4 space-y-4">
            
            {links.map((values) => {
              const isActive = pathname === values.path;

              return(
                <Link
                  key={values.path}
                  href={values.path}
                  onClick={toggleMenu}
                  className={`relative px-3 py-2 rounded-3xl transition
                  hover:bg-gray-400 hover:text-white
                  ${isActive ? "text-blue-700 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-700" : ""}
                  `}
                >
                  {values.name}
                </Link>
              )
            })}

            {/* Boton CTA para mobile */}
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="
                relative px-6 py-2 rounded-lg text-white font-semibold shadow-md
                bg-gradient-to-r from-blue-500 to-blue-700
                overflow-hidden transition-all duration-700 ease-in-out
                hover:from-blue-600 hover:to-blue-800 
                hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
              "
            >
              Contáctanos
            </Link>
          </div>
        </nav>
      )}

    </header>
  )
}



