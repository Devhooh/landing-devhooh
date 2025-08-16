import { IconType } from "react-icons";
import { 
  FaJsSquare, 
  FaNodeJs, 
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
  color: string;
  alt: string;
}

export const logoTech: TechLogo[] = [
  { icon: FaJsSquare, color: "text-gray-300", alt: "javascript"},
  { icon: FaReact, color:"text-gray-300" , alt: "react" },
  { icon: SiNextdotjs, color:"text-gray-300", alt: "nextjs" },
  { icon: SiNestjs, color:"text-gray-300", alt: "nestjs" },
  { icon: SiTailwindcss, color:"text-gray-300", alt: "tailwind" },
  { icon: SiKotlin, color:"text-gray-300", alt: "kotlin" },
  { icon: SiFlutter, color:"text-gray-300", alt: "flutter" },
  { icon: FaSwift, color:"text-gray-300", alt: "swift" },
  { icon: SiTypescript, color:"text-gray-300", alt: "typescript" },
  { icon: FaJava , color:"text-gray-300", alt: "java " },
  { icon: FaPython, color:"text-gray-300", alt: "python" },
  { icon: FaAngular, color:"text-gray-300", alt: "angular" },
  { icon: FaGithub, color:"text-gray-300", alt: "github" },
  { icon: FaGitAlt, color:"text-gray-300", alt: "git" },
  { icon: FaNodeJs, color:"text-gray-300", alt: "node" },
  { icon: SiKubernetes, color:"text-gray-300", alt: "kubernetes" },
  { icon: SiPostgresql, color:"text-gray-300", alt: "postgresql" },
  { icon: SiMongodb, color:"text-gray-300", alt: "mongodb" },
  { icon: FaDocker, color:"text-gray-300", alt: "docker" },
  { icon: SiVite, color:"text-gray-300", alt: "vite" },
  { icon: FaAws, color:"text-gray-300", alt: "aws" },
  { icon: SiVercel, color:"text-gray-300", alt: "vercel" },
  { icon: SiMysql, color:"text-gray-300", alt: "mysql" },
];


