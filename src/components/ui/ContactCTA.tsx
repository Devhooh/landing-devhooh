"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full bg-gray-200 pt-10 flex justify-center">
      <div
        // Aquí añadimos la clase 'animate-pulse' de Tailwind.
        className="relative w-full max-w-[700px] h-[340px] rounded-t-[500px] bg-white
        shadow-xl flex flex-col items-center justify-center text-center
        overflow-hidden transition-all duration-2000 ease-out "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute bottom-0 w-[1000px] h-[1000px] rounded-full
          transition-transform duration-700 ease-out
          ${isHovered ? "translate-y-1/3 bg-gray-900" : "translate-y-full bg-gray-900"}`}
        ></div>
        
        <div className="relative z-10 px-8 pt-20 text-center flex flex-col justify-center items-center">
          <div className="m-5">
            <h2
              className={`text-xl md-tablet:text-2xl table-lg:text-3xl font-extrabold mb-4 text-wrap
              transition-colors duration-700 ease-out animate-pulse
              ${isHovered ? "text-white" : "text-gray-900"}`}
            >
              Queremos que su empresa sea nuestro próximo caso de éxito
            </h2>
          </div>
          
          <div className="flex gap-4">
            <Link
              href="/contact"
              className={`relative inline-flex items-center justify-center px-10 py-3 text-sm
              md-tablet:text-lg font-bold rounded-2xl shadow-lg transition-all duration-700 ease-out
              ${isHovered ? "text-gray-900 bg-white" : "text-white bg-gray-900"}`}
            >
              Escribenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

