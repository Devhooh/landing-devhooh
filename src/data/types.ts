import { Zap, Shield, Palette } from "lucide-react";

// Definimos el mapeo de iconos 
export const IconMap = {
  Zap: Zap,
  Shield: Shield,
  Palette: Palette,
}

// Definimos el tipo de beneficio usando el tipado del mapeo
export interface BenefitItem {
  icon: keyof typeof IconMap; 
  title: string;
  description: string;
  gradient: string;
}

// Tipamos las props del componente cliente para poder importarlas
export interface BenefitsContentProps {
    benefits: BenefitItem[];
    checklistItems: string[];
}