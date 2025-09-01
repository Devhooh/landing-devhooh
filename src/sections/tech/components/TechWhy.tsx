import Link from "next/link";
import Image from "next/image";

interface TechWhyProps {
  title: string;
  description: string;
  image: string;
}

export default function TechWhy({ title, description, image }: TechWhyProps) {
  return (
    <section className="
      max-w-5xl mx-auto px-16 py-16 grid grid-cols-1 tablet-md:grid-cols-2 gap-12 items-center
      rounded-2xl bg-gradient-to-t from-purple-50 to-purple-400
      ">
      
      {/* Imagen a la izquierda */}
      <div className="flex justify-center order-2 tablet-md:order-1">
        <Image
          src={image}
          alt={`Imagen de ${title}`}
          width={500}
          height={300}
          className="rounded-lg object-cover w-80 h-auto"
        />
      </div>

      {/* Texto a la derecha */}
      <div className="order-1 text-center tablet-md:order-2 tablet-md:text-right flex flex-col items-end mx-auto">
        <h2 className="text-2xl tablet-md:text-3xl font-bold mb-4 text-blue-950">
          ¿Por qué desarrollar con {title}?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
          {description}
        </p>

        {/* Botón */}
        <Link
          href="/contact"
          className="mx-auto tablet-md:mx-0 inline-block bg-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Solicita presupuesto
        </Link>
      </div>
    </section>
  );
}
