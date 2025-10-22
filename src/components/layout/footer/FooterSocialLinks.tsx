import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

/**
 * Componente que renderiza los iconos de redes sociales.
 */
export default function FooterSocialLinks() {
  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", name: "Facebook", colorClass: "hover:text-colorPrimario5" },
    { icon: FaGithub, href: "https://github.com/Devhooh", name: "GitHub", colorClass: "hover:text-colorPrimario5" },
    { icon: FaXTwitter, href: "https://x.com", name: "X (Twitter)", colorClass: "hover:text-colorPrimario5" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/devhooh/", name: "LinkedIn", colorClass: "hover:text-colorPrimario5" },
  ];

  return (
    <div className="px-4 text-left md-tablet:justify-items-center table-lg:justify-items-start w-full">
      <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Síguenos</h4>
      <div className="flex gap-4 text-2xl table-lg:text-4xl text-colorPrimarioLogo1">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className={`text-3xl table-lg:text-4xl ${link.colorClass} transition`} />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}