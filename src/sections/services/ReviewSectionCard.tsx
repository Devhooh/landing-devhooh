import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ReviewCardProps {
  reviewBody: string;
  reviewerName: string;
  position: string;
  reviewerProfileUrl: string;
}

export default function ReviewSectionCard({
  reviewBody,
  reviewerName,
  position,
  reviewerProfileUrl,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative max-w-3xl mx-auto bg-gradient-to-br from-colorHover6 via-colorFondo to-colorHover5 rounded-3xl shadow-[0_0_40px_rgba(103,61,230,0.15)] border-2 border-colorPrimario5/20 py-12 px-8 flex flex-col md-tablet:flex-row gap-8 backdrop-blur-md"
    >
      {/* Imagen del reviewer */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="relative">
          <Image
            src={reviewerProfileUrl}
            alt={reviewerName}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-colorPrimario5 shadow-lg"
            loading="lazy"
            sizes="120px"
          />
          <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 shadow-md"></div>
        </div>
      </div>
      {/* Contenido de la review */}
      <div className="flex flex-col justify-between text-left flex-1">
        {/* Icono de Quote decorativo */}
        <div className="bottom-6 right-6 text-colorPrimario5 opacity-70">
          <Quote className="w-10 h-10" />
        </div>

        {/* Texto */}
        <p className="text-lg text-colorPrimario2 leading-relaxed mb-6 font-medium">
          {reviewBody}
        </p>

        {/* Nombre y cargo */}
        <div className="flex items-center gap-4 pt-4 border-t border-colorPrimario5/30">
          <div className="flex flex-col">
            <p className="font-bold text-colorPrimario5 text-xl mb-1">
              {reviewerName}
            </p>
            <p className="text-colorPrimario1/70 text-sm font-semibold">
              {position}
            </p>
          </div>
        </div>
      </div>
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
}
