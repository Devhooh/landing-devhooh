import Image from "next/image";
import HeroAnimationWrapper from "@/components/ui/HeroAnimationWrapper"; // Importamos la Isla de Cliente

export default function HeroSectionHome() {
  return (
    <section className="relative w-full bg-colorFondo overflow-hidden">
      <div className="max-w-[1550px] mx-auto px-6 md-tablet:px-12 py-6 mb-10">
        <HeroAnimationWrapper>
          <div className="relative w-[460px] h-[460px] md-tablet:w-[600px] md-tablet:h-[600px] rounded-2xl">
            <Image
              src="/assets/images/hero-home.png"
              alt="Equipo de desarrollo creando software a medida con inteligencia artificial"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 462px"
              className="object-contain"
              priority
            />
            </div>
        </HeroAnimationWrapper>
      </div>
    </section>
  );
}
