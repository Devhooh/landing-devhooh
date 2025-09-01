import { DataTech } from "@/data/techDataPage";
import Image from "next/image";


interface TechHeroProps {
  tech: DataTech;
}

export default function TechHero({ tech }: TechHeroProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 tablet-md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md-tablet:text-4xl tablet-md:text-6xl text-blue-950 font-bold">
            Servicios de desarrollo con <span className={tech.color}>{tech.title}</span>
          </h1>
          <p className="mt-4 text-lg md-tablet:text-xl tablet-md:text-3xl text-gray-700">
            {tech.subtitle}
          </p>
        </div>

        <div className="flex justify-center md-tablet:justify-center tablet-md:justify-end">
          <Image
            src={tech.image}
            alt={tech.title}
            width={500}
            height={500}
            className="rounded-xl shadow-lg w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
