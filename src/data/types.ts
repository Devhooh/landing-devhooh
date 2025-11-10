import { 
  Zap, Shield, Palette, Code, Database, Smartphone, 
  Cloud, CheckCircle, Star, Brain, Layers,
} from "lucide-react";

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

export const IconMapPlan = {
  CheckCircle: CheckCircle,
  Star: Star,
  Shield: Shield,
}

export interface PlanItem {
  title: string,
  subtitle: string,
  icon: keyof typeof IconMapPlan,
  gradient?: string,
  iconGradient: string,
  borderColor?: string,
  popular?: boolean,
  beneficio: string[]
}

export const IconMapFeatured = {
  Layers: Layers,
  Brain: Brain,
  Database: Database,
  Smartphone: Smartphone,
}

export interface TechFeaturedItem  {
  index?: number;
  title: string;
  icon: keyof typeof IconMapFeatured;
  description: string;
}