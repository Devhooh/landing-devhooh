import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-purple-300 border-b border-gray-300 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/noBgBlack.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
          />
        </div>

        <nav className="hidden md:flex gap-6 text-gray-950 font-medium">
          <a className="hover:text-gray-100 transition">Inicio</a>
          <a className="hover:text-gray-100 transition">Servicios</a>
          <a className="hover:text-gray-100 transition">Portafolio</a>
          <a className="hover:text-gray-100 transition">Nosotros</a>
          <a className="hover:text-gray-100 transition">Contactanos</a>
        </nav>
      </div>
    </header>
  )
}



