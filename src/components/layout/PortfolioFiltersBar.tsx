import { Project } from "@/data/portfolioData";
import { CustomSelect } from "./CustomSelect";
import { SimpleInViewWrapper } from "../ui/SimpleInViewWrapper";

interface FiltersProps {
  projectsData: Project[];
  selectedProject: string;
  setSelectedProject: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  selectedService: string;
  setSelectedService: (value: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (value: string) => void;
}

export default function PortfolioFiltersBar({
  projectsData,
  selectedProject,
  setSelectedProject,
  selectedCountry,
  setSelectedCountry,
  selectedService,
  setSelectedService,
  selectedTechnology,
  setSelectedTechnology,
}: FiltersProps) {
  const uniqueProjects = ["Todos", ...Array.from(new Set(projectsData.map(p => p.ProjectName)))];
  const uniqueCountries = ["Todos", ...Array.from(new Set(projectsData.map(p => p.location)))];
  const uniqueServices = ["Todos", ...Array.from(new Set(projectsData.map(p => p.service)))];
  const uniqueTechnologies = ["Todos", ...Array.from(new Set(projectsData.flatMap(p => p.technologies)))];

  return (
    <div
      className="bg-colorSecundario4 shadow-2xl rounded-xl flex flex-col tablet-md:flex-row gap-4 items-center mb-6 p-6 mx-2 md-tablet:mx-4"
    >
      <SimpleInViewWrapper
        direction="y"
        offset={10}
        transition={{duration: 0.2, delay: 0.2}}
        className="w-full text-white"
      >
        <CustomSelect 
          label="Proyectos" 
          options={uniqueProjects} 
          value={selectedProject} 
          onChange={setSelectedProject} 
        />
      </SimpleInViewWrapper>

      <SimpleInViewWrapper
        direction="y"
        offset={10}
        transition={{duration: 0.3, delay: 0.3}}
        className="w-full"
      >
        <CustomSelect 
          label="País" 
          options={uniqueCountries} 
          value={selectedCountry} 
          onChange={setSelectedCountry} 
        />
      </SimpleInViewWrapper>
      
      <SimpleInViewWrapper
        direction="y"
        offset={10}
        transition={{duration: 0.3, delay: 0.4}}
        className="w-full"
      >
        <CustomSelect 
          label="Servicio" 
          options={uniqueServices} 
          value={selectedService} 
          onChange={setSelectedService} 
        />
      </SimpleInViewWrapper>
      
      <SimpleInViewWrapper
        direction="y"
        offset={10}
        transition={{duration: 0.3, delay: 0.5}}
        className="w-full"
      >
        <CustomSelect 
          label="Tecnologías" 
          options={uniqueTechnologies} 
          value={selectedTechnology} 
          onChange={setSelectedTechnology} 
        />
      </SimpleInViewWrapper>
    </div>
  );
}
