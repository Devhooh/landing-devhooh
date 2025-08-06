import Link from "next/link"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const services = [
    {name: 'Desarrollo Web', path: '#'},
    {name: 'Apps Móviles', path: '#'},
    {name: 'Desarrollo de Software', path: '#'},
    {name: 'Diseño UX/UI', path: '#'},
    {name: 'Integración IA', path: '#'},
    {name: 'Blockchain', path: '#'},
    {name: 'DevOps', path: '#'},
  ]

  const company = [
    {name: 'Misión', path: '#'},
    {name: 'Soluciones', path: '#'},
    {name: 'Sobre Nosotros', path: '#'},
    {name: 'Porque Devhooh', path: '#'},
    {name: 'Mision y Valores', path: '#'},
    {name: 'Testimonios y Clientes', path: '#'},
    {name: 'Terminos de servicios', path: '#'},
    {name: 'Politica de privacidad', path: '#'},
  ]


  return (
    <footer className="w-full bg-sky-300 mt-8 py-5 border-t border-gray-200">
      <div className="max max-w-7xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <a href="#"><FaFacebook className="hover:text-blue-500 transition" /></a>
              <a href="#"><FaGithub className="hover:text-gray-400" /></a>
              <a href="#"><FaXTwitter className="hover:text-gray-400 transition" /></a>
              <a href="#"><FaLinkedin className="hover:text-blue-400 transition" /></a>
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
                <a href="#" className="hover:text-white transition">
                  +591 777-0000
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-gray-600 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white transition">
                  +591 666-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Zona de servicios */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              {services.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              {company.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white transition">
                      {item.name}
                    </Link>
                  </li>
                )
              })}
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


