import CTAHome from "@/sections/home/CTAHome";
import HeroSectionHome from "@/sections/home/HeroSectionHome";
import { PlansSection } from "@/sections/home/PlansSection";
import { ProjectsBenefits } from "@/sections/home/ProjectsBenefits";
import { ProjectsSection } from "@/sections/home/ProjectsSection";
import { SolutionsSection } from "@/sections/home/SolutionsSection";
import TechSection from "@/sections/home/TechSection";

export default function Home() {
  return (
    <div>
      <HeroSectionHome/>

      <SolutionsSection/>

      <ProjectsSection/>

      <ProjectsBenefits/>

      <TechSection/>

      <PlansSection/>

      <CTAHome/>

    </div>
  );
}
