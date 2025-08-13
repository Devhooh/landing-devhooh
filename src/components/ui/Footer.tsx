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
    <footer className="w-full bg-fuchsia-950 p-4 border-t ">
      <div className="max max-w-7xl mx-auto p-5 grid grid-cols-1 table-lg:grid-cols-2 gap-8">
        {/* Lado izquierdo */}
        <div>
          <div className="bg-indigo-900 p-4 rounded-2xl mb-6 text-center table-lg:text-left w-full max-w-sm mx-auto table-lg:mx-0">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
              Inicia tu transformacion digital con Devhooh
            </h3>
            
            {/* Zona contactos */}
            <div className="py-5 flex-1 min-w-[150px]">
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-gray-500 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  contacto@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-gray-500 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  soporte@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-gray-500 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 777-0000
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-gray-500 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 666-0000
                </a>
              </li>
            </ul>
            </div>
          </div>

          <div className="table-lg:text-left w-full max-w-sm mx-auto table-lg:mx-0">
            <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-white">Síguenos</h4>
            <div className="flex gap-4 text-2xl table-lg:text-4xl text-gray-400">
              <a href="#"><FaFacebook className="text-3xl table-lg:text-4xl hover:text-blue-700 transition" /></a>
              <a href="#"><FaGithub className="text-3xl table-lg:text-4xl hover:text-black" /></a>
              <a href="#"><FaXTwitter className="text-3xl table-lg:text-4xl hover:text-white transition" /></a>
              <a href="#"><FaLinkedin className="text-3xl table-lg:text-4xl hover:text-sky-500 transition" /></a>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="grid grid-cols-1 md-tablet:grid-cols-2 gap-8 justify-items-start md-tablet:justify-items-center">
          {/* Zona de servicios */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-xl font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              {services.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Empresa */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-xl font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              {company.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.path} className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
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
      <div className="mt-5 text-center text-gray-300 text-sm font-semibold">
        <p> Copyright software © Devhoo  -  {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}





