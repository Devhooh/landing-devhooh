import { Zap, Shield, Palette } from "lucide-react";
import { Code, Database, Smartphone, Cloud } from "lucide-react";

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
  gradient?: string;
}

export const IconMapTech = {
  Code: Code,
  DataBase: Database,
  Smartphone: Smartphone,
  Cloud: Cloud,
}


export interface TechItem {
  icon: keyof typeof IconMapTech; 
  title: string;
  description: string;
}