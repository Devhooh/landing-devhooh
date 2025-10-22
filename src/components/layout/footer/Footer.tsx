import FooterLinkColumn from "./FooterLinkColumn";
import FooterContactInfo from "./FooterContactInfo";
import FooterSocialLinks from "./FooterSocialLinks";
import { services, company } from "@/data/footerData";

export default function Footer() {
  return (
    <footer className="w-full bg-colorPrimario3 pb-4">
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 table-lg:grid-cols-2 gap-8">
        {/* Lado izquierdo - Contacto y CTA */}
        <div className="md-tablet:items-center text-center justify-center">
          <div className="p-4 text-center table-lg:text-left w-full">
            <h3 className="text-3xl md-tablet:text-4xl font-extrabold mb-3 text-white">
              Inicia tu transformacion digital con Devhooh
            </h3>
            
            {/* Componente Contacto */}
            <FooterContactInfo />
          </div>

          {/* Componente Redes Sociales */}
          <FooterSocialLinks />
        </div>

        {/* Lado derecho - Columnas de Enlaces */}
        <div className="p-4 grid grid-cols-1 md-tablet:grid-cols-2 gap-8 justify-items-start md-tablet:justify-items-center">
          {/* Componente Columna Servicios */}
          <FooterLinkColumn title="Servicios" links={services} />

          {/* Componente Columna Empresa */}
          <FooterLinkColumn title="Empresa" links={company} />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 mt-8 pt-8 text-center text-gray-300 text-sm font-semibold">
        <p> Copyright software © Devhooh - {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}