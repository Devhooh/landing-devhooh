// app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="flex flex-col tablet-md:flex-row items-center text-center tablet-md:text-left gap-8">
        
        {/* Imagen */}
        <div className="relative w-48 h-48 md-tablet:w-64 md-tablet:h-64 tablet-md:w-72 tablet-md:h-72 table-lg:w-80 table-lg:h-80">
          <Image
            src="/assets/images/notfound.png"
            alt="Página no encontrada"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain"
            priority
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
