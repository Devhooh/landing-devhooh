import { BiLogoPostgresql, BiLogoGoLang  } from "react-icons/bi";
import { TbBrandReactNative, TbBrandBlender } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { PiFigmaLogoFill } from "react-icons/pi";

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
  FaAws,
  FaSketch 
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiVite, 
  SiNestjs, 
  SiMysql,
  SiKotlin,
  SiFlutter,
  SiVercel,
  SiKubernetes,
  SiExpress,
  SiDotnet,
  SiCplusplus,
  SiRust,
  SiAdobexd,
  SiTensorflow,
  SiOpenai,
  SiFastapi,
  SiFlask
} from "react-icons/si";

export const iconsData = {
  js: FaJsSquare,
  node: FaNode,
  react: FaReact,
  angular: FaAngular,
  python: FaPython,
  swift: FaSwift,
  java: FaJava,
  git: FaGitAlt,
  github: FaGithub,
  docker: FaDocker,
  aws: FaAws,
  sketch: FaSketch,

  mongodb: SiMongodb,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  typescript: SiTypescript,
  vite: SiVite,
  nestjs: SiNestjs,
  mysql: SiMysql,
  kotlin: SiKotlin,
  flutter: SiFlutter,
  vercel: SiVercel,
  kubernetes: SiKubernetes,
  express: SiExpress,
  dotnet: SiDotnet,
  cpp: SiCplusplus,
  rust: SiRust,
  adobexd: SiAdobexd,

  postgresql: BiLogoPostgresql,
  golang: BiLogoGoLang,
  reactnative: TbBrandReactNative,
  blender: TbBrandBlender,
  csharp: TbBrandCSharp,
  django: DiDjango,
  figma: PiFigmaLogoFill,
  tensorflox: SiTensorflow,
  openia: SiOpenai,
  fastapi: SiFastapi,
  flask: SiFlask

};


export const frontendTech = [
  { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400", slug: "javascript" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600", slug: "typescript" },
  { icon: SiTailwindcss, name: "TailwindCSS", color: "text-sky-500", slug: "tailwindcss" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900", slug: "nextjs" },
  { icon: FaAngular, name: "Angular", color: "text-red-600", slug: "angular" },
  { icon: FaReact, name: "React", color: "text-cyan-400", slug: "react" },
];

export const backendTech = [
  { icon: FaNode, name: "NodeJs", color: "text-green-400", slug:"" },
  { icon: SiMysql, name: "MySQL", color: "text-sky-500", slug:"" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-600", slug:"" },
  { icon: SiNestjs, name: "NestJs", color: "text-red-600", slug:"" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-blue-600", slug:"" },
  { icon: SiExpress, name: "ExpressJs", color: "text-gray-700", slug:"" },
];

export const mobilTech = [
  { icon: SiKotlin, name: "Kotlin", color: "text-fuchsia-500", slug:"" },
  { icon: SiFlutter, name: "Flutter", color: "text-sky-500", slug:"" },
  // { icon: FaSwift, name: "Swift", color: "text-orange-400", slug:"" },
  { icon: TbBrandReactNative, name: "ReactNative", color: "text-blue-600", slug:"" },
];

export const softwareTech = [
  // { icon: SiDotnet, name: "Dotnet", color: "text-fuchsia-500", slug:"" },
  // { icon: TbBrandCSharp, name: "CSharp", color: "text-purple-800", slug:"" },
  { icon: FaPython, name: "Python", color: "text-blue-600", slug:"" },
  { icon: FaJava, name: "Java", color: "text-blue-800", slug:"" },
  { icon: DiDjango, name: "Django", color: "text-green-800", slug:"" },
  // { icon: BiLogoGoLang, name: "GO", color: "text-blue-800", slug:"" },
  // { icon: SiCplusplus, name: "C++", color: "text-blue-500", slug:"" },
  // { icon: SiRust, name: "Rust", color: "text-black", slug:"" },
];

export const iaTech = [
  { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500", slug: "tensorflow" },
  { icon: SiOpenai, name: "OpenAI GPT", color: "text-green-500", slug: "openai-gpt" },
  { icon: SiFastapi, name: "FastAPI", color: "text-teal-500", slug: "fastapi" },
  { icon: SiFlask, name: "Flask", color: "text-gray-700", slug: "flask" },
];

export const infraTech = [
  { icon: FaDocker, name: "Docker", color: "text-sky-400", slug:"" },
  { icon: SiKubernetes, name: "Kubernetes", color: "text-blue-800", slug:"" },
  // { icon: FaAws, name: "FaAws", color: "text-orange-600", slug:"" },
  { icon: FaGithub, name: "Github", color: "text-black-800", slug:"" },
  { icon: FaGitAlt, name: "Git", color: "text-red-500", slug:"" },
  { icon: SiVercel, name: "Vercel", color: "text-black-800", slug:"" },
  { icon: SiVite, name: "Vite", color: "text-purple-500", slug:"" },
];
export const designerTech = [
  { icon: PiFigmaLogoFill, name: "Figma", color: "text-gray-700", slug:"" },
  { icon: SiAdobexd, name: "Adobexd", color: "text-fuchsia-900", slug:"" },
  // { icon: TbBrandBlender, name: "Blender", color: "text-orange-500", slug:"" },
  // { icon: FaSketch, name: "Sketch ", color: "text-yellow-500", slug:"" },
];