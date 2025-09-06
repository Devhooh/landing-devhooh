"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect } from "react";

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}


export const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Hook para cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full relative" ref={dropdownRef}>
      <p className="text-white font-semibold">{label}</p>
      <div
        className="bg-gray-100 p-2 border border-colorPrimarioLogo2 rounded-md shadow-sm cursor-pointer flex justify-between items-center"
        onClick={handleToggle}
      >
        <span className="text-colorPrimario1">{value}</span>
        {/* El ícono rota 180 grados cuando el menú está abierto */}
        <ChevronDown 
          className={`h-6 w-6 md-tablet:h-4 text-colorSecundario3 md-tablet:w-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>
      {/* Menú desplegable con animación suave */}
      <ul
        className={`absolute z-10 w-full top-[100%] mt-1 bg-white border border-colorHover rounded-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleSelect(option)}
            className="p-2 cursor-pointer hover:bg-colorHover3 text-colorPrimario1"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};