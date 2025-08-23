import { Mail, Phone, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="w-full space-y-6 text-gray-800">
      <div className="space-y-4">
        {/* Introducción */}
        <p className="text-gray-600 font-medium text-lg">
          Gracias por su interés en{" "}
          <span className="font-semibold text-fuchsia-400"> 
            Devhooh
          </span>.
          Nos gustaría hacerle algunas preguntas para comprender mejor sus
          necesidades de desarrollo de software.
        </p>
        <p className="text-gray-600 font-medium text-lg">
          Complete el formulario e iniciemos su proyecto ahora.
        </p>
      </div>

      <div className="space-y-8">
        {/* Correo */}
        <div className="flex items-start gap-3">
          <Mail className="text-blue-700 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Correo:</p>
            <Link
              href="mailto:contact@devhooh.com"
              className="text-gray-600 font-medium text-lg">
              contact@devhoo.com
            </Link>
          </div>
        </div>

        {/* Celular */}
        <div className="flex items-start gap-3">
          <Phone className="text-blue-700 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Celular:</p>
            <Link 
              href="https://wa.me/77776666"
              className="text-gray-600 font-medium text-lg">
              +591 77776666
            </Link>
          </div>
        </div>

        {/* Horarios */}
        <div className="flex items-start gap-3">
          <Clock className="text-blue-700 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Horarios:</p>
            <p className="text-gray-600 font-medium text-lg">
              Lunes a Sábados de 08:00 - 20:00
            </p>
          </div>
        </div>

        {/* Sobre nosotros */}
        <div className="mt-6">
        <Link href="/about">
          <div className="flex items-center gap-3 cursor-pointer hover:text-blue-700 transition">
            <ArrowRight className="w-8 h-8 shrink-0" />
            <p className="font-semibold text-xl">Más sobre Devhoo</p>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}
