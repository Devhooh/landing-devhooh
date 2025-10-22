import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

// Componente para la lista de información de contacto.
export default function FooterContactInfo() {
  const contactDetails = [
    { type: 'email', icon: FaEnvelope, text: "contacto@devhooh.com", href: "mailto:contacto@devhooh.com" },
    { type: 'email', icon: FaEnvelope, text: "soporte@devhooh.com", href: "mailto:soporte@devhooh.com" },
    { type: 'phone', icon: FaPhone, text: "+591 777-0000", href: "tel:+59177770000" },
    { type: 'phone', icon: FaPhone, text: "+591 6666-0000", href: "tel:+59166660000" },
  ];

  return (
    <div className="py-5 md-tablet:justify-items-center table-lg:justify-items-start flex-1 min-w-[150px]">
      <ul className="space-y-3 text-gray-300 text-sm">
        {contactDetails.map((detail, index) => (
          <li key={index} className="flex items-center gap-2 leading-none">
            <detail.icon className="text-colorPrimarioLogo1 w-5 h-5 shrink-0" />
            <a
              href={detail.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition"
            >
              {detail.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}