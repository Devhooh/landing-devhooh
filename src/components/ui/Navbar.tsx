import Image from "next/image";
import Link from "next/link";
import ActiveLinks from "./ActiveLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="relative max-w-[1550px] mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo de Devhoo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/devhooh.png"
            alt="Devhoo-logo"
            width={120}
            height={60}
            sizes="(max-width: 768px) 50vw, 120px"
            priority
            className="rounded-md"
          />
        </Link>

        {/* Menu de secciones PC */}
        <ActiveLinks />

        {/* Boton hamburguesa y Menú mobile*/}
        <MobileMenu />
      </div>
    </header>
  );
}
