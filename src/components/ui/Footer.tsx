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
    <footer className="w-full bg-black/95 py-4">
      <div className="max max-w-7xl mx-auto p-5 grid grid-cols-1 table-lg:grid-cols-2 gap-8">
        {/* Lado izquierdo */}
        <div className="md-tablet:items-center text-center justify-center">
          <div className="p-4 text-center table-lg:text-left w-full">
            <h3 className="text-3xl md-tablet:text-4xl font-extrabold mb-3 text-white">
              Inicia tu transformacion digital con Devhooh
            </h3>
            
            {/* Zona contactos */}
            <div className="py-5 md-tablet:justify-items-center table-lg:justify-items-start flex-1 min-w-[150px]">
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-fuchsia-400 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  contacto@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-fuchsia-400 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  soporte@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-fuchsia-400 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 777-0000
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-fuchsia-400 w-5 h-5 shrink-0" />
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 666-0000
                </a>
              </li>
            </ul>
            </div>
          </div>

          <div className="px-4 text-left md-tablet:justify-items-center table-lg:justify-items-start w-full">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex gap-4 text-2xl table-lg:text-4xl text-fuchsia-400">
              <a href="#"><FaFacebook className="text-3xl table-lg:text-4xl hover:text-fuchsia-500 transition" /></a>
              <a href="#"><FaGithub className="text-3xl table-lg:text-4xl hover:text-fuchsia-500" /></a>
              <a href="#"><FaXTwitter className="text-3xl table-lg:text-4xl hover:text-fuchsia-500 transition" /></a>
              <a href="#"><FaLinkedin className="text-3xl table-lg:text-4xl hover:text-fuchsia-500 transition" /></a>
            </div>
          </div>
        </div>

        {/* Lado derecho */}
        <div className="p-4 grid grid-cols-1 md-tablet:grid-cols-2 gap-8 justify-items-start md-tablet:justify-items-center">
          {/* Zona de servicios */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-2xl font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-white/90 text-sm">
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
            <h4 className="text-2xl font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-gray-100 text-sm">
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
      <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-300 text-sm font-semibold">
        <p> Copyright software © Devhooh - {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}





