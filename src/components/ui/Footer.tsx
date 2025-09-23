import Link from "next/link"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const services = [
    {name: "Desarrollo Web", path: "/services/desarrollo-web"},
    {name: "Apps Móviles", path: "/services/desarrollo-mobile"},
    {name: "Desarrollo de Software", path: "/services/desarrollo-software"},
    {name: "Diseño UX/UI", path: '#'},
    {name: "Integración IA", path: '#'},
    {name: "Blockchain", path: "#"},
    {name: "DevOps", path: "#"},
  ]

  const company = [
    {name: "Soluciones", path: "/about#soluciones"},
    {name: "Sobre Nosotros", path: "/about"},
    {name: "Porque Devhooh", path: "/about#whydevhooh"},
    {name: "Nuestros valores", path: "/about#valores"},
    {name: "Terminos de servicios", path: "#"},
    {name: "Politica de privacidad", path: "#"},
  ]


  return (
    <footer className="w-full bg-colorPrimario3 pb-4">
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 table-lg:grid-cols-2 gap-8">
        {/* Lado izquierdo */}
        <div className="md-tablet:items-center text-center justify-center">
          <div className="p-4 text-center table-lg:text-left w-full">
            <h3 className="text-3xl md-tablet:text-4xl font-extrabold mb-3 text-white">
              Inicia tu transformacion digital con Devhooh
            </h3>
            
            {/* Zona contactos */}
            {/* Correos: */}
            <div className="py-5 md-tablet:justify-items-center table-lg:justify-items-start flex-1 min-w-[150px]">
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-colorPrimarioLogo1 w-5 h-5 shrink-0" />
                <a 
                  href="mailto:contacto@devhooh.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  contacto@devhooh.com
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaEnvelope className="text-colorPrimarioLogo1 w-5 h-5 shrink-0" />
                <a 
                  href="mailto:soporte@devhooh.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  soporte@devhooh.com
                </a>
              </li>

              {/* Celular: */}
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-colorPrimarioLogo1 w-5 h-5 shrink-0" />
                <a 
                  href="tel:+59177770000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 777-0000
                </a>
              </li>
              <li className="flex items-center gap-2 leading-none">
                <FaPhone className="text-colorPrimarioLogo1 w-5 h-5 shrink-0" />
                <a 
                  href="tel:+59166660000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition">
                  +591 6666-0000
                </a>
              </li>

            </ul>
            </div>
          </div>

          <div className="px-4 text-left md-tablet:justify-items-center table-lg:justify-items-start w-full">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Síguenos</h4>
            <div className="flex gap-4 text-2xl table-lg:text-4xl text-colorPrimarioLogo1">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-3xl table-lg:text-4xl hover:text-colorPrimario5 transition" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://github.com/Devhooh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl table-lg:text-4xl hover:text-colorPrimario5 transition" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-3xl table-lg:text-4xl hover:text-colorPrimario5 transition" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/devhooh/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl table-lg:text-4xl hover:text-colorPrimario5 transition" />
                <span className="sr-only">LinkedIn</span>
              </a>
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