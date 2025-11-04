import ButtonCta from "@/components/ui/ButtonCta";
import { IconMapPlan, PlanItem } from "@/data/types";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function PlanCard({
  title,
  subtitle,
  icon,
  iconGradient,
  popular,
  beneficio
}: PlanItem) {
  const IconComponent = IconMapPlan[icon];
  return (
    <>
      {/* Badge de Popular */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Más Popular
          </div>
        </div>
      )}

      {/* Icono */}
      <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center mb-6 shadow-lg`}>
        <IconComponent className="w-8 h-8 text-white" />
      </div>

      {/* Contenido */}
      <div className="flex-grow">
        <h3 className={`text-2xl font-bold mb-4 ${popular ? 'text-white' : 'text-colorPrimario2'}`}>
          {title}
        </h3>
        
        <p className={`mb-8 text-sm leading-relaxed ${popular ? 'text-colorHover5' : 'text-colorPrimario1/70'}`}>
          {subtitle}
        </p>

        {/* Lista de beneficios */}
        <ul className="space-y-4 mb-8 text-left">
          {beneficio.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3"
            >
              <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${iconGradient} flex items-center justify-center mt-0.5`}>
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
              <span className={`text-sm ${popular ? 'text-colorHover5' : 'text-colorPrimario1/80'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón */}
      <div className="w-full">
        <ButtonCta
          href="/contact"
          className={`
              group w-full py-4 px-6 rounded-2xl font-semibold text-lg
              flex items-center justify-center gap-2
              transition-all duration-300
              ${popular 
                ? 'bg-gradient-to-r from-colorSecundario1 to-colorSecundario3 text-white shadow-[0_0_25px_rgba(103,61,230,0.4)] hover:shadow-[0_0_35px_rgba(103,61,230,0.6)]'
                : 'bg-gradient-to-r from-colorPrimario5 to-colorPrimario6 text-white shadow-[0_0_20px_rgba(102,60,230,0.3)] hover:shadow-[0_0_30px_rgba(102,60,230,0.5)]'
              }
              hover:scale-[1.05] active:scale-[0.98] transform
            `}
        >
          Cotiza tu proyecto
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </ButtonCta>
      </div>
      {/* Efecto decorativo */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-colorPrimario5 to-colorSecundario1 opacity-60"></div>

    </>
  )
}