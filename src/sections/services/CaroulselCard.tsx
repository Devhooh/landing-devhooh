"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  slug: string;
  title: string;
  details: string;
  color: string;
  icon: string;
}

export default function CaroulselCard({
  card,
}: {
  card: CardData;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.04,
        rotateX: 1.5,
        rotateY: -1.5,
        transition: { duration: 0.2 },
      }}
      className="
        bg-white/90 border border-gray-200 hover:border-fuchsia-400
        rounded-2xl shadow-xl overflow-hidden h-[490px]
        flex flex-col
      "
    >
      {/* Imagen */}
      <div className="flex items-center justify-center bg-gradient-to-br from-fuchsia-50 via-white to-purple-50 p-6">
        <Image
          src={card.icon}
          alt={card.title}
          width={500}
          height={500}
          className="object-contain w-36 h-auto"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-grow p-5 text-gray-900">
        <h3 className="text-xl font-bold mb-2 text-left text-indigo-950 flex items-center gap-2">
          <span>{card.title}</span>
          <span className="animate-pulse w-2 h-2 rounded-full bg-green-700" />
        </h3>
        <p className="text-sm text-gray-600 leading-snug line-clamp-3 text-left mb-4">
          {card.details}
        </p>
      </div>

      {/* Botones */}
      <div className="mb-12 px-5 flex flex-col gap-4">
        <Link href="/contact">
          <button className="relative w-full py-2 rounded-lg bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-semibold overflow-hidden">
            <span className="relative z-10">Cotiza tu proyecto</span>
            <span className="absolute inset-0 bg-white/30 -translate-x-full rotate-45 animate-shine" />
          </button>
        </Link>

        <Link href={`/services/${card.slug}`}>
          <button className="w-full py-2 rounded-lg border border-fuchsia-400 text-indigo-900 font-medium transition bg-fuchsia-50 hover:bg-fuchsia-100">
            Ver más detalles
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
