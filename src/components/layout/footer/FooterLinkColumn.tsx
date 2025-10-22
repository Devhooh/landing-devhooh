import Link from "next/link";
import React from "react";

interface FooterLink {
  name: string;
  path: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}
// Componente para la columna de enlaces en el Footer.
export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div className="flex-1 min-w-[150px]">
      <h4 className="text-2xl font-semibold mb-4 text-white">{title}</h4>
      <ul className="space-y-2 text-white/90 text-sm">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              className="hover:text-white hover:drop-shadow-[0_0_4px_white] transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}