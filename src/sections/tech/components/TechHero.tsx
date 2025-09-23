"use client"
import { DataTech } from "@/data/techDataPage";
import { motion } from "framer-motion";
import Image from "next/image";


interface TechHeroProps {
  tech: DataTech;
}

export default function TechHero({ tech }: TechHeroProps) {
  return (
    <section className="container mx-auto px-6 md-tablet:px-14 py-12">
      <div className="grid grid-cols-1 tablet-md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md-tablet:text-4xl tablet-md:text-6xl text-colorPrimario2 font-bold drop-shadow-lg">
            Servicios de desarrollo con <span className={tech.color}>{tech.title}</span>
          </h1>
          <p className="mt-4 text-lg md-tablet:text-xl tablet-md:text-3xl text-gray-700">
            {tech.subtitle}
          </p>
        </div>

        <div className="flex justify-center md-tablet:justify-center tablet-md:justify-end">

          <div className="relative group">
            <div className="bg-white/10 px-1 py-2 relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <Image
                src="/assets/images/herotech.png"
                alt={tech.title}
                width={600}
                height={600}
                priority
                className="w-80 max-w-md h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Círculos decorativos flotantes */}
            <motion.div
              className={`absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-500 opacity-20`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 * 0.5
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
