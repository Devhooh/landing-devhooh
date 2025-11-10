import StaggerListContainer from "@/components/ui/StaggerListContainer";
import { StaggerListItemClient } from "@/components/ui/StaggerListItemClient";
import { Server, Rocket, ShieldCheck, Users } from "lucide-react";

const metrics = [
  {
    icon: <Rocket className="w-8 h-8 text-colorHover4" />,
    value: "+40%",
    label: "Mayor velocidad de carga",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-colorHover4" />,
    value: "99.9%",
    label: "Disponibilidad garantizada",
  },
  {
    icon: <Users className="w-8 h-8 text-colorHover4" />,
    value: "100K+",
    label: "Usuarios activos soportados",
  },
  {
    icon: <Server className="w-8 h-8 text-colorHover4" />,
    value: "24/7",
    label: "Infraestructura segura",
  },
];

export default function TechMetricSection() {
  return (
    <section className="py-16 px-8 bg-colorPrimario3">
      <StaggerListContainer 
        className="max-w-6xl mx-auto grid grid-cols-1 md-tablet:grid-cols-2 lg-table:grid-cols-4 gap-10 text-center"
      >
        {metrics.map((item, index) => (
          <StaggerListItemClient
            key={index}
            direction="y"
            offset={30}
            transition={{duration: 0.2, ease: "easeInOut"}}
            className="bg-colorSecundario4 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h2 className="text-4xl font-extrabold text-white">{item.value}</h2>
            <p className="text-lg text-gray-300 mt-2">{item.label}</p>
          </StaggerListItemClient>
        ))}
      </StaggerListContainer>
    </section>
  );
}
