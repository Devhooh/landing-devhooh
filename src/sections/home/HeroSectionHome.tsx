"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HeroSectionHome() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 table-lg:grid-cols-2 items-center gap-6">

          {/* --- 1) TÍTULO --- */}
          <h1 className="order-1 text-center table-lg:text-left text-4xl md-tablet:text-5xl font-extrabold text-blue-950 leading-tight tracking-tight">
            Desarrollo de <span className="text-fuchsia-600">software inteligente</span> a tu medida
          </h1>

          {/* --- 2) IMAGEN --- */}
          <div className="order-2 table-lg:order-2 table-lg:col-start-2 table-lg:row-span-4 flex justify-center">
            <div className="relative z-10 bg-white shadow-2xl rounded-3xl p-4">
              <Image
                src="/assets/images/hero1.png"
                alt="Equipo desarrollando software a medida"
                width={500}
                height={500}
                className="w-[420px] h-auto object-contain rounded-2xl"
                priority
              />
            </div>

            {/* Glow detrás de la imagen */}
            <div className="absolute -z-0 top-10 right-10 w-72 h-72 bg-fuchsia-400 blur-3xl opacity-30 rounded-full"></div>
            <div className="absolute -z-0 bottom-10 left-10 w-72 h-72 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>
          </div>

          {/* --- 3) SUBTÍTULO --- */}
          <p className="order-3 text-lg md-tablet:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto table-lg:mx-0">
            Creamos soluciones web, móviles y empresariales integrando{" "}
            <span className="font-semibold text-blue-800">inteligencia artificial</span> 
            para impulsar la innovación y mejorar la eficiencia de tu negocio.
          </p>

          {/* --- 4) LISTA SEO --- */}
          <ul className="order-4 space-y-4 text-sm md-tablet:text-base text-gray-800">
            {[
              "Aplicaciones web rápidas y escalables",
              "Apps móviles modernas y fluidas",
              "Integración de inteligencia artificial en tus procesos",
              "Sistemas empresariales personalizados",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* --- 5) BOTÓN --- */}
          <div className="order-5 flex justify-center table-lg:justify-start pt-4">
            <Link href="/contact">
              <button
                className="
                  px-8 py-4 text-lg md-tablet:text-xl font-semibold
                  bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white
                  rounded-2xl shadow-lg
                  hover:scale-105 hover:shadow-xl
                  transition-all duration-300
                "
              >
                Empieza ahora
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
