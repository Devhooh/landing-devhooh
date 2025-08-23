// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="flex flex-col tablet-md:flex-row items-center text-center tablet-md:text-left gap-8">
        
        {/* Imagen */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/images/hero1.png"
            alt="Página no encontrada"
            width={350}
            height={350}
            priority
            className="w-48 md-tablet:w-64 tablet-md:w-72 table-lg:w-80 h-auto"
          />
        </div>

        {/* Texto */}
        <div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-lg text-gray-600 mb-6 max-w-md">
            Oops... La página que buscas no existe o fue movida.
          </p>

          {/* Botón */}
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
