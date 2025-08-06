import Link from "next/link"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-sky-300 text-gray-900 mt-8 py-3 border-t border-gray-200">
      <div className="max max-w-7xl mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Lado izquierdo */}
        <div>
          <div className="bg-gray-800 p-6 rounded-2xl mb-6 text-center md:text-left w-full max-w-sm mx-auto md:mx-0">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Inicia tu transformacion digital con Devhooh
            </h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition">
              Conversemos
            </button>
          </div>
          <div className="md:text-left w-full max-w-sm mx-auto md:mx-0">
            <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
            <div className="flex gap-4 text-xl">
              <Link href="#"><FaFacebook className="hover:text-blue-500 transition" /></Link>
              <Link href="#"><FaGithub className="hover:text-gray-400" /></Link>
              <Link href="#"><FaXTwitter className="hover:text-gray-400 transition" /></Link>
              <Link href="#"><FaLinkedin className="hover:text-blue-400 transition" /></Link>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
          lg:flex lg:flex-wrap lg:gap-8
        ">
          {/* Zona contactos */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Contactos</h4>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-gray-600 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white transition">
                  contacto@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-gray-600 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white transition">
                  soporte@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-gray-600 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white transition">+591 777-0000</a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-gray-600 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white transition">+591 666-0000</a>
              </li>
            </ul>
          </div>

          {/* Zona de servicios */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Desarrollo Web</li>
              <li>Apps Móviles</li>
              <li>Desarrollo de Software</li>
              <li>Diseño UX/UI</li>
              <li>Integración IA</li>
              <li>Blockchain</li>
              <li>DevOps</li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Misión</li>
              <li>Soluciones</li>
              <li>Sobre Nosotros</li>
              <li>Porque Devhooh</li>
              <li>Mision y Valores</li>
              <li>Testimonios y Clientes</li>
              <li>Terminos de servicios</li>
              <li>Politica de privacidad</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 text-center text-gray-700 text-sm font-semibold">
        <p> Copyright software © Devhoo  -  {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>


    </footer>
  )
}


