import Image from "next/image";
import { motion } from "framer-motion";

interface ReviewCardProps {
  logoUrl: string;
  projectTitle: string;
  reviewBody: string;
  reviewerName: string;
  position: string;
  reviewerProfileUrl: string;
  rating: number;
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
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg py-10 px-6 flex flex-col md-tablet:flex-row gap-6"
    >
      {/* Imagen del reviewer */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <Image
          src={reviewerProfileUrl}
          alt={reviewerName}
          width={160}
          height={160}
          className="rounded-full object-cover"
        />
      </div>

      {/* Contenido de la review */}
      <div className="flex flex-col justify-between text-left flex-1">
        {/* Texto */}
        <p className="text-gray-700 leading-relaxed mb-4">{reviewBody}</p>

        {/* Nombre y cargo */}
        <div className="border-t border-gray-400 pt-2">
          <h4 className="font-bold text-gray-900">{reviewerName}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
