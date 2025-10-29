"use client";

import Link from "next/link";
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

export default function ActiveLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden table-lg:flex gap-6 font-semibold">
      {links.map((values) => {
        const isActive = pathname === values.path;
        return (
          <Link
            key={values.path}
            href={values.path}
            className={`
              relative px-3 py-2 rounded-3xl transition
              text-gray-950 hover:text-colorSecundario1
              ${isActive ? "text-colorSecundario1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-colorSecundario1" : ""}
            `}
          >
            {values.name}
          </Link>
        );
      })}

      <Link href="/contact">
        <button
          className="
            group relative px-8 py-2 rounded-2xl text-white font-semibold shadow-md
            bg-gradient-to-l from-gray-900 via-gray-600 to-black
            bg-[size:200%_200%]
            animate-gradient
            transition-all duration-700 ease-in-out
            hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          Contáctanos
        </button>
      </Link>
    </nav>
  );
}
