// import Link from "next/link";
// import Image from "next/image";

// interface TechWhyProps {
//   title: string;
//   color: string
//   description: string;
//   image: string;
// }

// export default function TechWhy({ title, color, description, image }: TechWhyProps) {
//   return (
//     <section className="
//       max-w-5xl mx-auto px-16 py-16 grid grid-cols-1 tablet-md:grid-cols-2 gap-12 items-center
//       rounded-2xl bg-gradient-to-b from-violet-50 to-violet-400
//       ">
      
//       {/* Imagen a la izquierda */}
//       <div className="flex justify-center order-2 tablet-md:order-1">
//         <Image
//           src={image}
//           alt={`Imagen de ${title}`}
//           width={500}
//           height={300}
//           className="rounded-lg object-cover w-80 h-auto"
//         />
//       </div>

//       {/* Texto a la derecha */}
//       <div className="order-1 text-center tablet-md:order-2 tablet-md:text-right flex flex-col items-end mx-auto">
//         <h2 className="text-2xl tablet-md:text-3xl font-bold mb-4 text-blue-900">
//           ¿Por qué desarrollar con <span className={`${color}`}>{title}</span>?
//         </h2>
//         <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
//           {description}
//         </p>

//         {/* Botón */}
//         <Link
//           href="/contact"
//           className="mx-auto tablet-md:mx-0 inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
//         >
//           Solicita presupuesto
//         </Link>
//       </div>
//     </section>
//   );
// }


"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface TechWhyProps {
  title: string;
  color: string;
  description: string;
  image: string;
}

export default function TechWhy({ title, color, description, image }: TechWhyProps) {
  return (
    <section
      className="
      max-w-5xl mx-auto px-16 py-16 grid grid-cols-1 tablet-md:grid-cols-2 gap-12 items-center
      rounded-2xl bg-gradient-to-b from-violet-50 to-violet-400
      "
    >
      {/* Imagen a la izquierda */}
      <motion.div
        className="flex justify-center order-2 tablet-md:order-1"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          width={500}
          height={300}
          className="rounded-lg object-cover w-80 h-auto"
        />
      </motion.div>

      {/* Texto a la derecha */}
      <div className="order-1 text-center tablet-md:order-2 tablet-md:text-right flex flex-col items-center table-lg:items-end mx-auto">
        {/* Título desde arriba */}
        <motion.h2
          className="text-2xl tablet-md:text-3xl font-bold mb-4 text-blue-900"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¿Por qué desarrollar con{" "}
          <span className={`${color}`}>{title}</span>?
        </motion.h2>

        {/* Descripción normal (fade in) */}
        <motion.p
          className="text-gray-600 leading-relaxed mb-6 max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {/* Botón desde abajo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="
            mx-auto tablet-md:mx-0 inline-block bg-purple-600 text-white font-medium px-6 py-3 
            rounded-lg shadow-md hover:bg-purple-700 transition "
          >
            Solicita presupuesto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
