import { IconType } from "react-icons";
import { 
  FaJsSquare, 
  FaNode, 
  FaReact, 
  FaAngular, 
  FaPython,
  FaSwift,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiVite, 
  SiNestjs, 
  SiMysql,
  SiPostgresql,
  SiKotlin,
  SiFlutter,
  SiVercel,
  SiKubernetes
} from "react-icons/si";

interface TechLogo {
  icon: IconType;
  color?: string;
  alt: string;
}

export const sliderLogoTech: TechLogo[] = [
  { icon: FaJsSquare, alt: "javascript"},
  { icon: FaReact,  alt: "react" },
  { icon: SiNextdotjs, alt: "nextjs" },
  { icon: SiNestjs, alt: "nestjs" },
  { icon: SiTailwindcss, alt: "tailwind" },
  { icon: SiKotlin, alt: "kotlin" },
  { icon: SiFlutter, alt: "flutter" },
  { icon: FaSwift, alt: "swift" },
  { icon: SiTypescript, alt: "typescript" },
  { icon: FaJava , alt: "java " },
  { icon: FaPython, alt: "python" },
  { icon: FaAngular, alt: "angular" },
  { icon: FaGithub, alt: "github" },
  { icon: FaGitAlt, alt: "git" },
  { icon: FaNode, alt: "node" },
  { icon: SiKubernetes, alt: "kubernetes" },
  { icon: SiPostgresql, alt: "postgresql" },
  { icon: SiMongodb, alt: "mongodb" },
  { icon: FaDocker, alt: "docker" },
  { icon: SiVite, alt: "vite" },
  { icon: FaAws, alt: "aws" },
  { icon: SiVercel, alt: "vercel" },
  { icon: SiMysql, alt: "mysql" },
];


