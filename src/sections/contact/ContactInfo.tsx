import { Mail, Phone, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-6 text-blue-900">
      <div className="space-y-4">
        {/* Introducción */}
        <p className="text-gray-600 font-medium text-lg">
          Gracias por su interés en{" "}
          <span className="font-semibold text-fuchsia-700"> 
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
          <Mail className="text-fuchsia-500 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Correo:</p>
            <Link
              href="mailto:contact@devhooh.com"
              className="text-gray-600 font-medium text-lg hover:text-fuchsia-700 transition-all transform">
              contact@devhoo.com
            </Link>
          </div>
        </div>

        {/* Celular */}
        <div className="flex items-start gap-3">
          <Phone className="text-fuchsia-500 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Celular:</p>
            <Link 
              href="https://wa.me/77776666"
              className="text-gray-600 font-medium text-lg hover:text-fuchsia-700 transition-all transform">
              +591 77776666
            </Link>
          </div>
        </div>

        {/* Horarios */}
        <div className="flex items-start gap-3">
          <Clock className="text-fuchsia-500 w-8 h-8 shrink-0" />
          <div>
            <p className="font-semibold text-xl">Horarios:</p>
            <p className="text-gray-600 font-medium text-lg">
              Lunes a Sábados de 08:00 - 20:00
            </p>
          </div>
        </div>

        {/* Sobre nosotros */}
        <Link href="/about" className="flex items-center gap-3 cursor-pointer">
          <ArrowRight className="w-8 h-8 shrink-0 text-fuchsia-500" />
          <p className="font-semibold text-xl hover:text-fuchsia-700 transition-all transform">
            Más sobre Devhooh
          </p>
        </Link>

      </div>
    </div>
  );
}
