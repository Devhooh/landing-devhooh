interface FooterLink {
  name: string;
  path: string;
}

export const services: FooterLink[] = [
  {name: "Desarrollo Web", path: "/services/desarrollo-web"},
  {name: "Apps Móviles", path: "/services/desarrollo-mobile"},
  {name: "Desarrollo de Software", path: "/services/desarrollo-software"},
  {name: "Diseño UX/UI", path: '#'},
  {name: "Integración IA", path: '#'},
  {name: "Blockchain", path: "#"},
  {name: "DevOps", path: "#"},
];

export const company: FooterLink[] = [
  {name: "Soluciones", path: "/about#soluciones"},
  {name: "Sobre Nosotros", path: "/about"},
  {name: "Porque Devhooh", path: "/about#whydevhooh"},
  {name: "Nuestros valores", path: "/about#valores"},
  {name: "Terminos de servicios", path: "#"},
  {name: "Politica de privacidad", path: "#"},
];